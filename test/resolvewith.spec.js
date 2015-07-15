// Filename: resolvewith.spec.js  
// Timestamp: 2015.07.15-14:15:53 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

var path = require('path');

var resolvewith = require('../src/resolvewith');

describe("resolvewith", function () {
  it("should return a core module reference as require.resolve id", function () {
    expect(
      resolvewith('path')
    ).toBe(
      require.resolve('path')
    );    
  });
  
  it("should return a full path when given the relative path to an index file", function () {
    var fullpath = path.resolve('./test/testfiles/');

    expect(
      resolvewith('./path/to/indexfile', fullpath)
    ).toBe(
      path.resolve('./test/testfiles/path/to/indexfile/index.js')
    );

    expect(
      resolvewith('../testfiles/path/to/indexfile', fullpath)
    ).toBe(
      path.resolve('./test/testfiles/path/to/indexfile/index.js')
    );

    expect(
      resolvewith('./path/to/indexfile/index', fullpath)
    ).toBe(
      path.resolve('./test/testfiles/path/to/indexfile/index.js')
    );

    expect(
      resolvewith('./path/to/indexfile/index.js', fullpath)
    ).toBe(
      path.resolve('./test/testfiles/path/to/indexfile/index.js')
    );        

  });

  it("should use the process path as a default 'with' path (second parameter)", function () {
    expect(
      resolvewith('./path/to/indexfile')
    ).toBe(
      null
    );

    expect(
      resolvewith('./test/testfiles/path/to/indexfile')      
    ).toBe(
      path.resolve('./test/testfiles/path/to/indexfile/index.js')      
    );        
  });

  it("should return null if a path does not exist", function () {
    expect(
      resolvewith('./path/does/not/exist')
    ).toBe(
      null
    );
  });

  it("should return a full path when given the id to a module", function () {
    var fullpath = path.resolve('./test/testfiles/');

    expect(
      resolvewith('testmodule', fullpath)
    ).toBe(
      path.resolve('./test/testfiles/node_modules/testmodule/index.js')
    );

    expect(
      resolvewith('testmodule', path.join(fullpath + '/path/to/indexfile'))
    ).toBe(
      path.resolve('./test/testfiles/node_modules/testmodule/index.js')
    );
  });

  it("should return a null when given the id to a module inaccessible from withpath", function () {
    var fullpath = path.resolve('./test/testfiles/');
    
    expect(
      resolvewith('notamodulename', path.join(fullpath + '/path/to/indexfile'))
    ).toBe(
      null
    );        
  });  
});

describe("resolvewith.getasdirname", function () {
  it("should return a relative path as a fullpath", function () {
    expect( /^\/.*relpath$/.test(resolvewith.getasdirname('./relpath')) ).toBe(true);
  });
});


