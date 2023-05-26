const url = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js";

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () =>{
            resolve(script);
        };
        src.onerror = () => reject(new Error(""));
    })
}