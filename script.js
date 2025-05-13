const container = document.querySelector('.container')

for (let i = 1; i <= 10; i++) {
    const horizontalSketchDiv = document.createElement('div')
    horizontalSketchDiv.classList.add('horizontalSketches')
    for (let j = 1; j <=10; j++){
        const verticalSketchDiv = document.createElement('div')
        verticalSketchDiv.classList.add('verticalSketches')
        horizontalSketchDiv.appendChild(verticalSketchDiv)
    }
    container.appendChild(horizontalSketchDiv)
}