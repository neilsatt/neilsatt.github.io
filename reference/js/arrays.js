
var names = ['ted', 'lisa', 'veronica', 'enrique']; 
var nameLength = names.length; 
console.log('length of original array: '+nameLength);

// Push
var pushReturn = names.push('alice');
console.log('Updated names array after push: '+names);
console.log('push return value: '+pushReturn);

console.log('-------------------------');

// Pop
var popReturn = names.pop(); 
console.log('Updated names array after pop: '+names);
console.log('pop return value: '+popReturn);

console.log('-------------------------');

// Unshift
var unshiftReturn = names.unshift('francis'); 
console.log('Updated names array after unshift: '+names);
console.log('unshift return value: '+unshiftReturn);

console.log('-------------------------');

// shift
var shiftReturn = names.shift(); 
console.log('Updated names array after shift: '+names);
console.log('shift return value: '+shiftReturn);

console.log('-------------------------');

// reverse - no return value
names.reverse(); 
console.log('Updated names array after reverse: '+names);

console.log('-------------------------');

// sort - no return value
names.sort(); 
console.log('Updated names array after sort: '+names);

console.log('-------------------------');

// splice 
console.log('Array before splice: '+names);
var spliceReturn = names.splice(1,2); 
console.log('Updated names array after splice: '+names);
console.log('splice return value: '+spliceReturn);

console.log('-------------------------');

// slice 
names = ['ted', 'lisa', 'veronica', 'enrique']; // reset the original array
console.log('Array before slice: '+names);
var sliceReturn = names.slice(2,4); 
console.log('slice returns a new array');
console.log('slice return value: '+sliceReturn);

console.log('-------------------------');

// concat 
console.log('Array before concat: '+names);
var newArray = ['bob', 'roddy', 'billy', 'stacy'];
var sliceReturn = names.concat(newArray);
console.log('Array after concat: '+sliceReturn);

console.log('-------------------------');

// join 
console.log('Array before join: '+names);
var joinReturn = names.join('*');
console.log('Array after join: '+joinReturn);

