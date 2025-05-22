//var and let , const keywords - variables 
// Target i want to prepare the local variables in the local block
//Ans use let keyword
var greenColor = "green";

  // console.log("%c")s

  //Local block1
{

  console.log("LocalBlock-1", greenColor); // green
  let blueColor = "blue";
  console.log("LocalBlock-1", bluecolor); // blue

}
 //Local Block 2 
 
{
  console.log("LocalBlock-1", greenColor); // green
  let blueColor = "blue";
  console.log("LocalBlock-1", bluecolor); // blue

}
 
 //Example 2

 var signalName = "wi-fi";

{
   //Let say room1
   console.log("signal :", signalName); // wifi
   
   let room1FanSpeed = "high";
   Console.log("FanSpeed :" , Room1FanSpeed); // high
   //console.log(FanSpeed :" , room2FanSpeed); // Reference Error : room 2
}