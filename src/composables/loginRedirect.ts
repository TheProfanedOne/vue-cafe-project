import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

export default function useLoginRedirect(path: string) {
    const store = useUserStore();
    const notLoggedIn = store.currUser === '';
    const router = useRouter();

    onBeforeMount(() => {
        if (notLoggedIn) {
            router.push(`/login?from=${path}`);
        }
    });

    return notLoggedIn;
}
