<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <Button @click="toggleColorMode" variant="ghost">
        <Icon icon="radix-icons:moon" v-if="colorMode.preference === 'light'"
            class="h-[1.2rem] w-[1.2rem] transition-transform rotate-0 scale-100" />
        <Icon icon="radix-icons:sun" v-else class="h-[1.2rem] w-[1.2rem] transition-transform rotate-0 scale-100" />
        <span class="sr-only">Toggle theme</span>
    </Button>
</template>
