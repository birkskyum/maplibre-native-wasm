# WebGL1 from OpenGL2 legacy renderer

Last updated: 6.9.1  / July 16th 2025

[Run this Demo - Qt 6.8.0](https://birkskyum-maplibre-native-wasm.pages.dev/qt-for-webassembly/webgl1-from-opengl2-legacy-renderer-qt6-8-0)
[Run this Demo - Qt 6.9.1](https://birkskyum-maplibre-native-wasm.pages.dev/qt-for-webassembly/webgl1-from-opengl2-legacy-renderer-qt6-9-1/)

[Binaries](https://github.com/birkskyum/maplibre-native-wasm/tree/main/dist/qt-for-webassembly/webgl1-from-opengl2-legacy-renderer)


## Prerequisites

- Clone the maplibre-native-qt repo

- Install Qt 6.9.1 with the online [installer](https://www.qt.io/download) (not i.e. homebrew), and make sure to select the WebAssembly multi-threaded.


- Install Emscripten through the "recommended" path [here](https://emscripten.org/docs/getting_started/downloads.html) (again, don't use homebrew). It's important that it's version 3.1.70 for Qt 6.9.1

```sh
./emsdk install 3.1.70
./emsdk activate 3.1.70
source ../emsdk/emsdk_env.sh  # in general, if something Emscripten related can't be found, run this again
```

Make sure to add both emscripten and qt to your path. My .zshrc i.e. looks like this:

```sh
export PATH=/Users/admin/Qt/6.9.1/wasm_multithread/bin:$PATH
export PATH="/Users/admin/repos/emsdk/upstream/emscripten:$PATH"
```

## Build QMapLibre

### Make the build
Follow the *"How to build"* [here](https://github.com/maplibre/maplibre-native-qt?tab=readme-ov-file#how-to-build), except add a `-DMLN_QT_WITH_LOCATION=OFF` flag.

Effectively you want to make a folder, and from within it run:

```sh
mkdir ./build-lib
cd ./build-lib
qt-cmake ../ -GNinja \
  -DCMAKE_C_COMPILER_LAUNCHER="ccache" \
  -DCMAKE_CXX_COMPILER_LAUNCHER="ccache" \
  -DCMAKE_INSTALL_PREFIX="../qmaplibre-install-dir" -DMLN_QT_WITH_LOCATION=OFF

ninja
ninja install
```

## Make and run the Widget example

Create a new folder in maplibre-native-qt, and from within it like following. For debugging use `-DCMAKE_BUILD_TYPE="RelWithDebInfo"`

```sh
mkdir ./build-widgets
cd ./build-widgets
qt-cmake ../examples/widgets \
-G Ninja \
-DCMAKE_BUILD_TYPE="Release" \
-DCMAKE_C_COMPILER_LAUNCHER="ccache" \
-DCMAKE_CXX_COMPILER_LAUNCHER="ccache" \
-DCMAKE_EXE_LINKER_FLAGS="-s EXPORT_NAME=Something" \
-DQMapLibre_DIR=/Users/admin/repos/maplibre-native-qt/install-lib/lib/cmake/QMapLibre \
-DCMAKE_CXX_FLAGS="-Os" # Release optimization, focus on binary size 

ninja
emrun --browser=chrome QMapLibreExampleWidgets.html
```

Result in browser:

<video controls>
  <source src="https://github.com/user-attachments/assets/09b8dbfc-68cd-446a-90af-41f5a0b13230" type="video/mp4">
  Your browser does not support the video tag.
</video>








