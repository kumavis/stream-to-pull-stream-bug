```
simple-peer-pull-stream-bug on  master is 📦 v1.0.0 via ⬢ v10.15.3 
➜ npm test

> simple-peer-pull-stream-bug@1.0.0 test /home/xyz/Development/simple-peer-pull-stream-bug
> node . | tap-spec


  readable-stream test

    ✔ saw expected error

  pull-stream test

miss.concat callback unexpectedly called with data: []

    ✖ saw expected error
    ---------------------

[![Greenkeeper badge](https://badges.greenkeeper.io/kumavis/stream-to-pull-stream-bug.svg)](https://greenkeeper.io/)

      operator: ok
      expected: true
      actual:   null
      at: toPull.sink (/home/xyz/Development/simple-peer-pull-stream-bug/index.js:28:9)
      stack: |-
  Error: saw expected error
  at Test.assert [as _assert] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:226:54)
  at Test.bound [as _assert] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:77:32)
  at Test.assert (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:344:10)
  at Test.bound [as ok] (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/tape/lib/test.js:77:32)
  at toPull.sink (/home/xyz/Development/simple-peer-pull-stream-bug/index.js:28:9)
  at done (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/stream-to-pull-stream/index.js:20:11)
  at ConcatStream.onClose (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/stream-to-pull-stream/index.js:28:16)
  at ConcatStream.emit (events.js:194:15)
  at finishMaybe (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:620:14)
  at endWritable (/home/xyz/Development/simple-peer-pull-stream-bug/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:629:3)




  Failed Tests: There was 1 failure

    pull-stream test

      ✖ saw expected error


  total:     2
  passing:   1
  failing:   1
  duration:  265ms


npm ERR! Test failed.  See above for more details.
```