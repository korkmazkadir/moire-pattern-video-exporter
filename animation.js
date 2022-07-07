
function Scene() {

    return {
        elements: [],
        isAnimationOn: false,
        interval: null
    };
}


function StationarySceneElement(svgElement) {
    return {
        element: svgElement,
        isStationary: true
    }
}

function MovingSceneElement(svgElement, xPos, yPos, forceX, forceY,) {
    return {
        element: svgElement,
        xPos: xPos,
        yPos: yPos,
        forceX: forceX,
        forceY: forceY,
        isStationary: false
    }
}


function SceneAddElement(scene, sceneElem) {
    scene.elements.push(sceneElem);
}

function SceneAnimate(scene) {
    if (scene.isAnimationOn) {
        return;
    }

    scene.isAnimationOn = true;
    scene.interval = setInterval(function () {

        for (var i = 0; i < scene.elements.length; i++) {

            const sceneElem = scene.elements[i];
            if (sceneElem.isStationary) {
                continue;
            }

            sceneElem.xPos = sceneElem.xPos + sceneElem.forceX;
            sceneElem.yPos = sceneElem.yPos + sceneElem.forceY;
            MoveElement(sceneElem, sceneElem.xPos , sceneElem.yPos);

            for (var j = i; j < scene.elements.length;) {
                const otherElem = scene.elements[j];
                if (IntersectRect(sceneElem, otherElem)){
                    forceX = -1 * forceX;
                }
            }
        }

    }, 0);
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
