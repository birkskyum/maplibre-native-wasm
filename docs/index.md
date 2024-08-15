---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MapLibre Native Wasm"
  text: "Compilation guides for browser targets"
  image:
    src: /logo3.png
    alt: MapLibre Native Wasm
  tagline: 
  actions:
    - theme: brand
      text: Introduction
      link: /introduction
    - theme: brand
      text: Qt for WebAssembly
      link: /qt-for-webassembly
    - theme: brand
      text: Flutter Wasm Target
      link: /flutter-wasm-target
    - theme: brand
      text: Compose Multiplatform
      link: /compose-multiplatform-and-kotlin-wasm
    - theme: brand
      text: React Native Web & Expo
      link: /react-native-web-and-expo
    

features:
  - title: Develop once, run everywhere
    details: Instead of implementing separate web apps you can just compile your existing mobile and desktop apps to the web.
  - title: Consistent rendering on server and client
    details: When MapLibre Native is used to make static maps serverside, and a user click such an image to launch MapLibre GL JS in the browser, it's likely that there will be some inconsistent visual output.
  - title: Efficient maintenance
    details: If MapLibre Native can run efficient in the browser, there might be a point where it becomes more favorable to maintain a web-optimized graphics backend for MapLibre Native, than a fully-flegded JS/TS mirror like MapLibre GL JS.

