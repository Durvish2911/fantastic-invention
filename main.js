const { fabric } = require("./fabric");

var canvas= new fabric.Canvas ('mydanvasissanwas');
playerx =10;
playery =10;
blockimagewidth =30;
blockimageheight =30;
var playerobject= "";
var blockimageobject
function playerupdate(){
    console.log("dd")
    fabric. Image. fromURL("marvel-avengers-endgame-e1556039297104.jpg"),function(Img){
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,
            left:playerx
        });
    }
    canvas.add(playerobject);
}
function new_image(get_image){
    console.log("webwhatsapp")
    fabric.Image.fromURL(get_image,function(Img)){
        blockimageobject = Img;
    }
    blockimageobject.scaleToWidth(blockimagewidth);
    blockimageheight.scaleToHeight(blockimageheight);
    blockimageobject.set({
        top:playery,
        left:playerx
    })
    canvas.add(blockimageobject)
})
}