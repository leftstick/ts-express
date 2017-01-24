
export function isString(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object String]';
}



export function isArray(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
