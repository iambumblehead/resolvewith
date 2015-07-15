resolvewith
===========
**(c)[Bumblehead][0], 2015** [MIT-license](#license)

Resolve one filepath (or id) relative to another via the rules of CommonJS/node's [module.require][1].

For example, assume this files exists. Use `resolvewith` to know the full path to the file referenced in each require call.

_/test/testfiles/testscript.js_
```javascript
var modulea = require('./path/to/indexfile'),
    modulea = require('../parent/file.js'),
    moduleb = require('testmodule');
```
    
Find the referenced file.

```javascript
resolvewith(
  './path/to/indexfile',
  '/test/testfiles/testscript.js'
);
// /test/testfiles/path/to/indexfile/index.js

resolvewith(
  './path/to/indexfile',
  '/test/testfiles' // a directory can be used as well
);
// /test/testfiles/path/to/indexfile/index.js

resolvewith(
  './path/to/indexfile' // second parameter defaults to `process.cwd`
);
// null

  
resolvewith(
  '../parent/file.js',
  '/test/testfiles/testscript.js'
);
// /test/parent/file.js

resolvewith(
  'testmodule',
  '/test/testfiles/testscript.js'
);
// /test/testfiles/node_modules/testmodule/index.js

resolvewith(
  'doesnotexist',
  '/test/testfiles/testscript.js'
);
// null
```

`resolvewith` follows the behaviour of [require.resolve][2] if the given path references a 'core' module such as 'path' or 'fs'. `require.resolve('path')` and `resolvewith('path')` would both return `'path'` .

```javascript
resolvewith(
  'path',
  '/test/testfiles/testscript.js'
); // 'path'

resolvewith.iscoremodule('path'); // true
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
