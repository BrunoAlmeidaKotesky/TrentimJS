import { NameConventions } from '../models/types';
const specialChar = /[\s`~!@#~´º%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
const whiteSpace = / /g;
const uniCAccents = /[\u0300-\u036f]/g;

/**
 * @param text a string to be capitalized to PascalCase
 */
export function capitalizer(text: string) {
  return text.replace(/(?:^|\s)\S/g, function(a: string) {
    return a.toUpperCase();
  });
}

export const unCapitalizer = (text: string) => text.toLowerCase();

export function camelize(text: string) {
  text = text.replace(/[-_\s.]+(.)?/g, (match, chr) => {
    return chr ? chr.toUpperCase() : '';
  });
  return text.substr(0, 1).toLowerCase() + text.substr(1);
}

/**
 *
 * @param str a string value to be passed, it will format the string to PascalCase by default,
 * @param nameConv optional: specify what naming convetion format it will be formmated
 * @types 'camelCase', 'PascalCase', 'lowercase', ('under_score' || 'underscore')
 * remove all whitespaces, remove some special characters
 * and remove most of unicode accents
 */
export function strFormatter(str: string, nameConv?: NameConventions, extraChar?: RegExp) {
  if (typeof str !== 'string') throw Error('The argument must be a string');
  else {
    switch (nameConv) {
      case undefined:
      case null:
      case 'PascalCase':
        return capitalizer(str)
          .replace(whiteSpace, '')
          .replace(extraChar! ?? specialChar, '')
          .normalize('NFD')
          .replace(uniCAccents, '');
      case 'lowercase':
        return unCapitalizer(str)
          .replace(whiteSpace, '')
          .replace(extraChar! ?? specialChar, '')
          .normalize('NFD')
          .replace(uniCAccents, '');
      case 'camelCase':
        return camelize(str)
          .replace(whiteSpace, '')
          .replace(extraChar! ?? specialChar, '')
          .normalize('NFD')
          .replace(uniCAccents, '');
      case 'under_score':
      case 'underscore':
        return unCapitalizer(str)
          .trim()
          .replace(whiteSpace, '_')
          .replace(extraChar! ?? specialChar, '')
          .normalize('NFD')
          .replace(uniCAccents, '');
      default:
        break;
    }
  }
}
