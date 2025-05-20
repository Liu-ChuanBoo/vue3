import { ReactiveEffect } from 'vue'

export interface Link {
  // 保存
  sub: ReactiveEffect

  nextSub: Link | undefined

  prevSub: Link | undefined
}

/**
 *
 * @param dep
 * @param sub
 */
export function link(dep, sub) {
  const newLink = {
    sub: sub,
    nextSub: undefined,
    prevSub: undefined,
  }
  /**
   * 如果尾节点有，往尾节点家
   * 没有，头尾相同
   */
  if (dep.subsTail) {
    dep.subsTail.nextSub = newLink
    newLink.prevSub = dep.subsTail
    dep.subsTail = newLink
  } else {
    dep.subs = newLink
    dep.subsTail = newLink
  }
}

/**
 * 传播更新的函数
 * @param subs
 */
export function propagate(subs) {
  let link = subs
  let queuedEffect = []
  while (link) {
    queuedEffect.push(link.sub)
    link = link.nextSub
  }
  queuedEffect.forEach(effect => effect.run())
}
