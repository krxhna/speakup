<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 px-6 lg:px-8">
      <div  class="sm:align-center sm:flex sm:flex-col">
      <span class="w-full my-2 flex justify-center items-center">
        <img id="teambox" class="h-10" src="@/logo.png"/>
      
      </span>
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">
          Pricing Plans
        </h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">
          Start building for free, then add a site plan to go live. Account plans unlock
          additional features.
        </p>
        <div
          class="relative mt-6 flex self-center rounded-lg gap-2 bg-foreground p-1 sm:mt-8"
        >
          <UiButton
            type="button"
            @click="billingPreiod = 'monthly'"
            :variant="billingPreiod === 'monthly' ? 'secondary' : 'default'"
          >
            Monthly billing
          </UiButton>
          <UiButton
            type="button"
            @click="billingPreiod = 'annual'"
            :variant="billingPreiod === 'annual' ? 'secondary' : 'default'"
          >
            Yearly billing
          </UiButton>
        </div>
      </div>
      <div
      
        class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
      >
        <div
          v-for="tier in tiers"
          :key="tier.name"
          :class="{
            'border-primary border-2 shadow-lg shadow-primary relative':
              tier.name === 'Pro',
          }"
          class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
        >
          <div class="p-6">
            <UiBadge v-if="tier.name === 'Pro'" class="absolute -top-3 py-1">
              <SparklesIcon class="h-5 w-5 mr-2" />
              Most popular</UiBadge
            >
            <h2 class="text-lg font-medium leading-6 text-gray-900">{{ tier.name }}</h2>
            <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
            <p v-if="billingPreiod === 'monthly'" class="mt-8">
              <span class="text-4xl font-bold tracking-tight text-gray-900"
                >${{ tier.priceMonthly }}</span
              >
              {{ " " }}
              <span class="text-base font-medium text-gray-500">/mo</span>
            </p>
            <p v-else class="mt-8">
              <span class="text-4xl font-bold tracking-tight text-gray-900"
                >${{ tier.priceAnnual }}</span
              >
              {{ " " }}
              <span class="text-base font-medium text-gray-500">/yr</span>
            </p>
            <a v-if="billingPreiod === 'monthly'" :href="tier.hrefMonthly">
              <UiButton
                :variant="tier.name === 'Pro' ? 'default' : 'outline'"
                class="w-full mt-8"
                :class="{
                  'shadow-sm shadow-primary relative': tier.name === 'Pro',
                }"
              >
                Buy {{ tier.name }}
              </UiButton>
            </a>
            <a v-else :href="tier.hrefAnnual">
              <UiButton
                :variant="tier.name === 'Pro' ? 'default' : 'outline'"
                class="w-full mt-8"
                :class="{
                  'shadow-sm shadow-primary relative': tier.name === 'Pro',
                }"
              >
                Buy {{ tier.name }}
              </UiButton>
            </a>
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3 class="text-sm font-medium text-gray-900">What's included</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li
                v-for="feature in tier.includedFeatures"
                :key="feature"
                class="flex space-x-3"
              >
                <CheckIcon
                  class="h-5 w-5 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span class="text-sm text-gray-500">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center flex-col mb-10">
      <PricingFaq />
      <div class="flex justify-center items-center">
        <a href="#teambox">
          <button
            class="text-black hover:font-semibold transition-all mt-8 block l py-3 px-6 border border-transparent rounded-md text-center font-medium'"
          >
            Get Started
          </button>
        </a>
      </div>
      <PricingTestimonials />

      <span class="text-center text-gray-400"
        >Got questions? or Need any assistance?
        <a class="underline text-gray-600" href="mailto:team@archsynth.com">Contact us</a>
      </span>

      <div class="flex justify-center items-center">
        <a href="#teambox">
          <button
            class="bg-black text-white hover:bg-indigo-600 mt-8 block l py-3 px-6 border border-transparent rounded-md text-center font-medium'"
          >
            Sign up now
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, SparklesIcon } from "@heroicons/vue/20/solid";

const billingPreiod = ref("monthly");

const tiers = [
  {
    name: "Hobby",
    hrefMonthly: "hrefMonthly",
    hrefAnnual: "hrefAnnual",
    priceMonthly: 12,
    priceAnnual: 120,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
    ],
  },

  {
    name: "Pro",
    hrefMonthly: "hrefMonthly",
    hrefAnnual: "hrefAnnual",
    priceMonthly: 29,
    priceAnnual: 290,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
    ],
  },
  {
    name: "Enterprise",
    href: "#",
    hrefMonthly: "hrefMonthly",
    hrefAnnual: "hrefAnnual",
    priceMonthly: 120,
    priceAnnual: 1200,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
      "Id sed tellus in varius quisque.",
      "Risus egestas faucibus.",
      "Risus cursus ullamcorper.",
    ],
  },
];
</script>
