import express from 'express';
import cors from 'cors';

import CategoryController from './src/controllers/categories.controller';
import RestaurantController from './src/controllers/restaurants.controller';

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello, World!'));

CategoryController(app);
RestaurantController(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}!`);
});
