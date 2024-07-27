# Additional clean files
cmake_minimum_required(VERSION 3.16)

if("${CONFIG}" STREQUAL "" OR "${CONFIG}" STREQUAL "Release")
  file(REMOVE_RECURSE
  "CMakeFiles/QMapLibreExampleWidgets_autogen.dir/AutogenUsed.txt"
  "CMakeFiles/QMapLibreExampleWidgets_autogen.dir/ParseCache.txt"
  "QMapLibreExampleWidgets_autogen"
  )
endif()
