import { Op } from 'sequelize';
import { Product } from '../models';
import { IGetProducts } from '../types';

const getProducts = async ({
  page, category, sort, order,
}: IGetProducts) => {
  const totalProductsCount = await Product.count();
  const whereCondition = category === 'all' ? {} : {
    category: {
      [Op.iLike]: `${category}`,
    },
  };

  const sortBy = sort === 'default' ? 'id' : sort;

  const products = await Product.findAndCountAll({
    where: whereCondition,
    order: [[sortBy, order]],
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
