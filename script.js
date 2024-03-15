function run () {
    let htmlCode = document.getElementById('html-code');
    let jsCode = document.getElementById('js-code');
    let cssCode = document.getElementById('css-code');
    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlCode.value  + "<style>" + cssCode.value + "</style>";

    output.contentWindow.eval(jsCode.value);
}

window.addEventListener('beforeunload', function (e) {
    let messege = "Are you sure you want to Leave ?";
    e.returnValue = messege;
}) 