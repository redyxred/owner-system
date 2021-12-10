export const isNull = (object: any) => object === null || object === undefined
export const isString = (object: any) => typeof object === 'string'
export const isNumber = (object: any) => typeof object === 'number'
export const isBoolean = (object: any) => typeof object === 'boolean'
export const isObject = (object: any) => typeof object === 'object'
export const isFunction = (object: any) =>
  !!(object && object.constructor && object.call && object.apply)
export const isArray = (object: any) => Array.isArray(object) && object.length

export const formatPhoneNumber = (number: string) =>
  number ? number.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3') : undefined
