module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"./src/agb": "agbs-767"})
  eleventyConfig.addPassthroughCopy({"./src/kontakt": "kontakt-375"})
  eleventyConfig.addPassthroughCopy({"./src/datenschutz": "datenschutz-375"})
  eleventyConfig.addPassthroughCopy({"./src/felix": "teammitglied-felix-375"})
  eleventyConfig.addPassthroughCopy({"./src/home": "/"})
  eleventyConfig.addPassthroughCopy({"./src/impressum": "impressum-767"})
  eleventyConfig.addPassthroughCopy({"./src/netzwerk": "netzwerk-375"})
  eleventyConfig.addPassthroughCopy({"./src/pana": "teammitglied-pana-375"})
  eleventyConfig.addPassthroughCopy({"./src/referenzen": "referenzen-767"})
  eleventyConfig.addPassthroughCopy({"./src/service": "unser-service-375"})
  eleventyConfig.addPassthroughCopy({"./src/team": "unser-team-375"})

  return {
    dir: {
      input: "./src",
      output: "public"
    }
  }
};
