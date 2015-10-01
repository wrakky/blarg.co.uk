# blarg.co.uk

Jekyll repository for my personal site, blarg.co.uk. All content is copyright of Peter Newnham, but feel free to borrow, copy or adapt the Jekyll build.

* Site: http://blarg.co.uk
* Twitter: [@wrakky](https://twitter.com/wrakky)

## Building

### Local Version

```
npm install
npm start
```

#### Flags

`minify` flag for minfiying resources, sourcemaps flag for generating sourcemaps.

```
gulp --minify --sourcemaps
```

### Deploying

Generates site, minifies images, js, css and html. Adds files to gh-pages branch and pushes to github.

```
npm run deploy
```

## License

#### The MIT License (MIT)

Copyright (c) Peter Newnham

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.