# App compilation

The app compilation approach allow a developer to build a full native app in the environment they are used to, and then export it to mobile, desktop **and the web**. The idea is that the framework (e.g. Flutter, Qt or Compose Multiplatform) handles all the complexity around Wasm compilation, and the web becomes just another output target that will work out-of-the-box.

Frameworks that deliver such a pipeline are:

- C++: [Qt for WebAssembly](/qt-for-webassembly/)
- Kotlin: [Compose Multiplatform and Kotlin Wasm](/compose-multiplatform-and-kotlin-wasm/)
- Dart: [Flutter Wasm Target](/flutter-wasm-target/)