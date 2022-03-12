# vite-vue-ts-light

A simple template for vite, including vite, vue3, ts, sass, vuex, router, eslint, prettier, axios

### Download

```command
npx degit Gliese129/vite-vue-ts-light#main ${project-name}
```

```command
cd ${project-name}
yarn install
```

### Tips

1. default proxy: /api → localhost:8080
2. default port: 80
3. "reactivityTransform" is true, which means you can use ref sugar
4. default path alias: @ → src
5. In order to use axios, you should use
    ```ts
    import axios from '@/utils/service'
    ```
    instead of
    ```ts
    import axios from 'axios'
    ```
6. It's recommended to use volar
