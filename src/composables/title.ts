import { onMounted } from 'vue';

export default function useTitle(title: string) {
    onMounted(() => {
        document.title = title;
    });
}
