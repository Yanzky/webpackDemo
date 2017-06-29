var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);  //resolve 是将值传递出去，resolve()方法是浏览器内部方法
            } else {
                reject(new Error(this.statusText));
            }
        };
    });

    return promise;
};
// Promise实例有then方法
//then 可以接受两个回调函数作为参数，两个函数的参数是从promise中传出的值
getJSON("./js/es6-promise/posts.json").then(function(json) {
    console.log(JSON.stringify(json))
    console.log('Contents: ' + json);
}, function(error) {
    console.error('出错了', error);
});