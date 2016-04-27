var pdfu = require('pd-fileutils')
  , fs = require('fs')
  , patchStr, patch

// Read the file
patchStr = fs.readFileSync('./patches/phasor.pd').toString()

// Parse the read file
patch = pdfu.parse(patchStr)

console.log(JSON.stringify(patch));
