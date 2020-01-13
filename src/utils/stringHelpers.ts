
const specialChar = /[\s`~!@#~´º%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
const whiteSpace = / /g;
const uniCAccents = /[\u0300-\u036f]/g;

export function capitalizer(text: string) {
    return text.replace(/(?:^|\s)\S/g, function (a: string) { return a.toUpperCase(); });
}

export function strFormatter(str: string) {
    return capitalizer(str).
        replace(whiteSpace, '').
        replace(specialChar, '').
        normalize("NFD").replace(uniCAccents, "");
}

export const objFormatter = (obj: object) => {
    if ((obj === null) || Object.getPrototypeOf(obj).constructor.name !== 'Array' && Object.getPrototypeOf(obj).constructor.name !== 'Object') 
        return obj;
    return Object.keys(obj).reduce((acc, key) => {
        //@ts-ignore
        acc[strFormatter(key)] = typeof obj[key] == 'string' ? obj[key].trim() : objFormatter(obj[key]);
        return acc;
    }, Array.isArray(obj) ? [] : {});
};

