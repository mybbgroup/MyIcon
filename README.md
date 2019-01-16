# MyIcon
A custom, handmade set of icons designed to use in MyBB forums

## Features
- Powered by grunt tasks using powerful libraries: grunticon & grunt-webfont. Compilation is just a command away.
- Every single icon is drawn from the scratch, optimised with SVGO. Icon request is always welcome.
- Both font-icons and SVG versions are available.
- Every icon is made in 2 modes : solid (suffixed by -s) and outline (suffixed by -o) keeping users choice in mind.
- Implementation is extremely flexible and can be used with multiple implementation systems.

## Developer Notes:
- We drop usage of `ttfautohint` as not all versions are compatible and often fails to generate proper webfont. The recommended usage is `fontforge`.
- You may encounter security warnings during compilation but those are all outdated dev-dependencies of our third party libraries and has no impact to the final output.