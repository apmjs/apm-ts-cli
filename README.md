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


如果有更多的工具类需求，欢迎issue或pull！

## 安装

```bash
sudo npm install apm-ts-cli -g
```

## 使用

初始化

```bash
# 初始化xxxx项目
apm-ts init xxxx

# 初始化已存在目录
apm-ts init ./xxxx
```


按照提示确认项目基本信息，完成安装后进入到项目，即可开始编写你的代码。

项目的README中有各种持续集成的命令说明。

## 如何开始编写一个APM包？

你可以阅读[浅入深出APM](https://github.com/apmjs/apm-ts-cli/wiki/%E5%87%BA%E6%B5%85%E5%85%A5%E6%B7%B1%E5%AE%9E%E8%B7%B5APM)详细了解。


