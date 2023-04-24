# Vue.Volar Bug #2661

https://github.com/vuejs/language-tools/issues/2661

## Reproduction steps

1. `npm i`
1. `npm run build`
1. Open [`HomeView.vue`](dev/src/views/HomeView.vue) in VSCode.

### Result on "Working base mono repo" [6ded05cd](https://github.com/roydukkey/moist/commit/6ded05cdff151ad5c418426935b17f722182346d)

https://user-images.githubusercontent.com/1509616/234091549-398d8c2b-07da-4014-9dab-ab38a2c158e4.mov

### Result on "Broken `Vue.volar` >=1.2.0" [60c9cbcd](https://github.com/roydukkey/moist/commit/60c9cbcd8b6d3037dae12dc5d195fc8676e42efb)

https://user-images.githubusercontent.com/1509616/234092319-a55755ec-d276-4f21-abcb-2db8f3b3d2a5.mov

### Result on "Fixes `Vue.volar` 1.2.0; Broken >=1.4.0" [260fa132](https://github.com/roydukkey/moist/commit/260fa13239c00d6ed43a1071d280ebcf4103e6ff)

https://user-images.githubusercontent.com/1509616/234092754-83cc7ff8-d72b-4338-b03a-1a8dfcdc8307.mov
