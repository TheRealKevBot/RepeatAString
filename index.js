// Repeat a given string str (first argument) for num times (second argument). 
// Return no can do if num is not a positive number. 

// function repeatStringNumTimes(str, num) {
//     if (num >= 0) {
//         return str.repeat(num)
//     } else {
//         return "No can do"
//     }
// }

// For the purpose of this challenge, do not use the built-in .repeat() method. 

function repeatStringNumTimes(str, num) {
    if (num >= 0) {
        let count = 1
        let numArray = []
        while (count <= num) {
            numArray.push(str)
            count ++
        }
        str = numArray.join('')
        return str
    } else {
        return "No can do"
    }
}
  
  console.log(repeatStringNumTimes("abc", 3));
  console.log(repeatStringNumTimes("abc", -3));
  console.log(repeatStringNumTimes("abc", 4));
  console.log(repeatStringNumTimes("abc", 1));
  console.log(repeatStringNumTimes("*", 8));
  console.log(repeatStringNumTimes("abc", 200));
  console.log(repeatStringNumTimes("abc", 50));
  console.log(repeatStringNumTimes("abc", 489));
  console.log(repeatStringNumTimes("abc", 1000));
  console.log(repeatStringNumTimes("abc", 360));