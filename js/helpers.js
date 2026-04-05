function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let safeDecode = (str) => {
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str; 
    }
}

if (!window.fetch) {
    window.fetch = function(url, options) {
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();

            let method = (options && options.method) ? options.method : "GET";

            xhr.open(method, url, true);

            if (options && options.headers) {
                Object.keys(options.headers).forEach(function(key) {
                    xhr.setRequestHeader(key, options.headers[key]);
                });
            }

            xhr.onload = function() {
                let status = xhr.status;
                let response = {
                    ok: status >= 200 && status < 300,
                    status: status,
                    statusText: xhr.statusText,
                    json: function() {
                        return new Promise(function(resolve, reject) {
                            try {
                                resolve(JSON.parse(xhr.responseText));
                            } catch(e) {
                                reject(e);
                            }
                        });
                    },
                    text: function() {
                        return Promise.resolve(xhr.responseText);
                    }
                };

                resolve(response);
            };

            xhr.onerror = function() {
                reject(new TypeError("Network request failed"));
            };

            xhr.ontimeout = function() {
                reject(new TypeError("Network request timed out"));
            };

            xhr.send(options && options.body ? options.body : null);
        });
    };
}