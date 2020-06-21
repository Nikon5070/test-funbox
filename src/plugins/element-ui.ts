import Vue from 'vue';
import { Button, Icon, Autocomplete } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Autocomplete);
Vue.use(Button);
Vue.use(Icon);

declare module 'element-ui';
