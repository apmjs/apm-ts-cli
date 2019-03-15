# APM-TS-CLI

## 简介

apm-ts-cli是一个脚手架工具，用于创建基于typescript开发的apmjs包，并集成一些工具以提升包开发的效率。


## 主要功能

apm-ts-cli支持以下功能：

- 初始化工程
  - 默认规范（tslint、tsconfig）
  - 默认配置
  - 目录结构
- 持续集成
  - 测试报告
  - 覆盖率
  - 发布
- 本地开发
  - 本地调试
  - debugger
- 

如果有更多的工具类需求，欢迎issue或pull！

## 安装

```bash
sudo npm install apm-ts-cli
```

## 使用

初始化

```bash
# 初始化当前目录
apm-ts init

# 初始化指定目录
apm-ts init ./xxxx
```

编译（产出位于/dist目录）
```bash
apm-ts build
```

本地开发

```bash
apm-ts serve
```

持续集成

```bash
# 检查
apm-ts lint

# 测试
apm-ts test

# 覆盖率
apm-ts cover
```

发布

```bash
npm publish

# 发布内网
apm-ts publish private

```

## 配置

待补充