# powerful-api

一个基于 Nodejs、GraphQL、MongoDB、Hapi 和 Swagger 构建 API 服务

### START

初始化项目

```
npm install
```

开发调试

```
npm run dev
```

### DATABASE

使用 Docker 启动一个数据库实例，关于 Docker 的介绍，建议参阅《[面向 WEB 开发人员的 Docker](https://juejin.cn/column/6965049243660714021)》。

```
docker run -it -v $PWD/mongodata:/data/db -p 27017:27017 --name mongodb -d mongo
```

### 相关文章

-   [Nodejs、GraphQL、MongoDB、Hapi 和 Swagger 构建 API（一）](https://www.devpoint.cn/article/441.shtml)

### 个人自媒体

-   个人网站：[https://www.devpoint.cn/index.shtml](https://www.devpoint.cn/index.shtml)
-   infoQ：[https://www.infoq.cn/u/devpoint/](https://www.infoq.cn/u/devpoint/)
-   掘金：[https://juejin.cn/user/4406498333033918](https://juejin.cn/user/4406498333033918)

### MIT License
