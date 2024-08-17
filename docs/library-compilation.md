# Library compilation

In order to compile MapLibre Native Core to a Wasm library, it's necessary to handle all the configuration of [emscripten](https://emscripten.org/), as well as fill in the gaps around e.g. networking that the frameworks in the [App compilation](./app-compilation.md) approach takes care of.

The finished Wasm library will have a JavaScript API and TypeScript declarations, so that it can be consumed either by:
  - Embeding it as the web target in [Flutter for Web](https://flutter.dev/multi-platform/web) and [React Native for Web](https://necolas.github.io/react-native-web/)/[Expo](https://docs.expo.dev/workflow/web/)
  - Calling it directly from React/Vue/Svelte/vanillajs or use through wrapper libraries.

The work is tracked in this [Ticket](https://github.com/maplibre/maplibre-native/issues/2554).