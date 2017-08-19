$(document).ready(function () {
    var socket = io.connect("https://preview.c9users.io/warrenpig/messenger/node/web%20page/compare.html?_c9_id=livepreview2&_c9_host=https://ide.c9.io");
     socket.on('test', (data, callback) =>{
         socket.emit('test2',{a: 'www'});
     });
});