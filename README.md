# MapLibre Native - WebAssembly compilation

There are multiple paths to compiled MapLibre Native to WebAssembly (WASM) - some of these paths enable running MapLibre Native in the browser.

The purpose of this repo is to track progress, document andd demonstrates these paths as they evolve.

### Qt for WebAssembly

[MapLibre Native Qt](https://github.com/maplibre/maplibre-native-qt) makes it easy to build Mobile and Desktop apps with MapLibre.

[Qt for WebAssembly](https://doc.qt.io/qt-6/wasm.html) allow those apps to run on the Web as well!

Note: Qt isn't permissively licesnse like MapLibre Native, so be sure to check out the license requirement of your usecase.

#### Roadmap
Compilation and deployment of our Widget example app
- ✅ WebGL1 ( [Try Demo!](https://maplibre-native-wasm-dist.pages.dev/qt-opengl2/) ) - ( [Build guide and binaries](https://github.com/birkskyum/maplibre-native-wasm-dist/tree/main/qt-opengl2) ) - [Ref. Ticket](https://github.com/maplibre/maplibre-native-qt/issues/49)
- ⌛ WebGL2 - [Ref. Ticket
](https://github.com/maplibre/maplibre-native-qt/issues/147)
- ⌛ WebGPU

Side quests and optmizations to be made:
- ⌛ Move from Asynchify to JSPI ( [more info](https://v8.dev/blog/jspi) )
- ⌛ TypeScript type declarations ( [more info](https://github.com/emscripten-core/emscripten/blob/main/ChangeLog.md#3157---041024) )
- ⌛ Public API exposed to JS

### GLFW
- ⌛ WebGL2 demo
- ⌛ WebGPU demo

### Kotlin WASM

Being considered. More info on Kotlin WASM [here](https://kotlinlang.org/docs/wasm-overview.html)

### MapLibre Native Core

- ⌛ WebGL2 - [Ref. Ticket](https://github.com/maplibre/maplibre-native/issues/2554)
- ⌛ WebGPU
