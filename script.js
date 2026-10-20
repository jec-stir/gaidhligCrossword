//0-black
//1-white
var numbersValues = ["00000000111","00000000010", "0000001001", "00001111110", "000000010000", "00001111000", "00001000000", "00011100000", "00001000000", "11111000000", "10001000000", "10001000000"];
var current = null;

function createFrameBoxes(values){
    var boxes ="";
    for (let i = 0; i < values.length; i++){
        boxes+="<tr>";
        for (let j = 0; j < values[i].length; j++) {
            boxes+="<th onlick='myclick(this)' row='${i}' col='${j}' class='${values[i][j]}'></th>";
        }
        boxes+="</tr>";
    }
    document.getElementById("table").innerHTML=boxes;
}

createFrameBoxes(numbersValues);


function myclick(box){
    if(box.classList.contains("1")){
        var row=box.getAttribute("row");
        var col=box.getAttribute("col");

        if(current!=null){
            current.style.background="transparent"
        }

        current=box;

        current.style.background="green";
    }

    document.body.onkeyup=function(event){
        if(current!=null){
            
        }
    }
}