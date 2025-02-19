function createWhenTs (params) {
  return !!params.typescript
}

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts' ({ framework, typescript }) {
    return ['vue', 'vue3'].includes(framework) && !!typescript
  },
  '/src/pages/index/index.css' ({pageName}) {
    return { setPageName: `/src/pages/${pageName}/index.css` }
  },
  '/src/pages/index/index.vue' ({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.vue` }
  },
  '/src/pages/index/index.config.js' ({pageName}) {
    return { setPageName: `/src/pages/${pageName}/index.config.js` }
  }
}

const basePageFiles = [
  '/src/pages/index/index.css',
  '/src/pages/index/index.vue',
  '/src/pages/index/index.config.js'
]

module.exports = {
  desc: 'Vue3 + Pinia 模板（https://pinia.esm.dev/）',
  handler,
  basePageFiles,
  platforms: ['vue3']
}
