"use strict";

//д.з 5 #7_2
function more(a, b) {

  let d = 0;
  let r = 0;

  for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    d += a[i];
  }

  for (let j = 0; j < a.length; j++) {
    // console.log(a[i]);
    r += b[j];
  }

  if (d > r) {
    return (a);
  } else {
    return (b);
  }
}
console.log(more([0,2], [-8,1]));