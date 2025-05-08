const ASYNC_FUNC = async ()=>{
   await setTimeout(()=>{
        console.log('Async Done');
    },1000)
};

ASYNC_FUNC();
console.log('This runs Immediatley');

let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });
  myPromise
  .then(result => console.log(result))  // Runs if resolved
  .catch(error => console.log(error));  // Runs if rejected
