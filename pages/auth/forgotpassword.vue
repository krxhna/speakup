<template>
  <div class="flex justify-center items-center h-screen bg-gradient-to-tr from-primary to-primary/80">
    <!-- Your template here -->
    <UiCard class="flex p-10 justify-center items-center flex-col gap-3">
      <h1 class="text-lg font-semibold">

        Please enter your email associated with the account
      </h1>
      <UiInput
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        v-model="email"
        required="true"
      />
      <UiButton :disabled="!email" @click="sendPasswordResetEmail1">
        Send Password Reset Email
      </UiButton>

      <p class="font-mono text-center font-semibold text-xs">
        Need more help? contact us <br />
        {{ myConfig.supportEmail  }}
      </p>
    </UiCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "@/firebase"; // Import your Firebase setup
import { sendPasswordResetEmail } from "firebase/auth";
import myConfig from '@/myConfig.json';

const email = ref();
const sendPasswordResetEmail1 = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value);
    alert("Password reset email sent successfully, please check your inbox");
    console.log("Password reset email sent successfully");
  } catch (error) {
    alert(error);
    console.error("Error sending password reset email", error.message);
  }
};
</script>
