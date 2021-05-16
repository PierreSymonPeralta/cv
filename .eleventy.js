module.exports = ((eleventyConfig) => {
   eleventyConfig.addWatchTarget("./src/sass/");
   eleventyConfig.addPassthroughCopy('src/images');
   return {
     dir: {
       input: 'src',
       output: 'docs',
     },
     pathPrefix: '/cv/'
   }
});