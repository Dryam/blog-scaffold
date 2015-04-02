var template = document.querySelector('#page-template');

template.addEventListener('template-bound', function() {
    blog.loadFile('articles/articles.json', articlesLoaded);

    function articlesLoaded(articles) {
        blog.generateData(articles, dataGenerated);

        function dataGenerated(data, groups) {
            blog.updatePosts(data, groups);
        }
    }

});