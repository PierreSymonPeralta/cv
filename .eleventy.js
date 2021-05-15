module.exports = ((eleventyConfig) => {
   eleventyConfig.addPassthroughCopy('src/styles');
   eleventyConfig.addPassthroughCopy('src/images');
   eleventyConfig.addWatchTarget('src/styles');
   return {
     dir: {
       input: 'src',
       output: 'docs',
     },
     pathPrefix: '/cv/',
     passthroughFileCopy: true
   }
});