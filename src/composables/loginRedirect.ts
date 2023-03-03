import { inject, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { userKey, type UserInject } from '@/composables/keys';

export default function useLoginRedirect(path: string) {
    const { currUser } = inject(userKey) as UserInject;
    const router = useRouter();

    onBeforeMount(() => {
        if (currUser.value === '') {
            router.push(`/login/${path}`);
        }
    });
}
