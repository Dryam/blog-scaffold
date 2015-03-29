        document.addEventListener('polymer-ready', function() {
                
                var template = document.querySelector('#page-template');
                var ajax = document.querySelector("core-ajax");                
                ajax.url = 'articles/articles.json';                                
                
                var bb = document.querySelector('#button1');
                        console.log(bb);
                                                                                                                       
                ajax.addEventListener("core-response", function(){                        
                    document.querySelector("core-list").data = ajax.response;                                        
                })
                
                ajax.addEventListener("core-response",
                        //when articles-list downloaded start generate categorys list
                        function() {
                                                                                        
                            var menuCat = [];
                            var menu = [];
                            

                            //Making from articles-list.json object with unique categorys and unique subCategorys                     
                            ajax.response.forEach(getCategorys);

                            //Making menu-array from object with unique categorys and unique subCategorys
                            makeMenu();

                            //put unique fields of articles-list.json to categorys object.                    
                            template.categorys = menu;

                            function getCategorys(item) {
                                for (var i = 0; i < item.categorys.length; i++) {
                                    if (menuCat[item.categorys[i]] == undefined) {
                                        menuCat[item.categorys[i]] = {}

                                        for (var j = 0; j < item.subCategorys.length; j++) {
                                            menuCat[item.categorys[i]][item.subCategorys[j]] = {};
                                        }
                                    } else {
                                        for (var s = 0; s < item.subCategorys.length; s++) {
                                            menuCat[item.categorys[i]][item.subCategorys[s]] = {};
                                        }
                                    }
                                }

                            }

                            function makeMenu() {
                                for (var i = 0; i < Object.keys(menuCat).length; i++) {
                                    menu.push({
                                        'name': Object.keys(menuCat)[i],
                                        'subcategorys': Object.keys(menuCat[Object.keys(menuCat)[i]])
                                    });
                                }
                            }
                        }
                    );

            }

        );
        // TODO: try to rewrite in module with facade.