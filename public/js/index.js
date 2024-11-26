let locationInputId = 'location';
let forecastId = 'forecast';

const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

function watchForLocationChanges() {
  let location = document.getElementById(locationInputId);

  if (location) {
    location.addEventListener('input', onLocationChange);
  }
}

function onLocationChange(ev) {
  debounce(getForecast(this.value), 3000);
}

function getForecast(location) {
  let forecastPlaceholder = document.getElementById(forecastId);

  if (location.length < 3) {
    if (forecastPlaceholder) {
      forecastPlaceholder.textContent = 'Please enter at least 3 characters of your city';
    }

    return;
  }


  fetch(`http://localhost:3000/getweather?request=forecast&location=${location}`).then(response => {
    response.json().then(data => {
      console.log('data: ', data);

      if (forecastPlaceholder) {
        forecastPlaceholder.textContent = '';

        if (data.error) {
          forecastPlaceholder.textContent = data.error;
        } else if (data.content) {
          forecastPlaceholder.textContent = mergeResponseContent(data.content)
        }
      }
    })
  })
}

function mergeResponseContent(responseArr) {
 if (responseArr.length && Array.isArray(responseArr)){
    return responseArr.reduce((acc, curr) => {
      acc += `${curr}\n\r`

      return acc;
    }, '')
  } else {
    return ''
  }
}

watchForLocationChanges();

console.log('Hi there from FE ');
