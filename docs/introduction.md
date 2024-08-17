# Introduction

WebAssembly (Wasm) enables MapLibre Native to run in web browsers (or anywhere really), offering key benefits such as consistent behavior across platforms.

If sufficiently performant, it also holds the potential for making MapLibre GL JS redudant, since MapLibre GL JS's purpose originally was to serve the web target that MapLibre Native histically hasn't supported.

## Strategies
There are many strategies for MapLibre Native Wasm compilation that can and will be explored.

There are two kinds of strategies, namely App compilation and Library compilation.

**[App compilation](./app-compilation.md)** leverages an app development framework with built-in support for compiling your full app to Wasm. Relevant frameworks are Qt for WebAssembly, Compose Multiplatform and Flutter.

**[Library compilation](./library-compilation.md)** consist of compiling MapLibre Native Core to Wasm and, much like MapLibre GL JS, use a JS API to either call it directly from react/vue/svelte/vanillajs or embed it as the web target in flutter or react native.