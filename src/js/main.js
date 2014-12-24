/*global require, $, _, console */
'use strict';

var game = { 

    render: function() {
        var gameView = $('#game-template').html(),
            playBoard;

        $('.container').append(_.template(gameView, playBoard));
        game.lightInit();
    },

    lightInit: function(){  //randomly light between 10 and 15 lights at the start
        var maxStart = 16, 
            minStart = 10,
            aMin = 0,
            aMax = 5,
            i,
            j,
            lStart = Math.floor(Math.random() * (maxStart - minStart)) + minStart;
        console.log(lStart);
        for (var k = 0; k <= lStart; k++) {
            i = Math.floor(Math.random() * (aMax - aMin) + aMin);
            j = Math.floor(Math.random() * (aMax - aMin) + aMin);
            $('.'+i+'-'+j).addClass('on');
        }  
    },

    board: function () {
        var playBoard = [],
            size = 5;

        for (var i = 0; i < size; i++) {
            playBoard[i] = [];
            for (var j = 0; j < size; j++) {
                playBoard[i][j] = [];
            }
        }
        return playBoard;
    }, 

    game: function(){
        game.render();
        $('.container').on('click', '.light', function (){
            $(this).toggleClass('on', console.log($(this)));
        });
    }
};

window.Game = game.game();





/*
<!-- Begin
function fillall() {
for (var i = 0; i < 24; i++) {
document.lightsform.elements[i].checked=1;
   }
}
function clearall() {
for (var i = 0; i < 24; i++) {
document.lightsform.elements[i].checked=0;
   }
}
function level1() {
clearall();
document.lightsform.elements[10].checked=1;
document.lightsform.elements[12].checked=1;
document.lightsform.elements[14].checked=1;
}
function level2() {
clearall();
document.lightsform.elements[12].checked=1;
document.lightsform.elements[16].checked=1;
document.lightsform.elements[17].checked=1;
document.lightsform.elements[18].checked=1;
document.lightsform.elements[20].checked=1;
document.lightsform.elements[21].checked=1;
document.lightsform.elements[22].checked=1;
document.lightsform.elements[23].checked=1;
document.lightsform.elements[24].checked=1;
}
function level3() {
fillall();
document.lightsform.elements[4].checked=0;
document.lightsform.elements[6].checked=0;
document.lightsform.elements[7].checked=0;
document.lightsform.elements[8].checked=0;
document.lightsform.elements[11].checked=0;
document.lightsform.elements[12].checked=0;
document.lightsform.elements[13].checked=0;
document.lightsform.elements[16].checked=0;
document.lightsform.elements[17].checked=0;
document.lightsform.elements[18].checked=0;
document.lightsform.elements[24].checked=0;
}
function level4() {
clearall();
document.lightsform.elements[2].checked=1;
document.lightsform.elements[6].checked=1;
document.lightsform.elements[8].checked=1;
document.lightsform.elements[10].checked=1;
document.lightsform.elements[12].checked=1;
document.lightsform.elements[14].checked=1;
document.lightsform.elements[16].checked=1;
document.lightsform.elements[18].checked=1;
document.lightsform.elements[22].checked=1;
 }
function level5() {
clearall();
document.lightsform.elements[11].checked=1;
document.lightsform.elements[16].checked=1;
document.lightsform.elements[21].checked=1;
}
function checkall() {
var win=1;
for (var i = 0; i < 24; i++) {
if (document.lightsform.elements[i].checked==1) {
win=0;
   }
}
if (win==1){
alert("\nYou Won!!\n")
   }
}
function check(v){
q=5;
w=1;
row=parseInt(v/q)+w;
if (isNaN(row)) {
row=1;
}
intv = parseInt(v);
a=eval(intv+q);
b=eval(intv-q);
c=eval(intv+w);
d=eval(intv-w);
if (a<0 || a>24){
a=25;
}
if (b<0 || b>24){
b=25;
}
if (c<0 || c>24){
c=25;
}
if (d<0 || d>24){
d=25;
}
kc = (parseInt(c/q)+w)
kd = (parseInt(d/q)+w)
kv = row;
if (kc != kv){
c=25;
}
if (kd != kv){
d=25;
}
if (v==5) d=25; // correction for strange bug

if (document.lightsform.elements[a].checked == 1) {
document.lightsform.elements[a].checked=0;
}
else {
document.lightsform.elements[a].checked=1;
}
if (document.lightsform.elements[b].checked == 1) {
document.lightsform.elements[b].checked=0;
}
else {
document.lightsform.elements[b].checked=1;
}
if (document.lightsform.elements[c].checked == 1) {
document.lightsform.elements[c].checked=0;
}
else {
document.lightsform.elements[c].checked=1;
}
if (document.lightsform.elements[d].checked == 1) {
document.lightsform.elements[d].checked=0;
}
else {
document.lightsform.elements[d].checked=1;
}
checkall();
}
//  End -->
</script>
</HEAD>








<center>
<form name=lightsform>
<table colspec="l20 l20 l20 l20 l20" border=7>
<tr>
<td><input type=checkbox value=0 onClick="check(value)"></td>
<td><input type=checkbox value=1 onClick="check(value)"></td>
<td><input type=checkbox value=2 onClick="check(value)"></td>
<td><input type=checkbox value=3 onClick="check(value)"></td>
<td><input type=checkbox value=4 onClick="check(value)"></td>
</tr>
<tr>
<td><input type=checkbox value=5 onClick="check(value)"></td>
<td><input type=checkbox value=6 onClick="check(value)"></td>
<td><input type=checkbox value=7 onClick="check(value)"></td>
<td><input type=checkbox value=8 onClick="check(value)"></td>
<td><input type=checkbox value=9 onClick="check(value)"></td>
</tr>
<tr>
<td><input type=checkbox value=10 onClick="check(value)"></td>
<td><input type=checkbox value=11 onClick="check(value)"></td>
<td><input type=checkbox value=12 onClick="check(value)"></td>
<td><input type=checkbox value=13 onClick="check(value)"></td>
<td><input type=checkbox value=14 onClick="check(value)"></td>
</tr>
<tr>
<td><input type=checkbox value=15 onClick="check(value)"></td>
<td><input type=checkbox value=16 onClick="check(value)"></td>
<td><input type=checkbox value=17 onClick="check(value)"></td>
<td><input type=checkbox value=18 onClick="check(value)"></td>
<td><input type=checkbox value=19 onClick="check(value)"></td>
</tr>
<tr>
<td><input type=checkbox value=20 onClick="check(value)"></td>
<td><input type=checkbox value=21 onClick="check(value)"></td>
<td><input type=checkbox value=22 onClick="check(value)"></td>
<td><input type=checkbox value=23 onClick="check(value)"></td>
<td><input type=checkbox value=24 onClick="check(value)"></td>
</tr>
</table>
<br>
<table border=1>
<tr>
<td><a href="javascript:level1()">level 1</a></td>
<td><a href="javascript:level2()">level 2</a></td>
</tr>
<tr>
<td><a href="javascript:level3()">level 3</a></td>
<td><a href="javascript:level4()">level 4</a></td>
</tr>
<tr>
<td><a href="javascript:level5()">level 5</a></td>
<td><input type="reset" value="clear"></td>
</tr>
</table>

*/