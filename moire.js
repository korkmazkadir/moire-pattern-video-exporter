const SVGNS = "http://www.w3.org/2000/svg"

function Circle(radius){
    
    const circle = document.createElementNS(SVGNS, 'circle');
    circle.setAttributeNS(null, 'r', radius);
    return circle
}

function Rectangle(width, height){

    const rect = document.createElementNS(SVGNS, 'rect');
    rect.setAttributeNS(null, 'width', width);
    rect.setAttributeNS(null, 'height', height);
    return rect
}

function GrowingCircleSet( numberOfCircles, gap ){

    const circleSet = document.createElementNS(SVGNS, 'g');
    circleSet.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 0.5px;' );

    for(var i = 0; i < numberOfCircles ; i++){
        const circle = Circle(gap*i);
        circleSet.appendChild(circle);
    }
    return circleSet;
}

function GrowingRectangleSet( numberOfRectangles, gap ){

    const rectangleSet = document.createElementNS(SVGNS, 'g');
    rectangleSet.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 0.5px;' );
    
    const aspectRatio = 1920 / 1080;

    for(var i = 0; i < numberOfRectangles ; i++){
        const rect = Rectangle(gap*i*aspectRatio, gap*i);
        const offSet = gap*i / 2 * -1
        rect.setAttributeNS(null, 'transform', `translate(${offSet * aspectRatio},${offSet})`);
        rectangleSet.appendChild(rect);
    }

    return rectangleSet;
}


function Rectangle(width, height){
    const rect = document.createElementNS(SVGNS, 'rect');
    rect.setAttributeNS(null, 'width', width);
    rect.setAttributeNS(null, 'height', height);
    return rect;
}


function MoveElement(circleSet, xPos, yPos){

    //const sinTheta = yPos / Math.sqrt( Math.pow(xPos,2) +  Math.pow(yPos,2) )
    //const theta = Math.asin(sinTheta) * Math.PI;
    //console.log(theta);

    circleSet.setAttributeNS(null, 'transform', `translate(${xPos},${yPos})`);
}

// https://www.inkfood.com/collision-detection-with-svg/
function IntersectRect(r1, r2) {
    var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
    var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

    //CHECK IF THE TWO BOUNDING BOXES OVERLAP
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}



function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}