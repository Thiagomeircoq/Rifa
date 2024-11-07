<template>
    <div class="border-b">
        <div class="flex h-16 items-center px-4 container">
            <div class="flex items-center mr-10">
                <Avatar />
            </div>
            <MainNav class="mx-6" />
            <div class="ml-auto flex items-center space-x-4">
                <DarkMode />
                <Button>Login</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import MainNav from '../components/MainNav.vue'
import DarkMode from '../components/DarkMode.vue'
</script>