export let activeSub

class ReactiveEffect {
  constructor(public fn) {}
  run() {
    // 每次执行fn 把this放到activesub上
    activeSub = this
    try {
      return this.fn()
    } finally {
      // 执行完了函数，
      activeSub = undefined
    }
  }
}
export function effect(fn) {
  const e = new ReactiveEffect(fn)
  e.run()
}
