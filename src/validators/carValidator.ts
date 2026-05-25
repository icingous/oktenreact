import Joi from 'joi';
import type { ICar } from '../models';

const validator = Joi.object<ICar>({
  brand: Joi.string()
    .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
    .min(1)
    .max(20)
    .required()
    .messages({
      'string.pattern.base': 'does not match the naming pattern',
      'string.min': 'must be at least 1 char long',
      'string.max': 'must be 20 chars long maximum',
      'string.empty': 'value is not optional',
    }),
  year: Joi.number()
    .min(1990)
    .max(new Date().getFullYear())
    .required()
    .messages({
      'number.min': 'year must be greater than or equal to 1990',
      'number.max': 'year must be less than or equal current year',
      'number.base': 'value is not optional',
    }),
  price: Joi.number().min(0).max(1000000).required().messages({
    'number.min': 'price must be non negative',
    'number.max': 'price must be less than 1000000',
    'number.base': 'value is not optional',
  }),
});

export default validator;
