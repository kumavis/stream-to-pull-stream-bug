const toPull = require('stream-to-pull-stream')
const pull = require('pull-stream')
const miss = require('mississippi')
const test = require('tape')
const deferDuplex = require('pull-defer/duplex')

// pass
test('node-stream simple', (t) => {
  const { source, sink } = createNodeStreams()
  miss.pipe(
    source,
    sink,
    (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    }
  )
})

// pass
test('node-stream with through', (t) => {
  const { source, transform, sink } = createNodeStreams()
  miss.pipe(
    source,
    transform,
    sink,
    (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    }
  )
})

// pass
test('pull-stream simple', (t) => {
  const { source, sink } = createNodeStreams()
  pull(
    toPull.source(source),
    toPull.sink(sink, (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

// pass
test('pull-stream source as duplex', (t) => {
  const { source, sink } = createNodeStreams()
  pull(
    toPull.duplex(source),
    toPull.sink(sink, (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

// pass
test('pull-stream with pull.map', (t) => {
  const { source, sink } = createNodeStreams()
  pull(
    toPull.source(source),
    pull.map(x => x),
    toPull.sink(sink, (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

// fails: toPull.duplex does not propagate the error
test('pull-stream with through as toPull.duplex', (t) => {
  const { source, transform, sink } = createNodeStreams()
  pull(
    toPull.source(source),
    toPull.duplex(transform),
    toPull.sink(sink, (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

// fails: toPull.transform does not propagate the error
test('pull-stream with through as toPull.transform', (t) => {
  const { source, transform, sink } = createNodeStreams()
  pull(
    toPull.source(source),
    toPull.transform(transform),
    toPull.sink(sink, (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

// fail: toPull.duplex does not propagate the error
test('pull-stream toPull.duplex minimal', (t) => {
  const transform = miss.through.obj((chunk, enc, cb) => cb(null, chunk))
  pull(
    pull.error(new Error('dingdong')),
    toPull.duplex(transform),
    pull.collect((err, result) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

// fail: toPull.transform does not propagate the error
test('pull-stream toPull.transform minimal', (t) => {
  const transform = miss.through.obj((chunk, enc, cb) => cb(null, chunk))
  pull(
    pull.error(new Error('dingdong')),
    toPull.transform(transform),
    pull.collect((err, result) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

// pass
test('pull-stream deferred duplex source', (t) => {
  const deferred = deferDuplex() 
  pull(
    deferred,
    pull.collect((err, result) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
    
  const { source } = createNodeStreams()
  deferred.resolve(toPull.duplex(source))
})



function createNodeStreams () {
  const source = miss.from.obj((size, cb) => cb(new Error('dingdong')))

  const transform = miss.through.obj((chunk, enc, cb) => {
    console.warn('mis.through unexpectedly saw chunk', chunk)
    cb(null, chunk)
  })
  
  const sink = miss.concat({ object: true }, (result) => {
    console.warn('miss.concat callback unexpectedly called with data:', result)
  })

  return { source, transform, sink }
}
