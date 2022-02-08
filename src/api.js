async function getData(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
  });

  return await promise;
}

export default getData;
