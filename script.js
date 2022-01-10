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
}
//remove rows from the grid
function removeRows() {
  grid.deleteRow(0)
}
//remove columns from the grid
function removeColumns() {
    for(let i = 0; i < row.length; i++){
        row[i].deleteCell(0)
    }
}
