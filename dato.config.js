// dato.config.js

module.exports = (dato, root, i18n) => {

  // inside a "post" directory...
  root.directory("content/post", (dir) => {

    // ...iterate over the "Blog post" records...
    dato.articles.forEach((article) => {

      // ...and create a markdown file for each article!
      dir.createPost(`${article.slug}.md`, "yaml", {
        frontmatter: {
          title: article.title,
          type: "post",
          date: article.publishedAt,
        },
        content: article.textContent
      });
    })
  });
}
