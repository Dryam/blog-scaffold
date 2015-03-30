document.addEventListener('polymer-ready', function() {        
    blog.loadFile('http://127.0.0.1/polymer_local/projects/blog-scaffold/articles/articles.json', articlesLoaded);
    function articlesLoaded(articles) {
    blog.generateData(articles);
    }    
});