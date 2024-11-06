<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

import DateRangePicker from '../components/DataRangePicker.vue'
import MainNav from '../components/MainNav.vue'
import Overview from '../components/Overview.vue'
import RecentSales from '../components/RecentSales.vue'

import Search from '../components/Search.vue'
import TeamSwitcher from '../components/TeamSwitcher.vue'
import UserNav from '../components/UserNav.vue'
import CotasContent from '../components/CotasContent.vue'
</script>

<template>
  <div class="flex-col md:flex">
    <div class="border-b">
      <div class="flex h-16 items-center px-4 container">
        <div class="flex items-center mr-10">
          <Avatar />
        </div>
        <MainNav class="mx-6" />
        <div class="ml-auto flex items-center space-x-4">
          <DarkMode />
          <!-- <UserNav /> -->
          <Button>Login</Button>
        </div>
      </div>
    </div>
  </div>

  <section class="flex-1 container p-5">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
      <Card class="col-span-3">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <NuxtImg src="/img/exibe-numeros.png" class="w-full" />
        </CardHeader>
        <CardContent>
          <Button size="xs" class="w-full">
            Ver meus números
          </Button>
          <div class="flex items-center gap-1 mt-4">
            <span class="text-sm">Campanha</span>
            <Button size="xs" variant="ghost">16/05/25 ás 18h20</Button>
          </div>
        </CardContent>
      </Card>
      <Card class="col-span-5">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <div class="flex items-center gap-1">
            <span class="text-md font-bold">Cotas</span>
            <span class="text-md">Escolha sua sorte</span>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea class="h-96">
            <CotasContent />
          </ScrollArea>
        </CardContent>
      </Card>
      <Card class="col-span-4">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <div class="flex items-center gap-1">
            <span class="text-md font-bold">Cotas</span>
            <span class="text-md">Escolha sua sorte</span>
          </div>
        </CardHeader>
        <CardContent>
          
        </CardContent>
      </Card>
      <Card class="col-span-4">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <div class="flex items-center gap-1">
            <span class="text-md font-bold">Cotas</span>
            <span class="text-md">Escolha sua sorte</span>
          </div>
        </CardHeader>
        <CardContent>
          
        </CardContent>
      </Card>

      
    </div>

  </section>

</template>