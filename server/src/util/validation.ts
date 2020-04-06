import {
  object,
  ObjectSchema,
  string,
} from '@hapi/joi';

const schema: ObjectSchema = object({
  email: string()
    .email(),

  password: string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  firstName: string()
    .pattern(new RegExp('^[a-zA-Z]{2-100}')),

  lastName: string()
    .pattern(new RegExp('^[a-zA-Z]{2-100}')),
});

export default schema;
