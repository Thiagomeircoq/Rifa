<template>
    <div class="grid grid-cols-3 gap-4">
        <Button v-for="value in purchaseOptions" :key="value">{{ value }}</Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const purchaseOptions = ['+10', '+20', '+50', '+100', '+200', '+300']
</script>