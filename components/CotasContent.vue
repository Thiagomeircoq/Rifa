<template>
    <div class="flex flex-wrap gap-2 h-10">
        <Button variant="outline" v-for="num in 1000" :key="num" class="w-20">
            {{ String(num - 1).padStart(3, '0') }}
        </Button>
    </div>
</template>