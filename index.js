// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
]

function superbowlWin(record) {
  debugger
  let flop = record.find((arr) => arr.result === "W")
  console.log(flop)
  if (flop){
    console.log(flop.year)
    return flop.year}
  //else {
   // return "undefined"
 // }
 }
// @return [String] year, or undefined

	// try to find the game object where there was a win
		// .find()??
		// return the year
	// if not, ...
		// return undefined
    //ecord.find(superbowlWin)