// var and let, const keywords - variables
// Target: Use let keyword to prepare local variables in a local block

var greenColor = "green"; // Global variable

// Local Block 1
{
  console.log("LocalBlock-1 - greenColor:", greenColor); // green

  let blueColor = "blue"; // Local variable
  console.log("LocalBlock-1 - blueColor:", blueColor); // blue
}

// Local Block 2
{
  console.log("LocalBlock-2 - greenColor:", greenColor); // green

  let blueColor = "blue"; // Local variable (separate from Block 1)
  console.log("LocalBlock-2 - blueColor:", blueColor); // blue
}

// Example 2
var signalName = "wi-fi"; // Global variable

{
  // Room 1 block
  console.log("Room1 - signalName:", signalName); // wi-fi

  let room1FanSpeed = "high"; // Local variable
  console.log("Room1 - FanSpeed:", room1FanSpeed); // high
}

  // net the following line would throw ReferenceError
  // because room2FanSpeed is not defined in this block
  // console.log("Room1 - room2FanSpeed:", room2Fan
