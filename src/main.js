const a = 3;
const b = 5;
const c = 'asdsadsadadcfztr';

/* const defer = new Promise((resolve, reject) => {
  if (true) {
    resolve('Yeh, works here! :)');
  } else {
    reject(new Error('error'));
  }
});

defer.then((data) => {
  console.log(data);
  return 'foo';
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

const posts = fetch('https://wp.shouman.xyz/portfolios');
posts
  .then((data) => data.json())
  .then((data) => {
    /* throw new Error('Error, danger!'); */
    console.log(data);
  })
  .catch((err) => console.log(err));

function fn() {
  return (el) => el + 1;
}

fn();
function sum() {
  return a + b + c;
}

sum();
