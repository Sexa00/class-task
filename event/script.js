function update () {
    console.log ("Event is fired");
    }
    
    // creating variables
    var x=10;
    var y =20;
    
    console.log(x*y)
    
    // creating function in js
    
    function sum (a,b) {
        return a+b;
    }
    console.log(sum(x,y));
    
    // assigning function to variable
    
    var mysum = sum;
    console.log(mysum)