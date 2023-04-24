import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import myLib from '@my-lib/components';
import App from './App.vue';
import '@my-lib/components/index.css';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Home', component: async () => import('./views/HomeView.vue') },
    ],
});

createApp(App)
    .use(router)
    .use(myLib)
    .mount('#app');
