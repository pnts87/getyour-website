module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"./src/agbs": "agbs"})
  eleventyConfig.addPassthroughCopy({"./src/kontakt": "kontakt"})
  eleventyConfig.addPassthroughCopy({"./src/datenschutz": "datenschutz"})
  eleventyConfig.addPassthroughCopy({"./src/felix": "felix"})
  eleventyConfig.addPassthroughCopy({"./src/index": "/"})
  eleventyConfig.addPassthroughCopy({"./src/impressum": "impressum"})
  eleventyConfig.addPassthroughCopy({"./src/netzwerk": "netzwerk"})
  eleventyConfig.addPassthroughCopy({"./src/pana": "pana"})
  eleventyConfig.addPassthroughCopy({"./src/referenzen": "referenzen"})
  eleventyConfig.addPassthroughCopy({"./src/service": "service"})
  eleventyConfig.addPassthroughCopy({"./src/team": "team"})

  return {
    dir: {
      input: "./src",
      output: "public"
    }
  }
};
