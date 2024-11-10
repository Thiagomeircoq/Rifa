<template>
    <div class="grid grid-cols-3 gap-4">
        <Button class="py-8 flex flex-col" v-for="value in purchaseOptions" :key="value" @click="selectOption(value)">
            <span class="text-2xl font-bold">{{ value }}</span>
            <span class="font-light">SELECIONAR</span>
        </Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    initialOptions: {
        type: Array,
        default: () => ['+10', '+100', '+500', '+1000', '+2000', '+10000'],
    }
})

const emit = defineEmits(['updateGoal'])

const purchaseOptions = props.initialOptions

function selectOption(value: string) {
    const numericValue = parseInt(value.replace('+', ''))
    emit('updateGoal', numericValue)
}
</script>