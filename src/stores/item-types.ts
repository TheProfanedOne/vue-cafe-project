import type { DateTime } from "luxon";

export type MenuItem = {
    item_name: string;
    item_price: string;
    img_src: string;
    img_alt: string;
};

export type SpecialItem = {
    cat_name: string;
    spec_name: string;
    spec_price: string;
    img_src: string;
    img_alt: string;
};

export type SpecialBundle = {
    item: SpecialItem | null;
    now: DateTime;
};
