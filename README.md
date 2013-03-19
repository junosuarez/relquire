# relquire
yes, it's another wrapper for node's require*

require modules relative to your project's root directory.

## installation

    $ npm install relquire

## usage

    var relquire = require('relquire')

    var foo = relquire('~/path/from/package/root')

    foo()

## running the tests

From package root:

    $ npm install
    $ npm test

## contributors

jden <jason@denizac.org>

## license

MIT. (c) 2013 Agile Diagnosis <hello@agilediagnosis.com>. See LICENSE.md


*aren't you glad I didn't call it reliquary like I was going to?