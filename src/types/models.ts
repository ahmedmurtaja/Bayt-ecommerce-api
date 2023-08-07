import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

interface ProductsAttributes
  extends Model<
  InferAttributes<ProductsAttributes>,
  InferCreationAttributes<ProductsAttributes>
  > {
  id: CreationOptional<number>;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: number;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export default ProductsAttributes;
