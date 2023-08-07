import { Router } from 'express';
import { getCatagories, getProducts } from '../controllers';

const router = Router();

router.get('/', getProducts);
router.get('/categories', getCatagories);

export default router;
