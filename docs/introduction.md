# Introduction

WebAssembly (Wasm) enables MapLibre Native to run in web browsers (or anywhere really), offering key benefits such as consistent behavior across platforms.

If sufficiently performant, it also holds the potential for making MapLibre GL JS redudant, since MapLibre GL JS's purpose originally was to serve the web target that MapLibre Native histically hasn't supported.

## Strategies
There are many strategies for MapLibre Native Wasm compilation that can and will be explored, such as:
- [Qt for WebAssembly](/qt-for-webassembly/)
- [Compose Multiplatform and Kotlin Wasm](/compose-multiplatform-and-kotlin-wasm/)
- [Flutter Wasm Target](/flutter-wasm-target/)
- [React Native for Web](https://necolas.github.io/react-native-web/) / [Expo web workflow](https://docs.expo.dev/workflow/web/)
- Roll our own with [emscripten](https://emscripten.org/)
