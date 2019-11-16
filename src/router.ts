import Vue from 'vue';
import Router from 'vue-router';
import Feature from '@/feature/components/Feature.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '*', redirect: '/feature' },
        {
            path: '/feature/:id',
            name: 'feature',
            component: Feature
        },
    ],
    mode: 'history'
});
