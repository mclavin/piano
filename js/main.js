/**
 * Created by Martin on 2016-11-30.
 */
var cNote = document.getElementById('cAudio');
var dNote = document.getElementById('dAudio');
var eNote = document.getElementById('eAudio');
var fNote = document.getElementById('fAudio');
var gNote = document.getElementById('gAudio');
var aNote = document.getElementById('aAudio');
var bNote = document.getElementById('bAudio');

var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");
var a = document.getElementById("a");
var b = document.getElementById("b");
/*
$(document).keydown(function(qKey){
    switch(qKey.keyCode){
        case 81:{
            cNote.currentTime = 0;
            cNote.play();
            c.style.backgroundColor = "#661920";
            $( "#c" ).animate({
                backgroundColor: "#3e181b",
            }, 150 );
        }
    }
});
*/
$(document).keydown(function(qKey) {
  if(qKey.keyCode == 81){
      cNote.currentTime = 0;
      cNote.play();
      c.style.backgroundColor = "#661920";
      $( "#c" ).animate({
          backgroundColor: "#3e181b",
      }, 150 );
  }
});

$(document).keydown(function(wKey) {
    if(wKey.keyCode == 87){
        dNote.currentTime = 0;
        dNote.play();
        d.style.backgroundColor = "#6e2819";
        $( "#d" ).animate({
            backgroundColor: "#422018",
        }, 150 );
    }
});

$(document).keydown(function(eKey) {
    if(eKey.keyCode == 69){
        eNote.currentTime = 0;
        eNote.play();
        e.style.backgroundColor = "#735b20";
        $( "#e" ).animate({
            backgroundColor: "#45391b",
        }, 150 );
    }
});

$(document).keydown(function(rKey) {
    if(rKey.keyCode == 82){
        fNote.currentTime = 0;
        fNote.play();
        f.style.backgroundColor = "#1b613b";
        $( "#f" ).animate({
            backgroundColor: "#193c29",
        }, 150 );
    }
});

$(document).keydown(function(tKey) {
    if(tKey.keyCode == 84){
        gNote.currentTime = 0;
        gNote.play();
        g.style.backgroundColor = "#184d65";
        $( "#g" ).animate({
            backgroundColor: "#18323e",
        }, 150 );
    }
});

$(document).keydown(function(yKey) {
    if(yKey.keyCode == 89){
        aNote.currentTime = 0;
        aNote.play();
        a.style.backgroundColor = "#4e2753";
        $( "#a" ).animate({
            backgroundColor: "#331f35",
        }, 150 );
    }
});

$(document).keydown(function(uKey) {
    if(uKey.keyCode == 85){
        bNote.currentTime = 0;
        bNote.play();
        b.style.backgroundColor = "#6f3a62";
        $( "#b" ).animate({
            backgroundColor: "#43293d",
        }, 150 );
    }
});

