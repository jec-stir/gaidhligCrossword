
const numberValues = [  ["b","b","b","b","b","b","b","b","A","O","n"], 
                        ["b","b","b","b","b","b","b","b","b","c","b"], 
                        ["b","b","b","b","b","b","N","b","b","h","b"],
                        ["b","b","b","b","s","e","a","c","h","d","b"],
                        ["b","b","b","b","b","b","o","b","b","b","b"],
                        ["b","b","b","b","C","ò","i","g","b","b","b"],
                        ["b","b","b","b","e","b","b","b","b","b","b"],
                        ["b","b","b","b","i","b","b","b","b","b","b"],
                        ["b","b","S","b","t","r","ì","b","b","b","b"],
                        ["D","e","i","c","h","b","b","b","b","b","b"],
                        ["h","b","à","b","i","b","b","b","b","b","b"],
                        ["à","b","b","b","r","b","b","b","b","b","b"]
                        ];

function createFrameBoxes(values){
    var indexNumber = 0;
    const table = document.createElement("table");
    var squareColour = "";

    values.forEach(item =>{
        const row = document.createElement("tr");
        Object.values(item).forEach(value =>{
            if(value != "b"){
                squareColour = "w";
            } else{
                squareColour = "b"
            }
            const cell = document.createElement("td");
            cell.classList.add(squareColour);
            if(value == value.toUpperCase()){
                indexNumber = indexNumber + 1;
                const clueIndex = document.createElement("span");
                clueIndex.textContent = indexNumber;
                cell.appendChild(clueIndex);
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    document.getElementById("demo").appendChild(table);
}

