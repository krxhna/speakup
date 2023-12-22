<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
          This example requires updating your template:
      
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        -->
  <div class="flex min-h-full md:min-h-screen bg-black">
    <div
      class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none bg-white lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-12 w-auto" src="@/logo.png" alt="Your Company" />
          <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Or
            {{ " " }}
            <router-link
              to="/auth/signup"
              class="text-primary font-bold hover:text-primary"
              >create an account</router-link
            >
          </p>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <div
                class="w-full transition-all flex justify-center items-center hover:bg-white"
              >
                <button
                  v-if="!isAuthenticated"
                  class="flex justify-center items-center gap-2 rounded-md bg-white px-5 py-3 w-full text-base font-semibold leading-7 text-black border border-gra shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  @click="signIn"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt=""
                    class="h-5 w-5"
                  />

                  <span>Sign in with Google</span>
                </button>
                <a v-else href="/dashboard">
                  <button
                    class="flex justify-center items-center gap-2 rounded-md bg-black px-5 py-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <span>Go to Dashboard</span>
                  </button>
                </a>
              </div>
            </div>

            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <div class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"
                  >Email address</label
                >
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required="true"
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium text-gray-700"
                  >Password</label
                >
                <div class="mt-1">
                  <input
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required="true"
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-primary  accent-primary focus:ring-primary"
                  />
                  <label for="remember-me" class="ml-2 block text-sm text-"
                    >Remember me</label
                  >
                </div>

                <div class="text-sm">
                  <router-link
                    to="/auth/forgotpassword"
                    class="font-bold hover:text-primary text-primary-700"
                    >Forgot your password?</router-link
                  >
                </div>
              </div>

              <div>
                <button
                  v-if="loading"
                  type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <UiLoadingspinner class="h-3" />
                  <span>Loading..</span>
                </button>
                <button
                  v-else
                  type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-tr from-black to-slate-900 py-4 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  @click="emailsignin()"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block bg-white rotate-180">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { auth } from "@/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "@vueuse/firebase/useAuth";
const { isAuthenticated } = await useAuth(auth);

const email = ref();
const password = ref();
const loading = ref(false);

const emailsignin = () => {
  loading.value = true;
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(async () => {
      // useTrackEvent("sign_up", {
      //   event_category: "engagement",
      //   event_label: "method",
      // });

      router.push("/dashboard");
      loading.value = false;
    })
    .catch((err) => {
      alert(err);
      loading.value = false;
    });
};

const signIn = () => {
  signInWithPopup(auth, new GoogleAuthProvider()).then(() => {
    // useTrackEvent("sign_up", {
    //   event_category: "engagement",
    //   event_label: "method",
    // });
    router.push("/dashboard");
  });
};
const router = useRouter();
</script>