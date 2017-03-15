//tekita element

document.getElementById("nupp1").onclick  = function() { //nupp vajutusel juhtub see


    var node = document.createElement("li"); // mis element tekitada
    var text = document.getElementById("kast").value; //võtab väärtuse
    var textnode=document.createTextNode(text); //muudab node textiks
    node.appendChild(textnode); //annab nodile textnode väärtuse
   // document.getElementById("nimekiri").appendChild(node);//lisab elemendi viimaseks
     nimekiri.insertBefore(node, nimekiri.childNodes[0]);//lisab elemendi esimeseks
}
