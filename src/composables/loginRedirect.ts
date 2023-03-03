import { inject, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { userKey } from '@/composables/keys';

export default function useLoginRedirect(path: string) {
    const { currUser } = inject(userKey)!;
    const notLoggedIn = currUser.value === '';
    const router = useRouter();

    onBeforeMount(() => {
        if (notLoggedIn) {
            router.push(`/login?from=${path}`);
        }
    });

    return notLoggedIn;
}
