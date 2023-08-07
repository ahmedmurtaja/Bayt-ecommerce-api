import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'yup';
import { getProducts as getProductsService } from '../services';
import { getProductsSchema } from '../helpers/validation';
import { templateErrors } from '../helpers';

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, category, sort } = req.query;
    await getProductsSchema.validate(req.query);

    const { products, totalPages } = await getProductsService({
      page: Number(page),
      category: String(category),
      sort: String(sort),
    });

    res.status(200).json({
      status: 'success',
      data: {
        products,
        totalPages,
      },
    });
  } catch (err) {
    if (err instanceof ValidationError) {
      next(templateErrors.BAD_REQUEST(err.errors.join(', ')));
    }
    next(err);
  }
};

export default getProducts;
