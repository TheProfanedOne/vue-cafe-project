import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { MenuItem } from "@/types/item-types";

export const useBreakfastStore = defineStore('breakfast', () => {
    const menu = ref<MenuItem[]>([]);
    const menuLength = computed(() => menu.value.length);

    return {
        menu, menuLength
    };
});

export const useLunchStore = defineStore('lunch', () => {
    const menu = ref<MenuItem[]>([]);
    const menuLength = computed(() => menu.value.length);

    return {
        menu, menuLength
    };
});

export const useDinnerStore = defineStore('dinner', () => {
    const menu = ref<MenuItem[]>([]);
    const menuLength = computed(() => menu.value.length);

    return {
        menu, menuLength
    };
});

