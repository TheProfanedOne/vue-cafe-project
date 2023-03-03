import { inject, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { userKey, type UserInject } from '@/composables/keys';

export default function useLoginRedirect(path: string) {
    const { currUser } = inject(userKey) as UserInject;
    const notLoggedIn = currUser.value === '';
    const router = useRouter();

    onBeforeMount(() => {
        if (notLoggedIn) {
            router.push(`/login/${path}`);
        }
    });

    return notLoggedIn;
}
