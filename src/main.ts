import { createApp, ref } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { userKey, specKey, bMenuKey, lMenuKey, dMenuKey } from '@/composables/keys';
import type{ MenuItem, SpecialBundle } from '@/types/item-types';
import { DateTime } from 'luxon';

import '@/assets/scss/global.scss';

const app = createApp(App);
app.use(router);

const currUser = ref('');
const spec = ref<SpecialBundle>({
    item: null,
    now: DateTime.now(),
});
const bMenu = ref<MenuItem[]>([]);
const lMenu = ref<MenuItem[]>([]);
const dMenu = ref<MenuItem[]>([]);

app.provide(userKey, {
    currUser,
    setUser: newUser => currUser.value = newUser,
});
app.provide(specKey, {
    spec,
    setSpec: newSpec => spec.value = newSpec,
});
app.provide(bMenuKey, {
    menu: bMenu,
    setMenu: newMenu => bMenu.value = newMenu,
});
app.provide(lMenuKey, {
    menu: lMenu,
    setMenu: newMenu => lMenu.value = newMenu,
});
app.provide(dMenuKey, {
    menu: dMenu,
    setMenu: newMenu => dMenu.value = newMenu,
});

app.mount('#app');
