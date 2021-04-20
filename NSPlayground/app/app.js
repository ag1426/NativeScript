import Vue from 'nativescript-vue';

import AfterSchoolActivity from './components/App';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <AfterSchoolActivity />
        </Frame>`,

    components: {
        AfterSchoolActivity
    }
}).$start();