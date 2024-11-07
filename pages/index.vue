<template>
  <div class="flex-col md:flex">
    <Header />
  </div>

  <section class="flex-1 container p-5">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-8">

      <Card class="col-span-3">
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
        <CotasList />
        <Separator orientation="horizontal" class="mt-5 mb-2" />
        <PurchaseButtonGroup />
      </UserStatsCard>

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
</script>