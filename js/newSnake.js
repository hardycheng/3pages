/**
 * Created by xchou on 7/29/15.
 */

var backLayer;
var bitmapData;
var snakeLayer;
var paintbrushSize = 20;
var mouse;
var drawBitmapData;
function main() {
    backLayer = new LSprite();
    addChild(backLayer);

    drawBitmapData = new LBitmapData(null, 0, 0, LGlobal.width, LGlobal.height, LBitmapData.DATA_CANVAS);
    backLayer.addChild(new LBitmap(drawBitmapData));

    snakeLayer = new LSprite();
    addChild(snakeLayer);

    var colors = ["#FF0000","#008800","#00FF00","#90FB32"];
    for(var i = 0;i < 4;i++){
        var smallmouse = new LShape();
        smallmouse.graphics.drawRect(0 , colors[i], [0, 0, paintbrushSize, paintbrushSize],true,colors[i]);
        smallmouse.x = LGlobal.width*Math.random();
        smallmouse.y = LGlobal.height*Math.random();
        //smallmouse.tx = LGlobal.width*Math.random();
        //smallmouse.ty = LGlobal.height*Math.random();
        smallmouse.direction = 4 * Math.random();
        bitmapData = new LBitmapData(null, 0, 0, paintbrushSize, paintbrushSize, LBitmapData.DATA_CANVAS);
        bitmapData.draw(smallmouse);
        snakeLayer.addChild(smallmouse);
    }
    //LGlobal.stage.addEventListener(LKeyboardEvent.KEY_DOWN,keydown);
    //LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
    //LGlobal.stage.addEventListener(LKeyboardEvent.KEY_UP,keyup);
    //LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
    //LGlobal.stage.addEventListener(LKeyboardEvent.KEY_PRESS,keypress);
    //LEvent.addEventListener(window,LKeyboardEvent.KEY_PRESS,keypress);
    snakeLayer.addEventListener(LEvent.ENTER_FRAME, onframe);
}

function keydown(event){
    mouse = snakeLayer.getChildAt(2);
    console.log(" 0 mouse.x : " + mouse.x);
    if(event.keyCode == 37){

    }else
    if(event.keyCode == 38){

    }else
    if(event.keyCode == 39){
        if(mouse.x + mouse.width < snakeLayer.width - 20){
            mouse.x += 20;
        }
    }else
    if(event.keyCode == 40){

    }
}
function keyup(event){

}

function keypress(event){

}

function onframe(event){
        for(var i = 0;i<snakeLayer.numChildren;i++){
            mouse = snakeLayer.getChildAt(i);
            switch (mouse.direction){
                case 0 : mouse.x -= paintbrushSize; break;
                case 1 : mouse.y -= paintbrushSize; break;
                case 2 : mouse.x += paintbrushSize; break;
                case 3 : mouse.y += paintbrushSize; break;
                case 4 : mouse.x -= paintbrushSize; mouse.x -= paintbrushSize;
            }

            bitmapData.putPixels(new LRectangle(mouse.x - paintbrushSize*0.5, mouse.y - paintbrushSize*0.5, paintbrushSize, paintbrushSize), mouse.paintbrush);
        }
}

function newMouse(){

}
