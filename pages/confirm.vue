<template>
  <div
    v-if="updating"
    class="h-screen w-screen fixed z-20 bg-white flex justify-center items-center"
  >
    <button class="flex justify-center py-5 px-3 font-semibold animate-pulse rounded-md">
      <UiLoadingspinner class="h-2" />
      Upgrading your account..
    </button>
  </div>
  <div v-if="!updating" class="h-screen flex justify-center items-center">
    <div
      class="bg-transparent border flex justify-center items-center flex-col backdrop-blur-lg shadow-lg rounded-md p-6 md:mx-auto"
    >
      <div class="animation-ctn m-5">
        <div class="icon icon--order-success svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
            <g fill="none" stroke="#22AE73" stroke-width="2">
              <circle
                cx="77"
                cy="77"
                r="72"
                style="stroke-dasharray: 480px, 480px; stroke-dashoffset: 960px"
              ></circle>
              <circle
                id="colored"
                fill="#22AE73"
                cx="77"
                cy="77"
                r="72"
                style="stroke-dasharray: 480px, 480px; stroke-dashoffset: 960px"
              ></circle>
              <polyline
                class="st0"
                stroke="#fff"
                stroke-width="10"
                points="43.5,77.8 63.7,97.9 112.2,49.4 "
                style="stroke-dasharray: 100px, 100px; stroke-dashoffset: 200px"
              />
            </g>
          </svg>
        </div>
      </div>

      <div class="text-center">
        <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
          Payment Done!
        </h3>
        <p class="text-gray-600 my-2">
          Thank you for completing your secure online payment.
        </p>
        <p>Your Pro account will be activated within 2 hours!</p>
        <div class="py-10 text-center">
          <a
            href="/dashboard"
            class="px-12 hover:scale-105 cursor-pointer transition-all bg-black rounded-md text-white font-semibold py-3"
          >
            Go Home
          </a>
        </div>
        <!-- <div class="d">Redirecting to home in {{ timer }} secs</div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "@vueuse/firebase/useAuth";
import { auth, db } from "@/firebase";
import { doc, setDoc, arrayUnion, getDoc } from "firebase/firestore";
import { useAsyncState, now } from "@vueuse/core";
// import { useaffilate } from "@/composables/useaffiliate";
// import { isLocalhost } from "@/composables/utils";

//get token, if token match, check if they're logged in,  upgrade

let route = useRoute();
let token = route.query.token;
let updating = ref(false);

let plan = route.query.plan;

onMounted(async () => {
  updating.value = true;
  if (token == "qw32145fsdjhajkfg") {
    console.log("token match ");

    const { isAuthenticated, user } = await useAuth(auth);

    await sleep(3000);

    if (isAuthenticated.value) {
      console.log("user exists");
      let uid = user.value?.uid as string;
      setDoc(
        doc(db, "users", uid),
        {
          ispro: true,
          plan: plan,
          session_id: route.query.session_id,
          updatedat: now(),
          email: user.value?.email,
          uid: user.value?.uid,
          updated_date: new Date(now()),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        { merge: true }
      )
        .then(async () => {

          //prioceddign oif its prod
          if (plan == "7daypass") {
            // nuxtApp.$fb.tarck()
            useTrackEvent("purchase", {
              currency: "USD",
              value: 9.99,
              transaction_id: route.query.session_id,
              items: [
                {
                  item_id: "7 day pass",
                  item_name: "7day pass",
                },
              ],
              event_category: "purchase",
              event_label: "method",
            });
            //await useaffilate(`basic_upgrades`);
            //awai send_webhook(`ARCHSYNTH NEW SALE: $9.99 ${user.value?.email}`);
          }

          if (plan == "Pro") {
            // nuxtApp.$fb.tarck()
            useTrackEvent("purchase", {
              currency: "USD",
              value: 29,
              transaction_id: route.query.session_id,
              items: [
                {
                  item_id: "pro",
                  item_name: "pro",
                },
              ],
              event_category: "purchase",
              event_label: "method",
            });
            //await useaffilate(`pro_upgrades`);

            //awai send_webhook(`ARCHSYNTH NEW SALE: $29 ${user.value?.email}`);
          }

          if (plan == "Basic") {
            // nuxtApp.$fb.tarck()
            useTrackEvent("purchase", {
              currency: "USD",
              value: 9.99,
              transaction_id: route.query.session_id,
              items: [
                {
                  item_id: "Basic",
                  item_name: "Basic",
                },
              ],
              event_category: "purchase",
              event_label: "method",
            });
            ////await useaffilate(`basic_upgrades`);
            //awai send_webhook(`ARCHSYNTH NEW SALE: $9/mo ${user.value?.email}`);
          }

          if (plan == "Business") {
            // nuxtApp.$fb.tarck()
            useTrackEvent("purchase", {
              currency: "USD",
              value: 9.99,
              transaction_id: route.query.session_id,
              items: [
                {
                  item_id: "Business",
                  item_name: "Business",
                },
              ],
              event_category: "purchase",
              event_label: "method",
            });
          ////await useaffilate(`business_upgrades`);
            //awai send_webhook(`ARCHSYNTH NEW SALE: 199/mo ${user.value?.email}`);
          }
          // console.log("donw");
          // //awai send_webhook(`ARCHSYNTH NEW SALE: $9.99 ${user.value?.email}`);
          updating.value = false;
        })
        .catch((e) => {
          console.log(e);
          alert("error: contact team@archsynth.com");
        });
    } else {
      alert("youre not authenticated: contact team@archsynth.com");
    }
  } else {
    useRouter().push("/");
  }
});

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style scoped>
.animation-ctn {
  text-align: center;
  margin-top: 5em;
}

@-webkit-keyframes checkmark {
  0% {
    stroke-dashoffset: 100px;
  }

  100% {
    stroke-dashoffset: 200px;
  }
}

@-ms-keyframes checkmark {
  0% {
    stroke-dashoffset: 100px;
  }

  100% {
    stroke-dashoffset: 200px;
  }
}

@keyframes checkmark {
  0% {
    stroke-dashoffset: 100px;
  }

  100% {
    stroke-dashoffset: 0px;
  }
}

@-webkit-keyframes checkmark-circle {
  0% {
    stroke-dashoffset: 480px;
  }

  100% {
    stroke-dashoffset: 960px;
  }
}

@-ms-keyframes checkmark-circle {
  0% {
    stroke-dashoffset: 240px;
  }

  100% {
    stroke-dashoffset: 480px;
  }
}

@keyframes checkmark-circle {
  0% {
    stroke-dashoffset: 480px;
  }

  100% {
    stroke-dashoffset: 960px;
  }
}

@keyframes colored-circle {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}

/* other styles */
/* .svg svg {
      display: none
  }
   */
.inlinesvg .svg svg {
  display: inline;
}

/* .svg img {
      display: none
  } */

.icon--order-success svg polyline {
  -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
  animation: checkmark 0.25s ease-in-out 0.7s backwards;
}

.icon--order-success svg circle {
  -webkit-animation: checkmark-circle 0.6s ease-in-out backwards;
  animation: checkmark-circle 0.6s ease-in-out backwards;
}

.icon--order-success svg circle#colored {
  -webkit-animation: colored-circle 0.6s ease-in-out 0.7s backwards;
  animation: colored-circle 0.6s ease-in-out 0.7s backwards;
}
</style>
