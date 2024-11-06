<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
    <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')">
        <a href="#" class="text-sm font-medium transition-colors hover:text-primary">
            Home
        </a>
        <a href="#"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Sobre Nós
        </a>
        <a href="#"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Termos de uso
        </a>
        <a href="#"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Blog
        </a>
    </nav>
</template>