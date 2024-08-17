# Introduction

WebAssembly (Wasm) enables MapLibre Native to run in web browsers (or anywhere really), offering key benefits such as consistent behavior across platforms.

If sufficiently performant, it also holds the potential for making MapLibre GL JS redudant, since MapLibre GL JS's purpose originally was to serve the web target that MapLibre Native histically hasn't supported.

## Strategies
There are many strategies for MapLibre Native Wasm compilation that can and will be explored.

There are two kinds of strategies.

- [Compile MapLibre Native Core to Wasm](https://github.com/maplibre/maplibre-native/issues/2554) and much like MapLibre GL JS use a JS API to either:
    - Embed it as the web target in [classic Flutter for Web](https://flutter.dev/multi-platform/web) and [React Native for Web](https://necolas.github.io/react-native-web/)
    - Call it directly from React/Vue/Svelte/vanillajs or use through wrapper libraries.

- Use an app development platform with built-in support for outputting a full app to Wasm:
    - C++: [Qt for WebAssembly](/qt-for-webassembly/)
    - Kotlin: [Compose Multiplatform and Kotlin Wasm](/compose-multiplatform-and-kotlin-wasm/)
    - Dart: [Flutter Wasm Target](/flutter-wasm-target/)