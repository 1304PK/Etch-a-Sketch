const container = document.querySelector('.container')
const setGridButton = document.getElementById('set-grid-size')
const clearCanvas = document.getElementById('clear-canvas')
const colorValue = document.getElementById('color-selector')
const colorMethod = document.getElementById('custom-color')

colorMethod.addEventListener('click', () => {
    if (colorMethod.textContent === 'Use Custom Color') {
        colorMethod.textContent = 'Use Random Color'
    }
    else if (colorMethod.textContent === 'Use Random Color') {
        colorMethod.textContent = 'Use Custom Color'
    }
})

setGridButton.addEventListener('click', function () {
    const gridSize = prompt('Enter Grid Size(maximum 100)')

    if (gridSize > 0 && gridSize <= 100) {
        container.innerHTML = ''
        for (let i = 1; i <= gridSize; i++) {
            const horizontalSketchDiv = document.createElement('div')
            horizontalSketchDiv.classList.add('horizontalSketches')
            for (let j = 1; j <= gridSize; j++) {
                const verticalSketchDiv = document.createElement('div')
                verticalSketchDiv.classList.add('verticalSketches')
                verticalSketchDiv.addEventListener('mouseover', () => {

                    let color = ''
                    if (colorMethod.textContent === 'Use Custom Color') {
                        color = `hsl(${Math.random() * 360}, 100%, 50%)`
                    }
                    else {
                        color = colorValue.value
                    }
                    verticalSketchDiv.setAttribute('style', `transition: background-color 230ms;
                    background-color: ${color}`)
                })
                horizontalSketchDiv.append(verticalSketchDiv)
                clearCanvas.addEventListener('click', () => {
                    verticalSketchDiv.setAttribute('style', 'background-color: white')
                })
            }

            container.append(horizontalSketchDiv)
        }
    }
    else {
        alert('Enter a valid number between 1-100')
    }
})