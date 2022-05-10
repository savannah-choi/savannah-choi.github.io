window.onload = function () {
    document.getElementById('chara1-label').innerText = (document.getElementById('chara1-name').value) + ": ";
    document.getElementById('chara2-label').innerText = (document.getElementById('chara2-name').value) + ": ";
    document.getElementById('chara3-label').innerText = (document.getElementById('chara3-name').value) + ": ";
}

function getDiceForm () {
    var name1 = document.getElementById('chara1-name').value;
    var name2 = document.getElementById('chara2-name').value;
    var name3 = document.getElementById('chara3-name').value;

    var favor1 = parseInt(document.getElementById('chara1-fav').value);
    var favor2 = parseInt(document.getElementById('chara2-fav').value);
    var favor3 = parseInt(document.getElementById('chara3-fav').value);
    
    var kindness = parseInt(document.getElementById('kindness').value);
    var multinum = ((-1)*kindness + 100) * 0.001;

    var res1 = Math.ceil(30 + (multinum * favor1));
    var res2 = Math.ceil(30 + (multinum * favor2));
    var res3 = Math.ceil(30 + (multinum * favor3));

    var maxnum = (Math.ceil((res1 + res2 + res3) * 0.1) * 10) + 10;

    var str = "";
    str += ("1~" + res1 + " : " + name1 + "(" + (res1) + ")" + "<br/>");
    str += ((res1+1) + "~" + (res1+res2) + " : " + name2 + "(" + (res2) + ")" + "<br/>");
    str += ((res1+res2+1) + "~" + (res1+res2+res3) + " : " + name3 + "(" + (res3) + ")" + "<br/>");
    str += ((res1+res2+res3+1) + "~" + maxnum + " : +1" + "(" + (maxnum-res1-res2-res3) + ")");
    str += "<br/><br/>";
    str += ("\`주사위 " + maxnum + "\`<br/>\`highlight\`");
    
    document.getElementById('result').innerHTML = str;
}