const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')

// drawing hair

const hair = {}
    hair.xStart = 300 
    hair.yStart = 150
    hair.xEnd = 95
    hair.yEnd = 150
    hair.xFirstPoint = hair.xStart + 60
    hair.yFirstPoint = hair.yStart + 330
    hair.xSecondPoint = hair.xEnd - 60
    hair.ySecondPoint = hair.yEnd + 330

context.beginPath()
context.moveTo(hair.xStart, hair.yStart) // coordonnées du départ de la courbe

context.bezierCurveTo( // courbes plus complexes

    hair.xFirstPoint, hair.yFirstPoint, //coordonnées du premier point vers lequel la courbe tend
    hair.xSecondPoint, hair.ySecondPoint, //coordonnées du deuxieme point vers lequel la courbe tend
    hair.xEnd, hair.yEnd // coordonées de la fin de la courbe
)

context.fillStyle = '#be4362'
context.closePath()
context.fill()

const backHair = {}
    backHair.xStart = 300 
    backHair.yStart = 200
    backHair.xEnd = 100
    backHair.yEnd = 200
    backHair.xFirstPoint = backHair.xStart + 50
    backHair.yFirstPoint = backHair.yStart - 220
    backHair.xSecondPoint = backHair.xEnd - 50
    backHair.ySecondPoint = backHair.yEnd - 220

context.beginPath()
context.moveTo(backHair.xStart, backHair.yStart) // coordonnées du départ de la courbe

context.bezierCurveTo( // courbes plus complexes

    backHair.xFirstPoint, backHair.yFirstPoint, //coordonnées du premier point vers lequel la courbe tend
    backHair.xSecondPoint, backHair.ySecondPoint, //coordonnées du deuxieme point vers lequel la courbe tend
    backHair.xEnd, backHair.yEnd // coordonées de la fin de la courbe
)

context.fillStyle = '#be4362'
context.closePath()
context.fill()

//drawing ears 

    //left ear

const leftEar = {}
    leftEar.xStart = 125
    leftEar.yStart = 150
    leftEar.xEnd = 135
    leftEar.yEnd = 190
    leftEar.xTensionPoint = leftEar.xStart - 25 
    leftEar.yTensionPoint = leftEar.yStart - 5 

context.beginPath()
context.moveTo(leftEar.xStart, leftEar.yStart)

context.quadraticCurveTo( //avec un seul point de tention
    leftEar.xTensionPoint, leftEar.yTensionPoint, //coordonées du point de tention
    leftEar.xEnd, leftEar.yEnd
)
context.fillStyle = '#CAA564'
context.fill()

//drawing face

const face = {}
    face.xStart = 270 
    face.yStart = 85
    face.xEnd = face.xStart - 140
    face.yEnd = face.yStart
    face.xFirstPoint = face.xStart + 45
    face.yFirstPoint = face.yStart + 230
    face.xSecondPoint = face.xEnd - 45
    face.ySecondPoint = face.yEnd + 230

context.beginPath()
context.moveTo(face.xStart, face.yStart)

context.bezierCurveTo( // courbes plus complexes

    face.xFirstPoint, face.yFirstPoint, //coordonnées du premier point vers lequel la courbe tend
    face.xSecondPoint, face.ySecondPoint, //coordonnées du deuxieme point vers lequel la courbe tend
    face.xEnd, face.yEnd // coordonées de la fin de la courbe
)

context.fillStyle = '#f8ca76'
context.fill()


//drawing fringe
    //left fringe

const leftFringe = {}
    leftFringe.xStart = 205 
    leftFringe.yStart = 70
    leftFringe.xEnd = leftFringe.xStart - 80
    leftFringe.yEnd = leftFringe.yStart
    leftFringe.xFirstPoint = leftFringe.xStart - 40
    leftFringe.yFirstPoint = leftFringe.yStart + 120
    leftFringe.xSecondPoint = leftFringe.xEnd - 30
    leftFringe.ySecondPoint = leftFringe.yEnd + 120

context.beginPath()
context.moveTo(leftFringe.xStart, leftFringe.yStart)

context.bezierCurveTo( // courbes plus complexes

    leftFringe.xFirstPoint, leftFringe.yFirstPoint, //coordonnées du premier point vers lequel la courbe tend
    leftFringe.xSecondPoint, leftFringe.ySecondPoint, //coordonnées du deuxieme point vers lequel la courbe tend
    leftFringe.xEnd, leftFringe.yEnd // coordonées de la fin de la courbe
)

context.fillStyle = '#be4362'
context.fill()

    //right fringe

const rightFringe = {}
    rightFringe.xStart = 200 
    rightFringe.yStart = 80
    rightFringe.xEnd = rightFringe.xStart + 70
    rightFringe.yEnd = rightFringe.yStart
    rightFringe.xFirstPoint = rightFringe.xStart + 20
    rightFringe.yFirstPoint = rightFringe.yStart + 130
    rightFringe.xSecondPoint = rightFringe.xEnd + 50
    rightFringe.ySecondPoint = rightFringe.yEnd + 170

context.beginPath()
context.moveTo(rightFringe.xStart, rightFringe.yStart)

context.bezierCurveTo( // courbes plus complexes

    rightFringe.xFirstPoint, rightFringe.yFirstPoint, //coordonnées du premier point vers lequel la courbe tend
    rightFringe.xSecondPoint, rightFringe.ySecondPoint, //coordonnées du deuxieme point vers lequel la courbe tend
    rightFringe.xEnd, rightFringe.yEnd // coordonées de la fin de la courbe
)

context.fillStyle = '#be4362'
context.fill()    


//drawing eyes
    //right eye
context.beginPath()
context.moveTo(225, 160)
context.arc(225, 160, 6, 0, Math.PI * 2, false) 
context.fillStyle = 'black'
context.fill()

    //left eye
context.beginPath()
context.moveTo(175, 160)
context.arc(175, 160, 6, 0, Math.PI * 2, false) 
context.fillStyle = 'black'
context.fill()

//drawing eyebrows
    //left eyebrow
context.beginPath()
context.moveTo(160, 140) // coordonnées du départ de la courbe

context.quadraticCurveTo( //avec un seul point de tention
    175, 130, //coordonées du point de tention
    190, 140
)
context.strokeStyle = 'black'
context.lineWidth = 3
context.lineCap = 'round'
context.stroke()

    //right eyebrow
context.beginPath()
context.moveTo(210, 140) // coordonnées du départ de la courbe

context.quadraticCurveTo( //avec un seul point de tention
    225, 130, //coordonées du point de tention
    240, 140
)
context.strokeStyle = 'black'
context.lineWidth = 3
context.lineCap = 'round'
context.stroke()

//draw nose

context.beginPath()
context.moveTo(200, 190)

context.bezierCurveTo( 
    215, 200, 
    185, 200, 
    200, 190 
)

context.fillStyle = '#be4362'
context.fill()

//draw mouth

let scaleRatio = 0.3

context.beginPath()
context.ellipse(200, 220, 20, 1, 0, 0, 2 * Math.PI, false);
context.stroke()