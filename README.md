# array-rotate [![Build Status](https://travis-ci.org/sanketmaru/array-rotate.svg)](https://travis-ci.org/sanketmaru/array-rotate)


> Rotates an array of numbers


## Install

```
$ npm install --save array-rotate
```


## Usage

```js
var rotateArray = require('array-rotate');
var arr = rotateArray.createArray(1,2,3,4,5,6);
var positionToRotate = 2;

var newArr = rotateArray.rotateByLast(arr, position);
//=> [5,6,1,2,3,4]
```


## API

### rotateArray.createArray

Creates anarray.

### rotateArray.rotateByLast

Rotates an array by n positions from last.


