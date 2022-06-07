let gridSize = 16;

grid = document.querySelector("#grid")

let mouseDown = false
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}
function createGrid(gridSize){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        grid.appendChild(row)
    }

    rows = document.querySelectorAll(".row")

    let color = "red"

    rows.forEach(row => {
    for (let i = 0; i < gridSize; i++){
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('gridSquare')
        gridSquare.addEventListener('mouseover', () => {
            if (!mouseDown) return;
            gridSquare.style.backgroundColor = color
            return
        })
        gridSquare.addEventListener('mousedown', () => {
            gridSquare.style.backgroundColor = color
        })
        row.appendChild(gridSquare)
    }    
    });
}

createGrid(gridSize)

let slider = document.querySelector(".slider .slider")
let output = document.querySelector(".output")
output.innerText = `Grid Dimensions: ${slider.value}x${slider.value}`
slider.oninput = () => {
    output.innerText = `Grid Dimensions: ${slider.value}x${slider.value}`
    createGrid(slider.value)
}