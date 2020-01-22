import { NameConventions, ResultType } from '../models/types';
import { strFormatter } from './stringHelpers';

/**
 * 
 * @param obj Convert all the oject key names to PascalCase key name
 * @example const BaddObjArr = [{" _gross sa*le  ": 200, " data de separação": new Date()}];
 * Output: BaddObjArr = [{GrossSale: 200, DataDeSeparacao: Mon Jan 13 2020...}]

 */
export const objFormatter = (obj: object, nameConv?: NameConventions, extraChar?: RegExp) => {
  if (
    obj === null ||
    (Object.getPrototypeOf(obj).constructor.name !== 'Array' &&
      Object.getPrototypeOf(obj).constructor.name !== 'Object' &&
      Object.getPrototypeOf(obj).constructor.name !== 'Function')
  )
    return obj;
  if (Object.getPrototypeOf(obj).constructor.name === 'Function')
    Object.defineProperty(obj, 'name', { value: 'New Name' });

  if (nameConv !== undefined) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        acc[strFormatter(key, nameConv)] =
          typeof obj[key] == 'string' ? obj[key].trim() : objFormatter(obj[key], nameConv, extraChar! ?? undefined);
        return acc;
      },
      Array.isArray(obj) ? [] : {},
    );
  } else {
    return Object.keys(obj).reduce(
      (acc, key) => {
        acc[strFormatter(key)] = typeof obj[key] == 'string' ? obj[key].trim() : objFormatter(obj[key]);
        return acc;
      },
      Array.isArray(obj) ? [] : {},
    );
  }
};
const initialValue = {} as const;
export function convertArrayToObject<T, R>(array: T[], key: keyof T): ResultType<R> {
  let reducedArry = array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key as string | number | symbol]]: item,
    };
  }, initialValue);
  return reducedArry;
}
