export function isObject(value) {
  return typeof value === 'object' && value !== null
}

/**
 * 判断值有没有发生过变化，如果发生了变化，就返回 true
 * @param newValue 新值
 * @param oldValue 老值
 */
export function hasChanged(newValue, oldValue) {
  return !Object.is(newValue, oldValue)
}
