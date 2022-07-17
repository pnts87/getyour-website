module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"./static/agbs": "agbs"})
  eleventyConfig.addPassthroughCopy({"./static/kontakt": "kontakt"})
  eleventyConfig.addPassthroughCopy({"./static/datenschutz": "datenschutz"})
  eleventyConfig.addPassthroughCopy({"./static/felix": "felix"})
  eleventyConfig.addPassthroughCopy({"./static/index": "/"})
  eleventyConfig.addPassthroughCopy({"./static/impressum": "impressum"})
  eleventyConfig.addPassthroughCopy({"./static/netzwerk": "netzwerk"})
  eleventyConfig.addPassthroughCopy({"./static/pana": "pana"})
  eleventyConfig.addPassthroughCopy({"./static/referenzen": "referenzen"})
  eleventyConfig.addPassthroughCopy({"./static/service": "service"})
  eleventyConfig.addPassthroughCopy({"./static/team": "team"})

  eleventyConfig.addPassthroughCopy({"./src/js": "js"})

  eleventyConfig.addTransform("add-app-script", (content) => {
    const scriptTag =
`
    <script type="module" src="../js/app.js"></script>
  </body>
`
    const result = content.replace(/<\/body>/, scriptTag)
    return result
  })

  eleventyConfig.addTransform("replace-url", (content) => {
    const url = process.env.URL || "http://localhost:8888"
    const result = content.replace(/https:\/\/get-your.de/g, url)
    return result
  })

  eleventyConfig.addPassthroughCopy({
    "node_modules/@getyour/getyour-fireflies/getyour-fireflies.js":
    "js/getyour-fireflies.js"
  })

  eleventyConfig.addTransform("add-google-analytics-tag", (content, outputPath) => {
    console.log(outputPath);
    if (outputPath && outputPath.endsWith("/pana/index.html")) {
      const result = content.replace(/<\/head>/, `<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5X6N6W8YQ3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5X6N6W8YQ3');
    </script>
  </head>
      `)
      return result
    }
    return content
  })


  return {
    dir: {
      input: "./static",
      output: "./public"
    }
  }
};
