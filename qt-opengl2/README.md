# Qt using the OpenGL2 compatibility branch

The web runtime is webgl1

[Demo link](https://maplibre-native-wasm-dist.pages.dev/qt-opengl2/)

# Build steps:

It would be interesting for us to explore a wasm port of the c++ core in the browser.

Here are instructions to make a wasm build, that'll for now give a black screen, but we're still debugging it. The style is downloaded, and workers are running, and this guide will be kept up to date as we move forward, new qt versions come out, and when the maplibre repos evolve.

## **Last updated: 6.8.0-beta.2  / Jul 25th 2024**

For anyone interested in trying this. Here are the first steps (I'm on macos, so some of my steps my not transfer directly):

### Installations

- Clone the maplibre-native-qt repo

- Install Qt 6.8.0-beta.2 with the online [installer](https://www.qt.io/download) (not i.e. homebrew), and make sure to select the WebAssembly multi-threaded.


- Install Emscripten through the "recommended" path [here](https://emscripten.org/docs/getting_started/downloads.html) (again, don't use homebrew). It's important that it's version 3.1.50 for Qt 6.8.0-beta.2 (see [here](https://bugreports.qt.io/browse/QTBUG-127425))

```sh
./emsdk install 3.1.50
./emsdk activate 3.1.50
source ./emsdk/emsdk_env.sh  # in general, if something Emscripten related can't be found, run this again
```

Make sure to add both emscripten and qt to your path. My .zshrc i.e. looks like this:

```sh
export PATH=/Users/admin/Qt/6.8.0/wasm_multithread/bin:$PATH
export PATH="/Users/admin/repos/emsdk/upstream/emscripten:$PATH"
```

### Build QMapLibre

Follow the How to build [here](https://github.com/maplibre/maplibre-native-qt?tab=readme-ov-file#how-to-build), except add a `-DMLN_QT_WITH_LOCATION=OFF` flag.

Effectively make a folder, and from within it run:

```sh
qt-cmake ../maplibre-native-qt -GNinja \
  -DCMAKE_C_COMPILER_LAUNCHER="ccache" \
  -DCMAKE_CXX_COMPILER_LAUNCHER="ccache" \
  -DCMAKE_INSTALL_PREFIX="../qmaplibre-install-dir" -DMLN_QT_WITH_LOCATION=OFF

ninja
ninja install
```

### Make and run the Widget example

Create a new folder next to maplibre-native-qt, and from within it run:

```
qt-cmake ../maplibre-native-qt/examples/widgets \
-G Ninja \
-DCMAKE_BUILD_TYPE="Release" \
-DCMAKE_C_COMPILER_LAUNCHER="ccache" \
-DCMAKE_CXX_COMPILER_LAUNCHER="ccache" \
-DCMAKE_EXE_LINKER_FLAGS="-s EXPORT_NAME=Something" \
-DQMapLibre_DIR=/Users/admin/repos/qmaplibre-install-dir/lib/cmake/QMapLibre \
-DCMAKE_CXX_FLAGS="-Os" # Release optimization, focus on binary size

ninja
emrun --browser=chrome QMapLibreExampleWidgets.html
```

result in browser:
https://github.com/user-attachments/assets/09b8dbfc-68cd-446a-90af-41f5a0b13230


#### Note on debugging

- Use `-DCMAKE_BUILD_TYPE="RelWithDebInfo" \`
