<template>
    <div class="bg-foreground h-screen w-screen flex justify-center items-center">
      <UiCard>
        <UiCardHeader>{{ counterStore.count }}</UiCardHeader>
        <UiCardContent>
        
        <UiButton @click="counterStore.increment">click</UiButton>
        </UiCardContent>
      </UiCard>
    </div>
  </template>
  
  <script setup lang="ts">
  let counterStore = useCounterStore();
  </script>
  
  <style scoped></style>
  