import { Op } from 'sequelize';
import { Product } from '../models';
import { IGetProducts } from '../types';

const getProducts = async ({ page, category, sort }:IGetProducts) => {
  const whereCondition = category === 'all' ? {} : {
    category: {
      [Op.iLike]: `${category}`,
    },
  };
  const products = await Product.findAndCountAll({
    where: whereCondition,
    order: [
      ['price', sort],
    ],

    limit: 10,
    offset: (page - 1) * 10,
  });
  return { products, totalPages: Math.ceil(products.count / 10) };
};

export default getProducts;
