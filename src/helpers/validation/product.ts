import * as Yup from 'yup';

const getProductsSchema = Yup.object().shape({
  sort: Yup.string().required().oneOf(['ASC', 'DESC']),
  page: Yup.number().required().min(1),
  category: Yup.string().required(),
});

export default getProductsSchema;
