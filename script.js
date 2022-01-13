let grid = document.getElementById("grid1")
let row = grid.rows
//add rows to the grid
function addRows(){
  if (row.length === 0) {
        let addRow = grid.insertRow()
        let cell = addRow.insertCell()
    } else {
        let addRow = grid.insertRow()
        for (let i = 0; i < row[0].cells.length; i++) {
            let cell = addRow.insertCell(i)
        }
    }
    updateCellIds();
}
//add columns to the grid
function addColumns() {
    if (row.length === 0) {
        addRows()
    } else {
        for (let i = 0; i < row.length; i++) {
            let cell = row[i].insertCell(0)
        }
    }
    updateCellIds()
}
//remove rows from the grid
function removeRows() {
  grid.deleteRow(0)
  updateCellIds()
}
//remove columns from the grid
function removeColumns() {
    for(let i = 0; i < row.length; i++){
        row[i].deleteCell(0)
    }
    updateCellIds()
}

// assign id to cells 
function updateCellIds(){
    for(let i = 0; i < grid.rows.length; i++){
        for(let j = 0; j < grid.rows[i].cells.length; j++){
            grid.rows[i].cells[j].id = "tr" + i + '-' + j
            grid.rows[i].cells[j].onclick = function(){
                fillColor(this.id)
            }
        }
    }
}

// get selected color from select tag
function getCurPenColor(){
    let penColor = document.getElementById("color-select")
    let color = penColor.value
    return color
}

// fill cell with selected color
function fillColor(id){
    let color = getCurPenColor()
    let cell = document.getElementById(id)
    cell.style.background = color
}

// fill all empty cells with selected color
function fillAllUncolored(){
    for(let i = 0; i < grid.rows.length; i++){
        for(let j = 0; j < grid.rows[i].cells.length; j++){
            let id =  "tr" + i + '-' + j
            let cell = document.getElementById(id)
            if(cell.style.background === ""){
                fillColor(id)
            } 
        }
    } 
}

// fill all cells with selected color
function fillAll(){
    for(let i = 0; i < grid.rows.length; i++){
        for(let j = 0; j < grid.rows[i].cells.length; j++){
            let id =  "tr" + i + '-' + j
            fillColor(id)
        }
    } 
}

//clear all cells/restore all cells to their original/initial color
function clearAll(){
    for(let i=0;i<row.length;i++){
        for(let j=0; j<row[i].cells.length;j++){
            row[i].cells[j].style.background = null;
        }
    }
}

//click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
let colored= false;
grid.addEventListener("mousedown", function () {
    colored =true; 
    console.log("DOWN")
})
grid.addEventListener("mouseup", function() {
    colored =false;
    console.log("UP")
})
grid.addEventListener("mousemove",function(e) {
    if(colored){
        let color = getCurPenColor()
        console.log("MOVE");
        e.target.style.background = color;
    }
    });




