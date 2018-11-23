const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')

/* Resize */
const sizes = { width: 800, height: 600 }

const resize = () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    $canvas.width = sizes.width
    $canvas.height = sizes.height

    draw()
}
window.addEventListener('resize', resize)
resize()

// drawing hair

function draw()
{
    const hair = {}
    hair.xStart = sizes.width / 2 + 75 
    hair.yStart = sizes.height / 2
    hair.xEnd = sizes.width / 2 - 150
    hair.yEnd = hair.yStart
    hair.xFirstPoint = hair.xStart + 60
    hair.yFirstPoint = hair.yStart + 330
    hair.xSecondPoint = hair.xEnd - 60
    hair.ySecondPoint = hair.yEnd + 330

    context.beginPath()
    context.moveTo(hair.xStart, hair.yStart)

    context.bezierCurveTo(

        hair.xFirstPoint, hair.yFirstPoint, 
        hair.xSecondPoint, hair.ySecondPoint, 
        hair.xEnd, hair.yEnd 
    )

    context.fillStyle = '#be4362'
    context.closePath()
    context.fill()

    const backHair = {}
        backHair.xStart = sizes.width / 2 + 75 
        backHair.yStart = sizes.height / 2 + 1
        backHair.xEnd = sizes.width / 2 - 150
        backHair.yEnd = backHair.yStart
        backHair.xFirstPoint = backHair.xStart + 50
        backHair.yFirstPoint = backHair.yStart - 220
        backHair.xSecondPoint = backHair.xEnd - 50
        backHair.ySecondPoint = backHair.yEnd - 220

    context.beginPath()
    context.moveTo(backHair.xStart, backHair.yStart) 

    context.bezierCurveTo( 
        backHair.xFirstPoint, backHair.yFirstPoint, 
        backHair.xSecondPoint, backHair.ySecondPoint, 
        backHair.xEnd, backHair.yEnd 
    )

    context.fillStyle = '#be4362'
    context.closePath()
    context.fill()

    //drawing ears 

        //left ear

    const leftEar = {}
        leftEar.xStart = sizes.width / 2 - 115
        leftEar.yStart = sizes.height / 2 - 10
        leftEar.xEnd = leftEar.xStart + 10
        leftEar.yEnd = leftEar.yStart + 40
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
        face.xStart = sizes.width / 2 + 30 
        face.yStart = sizes.height / 2 - 90
        face.xEnd = face.xStart - 140
        face.yEnd = face.yStart
        face.xFirstPoint = face.xStart + 45
        face.yFirstPoint = face.yStart + 230
        face.xSecondPoint = face.xEnd - 45
        face.ySecondPoint = face.yEnd + 230

    context.beginPath()
    context.moveTo(face.xStart, face.yStart)

    context.bezierCurveTo(

        face.xFirstPoint, face.yFirstPoint, 
        face.xSecondPoint, face.ySecondPoint, 
        face.xEnd, face.yEnd 
    )

    context.fillStyle = '#f8ca76'
    context.fill()


    //drawing fringe
        //left fringe

    const leftFringe = {}
        leftFringe.xStart = sizes.width / 2 - 40
        leftFringe.yStart = sizes.height / 2 - 95
        leftFringe.xEnd = leftFringe.xStart - 80
        leftFringe.yEnd = leftFringe.yStart
        leftFringe.xFirstPoint = leftFringe.xStart - 40
        leftFringe.yFirstPoint = leftFringe.yStart + 120
        leftFringe.xSecondPoint = leftFringe.xEnd - 30
        leftFringe.ySecondPoint = leftFringe.yEnd + 120

    context.beginPath()
    context.moveTo(leftFringe.xStart, leftFringe.yStart)

    context.bezierCurveTo( 

        leftFringe.xFirstPoint, leftFringe.yFirstPoint, 
        leftFringe.xSecondPoint, leftFringe.ySecondPoint, 
        leftFringe.xEnd, leftFringe.yEnd 
    )

    context.fillStyle = '#be4362'
    context.fill()

        //right fringe

    const rightFringe = {}
        rightFringe.xStart = sizes.width / 2 - 30
        rightFringe.yStart = sizes.height / 2 - 95
        rightFringe.xEnd = rightFringe.xStart + 70
        rightFringe.yEnd = rightFringe.yStart
        rightFringe.xFirstPoint = rightFringe.xStart + 20
        rightFringe.yFirstPoint = rightFringe.yStart + 130
        rightFringe.xSecondPoint = rightFringe.xEnd + 50
        rightFringe.ySecondPoint = rightFringe.yEnd + 170

    context.beginPath()
    context.moveTo(rightFringe.xStart, rightFringe.yStart)

    context.bezierCurveTo( 
        rightFringe.xFirstPoint, rightFringe.yFirstPoint, 
        rightFringe.xSecondPoint, rightFringe.ySecondPoint, 
        rightFringe.xEnd, rightFringe.yEnd 
    )

    context.fillStyle = '#be4362'
    context.fill()    


    //drawing eyes
        //right eye
    context.beginPath()
    context.moveTo(sizes.width / 2 - 10, sizes.height / 2)
    context.arc(sizes.width / 2 - 10, sizes.height / 2, 6, 0, Math.PI * 2, false) 
    context.fillStyle = 'black'
    context.fill()

        //left eye
    context.beginPath()
    context.moveTo(sizes.width / 2 - 70, sizes.height / 2)
    context.arc(sizes.width / 2 - 70, sizes.height / 2, 6, 0, Math.PI * 2, false) 
    context.fillStyle = 'black'
    context.fill()

    //drawing eyebrows
        //left eyebrow
    const leftEyebrow = {}
        leftEyebrow.xStart = sizes.width / 2 - 25
        leftEyebrow.yStart = sizes.height / 2 - 30
        leftEyebrow.xEnd = leftEyebrow.xStart + 30
        leftEyebrow.yEnd = leftEyebrow.yStart 
        leftEyebrow.xTensionPoint = leftEyebrow.xStart + 15
        leftEyebrow.yTensionPoint = leftEyebrow.yStart - 10

    context.beginPath()
    context.moveTo(leftEyebrow.xStart, leftEyebrow.yStart) 

    context.quadraticCurveTo( 
        leftEyebrow.xTensionPoint, leftEyebrow.yTensionPoint, 
        leftEyebrow.xEnd, leftEyebrow.yEnd
    )
    context.strokeStyle = 'black'
    context.lineWidth = 3
    context.lineCap = 'round'
    context.stroke()

        //right eyebrow
    const rightEyebrow = {}
        rightEyebrow.xStart = sizes.width / 2 - 85
        rightEyebrow.yStart = sizes.height / 2 - 30
        rightEyebrow.xEnd = rightEyebrow.xStart + 30
        rightEyebrow.yEnd = rightEyebrow.yStart 
        rightEyebrow.xTensionPoint = rightEyebrow.xStart + 15
        rightEyebrow.yTensionPoint = rightEyebrow.yStart - 10

    context.beginPath()
    context.moveTo(rightEyebrow.xStart, rightEyebrow.yStart) 

    context.quadraticCurveTo( 
        rightEyebrow.xTensionPoint, rightEyebrow.yTensionPoint, 
        rightEyebrow.xEnd, rightEyebrow.yEnd
    )
    context.strokeStyle = 'black'
    context.lineWidth = 3
    context.lineCap = 'round'
    context.stroke()

    //draw nose

    const nose = {}
        nose.xStart = sizes.width / 2 - 40
        nose.yStart = sizes.height / 2 + 20
        nose.xEnd = nose.xStart 
        nose.yEnd = nose.yStart
        nose.xFirstPoint = nose.xStart + 15
        nose.yFirstPoint = nose.yStart + 15
        nose.xSecondPoint = nose.xEnd - 15
        nose.ySecondPoint = nose.yEnd + 15

    context.beginPath()
    context.moveTo(nose.xStart, nose.yStart)

    context.bezierCurveTo( 
        nose.xFirstPoint, nose.yFirstPoint, 
        nose.xSecondPoint, nose.ySecondPoint, 
        nose.xEnd, nose.yEnd 
    )

    context.fillStyle = '#be4362'
    context.fill()

    //draw mouth

    let scaleRatio = 0.3

    context.beginPath()
    context.ellipse(sizes.width / 2 - 40, sizes.height / 2 + 50, 20, 1, 0, 0, 2 * Math.PI, false);
    context.stroke()
}
