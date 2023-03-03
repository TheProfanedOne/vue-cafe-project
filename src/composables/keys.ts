import type { InjectionKey, Ref } from 'vue';
import type { MenuItem, SpecialBundle } from '@/types/item-types';

export interface UserInject {
    currUser: Ref<string>;
    setUser: (newUser: string) => void;
}

export interface SpecInject {
    spec: Ref<SpecialBundle>;
    setSpec: (newSpec: SpecialBundle) => void;
}

export interface MenuInject {
    menu: Ref<MenuItem[]>;
    setMenu: (newMenu: MenuItem[]) => void;
}

export const userKey: InjectionKey<UserInject> = Symbol();
export const specKey: InjectionKey<SpecInject> = Symbol();
export const bMenuKey: InjectionKey<MenuInject> = Symbol();
export const lMenuKey: InjectionKey<MenuInject> = Symbol();
export const dMenuKey: InjectionKey<MenuInject> = Symbol();
