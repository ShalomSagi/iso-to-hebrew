# iso-to-hebrew
The iso-to-hebrew package is a simple utility for converting ISO 639-1 language codes to their corresponding Hebrew names.

All the language names was translated on Google Translate. The most popular languages are tested to look good, but if you see anything funny on an unpopular language name, feel free to open a PR or an issue and we'll get this fixed as soon as possible.

## Installation
To install the package, use npm:

```bash
npm install iso-to-hebrew
```

## Usage
The package exposes a single function called isoToHebrew. This function takes two parameters:

`isoCode` (required): A string representing an ISO 639-1 language code.
`defaultValue` (optional): A string representing a default value to return in case the isoCode parameter is not a recognized ISO 639-1 language code. An empty string will be returned as default.


## Example
Here is an example of how to use the isoToHebrew function:

```js
const { isoToHebrew } = require('iso-to-hebrew');

console.log(isoToHebrew('en')); // 'אנגלית'
console.log(isoToHebrew('he')); // 'עברית'
console.log(isoToHebrew('zz')); // ''
console.log(isoToHebrew('zz', 'לא ידוע')); // 'לא ידוע'

// The function will ignore locale strings
console.log(isoToHebrew('en-US')); // 'אנגלית'
```