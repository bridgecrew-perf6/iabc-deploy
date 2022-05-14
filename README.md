# iABC 资源库

## Install vscode extension

ESLint + Prettier + EditorConfig

## pip 使用国内镜像源

打开配置文件 ~/.pip/pip.conf，修改如下：

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```

## npm 使用国内镜像源

```
npm config set registry https://registry.npm.taobao.org 
```

## How to start

### 1. Installing [MkDocs](https://www.mkdocs.org)

```
$ pip install mkdocs
```

#### Choose [Theme](https://www.mkdocs.org/user-guide/choosing-your-theme/#third-party-themes):

Add [Material](https://github.com/squidfunk/mkdocs-material) theme for MkDocs

```
pip install mkdocs-material
```

### 2. Start local server

```
npm run build
npm run start
```

### 3. Deploy to your github

```
npm run deploy
```
