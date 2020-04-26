# nest-nideshop
![CI](https://github.com/Kennytian/nest-nideshop/workflows/CI/badge.svg)

![CI](https://github.com/Kennytian/nest-nideshop/workflows/CI/badge.svg?branch=release)

#### nest help
- nest --help

#### generator service
- nest g s feature/cats

#### generator controller
- nest g co feature/cats

#### generator module
- nest g mo feature/cats

#### generator filter
- nest g f core/httpexception

#### generator guard
- nest g gu core/roles

### 本项目 GitHub Actions 前置条件
- github secrets 已经配置好
- 目标服务器 yarn 已安装
- 目标服务器 pm2 已安装

### 坑
- 要把 pm2.config.js 加入到「tsconfig.build.json」里
