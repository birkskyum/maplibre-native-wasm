# WebGL1 from OpenGL2 legacy renderer
> Go back to [Qt for WebAssembly](../README.md)
> 
> Last updated: 6.8.0-beta.3  / Aug 14th 2024
>
> [Run this Demo](https://birkskyum-maplibre-native-wasm.pages.dev/qt-for-webassembly/webgl1-from-opengl2-legacy-renderer/)

## Build steps:

It would be interesting for us to explore a wasm port of the c++ core in the browser.

Here are instructions to make a wasm build, that'll for now give a black screen, but we're still debugging it. The style is downloaded, and workers are running, and this guide will be kept up to date as we move forward, new qt versions come out, and when the maplibre repos evolve.

For anyone interested in trying this. Here are the first steps (I'm on macos, so some of my steps my not transfer directly):

### Changes needed to the code (PR [here](https://github.com/maplibre/maplibre-native/pull/2689) to fix upstream):

In the vendor/maplibre-native, update the followign in the: **HTTPFileSource** (platform/qt/src/mbgl/http_file_source.cpp)

Changing the `reply-> url` in the opengl2 branch of Native allow the build to run.

Changing `deleteLater();` to `abort();` avoids a lot of duplicate requests.

```diff

# vendor/maplibre-native/platform/qt/src/mbgl/http_file_source.cpp

void HTTPFileSource::Impl::onReplyFinished() {
    QNetworkReply* reply = qobject_cast<QNetworkReply*>(sender());
--     const QUrl& url = reply->request().url();
++     const QUrl& url = reply->url();

    auto it = m_pending.find(url);
    if (it == m_pending.end()) {
--        reply->deleteLater();
++        reply->abort();
        return;
    }

    QByteArray data = reply->readAll();
    QVector<HTTPRequest*>& requestsVector = it.value().second;

    // Cannot use the iterator to walk the requestsVector
    // because calling handleNetworkReply() might get
    // requests added to the requestsVector.
    while (!requestsVector.isEmpty()) {
        requestsVector.takeFirst()->handleNetworkReply(reply, data);
    }

    m_pending.erase(it);
--    reply->deleteLater();
++    reply->abort();
}
```

### Installations

- Clone the maplibre-native-qt repo

- Install Qt 6.8.0-beta.3 with the online [installer](https://www.qt.io/download) (not i.e. homebrew), and make sure to select the WebAssembly multi-threaded.


- Install Emscripten through the "recommended" path [here](https://emscripten.org/docs/getting_started/downloads.html) (again, don't use homebrew). It's important that it's version 3.1.56 for Qt 6.8.0-beta.3 (see [here](https://bugreports.qt.io/browse/QTBUG-127425))

```sh
./emsdk install 3.1.56
./emsdk activate 3.1.56
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





