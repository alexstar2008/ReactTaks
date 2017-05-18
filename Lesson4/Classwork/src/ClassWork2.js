
function getImage() {
    let src = "./image.jpg";
    let promise = new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.addEventListener('load', () => { resolve(src); });
        img.addEventListener('error', () => { reject(src); });
    });
    promise.then((url) => {
        let img = document.createElement('img');
        img.src = url;
        document.getElementById('main').appendChild(img);
    }, (urlError) => {
        document.getElementById('main').innerHTML = "<p>Image wasn't found</p>";
    });
}
getImage();

