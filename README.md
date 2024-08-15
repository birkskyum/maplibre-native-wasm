# MapLibre Native - WebAssembly compilation

There are multiple paths to compile MapLibre Native to WebAssembly (WASM), some of which enables MapLibre Native in the browser.

The purpose of this repo is to document, demonstrate and compare these paths as they evolve.

### Qt for WebAssembly (working!)

See more [here](./qt-for-webassembly/README.md).

### Kotlin WASM / Compose Multiplatform

Compose ticket [here](https://github.com/maplibre/maplibre-native/issues/2638).

More info on Compose Multiplatform [here](https://www.jetbrains.com/lp/compose-multiplatform/).

More info on Kotlin WASM [here](https://kotlinlang.org/docs/wasm-overview.html).

### Flutter for Web

Currently, the https://github.com/maplibre/flutter-maplibre-gl uses MapLibre GL JS for the web target.

It is technically possible to use a wasm build of Native for web as well, which would give identical rendering and feature set.

Work is not started. More info [here](https://flutter.dev/multi-platform/web)

### Expo / React Native for Web

See more here:
- https://docs.expo.dev/workflow/web/
- https://necolas.github.io/react-native-web/


### MapLibre Native Core

- ⌛ WebGL2 - [Ref. Ticket](https://github.com/maplibre/maplibre-native/issues/2554)
- ⌛ WebGPU

#### GLFW - vanilla emscripten

Work is not started 
