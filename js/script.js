document.getElementById('button-copy').addEventListener('click', function() {
    var textarea = document.getElementById('comment');
    textarea.select();
    document.execCommand('copy');
    alert('Text is copied');
});