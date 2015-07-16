resolvewith
===========
**(c)[Bumblehead][0], 2015** [MIT-license](#license)

Resolve one filepath (or id) relative to another via the rules of CommonJS/node's [module.require][1]. Use `resolvewith` as an alternative to node's native [require.resolve][2].

_/test/testfiles/testscript.js_
```javascript
var modulea = require('./path/to/indexfile'),
    modulea = require('../parent/file.js'),
    moduleb = require('testmodule');

console.log(require.resolve('../src/resolvewith'));
// /Users/bumble/resolvewith/src/resolvewith.js
console.log(require.resolve('./testfiles/testscript.js'));
// /Users/bumble/resolvewith/test/testfiles/testscript.js
console.log(require.resolve('path'));
// path

console.log(resolvewith('../src/resolvewith', '/Users/bumble/resolvewith/test/'));
// /Users/bumble/resolvewith/src/resolvewith.js
console.log(resolvewith('../src/resolvewith', '/Users/bumble/resolvewith/test/resolvewith.spec.js'));
// /Users/bumble/resolvewith/src/resolvewith.js
console.log(resolvewith('./testfiles/testscript.js', '/Users/bumble/resolvewith/test/'));
// /Users/bumble/resolvewith/test/testfiles/testscript.js
console.log(resolvewith('path', '/Users/bumble/resolvewith/test/'));
// path
console.log(resolvewith.iscoremodule('path'));
// true
```


[0]: http://www.bumblehead.com                            "bumblehead"
[1]: https://nodejs.org/api/modules.html#modules_module_require_id
[2]: https://nodejs.org/api/globals.html#globals_require_resolve

---------------------------------------------------------
#### <a id="license">license

 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2015 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
