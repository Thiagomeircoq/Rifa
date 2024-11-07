<template>
    <div class="flex flex-wrap gap-2 h-10">
        <Button
            variant="outline"
            v-for="num in 1000"
            :key="num"
            class="w-20"
            :class="{
                'bg-primary text-white hover:bg-primary hover:text-white': selectedButtons.includes(num),
                '': !selectedButtons.includes(num)
            }"
            @click="toggleButton(num)"
        >
            {{ String(num - 1).padStart(3, '0') }}
        </Button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const selectedButtons = ref([]);

        const toggleButton = (num) => {
            const index = selectedButtons.value.indexOf(num);
            if (index === -1) {
                selectedButtons.value.push(num);
            } else {
                selectedButtons.value.splice(index, 1);
            }
        };

        return {
            selectedButtons,
            toggleButton,
        };
    },
};
</script>