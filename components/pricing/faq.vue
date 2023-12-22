<template>
  <div class="w-full px-4 pt-16">
    <div class="text-center text-gray-600 text-4xl font-semibold">FAQ</div>
    <div
      class="mx-auto w-full max-w-2xl rounded-2xl bg-transparent gap-3 flex flex-col p-2"
    >
      <!-- /// -->
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl"> Can I use it for my client projects? </span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel
          class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
        >
          Yes, you can use it for your client projects. You retain 100% of the copyright
          to everything you produce, so you have the freedom to use it however you like.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl"> Can i use sketches exported from SketchUp? </span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel
          class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
        >
          Absolutely! ArchSynth is not only compatible with hand-drawn sketches, but it
          also supports sketches created in SketchUp. To utilize SketchUp sketches in
          ArchSynth, simply export them as PNG files and upload them to the platform.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full group justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl">What is your refund policy & cancellation policy </span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>
        <!-- While we offer a flexible cancellation policy and users can cancel
              their subscription anytime by navigating to their account settings,
              please note that there will be no refunds issued to prevent abuse and
              data theft. However, we are committed to providing the best service
              possible, and we'll do our best to ensure that you are satisfied with
              our product. -->
        <DisclosurePanel class="px-4 pt-4 pb-2 text-lg font-semibold text-gray-400">
          We have full confidence that you will be satisfied with our product. However, if
          for any reason you are not completely happy with your purchase, we provide a
          refund policy without any questions asked. To qualify for a refund, please
          contact us via email
          <a :href="`mailto:${myConfig.supportEmail}`" class="underline">( {{ myConfig.supportEmail }} )</a>
          within seven days, as long as the number of renders is less than 10. We will
          take care of the rest and process your refund promptly.

          <br />
          <br />

          We understand that things change, and that's why we offer a flexible
          cancellation policy. You can cancel your subscription anytime by navigating to
          your account settings on the left-hand side of the screen and clicking the
          "cancel subscription" button.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl">How long does each render takes?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel
          class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
        >
          On average, it takes about 20 seconds to render a sketch
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl">Do you offer student discounts?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel
          class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
        >
          Yes, we offer special tiers for students and educators, tailored to meet their
          specific needs. To access these exclusive tiers, please email us at
          <a href="mailto:team@archsynth.com"> team@archsynth.com.</a>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full group justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl">Is payment secure? </span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel class="px-4 pt-4 pb-2 text-lg font-semibold text-gray-400">
          Yes, our payment service is secure. We use Stripe for financial processing, and
          we do not store any information about your card. Stripe ensures bank-level
          security standards.
        </DisclosurePanel>
      </Disclosure>
      <!-- /// -->
      <!-- <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span class="text-2xl">How much does archsynth cost?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
              class="h-5 w-5 text-gray-600 group-hover:text-black"
            />
          </DisclosureButton>
  
          <DisclosurePanel
            class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
          >
            Currently, the Pro plan is priced at $29 per month, but if you prefer not to
            subscribe, you have the option to purchase a 7-day pass for $9.99.
          </DisclosurePanel>
        </Disclosure> -->

      <!-- /// -->
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl"> What file formats of sketch do you support? </span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel
          class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
        >
          We accept JPG, PNG, WebP and AVIF
        </DisclosurePanel>
      </Disclosure>

      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl">Where is my data stored?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel
          class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
        >
          Data is stored securely on servers in the United States, by vetted, highly
          secure, third party partners of us.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span class="text-2xl">Who owns the copyright to the renders?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
            class="h-5 w-5 text-gray-600 group-hover:text-black"
          />
        </DisclosureButton>

        <DisclosurePanel
          class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
        >
          You! With the commercial usage license, you have complete ownership and 100%
          copyright of every render you generate. This ownership extends indefinitely,
          ensuring your control and rights over your creations for lifetime.
        </DisclosurePanel>
      </Disclosure>
      <!-- <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-2xl font-medium text-gray-600 md:hover:bg-white md:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span class="text-2xl"> What methods of payment do you accept? </span>
            <ChevronUpIcon
              :class="open ? 'rotate-360 transform' : 'rotate-180 transform'"
              class="h-5 w-5 text-gray-600 group-hover:text-black"
            />
          </DisclosureButton>
  
          <DisclosurePanel
            class="transition-all px-4 pt-4 pb-2 text-lg font-semibold text-gray-400"
          >
            We offer multiple payment options to accommodate our customers,
            including credit and debit cards like MasterCard, VISA, and American
            Express. Additionally, we support alternative payment methods such as
            iDeal, SOFORT, Bancontact, Przelewy24, Giropay, EPS, GrabPay, AliPay,
            and more.
            <br />
  
            However, it's important to note that at this time, we do not accept
            PayPal or cryptocurrency as valid forms of payment, and we have no
            immediate plans to include them in our payment options.
          </DisclosurePanel>
        </Disclosure> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
import { ref, onBeforeMount } from "vue";
import myConfig from '@/myConfig.json';


</script>

<style scoped></style>
