var eventType = prompt("what type of event are you going to?");
var tempFahr = prompt ("what is the temp out side?");
var result = "";


if( eventType=== "casual" && tempFahr > 70){
  result= " Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear something comfy and no jacket. ";
  console.log(result);

} else if (eventType === "casual" && tempFahr <= 70 && eventType === "casual" && tempFahr >= 54 ){
  result= " Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear something comfy and a jacket. ";
  console.log(result);

} else if (eventType === "casual" && tempFahr < 54) {
result= " Since it is " + tempFahr + "  degrees and you are going to a " + eventType + "  event you should wear something comfy and a coat. ";
console.log(result);
}

if( eventType=== "semi formal" && tempFahr > 70){
result= " Since it is " + tempFahr + "  degrees and you are going to a " + eventType + " event you should wear a polo and no jacket. ";
console.log(result);

} else if (eventType === "semi formal" && tempFahr <= 70 && eventType === "semi formal" && tempFahr >= 54 ){
result= " Since it is " + tempFahr + " degrees and you are going to a " + eventType + " formal you should wear a polo and a jacket. ";
console.log(result);
} else if (eventType === "semi formal" && tempFahr < 54) {
  result= " Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a polo and a coat. ";
  console.log(result);
}
if( eventType=== "formal" && tempFahr > 70){
  result= " Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and no jacket. ";
console.log(result);

} else if (eventType === "formal" && tempFahr <= 70 && eventType === "formal" && tempFahr >= 54 ){
  result= " Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and a jacket. ";
  console.log(result);
} else if (eventType === "formal" && tempFahr < 54) {
  result= " Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and a coat. ";
  console.log(result);
}
