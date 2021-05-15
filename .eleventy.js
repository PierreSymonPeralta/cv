const fs = require('fs');

module.exports = ((eleventyConfig) => {
   eleventyConfig.addPassthroughCopy('src/styles');
   eleventyConfig.addWatchTarget('src/styles');
   return {
     dir: {
       input: 'src',
       output: 'docs'
     }
   }
});