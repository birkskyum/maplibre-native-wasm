# MapLibre Native for Web

Any target of MapLibre Native that can compiled to WASM can be considered a path for running MapLibre Native for Web.

There isn't one blessed path, but various possible approaches will be outlined and demonstrated in this repo.

### Qt for WebAssembly

Qt is great for making Desktop and Mobile apps in C++, and [MapLibre Native Qt](https://github.com/maplibre/maplibre-native-qt) makes it easy to add a map to.

Using the [Qt for WebAssembly](https://doc.qt.io/qt-6/wasm.html) approach makes it possible tor each the Web as well!

Note: Qt isn't permissively licesnse like MapLibre Native, so be sure to check out the license requirement of your usecase.

#### Roadmap
Compilation and deployment of our Widget example app
- ✅ WebGL1 ([See Demo](https://maplibre-native-wasm-dist.pages.dev/qt-opengl2/) - [Build guide and binaries for demo](https://github.com/birkskyum/maplibre-native-wasm-dist/tree/main/qt-opengl2))
- ⌛ WebGL2
- ⌛ WebGPU

Side quests and optmizations to be made:
- ⌛ Move from Asynchify to JSPI
- ⌛ TypeScript type declarations
- ⌛ Public API exposed to JS

### GLFW
- ⌛ WebGL2 demo
- ⌛ WebGPU demo

### Kotlin WASM

Being considered. More info on Kotlin WAASM [here](https://kotlinlang.org/docs/wasm-overview.html)

### MapLibre Native Core


- ⌛ WebGL2
- ⌛ WebGPU
