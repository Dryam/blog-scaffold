//use JSlint
var blog = (function () {                
    var _private = {                       
        loadFile: function (url, callback) {            
            var ajax = document.querySelector("core-ajax");                        
            ajax.url = url;
            ajax.go();                        
            ajax.addEventListener("core-response", function(){                                               
                callback(ajax.response);
                });                                                                                                                                                                                                                                                                                                                          
        },
        generateData: function (rawData, callback){            
            var count = rawData.length;
            var groups = [], data = [];
            var rawGroups = {};            
  
            for (i=0; i<count;i++){
                data.push({
                    index: i,
                    selected: true,
                    model:{
                        title: rawData[i].title,
                        author: rawData[i].author,
                        timeStamp: rawData[i].timeStamp,
                        path: rawData[i].path,
                        category: rawData[i].category,
                        subCategory: rawData[i].subCategory
                    }                                                                                   
                })
                rawGroups[rawData[i].category] ? rawGroups[rawData[i].category]++ : rawGroups[rawData[i].category] = 1;
   
            }
            for (i=0; i<Object.keys(rawGroups).length; i++){
                   groups.push({length: rawGroups[Object.keys(rawGroups)[i]] , data: {label : Object.keys(rawGroups)[i]} }) 
            }                                                
            callback(data, groups);
        },
        updatePosts: function(data, groups){            
            document.querySelector("core-list").data = data;
            document.querySelector("core-list").groups = groups;            
        }        
    };
    //FACADE
    return {        
        loadFile: function (url, callback) {            
            _private.loadFile(url, callback);                                               
        },
        generateData: function (rawData, callback) {
            _private.generateData(rawData, callback)                                             
        },
        updatePosts : function(data, groups){
            _private.updatePosts(data, groups);
        }          
    }
}());
