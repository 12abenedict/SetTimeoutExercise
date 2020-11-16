// 1a
setTimeout(() => {
  // 1b
  const first = document.querySelector("#first");
  // 1c
  const p1 = document.createElement("p");
  // 1d
  p1.innerText = "Hi";
  // 1e
  first.append(p1);
}, 1000);

// 2a
setTimeout(() => {
  // 2b
  const nesting = document.querySelector("#nesting");
  // 2c
  const p2 = document.createElement("p");
  // 2d
  p2.innerText = "Outer";
  // 2e
  nesting.append(p2);
  // 2f
  setTimeout(() => {
    // 2g
    const p3 = document.createElement("p");
    // 2h
    p3.innerText = "Inner";
    nesting.append(p3);
    // 2i
  }, 1000);
}, 2000);

// BONUS
// 3a
const count = document.querySelector("#count");
// 3b
const num = document.createElement("h1");
// 3c
count.append(num);
num.innerText = 3;
setTimeout(() => {
  num.innerText--;
  setTimeout(() => {
    num.innerText--;
    setTimeout(() => {
      // num.innerText--;
      const body = document.querySelector('body');
      body.classList.add('background');
      // OR
      // document.querySelector('body').classList.add('background');
    }, 1000);
  }, 1000);
}, 1000);

/*
//OLD BONUS
// 3a
const count = document.querySelector("#count");
// 3b
const num = document.createElement("h1");
// 3c
for (i = 10; i >= 0; i--) {
    (function(i){
  setTimeout(() => {
    num.innerText = `${i}`;
    count.append(num);
  }, 1000*(i-1));
})(i);
}
*/
