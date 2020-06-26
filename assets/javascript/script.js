function showHRImage(img) {
    var filename = url.substring(url.lastIndexOf('/')+1);
    window.open(filename.split('-')[1]);
}