var blog = (function () {            
    var _private = {                       
        loadFile: function (url, callback) {            
            var ajax = document.querySelector("#tmp");            
            ajax.url = url;                        
            ajax.addEventListener("core-response", function(){                                               
                callback(ajax.response);
                });                                                                                                                                                                                                                                                                                                                          
        },
        generateData: function (rawData){            
            var count = rawData.length;
            var groups = [], data = [], rawGroups =[];
            function onlyUnique(value, index, self) { 
                return self.indexOf(value) === index;
            }                        
            for (i=0; i<count;i++){
                data.push({
                    index : i,
                    selected: false,
                    model : {
                        title: rawData[i].title,
                        author: rawData[i].author,
                        timeStamp: rawData[i].timeStamp,
                        path : rawData[i].path,
                        category: rawData[i].category,
                        subCategory: rawData[i].subCategory
                    }                                                            
                })
                rawGroups.push(rawData[i].category);
            }
            console.log(rawGroups);            
            groups = rawGroups.filter(onlyUnique);
// array groups must be like this
// this.groups = [
//         {length: 3, data: {label: 'Today'}},
//         {length: 15, data: {label: 'Yesterday'}},
//         {length: 30, data: {label: 'Last Week'}},
//         {length: 150, data: {label: 'Last Month'}},
//         {length: 150, data: {label: 'Last Quarter'}},
//         {length: 152, data: {label: 'Last Year'}}
//       ];


            console.log(data);
            console.log(groups);

        }
    };
    //FACADE
    return {        
        loadFile: function (url, callback) {            
            _private.loadFile(url, callback);                                               
        },
        generateData: function (rawData) {            
            _private.generateData(rawData);                                               
        }
    }
}());
