```
simple-peer-pull-stream-bug on  master [+] is 📦 v1.0.0 via ⬢ v10.15.3
➜ npm test                   

> simple-peer-pull-stream-bug@1.0.0 test /home/xyz/Development/simple-peer-pull-stream-bug
> node . | tap-spec


  readable-stream simple

miss.concat callback unexpectedly called with data: []
    ✔ saw expected error

  readable-stream with through

    ✔ saw expected error

  pull-stream simple

    ✔ saw expected error

  pull-stream source as duplex

    ✔ saw expected error

  pull-stream with through as toPull.duplex

miss.concat callback unexpectedly called with data: []

    ✖ saw expected error
    ---------------------
      operator: ok
      expected: true
      actual:   null
      at: toPull.sink (/home/xyz/Development/simple-peer-pull-stream-bug/index.js:63:9)
      stack: |-
  Error: saw expected error
  at Test.assert [as _assert] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:226:54)
  at Test.bound [as _assert] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:77:32)
  at Test.assert (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:344:10)
  at Test.bound [as ok] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:77:32)
  at toPull.sink (/home/xyz/Development/simple-peer-pull-stream-bug/index.js:63:9)
  at done (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/stream-to-pull-stream/index.js:20:11)
  at ConcatStream.onClose (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/stream-to-pull-stream/index.js:28:16)
  at ConcatStream.emit (events.js:194:15)
  at finishMaybe (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:620:14)
  at endWritable (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:629:3)


  pull-stream with through as toPull.transform

miss.concat callback unexpectedly called with data: []

    ✖ saw expected error
    ---------------------
      operator: ok
      expected: true
      actual:   null
      at: toPull.sink (/home/xyz/Development/simple-peer-pull-stream-bug/index.js:76:9)
      stack: |-
  Error: saw expected error
  at Test.assert [as _assert] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:226:54)
  at Test.bound [as _assert] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:77:32)
  at Test.assert (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:344:10)
  at Test.bound [as ok] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:77:32)
  at toPull.sink (/home/xyz/Development/simple-peer-pull-stream-bug/index.js:76:9)
  at done (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/stream-to-pull-stream/index.js:20:11)
  at ConcatStream.onClose (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/stream-to-pull-stream/index.js:28:16)
  at ConcatStream.emit (events.js:194:15)
  at finishMaybe (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:620:14)
  at endWritable (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:629:3)




  Failed Tests: There were 2 failures

    pull-stream with through as toPull.duplex

      ✖ saw expected error


    pull-stream with through as toPull.transform

      ✖ saw expected error


  total:     6
  passing:   4
  failing:   2
  duration:  733ms


npm ERR! Test failed.  See above for more details.
```