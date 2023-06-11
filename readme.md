# smallest [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/smallest.svg)](https://greenkeeper.io/)

> Find the smallest number in a list

This is also one of the smalled packages on NPM... if you need that for testing bundlers, connectivity, integration, etc.

## Install

```
$ npm i smallest
```


## Usage

```js
const smallest = require('smallest')

smallest(1, 2, 4, 3)
//=> 1
```

## API

#### `smallest(values)` -> `number`

##### values

*Required*  
Type: `array[number]`

An array of numbers or a variadic set of numbers.

## Related

* [greatest](https://github.com/bendrucker/greatest)

## License

MIT © [Ben Drucker](http://bendrucker.me)
