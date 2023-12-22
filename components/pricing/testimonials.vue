<template>
  <section>
    <div
      class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl"
    >
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div
          class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100w sm:align-middle sm:p-8 rounded-2xl"
        >
          <div class="flex w-full mb-4">
            <div class="flex gap-2">
              <div v-for="item in 5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 text-green-500"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- <div class="overflow-hidden">
                <img
                  alt=""
                  class="inline-block object-cover rounded-full h-9 w-9"
                  src="https://ph-avatars.imgix.net/5087155/4c1ee39c-1c09-463b-a728-866149df3bfe?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=1"
                />
              </div> -->
            <div class="flex-grow pl-3">
              <!-- <h6 class="text-lg font-medium leading-6 text-black">
                  Rupin Mathur
                </h6> -->
              <!-- <p class="text-base text-gray-500">@Twitter_Handle</p> -->
            </div>
          </div>
          <div class="w-full mb-4">
            <p class="text-base text-gray-500">
              "The first time I used this, I was mind-blown. It used to take me hours to
              bring an idea to a render, but now, it literally takes me seconds. Not only
              that, but I also find inspiration from it. This technology is truly
              mind-blowing, and I can't wait to see how it evolves in the coming years. I
              highly recommend it, it's totally worth it."
            </p>
          </div>
          <div class="w-full text">
            <span href="#" class="text-xs text-right text-blue-500 hoverno">
              Ania Z, Warsaw
            </span>
          </div>
        </div>

        <div
          class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100w sm:align-middle sm:p-8 rounded-2xl"
        >
          <div class="flex w-full mb-4">
            <div class="flex gap-2">
              <div v-for="item in 5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 text-green-500"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- <div class="overflow-hidden">
                <img
                  alt=""
                  class="inline-block object-cover rounded-full h-9 w-9"
                  src="https://www.strabag-cdn.net/comp/_images/logos/strabag_se_logo.png"
                />
              </div> -->
            <!-- <div class="flex-grow pl-3">
                <h6 class="text-lg font-medium leading-6 text-black">
                  Barabora V.
                </h6>
       
              </div> -->
          </div>
          <div class="w-full mb-4">
            <p class="text-base text-gray-500">
              "This feels like magic, saved me so much time. excellent design as well,very
              easy to use I would easily give it a perfect 10/10 rating."
            </p>
          </div>
          <div class="w-full text">
            <span href="#" class="text-xs text-right text-blue-500 hoverno">
              Barbora V, Toronto
            </span>
          </div>
        </div>

        <div
          class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100w sm:align-middle sm:p-8 rounded-2xl"
        >
          <div class="flex w-full mb-4">
            <div class="flex gap-2">
              <div v-for="item in 5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 text-green-500"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- <div class="overflow-hidden">
                <img
                  alt=""
                  class="inline-block object-cover rounded-full h-9 w-9"
                  src="https://styles.redditmedia.com/t5_72j469/styles/communityIcon_jogms241j0s91.png"
                />
              </div>
              <div class="flex-grow pl-3">
                <h6 class="text-lg font-medium leading-6 text-black">
                  A.D. Whitsett
                </h6>
         
              </div> -->
          </div>
          <div class="w-full mb-4">
            <p class="text-base text-gray-500">
              " As a small-scale landscaper who also handles design work for my clients, I
              cannot stress enough how invaluable this app has been for my business.
              Hiring a dedicated designer is simply not feasible for me, but with this
              app, I have been able to improve the quality of my designs to a whole new
              level. The $29 usage fee has been an incredibly worthwhile investment, as it
              has allowed me to double my fees and client absouletly love my work"
            </p>
          </div>
          <div class="w-full text">
            <span href="#" class="text-xs text-right text-blue-500 hoverno"
              >Landscape architect, Santa Monica
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
