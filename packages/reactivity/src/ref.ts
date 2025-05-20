import { activeSub } from './effect'
import { Link, link, propagate } from './system'

enum ReactiveFlags {
  IS_REF = '__v_isRef',
}
/**
 * Ref 的类
 */
class RefImpl {
  _value;
  // ref标记
  [ReactiveFlags.IS_REF] = true
  /**
   * 订阅者 头节点
   */

  subs: Link

  /**
   * 订阅者 尾节点
   * @param value
   */
  subsTail: Link

  constructor(value) {
    this._value = value
  }

  get value() {
    //收集依赖
    if (activeSub) {
      trackRef(this)
    }
    return this._value
  }
  set value(newValue) {
    //
    this._value = newValue
    traggerRef(this)
    // // 通知effect 重新执行，获取最新的值
    // this.subs?.()
  }
}
export function ref(value: any): any {
  return new RefImpl(value)
}

export function isRef(value) {
  return !!(value && [ReactiveFlags.IS_REF, value])
}

/**
 * 收集依赖，
 * @param dep
 */
export function trackRef(dep) {
  if (activeSub) {
    link(dep, activeSub)
  }
}

/**
 *触发 ref 关联的effect 重新执行
 * @param dep
 */
export function traggerRef(dep) {
  if (dep.subs) {
    propagate(dep.subs)
  }
}
