let gridSize = 16;

grid = document.querySelector("#grid")

let mouseDown = false
grid.addEventListener('click', 
() => {
    if (!mouseDown) {
        mouseDown = true
        return
    }
    mouseDown = false
    return
})

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
    gridSquare.addEventListener('click', () => {
        gridSquare.style.backgroundColor = color; })
    row.appendChild(gridSquare)
}    
});

