const toPull = require('stream-to-pull-stream')
const pull = require('pull-stream')
const SimplePeer = require('simple-peer')
const wrtc = require('wrtc')
const miss = require('mississippi')
const test = require('tape')


test('readable-stream test', (t) => {
  const { source, spy, sink } = setupTest()
  miss.pipe(
    source,
    spy, 
    sink,
    (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    }
  )
})

test('pull-stream test', (t) => {
  const { source, spy, sink } = setupTest()
  pull(
    toPull.source(source),
    toPull.duplex(spy),
    toPull.sink(sink, (err) => {
      t.ok(err && err.message.includes('dingdong'), 'saw expected error')
      t.end()
    })
  )
})

function setupTest () {
  const source = new SimplePeer({ wrtc })

  const spy = miss.through.obj((chunk, enc, cb) => {
    console.warn('mis.through unexpectedly saw chunk', chunk)
    cb(null, chunk)
  })
  
  const sink = miss.concat({ object: true }, (result) => {
    console.warn('miss.concat callback unexpectedly called with data:', result)
  })

  setTimeout(() => {
    source.destroy(new Error('dingdong'))
  }, 100)

  return { source, spy, sink }
}
