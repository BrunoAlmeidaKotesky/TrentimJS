const specialChar = /[\s`~!@#~´º%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
const whiteSpace = / /g;
const uniCAccents = /[\u0300-\u036f]/g;

/**
 * @param text a string to be capitalized to CamelCase
 */
export function capitalizer(text: string) {
  return text.replace(/(?:^|\s)\S/g, function(a: string) {
    return a.toUpperCase();
  });
}

/**
 *
 * @param str a string value to be passed, it will capitalize the string to CamelCase,
 * remove all whitespaces, remove some special characters
 * and remove most of unicode accents
 */
export function strFormatter(str: string) {
  if (typeof str !== 'string') throw Error('The argument must be a string');
  else {
    return capitalizer(str)
      .replace(whiteSpace, '')
      .replace(specialChar, '')
      .normalize('NFD')
      .replace(uniCAccents, '');
  }
}
/**
 * 
 * @param obj Convert all the oject key names to CamelCase key name
 * @example const BaddObjArr = [{" _gross sa*le  ": 200, " data de separação": new Date()}];
 * Output: BaddObjArr = [{GrossSale: 200, DataDeSeparacao: Mon Jan 13 2020...}]

 */
export const objFormatter = (obj: object) => {
  if (
    obj === null ||
    (Object.getPrototypeOf(obj).constructor.name !== 'Array' &&
      Object.getPrototypeOf(obj).constructor.name !== 'Object')
  )
    return obj;
  return Object.keys(obj).reduce(
    (acc, key) => {
      //@ts-ignore
      acc[strFormatter(key)] = typeof obj[key] == 'string' ? obj[key].trim() : objFormatter(obj[key]);
      return acc;
    },
    Array.isArray(obj) ? [] : {},
  );
};
