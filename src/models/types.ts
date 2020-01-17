export type NameConventions = 'camelCase' | 'PascalCase' | 'lowercase' | 'under_score' | 'underscore';
export type ResultType<R> = { readonly [key in string | number]: R };
