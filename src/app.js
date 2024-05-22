const express = require("express");
const path = require("path");
const hbs = require("hbs");

const Weather = require("./utils/weather");

const app = express();
const publicContentPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const pageParts = {
  navItems: [
    {
      text: "Home",
      location: "/",
    },
    {
      text: "Weather",
      location: "/weather",
    },
    {
      text: "About",
      location: "/about",
    },
  ],
  footer: `Made by: CyberiXUA: ${new Date().toLocaleString()}`
}

app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicContentPath));

app.get("", (req, res) => {
  res.render("index", getRenderOptions("Weather", "Weather", "content", [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu vestibulum dolor. Duis placerat sodales semper. Ut in sem et eros volutpat convallis quis id arcu. Vestibulum euismod tortor tempus augue mattis bibendum. Duis ultrices justo sit amet lacus sagittis molestie. Etiam bibendum libero ut ullamcorper ullamcorper. Fusce ac sapien ac ipsum rhoncus auctor. Vestibulum nec hendrerit enim. Cras in turpis a felis malesuada facilisis malesuada eu turpis. Maecenas nec gravida leo. Donec vitae enim iaculis, accumsan lacus nec, sodales tortor. Donec in erat nunc. Phasellus laoreet mauris fringilla placerat accumsan. Suspendisse rutrum diam nulla, in sagittis nunc efficitur quis.",
    "Aliquam vel felis ut nisi feugiat malesuada. Sed pharetra erat vitae suscipit tincidunt. Sed molestie turpis quis pulvinar vehicula. Maecenas ex urna, rutrum ac est nec, cursus pharetra sem. Aliquam viverra semper est. Nam dignissim at velit sit amet imperdiet. Etiam dui arcu, sodales nec lorem vitae, ullamcorper ornare ex. Ut aliquet odio a risus pellentesque, vitae sagittis urna pretium.",
    "Proin consequat risus sit amet sapien efficitur tempor. Etiam ut ligula at leo dictum lacinia et ac justo. Donec vitae molestie lacus. Etiam ex lacus, rhoncus et suscipit at, sollicitudin ac justo. Curabitur imperdiet consectetur ipsum sed finibus. Maecenas congue, nulla id feugiat hendrerit, nibh urna fermentum ipsum, a consequat ipsum nunc aliquet nisi. Donec tristique risus non dolor lacinia, quis tempus nulla congue. Cras et ex non arcu rutrum auctor sit amet at sem. Nulla a tincidunt nisi. Vestibulum consectetur in arcu non hendrerit. Pellentesque volutpat posuere orci, eu euismod nulla vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eu urna eget odio venenatis vehicula. Fusce faucibus sem at purus efficitur, eget tincidunt lorem efficitur. Integer volutpat orci consequat pharetra lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "Praesent eget vulputate velit. Donec eu diam massa. Aenean mollis dolor et tempor dignissim. Nam congue pretium sagittis. Integer at sapien tincidunt, elementum nulla non, dictum felis. Maecenas vitae orci porttitor libero posuere mollis at eget ipsum. Fusce volutpat ac erat malesuada scelerisque. Nunc vestibulum metus non dui blandit finibus. Fusce egestas ac enim molestie semper. Donec non rhoncus est, sed malesuada sem. Aenean non iaculis sapien. Pellentesque congue orci ut vehicula imperdiet. Donec posuere diam nec dolor scelerisque, non consectetur leo blandit. Vestibulum sit amet cursus erat, eu finibus massa.",
    "Cras rutrum ut ex eu posuere. Aenean nec metus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce egestas fringilla libero, in iaculis quam. Sed odio tortor, convallis sit amet pharetra non, porttitor vitae leo. Cras hendrerit iaculis massa. Nunc non magna nec sem viverra consectetur quis nec tellus. Sed vitae pulvinar turpis. Nunc rhoncus, ante ut vehicula vehicula, leo est efficitur orci, eu cursus elit libero nec quam. Etiam leo tellus, consectetur sit amet metus sed, dapibus accumsan erat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu vestibulum dolor. Duis placerat sodales semper. Ut in sem et eros volutpat convallis quis id arcu. Vestibulum euismod tortor tempus augue mattis bibendum. Duis ultrices justo sit amet lacus sagittis molestie. Etiam bibendum libero ut ullamcorper ullamcorper. Fusce ac sapien ac ipsum rhoncus auctor. Vestibulum nec hendrerit enim. Cras in turpis a felis malesuada facilisis malesuada eu turpis. Maecenas nec gravida leo. Donec vitae enim iaculis, accumsan lacus nec, sodales tortor. Donec in erat nunc. Phasellus laoreet mauris fringilla placerat accumsan. Suspendisse rutrum diam nulla, in sagittis nunc efficitur quis.",
    "Aliquam vel felis ut nisi feugiat malesuada. Sed pharetra erat vitae suscipit tincidunt. Sed molestie turpis quis pulvinar vehicula. Maecenas ex urna, rutrum ac est nec, cursus pharetra sem. Aliquam viverra semper est. Nam dignissim at velit sit amet imperdiet. Etiam dui arcu, sodales nec lorem vitae, ullamcorper ornare ex. Ut aliquet odio a risus pellentesque, vitae sagittis urna pretium.",
    "Proin consequat risus sit amet sapien efficitur tempor. Etiam ut ligula at leo dictum lacinia et ac justo. Donec vitae molestie lacus. Etiam ex lacus, rhoncus et suscipit at, sollicitudin ac justo. Curabitur imperdiet consectetur ipsum sed finibus. Maecenas congue, nulla id feugiat hendrerit, nibh urna fermentum ipsum, a consequat ipsum nunc aliquet nisi. Donec tristique risus non dolor lacinia, quis tempus nulla congue. Cras et ex non arcu rutrum auctor sit amet at sem. Nulla a tincidunt nisi. Vestibulum consectetur in arcu non hendrerit. Pellentesque volutpat posuere orci, eu euismod nulla vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eu urna eget odio venenatis vehicula. Fusce faucibus sem at purus efficitur, eget tincidunt lorem efficitur. Integer volutpat orci consequat pharetra lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "Praesent eget vulputate velit. Donec eu diam massa. Aenean mollis dolor et tempor dignissim. Nam congue pretium sagittis. Integer at sapien tincidunt, elementum nulla non, dictum felis. Maecenas vitae orci porttitor libero posuere mollis at eget ipsum. Fusce volutpat ac erat malesuada scelerisque. Nunc vestibulum metus non dui blandit finibus. Fusce egestas ac enim molestie semper. Donec non rhoncus est, sed malesuada sem. Aenean non iaculis sapien. Pellentesque congue orci ut vehicula imperdiet. Donec posuere diam nec dolor scelerisque, non consectetur leo blandit. Vestibulum sit amet cursus erat, eu finibus massa.",
    "Cras rutrum ut ex eu posuere. Aenean nec metus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce egestas fringilla libero, in iaculis quam. Sed odio tortor, convallis sit amet pharetra non, porttitor vitae leo. Cras hendrerit iaculis massa. Nunc non magna nec sem viverra consectetur quis nec tellus. Sed vitae pulvinar turpis. Nunc rhoncus, ante ut vehicula vehicula, leo est efficitur orci, eu cursus elit libero nec quam. Etiam leo tellus, consectetur sit amet metus sed, dapibus accumsan erat.",
  ]));
});

app.get("/about", (req, res) => {
  res.render("index", getRenderOptions("About", "About", "about", ["Here is the WebServer for the Weather app made by me"]));
});

app.get("/weather", (req, res) => {
  const { query } = req;
  const { request, location } = query;

  if (!location) {
    res.render("index", getRenderErrorOptions("Error", "Error", 400, "The weather location should be provided"));
  } else if (!request) {
    res.render("index", getRenderErrorOptions("Error", "Error", 400, "The weather request type should be provided"));
  } else {
    Weather.getWeather(request, location, (response, error) => {
      if (error) {
        res.render("index", getRenderErrorOptions("Error", "Error", error.code, JSON.stringify(error)));
      } else {
        res.render("index", getRenderOptions("Weather", "Weather", "content", parseWeatherResponse(response)));
      }
    });
  }
});

app.get("/getweather", (req, res) => {
  const { query } = req;
  const { request, location } = query;

  if (!location) {
    res.render("index", getRenderErrorOptions("Error", "Error", 400, "The weather location should be provided"));
  } else if (!request) {
    res.render("index", getRenderErrorOptions("Error", "Error", 400, "The weather request type should be provided"));
  } else {
    Weather.getWeather(request, location, (response, error) => {
      if (error) {
        res.send(getRenderErrorOptions("Error", "Error", error.code, JSON.stringify(error)));
      } else {
        res.send(getRenderOptions("Weather", "Weather", "content", parseWeatherResponse(response)));
      }
    });
  }
});

app.get("*", (req, res) => {
  res.render("index", getRenderErrorOptions("Error", "Not found", 404, "The requested page was not found"));
});

app.listen(3000, () => {
  console.log("Server is up on 3000 port");
});

const getRenderOptions = (header, title, type, content) => ({
  header, title, navItems: pageParts.navItems, type, content, footer: pageParts.footer
})
const getRenderErrorOptions = (header, title, code, error) => ({
  header, title, navItems: pageParts.navItems, type: "error", code, error, footer: pageParts.footer
})
const parseWeatherResponse = (response) => {
  const { request, location, current, forecast } = response;
  const {name, country, region, timezone_id, localtime} = location;
  const {observation_time, temperature, weather_descriptions, wind_speed, wind_degree, wind_dir, pressure, humidity, cloudcover, feelslike, uv_index} = current;

  console.log('Response: ', response);

  return [
    `City: ${name}, country: ${country}, region: ${region}, time zone: ${timezone_id}, local time: ${localtime}`,
    `Observation time: ${observation_time}`,
    `Temperature: ${temperature}, feels like: ${feelslike}`,
    `Weather: ${weather_descriptions[0]}`,
    `Wind speed: ${wind_speed}, direction: ${wind_dir}`,
    `Pressure: ${pressure}`,
    `Humidity: ${humidity}`,
    `UV Index: ${uv_index}`
  ];
}
