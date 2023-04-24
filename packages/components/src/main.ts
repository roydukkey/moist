import * as components from './components/index.js';

import type { App } from 'vue';

export default function(application: App) {
    Object.entries(components)
        .forEach(([name, component]) => application.component(name, component));
}

export * from './components/index.js';
