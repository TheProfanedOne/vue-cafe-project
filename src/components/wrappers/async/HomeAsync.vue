<script setup lang="ts">
    import { DateTime } from 'luxon';
    import type { SpecialBundle } from '@/stores/item-types';
    import sds from '@/service/SpecialsDataService';
    import useTitle from '@/composables/title';

    useTitle('Rise and Grind Cafe');

    const props = defineProps<{
        spec: SpecialBundle;
    }>();

    const emit = defineEmits<{
        (e: 'update:spec', newValue: SpecialBundle): void;
    }>();

    const rightNow = DateTime.now();
    const dayName = rightNow.toFormat('cccc');

    if (props.spec.item === null || props.spec.now.toFormat('cccc') !== dayName) {
        const res = await sds.retrieveDailySpecial(dayName);
        if (res.data !== 'Error: No Special Found') {
            emit('update:spec', {
                item: res.data,
                now: rightNow,
            });
        } else {
            emit('update:spec', {
                item: null,
                now: rightNow,
            });
        }
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
                        <img :src="spec.item.img_src" :alt="spec.item.img_alt" />
                    </td>
                </template>
                <td v-else colspan="4" class="full-row">
                    There is no daily special on {{ dayName }}.
                </td>
            </tr>
        </tbody>
    </table>
</template>
