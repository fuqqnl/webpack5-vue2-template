/**
 * @file entrance
 * @author 
 */

import Vue from 'vue';
import HelloWorld from './components/HelloWorld';
{{#router}}
import VueRouter from 'vue-router';
import routes from './router/routes';
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
{{/router}}
const app =  new Vue({
    name: 'app',
    {{#router}}
    router,
    {{/router}}
    data() {

    },
    template: `
        <div>Hello, duerCLI</div>
        {{#router}}
        <router-view></router-view>
        {{/router}}
        <s-hello-world></s-hello-world>
    `,
    components: {
        's-hello-world': HelloWorld
    },
    mounted() {
        
    },
})

app.$mount('#app');