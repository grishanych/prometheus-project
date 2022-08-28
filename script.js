fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });