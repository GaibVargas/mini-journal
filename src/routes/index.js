const routes = require('express').Router();

const { users, news } = require('../models');

routes.get('/', async(req, res) => {
  const data = await news.findAll({
    include: [{
      association: 'author'
    }]
  });

  const cleanData = data.map((data) => {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      author: data.author.name
    }
  });

  return res.render('home', { news: cleanData });
});

routes.get('/login', (req, res) => {
  return res.render('login');
});

routes.get('/news', (req, res) => {
  res.render('news');
});

routes.get('/register', (req, res) => {
  res.render('register');
});

routes.get('/logout', (req, res) => {
  req.session.loggedUser = false;

  res.redirect('/');
});

routes.get('/admin', (req, res) => {
  if(!req.session.loggedUser) return res.redirect('/');

  res.render('admin');
});

routes.get('/detail', async(req, res) => {
  const { id } = req.query;
  const searchedNew = await news.findByPk(id, {
    include: [{
      association: 'author'
    }]
  });

  const cleanSearchedNew =  {
    id: searchedNew.id,
    title: searchedNew.title,
    description: searchedNew.description,
    content: searchedNew.content,
    author: searchedNew.author.name
  }

  return res.render('detail', { new: cleanSearchedNew });
});

routes.post('/login', async(req, res) => {
  const { name, password } = req.body;

  const user = await users.findOne({ where: { name, password } });

  if(!user) {
    return res.send('<h1>User not found</h1>');
  }

  req.session.loggedUser = user.id;

  res.redirect('/admin');
});

routes.post('/register', async(req, res) => {
  const { name, password } = req.body;

  await users.create({ name, password });

  return res.redirect('/admin');
});

routes.post('/news', async(req, res) => {
  const { title, description, content } = req.body;
  const id_author = req.session.loggedUser;

  try {
    const user = await users.findByPk(id_author);
    if(!user) return res.render('<h1>User nor found</h1>');

    await news.create({
      title, description, content, id_author
    }, { 
      includes: [ users ] 
    });
  } catch (error) {
    return res.render('<h1>Unexpected error</h1>');
  }

  return res.redirect('/admin');
});

module.exports = routes;