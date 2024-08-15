import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/maplibre-native-wasm/',
  title: "MapLibre Native Wasm",
  description: "Run MapLibre Native in the Browser",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' }
    ],

    sidebar: [
      { text: 'Guide', items: [
        { text: 'Introduction', link: '/introduction' },
        { text: 'Qt for WebAssembly', link: '/qt-for-webassembly/index.html', items: [
          { text: 'WebGL1 from OpenGL2 legacy renderer', link: '/qt-for-webassembly/webgl1-from-opengl2-legacy-renderer' },
        ] },
        { text: 'Compose Multiplatform and Kotlin Wasm', link: '/compose-multiplatform-and-kotlin-wasm/' },
        { text: 'Flutter Wasm Target', link: '/flutter-wasm-target/' },
        { text: 'React Native Web and Expo', link: '/react-native-web-and-expo/' },
    ]},
     ] 
    ,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/birkskyum/maplibre-native-wasm' }
    ]
  }
})
