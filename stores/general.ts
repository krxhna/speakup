import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", () => {
  const isAuthOverlayOpen = ref(false)

  return { isAuthOverlayOpen };
});