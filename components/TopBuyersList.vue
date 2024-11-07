<template>
    <div class="flex flex-col gap-4 mt-4">
        <div v-for="buyer in buyers" :key="buyer.name" class="flex items-center">
            <Avatar class="h-9 w-9">
                <AvatarImage :src="buyer.avatar" :alt="buyer.name" />
                <AvatarFallback>{{ buyer.initials }}</AvatarFallback>
            </Avatar>
            <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">{{ buyer.name }}</p>
            </div>
            <div class="ml-auto font-medium">{{ buyer.amount }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { CardContent } from '@/components/ui/card'

const buyers = [
    { name: 'Olivia Martin', amount: 340, avatar: '/avatars/01.png', initials: 'OM' },
    { name: 'Thiago Meira', amount: 320, avatar: '/avatars/01.png', initials: 'TM' }
]
</script>