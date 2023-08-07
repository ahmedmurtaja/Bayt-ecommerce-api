import { Product } from '../models';
import { IGetProducts } from '../types';

const getProducts = async ({ page, category, sort }:IGetProducts) => {
  const products = await Product.findAll({
    where: {
      category,
    },
    order: [
      ['id', sort],
    ],
    limit: 10,
    offset: (page - 1) * 10,
  });
  return products;
};

export default getProducts;
