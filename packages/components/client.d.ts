import type * as components from './dist/types/components/index.js';

/**
 * Augment `@vue/runtime-core` GlobalComponents to provide typings for My Lib components when globally registered.
 *
 * @see {@link https://github.com/johnsoncodehk/volar/tree/70d0d19c900353da508304d086afb77c32272d05/extensions/vscode-vue-language-features#usage}
 */
declare module '@vue/runtime-core' {
    type MyComponents = typeof components;

    // This needs to be an interface to avoid conflicting with other augmentations targeting this type.
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface GlobalComponents extends MyComponents {}
}
