import { DataTypes } from 'sequelize';
import { ProductsAttributes } from '../types';
import sequelize from '../db/connection';

const Product = sequelize.define<ProductsAttributes>(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    inStock: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: true },
);

export default Product;
