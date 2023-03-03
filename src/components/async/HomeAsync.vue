<script setup lang="ts">
    import { DateTime } from 'luxon';
    import sds from '@/service/SpecialsDataService';
    import useTitle from '@/composables/title';
    import imageLinks from '@/composables/imageLinks';
    import { inject } from 'vue';
    import { specKey, type SpecInject } from '@/composables/keys';
    import useLoginRedirect from '@/composables/loginRedirect';

    useTitle('Rise and Grind Cafe');
    useLoginRedirect('home');

    const { spec, setSpec } = inject(specKey) as SpecInject;

    const rightNow = DateTime.now();
    const dayName = rightNow.weekdayLong;

    if (spec.value.item === null || spec.value.now.weekday !== rightNow.weekday) {
        const res = await sds.retrieveSpecial(dayName);
        setSpec({
            item: res.data !== 'Error: No Special Found' ? res.data : null,
            now: rightNow,
        });
    }
</script>

<template>
    <table>
        <caption>
            <h3>Daily Special &mdash; {{ dayName }}</h3>
        </caption>
        <thead>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
                <th class="with-image">Image</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <template v-if="spec.item">
                    <td>{{ spec.item.cat_name }}</td>
                    <td>{{ spec.item.spec_name }}</td>
                    <td>{{ spec.item.spec_price }}</td>
                    <td class="with-image">
                        <img :src="imageLinks[spec.item.img_src]" :alt="spec.item.img_alt" />
                    </td>
                </template>
                <td v-else colspan="4" class="full-row">
                    There is no daily special on {{ dayName }}.
                </td>
            </tr>
        </tbody>
    </table>
</template>
