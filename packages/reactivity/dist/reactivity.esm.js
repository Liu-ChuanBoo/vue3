// packages/reactivity/src/ref.ts
var RefImpl = class {
  _value;
  constructor(value) {
    this._value = value;
  }
};
function ref(value) {
  return new RefImpl(value);
}

// packages/reactivity/src/effect.ts
function effect(fn) {
  fn();
}
export {
  effect,
  ref
};
//# sourceMappingURL=reactivity.esm.js.map
