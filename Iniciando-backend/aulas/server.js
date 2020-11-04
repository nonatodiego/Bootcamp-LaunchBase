const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', function (req, res) {
  const about = {
    avatar_url:
      'https://pbs.twimg.com/profile_images/2833439682/3d44e6de40db4c108bfef35a5d0fec8f.jpeg',
    name: 'Will Smith',
    role: 'Ator de Cinema - Hollywood',
    description:
      'Ator americano, renomado e ganhador de diversos prêmios internacionais. Participou de filmes para todos os    internacionais',
    links: [
      { name: 'Instagram', url: 'https://www.instagram.com/willsmith' },
      { name: 'Twitter', url: 'https://twitter.com/willsmithofici' },
      { name: 'Facebook', url: 'https://facebook.com/willsmithofici' },
    ],
  };

  return res.render('about', { about });
});

server.get('/vlogs', function (req, res) {
  return res.render('vlogs', { items: videos });
});

server.get('/video', function (req, res) {
  const id = req.query.id;

  const video = videos.find(function (video) {
    return video.id == id;
  });

  if (!video) {
    return res.send('video not found!');
  }

  return res.render('video', { item: video });

  res.send(id);
});

server.listen(5000, function () {
  console.log('server is running');
});
