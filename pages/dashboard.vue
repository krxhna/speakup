<template>
  <div class="h-screen w-screen flex justify-center items-center">

  <UiLoadingspinner v-if="userStore.checkingStatus"/>
    <span v-else-if="userStore.email">
      logged in as {{ userStore.email }}
      <UiButton @click="userStore.logout()">logout</UiButton>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

onMounted(() => {
  userStore.getUser();
});
</script>

<style scoped></style>
