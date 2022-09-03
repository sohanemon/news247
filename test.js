const arr = [1, 4, 5, 21, 3];
const x = arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(x);
