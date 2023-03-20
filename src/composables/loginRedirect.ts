import { onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

export default function useLoginRedirect(path: string) {
    const store = useUserStore();
    const router = useRouter();

    onBeforeMount(() => {
        if (store.notLoggedIn) {
            router.push(`/login?from=${path}`);
        }
    });

    return store.notLoggedIn;
}
