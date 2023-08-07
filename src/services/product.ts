import { Op } from 'sequelize';
import { Product } from '../models';
import { IGetProducts } from '../types';

const getProducts = async ({ page, category, sort }:IGetProducts) => {
  const totalProductsCount = await Product.count();
  const whereCondition = category === 'all' ? {} : {
    category: {
      [Op.iLike]: `${category}`,
    },
  };
  const sortBy = sort === 'name' ? 'name' : 'price';
  const sortCondition = sort === 'default' ? []
    : [`${sortBy}`];

  const products = await Product.findAndCountAll({
    where: whereCondition,
    order: [
      ...sortCondition,
    ],
    limit: 10,
    offset: (page - 1) * 10,
  });
  return { products, totalPages: Math.ceil(products.count / 10), totalProductsCount };
};
const getCatagories = async () => {
  const categories = await Product.findAll({
    attributes: ['category'],
    group: ['category'],
  });
  return categories.map((category) => category.category);
};
export { getProducts, getCatagories };
