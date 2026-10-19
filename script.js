//0-black
//1-white
var values = ["00000000111","00000000010", "0000001001", "00001111110", "000000010000", "00001111000", "00001000000", "00011100000", "00001000000", "11111000000", "10001000000", "10001000000"];

function createFrameBoxes(){
    var boxes ="";
    for (let i = 0; i < values.length; i++){
        boxes+="<tr>";
        for (let j = 0; j < values[i].length; j++) {
            if(values[i][j]=="0"){
                boxes+='<th onclick="myclick(this)", row=[$i], col=[$j], class="black"></th>';
            }
            else{
                boxes+='<th class="white"></th>';
            }
        }
        boxes+="</tr>";
    }
    document.getElementById("table").innerHTML=boxes;
}

createFrameBoxes();


function myclick(box){
    if(box.classList.contains("1")){
        var row=box.getAttribute("row");
        var col=box.getAttribute("col");

        box.style.background="green";
    }
}