<template>
  <div class="flex-col md:flex">
    <Header />
  </div>

  <section class="flex-1 container p-5">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-8 lg:grid-rows-3">

      <Card class="lg:row-span-2 md:col-span-5 lg:col-span-3">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <NuxtImg src="/img/exibe-numeros.png" class="w-full" />
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
        <PurchaseButtonGroup @updateGoal="updateGoal" />
      </UserStatsCard>

      <Card class="col-span-3 flex justify-center items-center h-16">
        <div class="flex justify-center items-center gap-4">
          <Button variant="outline" size="icon" class="h-8 w-8 shrink-0 rounded-full" :disabled="goal <= 0"
            @click="updateGoal(-1)">
            <MinusIcon class="h-4 w-4" />
            <span class="sr-only">Decrease</span>
          </Button>
          <div class="text-2xl bg-secondary p-2 px-6 rounded-lg font-bold tracking-tighter">
            {{ goal }}
          </div>
          <Button variant="outline" size="icon" class="h-8 w-8 shrink-0 rounded-full" :disabled="goal >= maxGoal"
            @click="updateGoal(1)">
            <PlusIcon class="h-4 w-4" />
            <span class="sr-only">Increase</span>
          </Button>
        </div>
      </Card>

      <Form v-slot="{ handleSubmit }" as="" keep-values>
        <Dialog>
          <DialogTrigger as-child>
            <Button class="col-span-2 p-6 h-16 flex gap-4 justify-start">
              <LucideShoppingCart />
              <div class="flex items-start flex-col">
                <span class="font-bold">Participar</span>
                <span class="text-sm">{{ formattedPrice }}</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle class="flex gap-2 items-center">
                <LucideShoppingCart class="text-primary" />
                Checkout
              </DialogTitle>
              <Separator orientation="horizontal" class="my-2" />

              <DialogDescription>
                Você está adquirindo {{ goal }} titulos(s) da ação 70 mil reais no pix
              </DialogDescription>
            </DialogHeader>

            <form id="dialogForm" class="flex flex-col gap-2">
              <FormField v-slot="{ componentField }" name="phone">
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input type="text" v-mask="'(##) #####-####'" placeholder="(99) 99999-9999"
                      v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="name">
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </form>

            <DialogFooter>
              <Button type="submit" form="dialogForm">
                Concluir Reserva
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Form>

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
import { formatPrice } from '~/utils/index'
import Header from '~/components/Header.vue';
import PurchaseButtonGroup from '~/components/PurchaseButtonGroup.vue';
import TopBuyersList from '~/components/TopBuyersList.vue';
import CardDescription from '~/components/ui/card/CardDescription.vue';
import Separator from '~/components/ui/separator/Separator.vue'
import UserStatsCard from '~/components/UserStatsCard.vue';
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

const goal = ref(6)
const maxGoal = 10000
const minGoal = 6;
const pricePerUnit = 2.5

function updateGoal(increment: number) {
  goal.value = Math.min(Math.max(goal.value + increment, minGoal), maxGoal)
}

const totalPrice = computed(() => goal.value * pricePerUnit)
const formattedPrice = computed(() => formatPrice(totalPrice.value))
</script>