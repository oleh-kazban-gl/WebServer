const express = require('express');
const path = require('path');
const hbs = require('hbs');

const requestLogger = require('./request-logger');

const app = express();
const publicContentPath = path.join(__dirname, '../public');
const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicContentPath));

app.get('', (req, res) => {
  requestLogger.logger(req);

  res.render('index', {
    header: 'Hello from HBS',
    title: 'Hello from HBS',
    navItems: [
      {
        text: 'Main',
        location: '/'
      },
      {
        text: 'About',
        location: '/about'
      },
    ],
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu vestibulum dolor. Duis placerat sodales semper. Ut in sem et eros volutpat convallis quis id arcu. Vestibulum euismod tortor tempus augue mattis bibendum. Duis ultrices justo sit amet lacus sagittis molestie. Etiam bibendum libero ut ullamcorper ullamcorper. Fusce ac sapien ac ipsum rhoncus auctor. Vestibulum nec hendrerit enim. Cras in turpis a felis malesuada facilisis malesuada eu turpis. Maecenas nec gravida leo. Donec vitae enim iaculis, accumsan lacus nec, sodales tortor. Donec in erat nunc. Phasellus laoreet mauris fringilla placerat accumsan. Suspendisse rutrum diam nulla, in sagittis nunc efficitur quis.',
      'Aliquam vel felis ut nisi feugiat malesuada. Sed pharetra erat vitae suscipit tincidunt. Sed molestie turpis quis pulvinar vehicula. Maecenas ex urna, rutrum ac est nec, cursus pharetra sem. Aliquam viverra semper est. Nam dignissim at velit sit amet imperdiet. Etiam dui arcu, sodales nec lorem vitae, ullamcorper ornare ex. Ut aliquet odio a risus pellentesque, vitae sagittis urna pretium.',
      'Proin consequat risus sit amet sapien efficitur tempor. Etiam ut ligula at leo dictum lacinia et ac justo. Donec vitae molestie lacus. Etiam ex lacus, rhoncus et suscipit at, sollicitudin ac justo. Curabitur imperdiet consectetur ipsum sed finibus. Maecenas congue, nulla id feugiat hendrerit, nibh urna fermentum ipsum, a consequat ipsum nunc aliquet nisi. Donec tristique risus non dolor lacinia, quis tempus nulla congue. Cras et ex non arcu rutrum auctor sit amet at sem. Nulla a tincidunt nisi. Vestibulum consectetur in arcu non hendrerit. Pellentesque volutpat posuere orci, eu euismod nulla vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eu urna eget odio venenatis vehicula. Fusce faucibus sem at purus efficitur, eget tincidunt lorem efficitur. Integer volutpat orci consequat pharetra lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      'Praesent eget vulputate velit. Donec eu diam massa. Aenean mollis dolor et tempor dignissim. Nam congue pretium sagittis. Integer at sapien tincidunt, elementum nulla non, dictum felis. Maecenas vitae orci porttitor libero posuere mollis at eget ipsum. Fusce volutpat ac erat malesuada scelerisque. Nunc vestibulum metus non dui blandit finibus. Fusce egestas ac enim molestie semper. Donec non rhoncus est, sed malesuada sem. Aenean non iaculis sapien. Pellentesque congue orci ut vehicula imperdiet. Donec posuere diam nec dolor scelerisque, non consectetur leo blandit. Vestibulum sit amet cursus erat, eu finibus massa.',
      'Cras rutrum ut ex eu posuere. Aenean nec metus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce egestas fringilla libero, in iaculis quam. Sed odio tortor, convallis sit amet pharetra non, porttitor vitae leo. Cras hendrerit iaculis massa. Nunc non magna nec sem viverra consectetur quis nec tellus. Sed vitae pulvinar turpis. Nunc rhoncus, ante ut vehicula vehicula, leo est efficitur orci, eu cursus elit libero nec quam. Etiam leo tellus, consectetur sit amet metus sed, dapibus accumsan erat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu vestibulum dolor. Duis placerat sodales semper. Ut in sem et eros volutpat convallis quis id arcu. Vestibulum euismod tortor tempus augue mattis bibendum. Duis ultrices justo sit amet lacus sagittis molestie. Etiam bibendum libero ut ullamcorper ullamcorper. Fusce ac sapien ac ipsum rhoncus auctor. Vestibulum nec hendrerit enim. Cras in turpis a felis malesuada facilisis malesuada eu turpis. Maecenas nec gravida leo. Donec vitae enim iaculis, accumsan lacus nec, sodales tortor. Donec in erat nunc. Phasellus laoreet mauris fringilla placerat accumsan. Suspendisse rutrum diam nulla, in sagittis nunc efficitur quis.',
      'Aliquam vel felis ut nisi feugiat malesuada. Sed pharetra erat vitae suscipit tincidunt. Sed molestie turpis quis pulvinar vehicula. Maecenas ex urna, rutrum ac est nec, cursus pharetra sem. Aliquam viverra semper est. Nam dignissim at velit sit amet imperdiet. Etiam dui arcu, sodales nec lorem vitae, ullamcorper ornare ex. Ut aliquet odio a risus pellentesque, vitae sagittis urna pretium.',
      'Proin consequat risus sit amet sapien efficitur tempor. Etiam ut ligula at leo dictum lacinia et ac justo. Donec vitae molestie lacus. Etiam ex lacus, rhoncus et suscipit at, sollicitudin ac justo. Curabitur imperdiet consectetur ipsum sed finibus. Maecenas congue, nulla id feugiat hendrerit, nibh urna fermentum ipsum, a consequat ipsum nunc aliquet nisi. Donec tristique risus non dolor lacinia, quis tempus nulla congue. Cras et ex non arcu rutrum auctor sit amet at sem. Nulla a tincidunt nisi. Vestibulum consectetur in arcu non hendrerit. Pellentesque volutpat posuere orci, eu euismod nulla vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eu urna eget odio venenatis vehicula. Fusce faucibus sem at purus efficitur, eget tincidunt lorem efficitur. Integer volutpat orci consequat pharetra lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      'Praesent eget vulputate velit. Donec eu diam massa. Aenean mollis dolor et tempor dignissim. Nam congue pretium sagittis. Integer at sapien tincidunt, elementum nulla non, dictum felis. Maecenas vitae orci porttitor libero posuere mollis at eget ipsum. Fusce volutpat ac erat malesuada scelerisque. Nunc vestibulum metus non dui blandit finibus. Fusce egestas ac enim molestie semper. Donec non rhoncus est, sed malesuada sem. Aenean non iaculis sapien. Pellentesque congue orci ut vehicula imperdiet. Donec posuere diam nec dolor scelerisque, non consectetur leo blandit. Vestibulum sit amet cursus erat, eu finibus massa.',
      'Cras rutrum ut ex eu posuere. Aenean nec metus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce egestas fringilla libero, in iaculis quam. Sed odio tortor, convallis sit amet pharetra non, porttitor vitae leo. Cras hendrerit iaculis massa. Nunc non magna nec sem viverra consectetur quis nec tellus. Sed vitae pulvinar turpis. Nunc rhoncus, ante ut vehicula vehicula, leo est efficitur orci, eu cursus elit libero nec quam. Etiam leo tellus, consectetur sit amet metus sed, dapibus accumsan erat.',
    ],
    footer: `Copyright: CyberiXUA: ${new Date().toLocaleString()}`,
  })
});

app.get('/about', (req, res) => {
  requestLogger.logger(req);

  res.render('index', {
    header: 'About',
    title: 'About',
    content: [
      'Some test about from HBS',
    ],
    footer: `Copyright: CyberiXUA: ${new Date().toLocaleString()}`,
  })
});

app.get('*', (req, res) => {
  requestLogger.logger(req);

  res.render('error', {
    title: 'Not found',
    error: 'The requested page was not found',
    code: 404,
    resource: req.originalUrl,
  })
});

app.listen(3000, () => {
  console.log('Server is up on 3000 port');
});