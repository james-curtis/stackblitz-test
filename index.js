
Math.random().toString(16).substring(2); //14位 Math.random().toString(36).substring(2); //11位

var a = [1,2,3,7,8,9]; var b = [4,5,6]; var insertIndex = 3;
a.splice.apply(a, Array.concat(insertIndex, 0, b)); // a: 1,2,3,4,5,6,7,8,9
