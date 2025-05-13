class RefImpl {
  _value
  constructor(value) {
    this._value = value
  }
}
export function ref(value: any): any {
  return new RefImpl(value)
}
