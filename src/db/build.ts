import { log } from 'console';
import sequelize from './connection';

import {
  Product,
} from '../models';
import { products } from './fakeData';

const buildDB = async () => {
  log('Building database...');
  await sequelize.sync({ force: true });
  log('Database built');
  await Product.sync({ force: true });
  log('Seeding database...');
  await Product.bulkCreate(products);

  log('Seeding complete');

  if (process.env.BUILD) {
    process.exit();
  }
};
if (process.env.BUILD) {
  buildDB();
}
export default buildDB;
