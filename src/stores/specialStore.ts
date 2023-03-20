import { defineStore } from "pinia";
import type { SpecialItem } from "@/types/item-types";
import { DateTime } from "luxon";

export const useSpecialStore = defineStore('special', {
    state: () => ({
        item: null as SpecialItem | null,
        now: DateTime.now(),
    }),
    getters: {
        weekday: state => state.now.weekday,
    },
});

