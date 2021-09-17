const promises = () => {
  const firstPromise = new Promise((resolve, reject) => {
    const array = [];

    for (let i = 0; i <= 10; i++) {
      array.push(Math.floor(Math.random() * 50) + 1);
    }

    const sum = array
      .map(number => number * number)
      .reduce((sum, number) => sum + number);


    if (sum < 8000) {
      resolve();
    } else {
      reject();
    }
  });

  firstPromise
    .then(() => console.log('Promessa resolvida!'))
    .catch(() => console.log('Promessa rejeitada!'));
};

promises();