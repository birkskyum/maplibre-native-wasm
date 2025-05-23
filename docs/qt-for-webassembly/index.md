# Qt for WebAssembly

It's possible to use the [MapLibre Native Qt](https://github.com/maplibre/maplibre-native-qt) bindings to embed MapLibre Native in Qt apps.

Qt is commonly used for building Mobile and Desktop apps, but with [Qt for WebAssembly](https://doc.qt.io/qt-6/wasm.html) it's even possible to build Web apps! 

Note: Be sure to verify your use-case is within Qt's license.

## Roadmap
Compilation and deployment of our Widget example app
- ✅ WebGL1 from OpenGL2 w/ legacy renderer - Qt 6.8.0-beta.3
  - [Run Demo](https://birkskyum-maplibre-native-wasm.pages.dev/qt-for-webassembly/webgl1-from-opengl2-legacy-renderer/)
  - [Build guide and binaries](./webgl1-from-opengl2-legacy-renderer)
  - [Ref. Ticket](https://github.com/maplibre/maplibre-native-qt/issues/49)
- ⌛ WebGL2
  - [Ref. Ticket
](https://github.com/maplibre/maplibre-native-qt/issues/147)
- ⌛ WebGPU
  - [Ref. Ticket
](https://github.com/maplibre/maplibre-native-qt/issues/153)

Optmizations to be made:
- ⌛ Move from Asynchify to JSPI ( [more info](https://v8.dev/blog/jspi) )
- ⌛ Autogenerated TypeScript type declarations ( --emit-tsd / -embind-emit-tsd )
- ⌛ Public API exposed to JS