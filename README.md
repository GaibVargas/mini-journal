<h1>mini-journal :newspaper:</h1>
<p>A mini-journal project, just to learn more about the <a href="#techs">techs</a></p>

<h2 id="techs">Technologies</h2>
<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://github.com/janl/mustache.js/">Mustache.js</a></li>
  <li><a href="http://expressjs.com/">Express.js</a></li>
  <li><a href="https://sequelize.org/master/">Sequelize</a></li>
  <li><a href="https://www.postgresql.org/">Postgres</a></li>
</ul>

<h2>Goals</h2>
<p>Learn a bit more node.js, express.js and mainly mustache.js, a template engine.</p>

<h2>Functionalities</h2>
<ul>
  <li>List all posts in the journal</li>
  <li>View a post in detail</li>
  <li>Create a new post with a registered journalist</li>
  <li>Register new journalists</li>
</ul>

<h2>Running it!</h2>
<p>To run in your pc follow the steps below</p>

<p>1. To clone the directory:</p>

```bat
git clone https://github.com/GaibVargas/mini-journal.git
```

<p>2. Install all dependecies:</p>

```bat
npm install
```

<p>3. Run migrations:</p>

```bat
npx sequelize db:migrate
```

<p>4. Run seeds:</p>

```bat
npx sequelize db:seed:all
```

<p>5. Ready, just start the server:</p>

```bat
npm run dev
```

<p>The server is running by default in <a href="http://localhost:3333">http://localhost:3333<a></p>
