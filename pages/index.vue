<template>
  <div class="flex-col md:flex">
    <Header />
  </div>

  <section class="flex-1 container p-5">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-8 lg:grid-rows-3">

      <Card class="lg:row-span-2 md:col-span-5 lg:col-span-3">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <NuxtImg src="/img/exibe-numeros.png" class="w-full" />
          <!-- <Skeleton className="w-full bg-slate-50 rounded-xl" /> -->
        </CardHeader>
        <CardContent>
          <Button class="w-full">
            R$ 2,50
          </Button>
          <CardDescription>
            Campanha
            <Button size="xs" variant="ghost">16/05/25 ás 18h20</Button>
          </CardDescription>
        </CardContent>
      </Card>

      <UserStatsCard class="col-span-5" title="Cotas" description="Compre as cotas" icon="LucideTicket">
        <!-- <CotasList /> -->
        <PurchaseButtonGroup />
        <Separator orientation="horizontal" class="mt-5 mb-2" />
      </UserStatsCard>

      <Card class="col-span-3 p-6 h-20">
        <div class="flex justify-center items-center gap-4">
          <Button variant="outline" size="icon" class="h-8 w-8 shrink-0 rounded-full" :disabled="goal <= 200"
            @click="goal -= 1">
            <MinusIcon class="h-4 w-4" />
            <span class="sr-only">Decrease</span>
          </Button>
          <div class="text-2xl bg-secondary p-2 px-6 rounded-lg font-bold tracking-tighter">
            {{ goal }}
          </div>
          <Button variant="outline" size="icon" class="h-8 w-8 shrink-0 rounded-full" :disabled="goal >= 400"
            @click="goal += 1">
            <PlusIcon class="h-4 w-4" />
            <span class="sr-only">Increase</span>
          </Button>
        </div>
      </Card>

      <Button class="col-span-2 p-6 h-20 flex gap-4 justify-start">
        <LucideShoppingCart />
        <div class="flex flex-col">
          <span class="font-bold">Participar</span>
          <span class="text-sm">R$ 2.497,50</span>
        </div>
      </Button>

      <UserStatsCard class="col-span-4" title="Mais Compradores" description="Pessoas que compraram mais cotas na rifa"
        icon="LucidePartyPopper">
        <TopBuyersList />
      </UserStatsCard>

      <UserStatsCard class="col-span-4" title="Premiados" description="Vencedores da rifa" icon="LucideTrophy">
        <TopBuyersList />
      </UserStatsCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import CotasList from '~/components/CotasList.vue';
import Header from '~/components/Header.vue';
import PurchaseButtonGroup from '~/components/PurchaseButtonGroup.vue';
import TopBuyersList from '~/components/TopBuyersList.vue';
import CardDescription from '~/components/ui/card/CardDescription.vue';
import Separator from '~/components/ui/separator/Separator.vue'
import UserStatsCard from '~/components/UserStatsCard.vue';

const goal = ref(350)

type Data = typeof data[number]
const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]
</script>