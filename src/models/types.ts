export type NameConventions = 'camelCase' | 'PascalCase' | 'lowercase' | 'under_score' | 'underscore' | 'snake_case';
export type ResultType<R> = { readonly [key in string | number]: R };
export type FormatterOpt = { nameConv?: NameConventions; extraChar?: RegExp | string; ignore?: string };
