<template>
    <Card :class="cardClass">
        <CardHeader class="flex flex-col justify-between space-y-0 pb-2">
            <div class="flex items-center gap-2">
                <component :is="icon" class="text-primary" />
                <h2 class="text-xl font-bold tracking-tight">{{ title }}</h2>
            </div>
            <CardDescription>{{ description }}</CardDescription>
        </CardHeader>
        <CardContent>
            <slot />
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Card, CardHeader, CardDescription, CardContent } from '@/components/ui/card'

const props = defineProps({
    title: String,
    description: String,
    icon: String,
    cardClass: { type: String, default: '' }
})
</script>