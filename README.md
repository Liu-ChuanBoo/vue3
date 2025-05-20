# Vue 3 源码解析与实现 🖖

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PNPM](https://img.shields.io/badge/pnpm-workspace-%234B41C0)](https://pnpm.io/workspaces)

本项目是 Vue 3 核心源码的渐进式实现，用于深入理解 Vue 的响应式系统、虚拟DOM、编译器等核心机制。

## 🌟 项目特点

- 📚 **逐模块实现**：从 0 到 1 实现 Vue 3 核心功能
- 🧪 **配套测试**：每个模块包含 Jest 单元测试
- 🛠️ **可调试**：保留 Vue 源码关键注释与开发调试工具
- 📈 **渐进式学习**：按复杂度分阶段实现（见下方路线图）

## 技术栈

| 模块           | 核心技术                 |
|----------------|-------------------------|
| 响应式系统     | Proxy + Effect 跟踪      |
| 虚拟DOM        | 增量Diff算法             |
| 编译器         | 有限状态机 + 生成代码    |
| 运行时         | 组件生命周期调度         |

## 项目结构

```bash
packages/
├── reactivity/     # 响应式系统 (Proxy实现)
├── runtime-core/   # 运行时核心 (组件/虚拟DOM)
├── compiler-core/  # 模板编译器
├── shared/         # 共享工具库
└── vue/            # 整合入口 (类似vue/dist/vue.esm-bundler.js)
🚀 快速开始
1. 安装依赖
bash
pnpm install
2. 开发模式
bash
# 监听 reactivity 模块变化
pnpm --filter reactivity dev

# 运行编译器测试用例
pnpm --filter compiler-core test
3. 生产构建
bash
pnpm build
