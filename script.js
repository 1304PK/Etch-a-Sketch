const container = document.querySelector('.container')
const setGridButton = document.getElementById('set-grid-size')
let gridSize = 0
const clearCanvas = document.getElementById('clear-canvas')
const colorValue = document.getElementById('color-selector')
const colorMethod = document.getElementById('set-color-method')

console.log(colorMethod.offsetWidth)

colorMethod.addEventListener('click', () => {
    if (colorMethod.textContent === 'Use Random Color'){
        colorMethod.textContent = 'Use Black Color'
    }
    else if (colorMethod.textContent === 'Use Black Color'){
        colorMethod.textContent = 'Use Random Color'
    }
})

setGridButton.addEventListener('click', function() {
    gridSize = prompt('Enter Grid Size(maximum 100)')
    container.innerHTML = ''
    for (let i = 1; i <= gridSize; i++) {
        const horizontalSketchDiv = document.createElement('div')
        horizontalSketchDiv.classList.add('horizontalSketches')
        for (let j = 1; j <=gridSize; j++){
            const verticalSketchDiv = document.createElement('div')
            verticalSketchDiv.classList.add('verticalSketches')
            verticalSketchDiv.addEventListener('mouseover', () => {verticalSketchDiv.setAttribute('style', `transition: background-color 230ms;
                background-color: ${colorValue.value}`)
            })
            horizontalSketchDiv.append(verticalSketchDiv)
            clearCanvas.addEventListener('click', () => {
                verticalSketchDiv.setAttribute('style', 'background-color: white')
            })
        }
        
        
        container.append(horizontalSketchDiv)
    }
    
    
})



