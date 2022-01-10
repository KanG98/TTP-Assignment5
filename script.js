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

function updateCellIds(){
    for(let i = 0; i < grid.rows.length; i++){
        for(let j = 0; j < grid.rows[i].cells.length; j++){
            grid.rows[i].cells[j].id = "tr" + i + '-' + j
            grid.rows[i].cells[j].onclick = function(){
                let r = this.parentElement.rowIndex
                let c = this.cellIndex;
                console.log(this.id)
                fillColor(this.id, "red")
            }
        }
    }
}

function fillColor(id, color){
    let penColor = document.getElementById("color-select")
    color = penColor.value
    let cell = document.getElementById(id)
    cell.style.background = color
}