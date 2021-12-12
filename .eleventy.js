module.exports = ((eleventyConfig) => {
   eleventyConfig.addWatchTarget("./src/sass/");
   return {
     dir: {
       input: 'src',
       output: 'docs',
     },
     templateFormats: [ 'md', 'html', 'gif', 'jpeg', 'png' ],
     pathPrefix: '/cv/'
   }
});