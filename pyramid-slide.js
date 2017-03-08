
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    // console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    heightStr = document.getElementById("height").value;
    // text element for height from slider
    charStr = document.getElementById("char").value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // text element for height from slider
    heightStrValue = document.getElementById("height").value;
    heightValue = document.createTextNode(heightStrValue);

    // create a <p> element with the text inside
    heightElem = document.createElement("b");
    heightElem.appendChild(heightValue);
    //
    // // insert the paragraph as a child of the container <div>
    document.getElementById("number").appendChild(heightElem);



    // TODO 2
    // draw the pyramid with the given height
    drawPyramid(height,charStr);




}


// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function

document.getElementById("height")
    .addEventListener("input", determineHeightAndThenDrawPyramid);

// makes the pyramid render upon initial load of page
document.getElementById("height")
    .addEventListener("input", determineHeightAndThenDrawPyramid());

//  makes the pyramid render when brick symbol is changed or selected
document.getElementById("char")
    .addEventListener("input", determineHeightAndThenDrawPyramid);

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height,char) {

     // TODO 4
     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML = "";
     heightStrValue = document.getElementById("height").value;
     document.getElementById("number").innerHTML = heightStrValue;

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\xa0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += char;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);


    }
}
