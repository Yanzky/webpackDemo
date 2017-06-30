 var firstName = 'zhy'
 var lastName = 'zhu'
 var year = 1992
 var fn = function (a, b) {
     return a + b
 }

 export {firstName, lastName, year, fn as fnc}
 
 let myset = new Set([1,2,3])
 console.log(myset)
 console.log([...myset])