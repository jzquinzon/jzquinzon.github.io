let welcome, name, msg, msg2, msg3, msg4, delay, i;
welcome = 'Hello! my name is';
name = 'John Quinzon.';
msg = "I make cool things on the web.";

delay = 50;

function type(id,text) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(function(){type(id,text)}, delay);
    }
}

window.onload = function (){
    i=0;
    type('welcome', welcome);
    setTimeout(function (){
        i = 0;
        type('name', name)
    },1000);
    setTimeout(function (){
        i = 0;
        type('msg', msg)
    },1900);
}


$( ".navbar-toggler" ).click(function() {
    $( ".navbar-collapse" ).toggleClass( "toggled" );
});
