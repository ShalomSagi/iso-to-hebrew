# iso-to-hebrew
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

The iso-to-hebrew package is a simple utility for converting ISO 639-1 language codes to their corresponding Hebrew names.

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
import isoToHebrew from 'iso-to-hebrew';

console.log(isoToHebrew('en')); // 'אנגלית'
console.log(isoToHebrew('he')); // 'עברית'
console.log(isoToHebrew('zz')); // ''
console.log(isoToHebrew('zz', 'לא ידוע')); // 'לא ידוע'

// The function will ignore dashes
console.log(isoToHebrew('en-US')); // 'אנגלית'
```

## Contributing
Thank you for considering contributing to our library! We welcome any and all contributions, whether it be bug fixes, new features, or documentation improvements.

Before making any contributions, please review our [contribution guide](https://github.com/ShalomSagi/iso-to-hebrew/blob/main/CONTRIBUTING.md) for guidelines on how to contribute effectively and efficiently.

## Known Issues
All the language names was translated using Google Translate. The most popular languages are tested to look good, but it's possible that some unpopular languages might result an inaccurate name.
If you find anything funny, feel free to open a PR or an issue and it will be fixed as soon as possible.
