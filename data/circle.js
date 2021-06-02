

var drawASCIICircle = radius => {
    // x^2 + y^2 = radius^2 draws a circle
    let circleString = '';
    const expectedValue = radius ** 2;
  
    // imagine a graph with the centre of a circle right on point (0, 0)
    for (let y = -radius; y <= radius; y++) {
      // y first, because we go across before we go down (inner loop runs more often)
      for (let x = -radius; x <= radius; x++) {
        const computedValue = x ** 2 + (y + radius) ** 2;
        // use radius to get a roughly single-thickness circle - double or halve this for corresponding results
        if ((Math.abs(computedValue ) <= radius)) {
          circleString += "*";
        } else {
          circleString += " ";
        }
      }
      circleString += ("\n");
    }
      return circleString
  };
  
  drawASCIICircle(10);
                       
  "                     
                       
                       
                       
                       
                       
                       
           ***         
          *****        
         *******       
         *******       
         *******       
          *****        
           ***         
                       
                       
                       
                       
                       
                       
                       
  "