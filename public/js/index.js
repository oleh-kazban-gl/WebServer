console.log('Hi there from FE ');

fetch('http://localhost:3000/getweather?request=forecast&location=Kharkiv').then(response => {
  response.json().then(data => {
    console.log('data: ', data);
  })
})