<script setup lang="ts">
import type { MenuItem } from '@/types/item-types';
import imageLinks from '@/composables/imageLinks';

defineProps<{
    currMenu: string;
    items: MenuItem[];
}>();
</script>

<template>
    <table>
        <caption>
            <h3>{{ currMenu }} Menu</h3>
        </caption>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th class="with-image">Image</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.item_name">
                <td>{{ item.item_name }}</td>
                <td>{{ item.item_price }}</td>
                <td class="with-image">
                    <img :src="imageLinks[item.img_src]" :alt="item.img_alt" />
                </td>
            </tr>
        </tbody>
    </table>
</template>
