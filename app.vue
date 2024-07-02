<template>
  <div>
    <div class="h-screen ">
      <div class="container w-1/8 mx-auto mt-5  ">
        <div class="p-5 border-b-2 border-b-black">
          <h1
            class="text-center underline text-4xl font-bold bg-gradient-to-r from-orange-700 via-blue-600 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient ">
            0xandix-mbacen</h1>
          <p class="text-center mt-5">
            Full time research | Node Validator Contributor | Alpha Hunter | finding u on crypto world.
          </p>

        </div>
        <hr />
        <button class="bg-black p-2 w-full text-white hover:bg-gray-700 mt-2 block md:hidden" @click="menuOpen=!menuOpen"><i :class="(menuOpen== true ) ? 'mdi mdi-menu-open' : 'mdi mdi-menu'"></i> Menu</button>
        <nav :class="(menuOpen == true ) ? 'mt-5 block' : 'mt-5 hidden md:block'">
          <ul class="flex flex-col md:flex-row md:justify-center md:space-x-5 ">
            <li class="bg-black text-white p-2 hover:underline mb-1">
              <NuxtLink to="/"><i class="mdi mdi-home"></i> Home</NuxtLink>
            </li>
            <li class="bg-black text-white p-2 hover:underline mb-1">
              <NuxtLink to="/projects"><i class="mdi mdi-code-braces" ></i> Projects</NuxtLink>
            </li>

            <li class="bg-black text-white p-2 hover:underline mb-1">
              <NuxtLink to="/blog"><i class="mdi mdi-post"></i> Blog</NuxtLink>
            </li>
            <li class="bg-black text-white p-2 hover:underline mb-1">
              <NuxtLink to="/anonmes"><i class="mdi mdi-incognito-circle"></i> AnonMess</NuxtLink>
            </li>
            <li class="bg-black text-white p-2 hover:underline mb-1">
              <NuxtLink to="/shn"><i class="mdi mdi-zodiac-gemini"></i> shnAI</NuxtLink>
            </li>
          </ul>
        </nav>


        <div class="mt-5 flex flex-col md:flex-row">

          <div class="basis-full md:basis-3/4 ">

            <NuxtPage />
          </div>
          <div class="block md:hidden mt-5 mb-5">
            <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>
            <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>
          </div>


          <div class="basis-full md:basis-1/4 mt-5 mr-3 ml-3">
            <button class="bg-black p-2 w-full text-white hover:bg-gray-600 block md:hidden mb-5 mt-5" @click="sidebar=!sidebar">
             ( <i class="mdi mdi-eye-settings animate-pulse"></i> || <i class="mdi mdi-eye-settings animate-pulse"></i> )
            </button>

            <div :class="(sidebar==true) ? 'block md:block' : 'hidden md:block'">
            <div class="w-100 rounded-lg p-5 border-black border-2 hover:shadow-lg mb-4">
              <h1 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">📍 FIND ME
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h1>
              <ul class="mt-2">
                <li class="flex justify-between p-1">
                  <NuxtLink to="https://instagram.com/andixmb">
                    <i class="mdi mdi-instagram"></i>
                    <span> @andixmb</span>
                  </NuxtLink>
                </li>
                <li class="flex justify-between p-1">
                  <NuxtLink to="mailto:hrd@andixmb.com">
                    <i class="mdi mdi-email"></i>
                    <span>hrd@andixmb.com</span>
                  </NuxtLink>
                </li>
                <li class="flex justify-between p-1">
                  <NuxtLink to="https://github.com/andixmb" target="_blank">
                    <i class="mdi mdi-github"></i>
                    <span>@andixmb / @andixmb</span>
                  </NuxtLink>
                </li>
                <li class="flex justify-between p-1">

                  <NuxtLink to="https://0x.andixmb.my.id/blog" target="_blank">
                    <i class="mdi mdi-search-web"></i>
                    <span>0x.andixmb.my.id</span>
                  </NuxtLink>
                </li>


              </ul>

            </div>

            <div class="w-100 rounded-lg p-5 border-black border-2 hover:shadow-lg mb-4">
              <h1 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">🔨 TECH-STACK
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h1>
              <ul class="mt-2">
                <li class="p-1">
                  <i class="mdi mdi-language-php"></i>
                  <span> PHP Languange</span>

                </li>
                <li class="p-1">

                  <i class="mdi mdi-laravel"></i>
                  <span> Laravel Framework</span>

                </li>
                <li class="p-1">

                  <i class="mdi mdi-code-tags"></i>
                  <span> CodeIgniter Framework</span>

                </li>
                <li class="p-1">

                  <i class="mdi mdi-nodejs"></i>
                  <span> NodeJS</span>

                </li>
                <li class="p-1">

                  <i class="mdi mdi-nuxt"></i>
                  <span> NuxtJS </span>

                </li>
                <li class="p-1">

                  <i class="mdi mdi-vuejs"></i>
                  <span> Vue.js </span>

                </li>
                <li class="p-1">

                  <i class="mdi mdi-bash"></i>
                  <span> Bash Shell Script</span>

                </li>
                <li class=" p-1">

                  <i class="mdi mdi-react"></i>
                  <span> Remix React</span>

                </li>


              </ul>

            </div>

            <div class="w-100 rounded-lg p-5 border-black border-2 hover:shadow-lg">
              <h1 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">👋 GET IN TOUCH
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h1>
              <form>
                <div class="mt-2">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" class="w-full p-2 border-2 border-black shadow"
                    v-model="name" />
                </div>
                <div class="mt-2">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" class="w-full p-2 border-2 border-black shadow"
                    v-model="email" />
                </div>
                <div class="mt-2">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" class="w-full p-2 border-2 border-black shadow"
                    v-model="message"></textarea>
                </div>
                <div class="mt-2">
                  <button type="button" class="w-full bg-black text-white p-2 hover:bg-gray-800" @click="sendMessage">
                    <span v-if="isSubmitting">Sending...</span>
                    <span v-else>Send</span>

                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>

        </div>

        <footer
          class="mt-10 mb-5 p-5 border-t-2 border-t-black bg-gradient-to-r from-red-500  via-red-300 to-purple-400 ">
          <p class="text-center text-white font-thin font-sans text-sm">
            &copy; {{ new Date().getFullYear() }} Crafted with <i class="mdi mdi-nuxt"></i> by 0xandix-mb | AI Powered
            by : <i class="mdi mdi-zodiac-gemini"></i>
            Gemini </p>


        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


const email = ref('');
const name = ref('');
const message = ref('');
const isSubmitting = ref(false);
const sidebar = ref(false);
const menuOpen = ref(false);

const sendMessage = async () => {
  isSubmitting.value = true
  let url = `https://docs.google.com/forms/d/e/1FAIpQLSdVtJBLh8snimfnonoDRN3A9abhSGal94x1HX2xro4xdAjfog/formResponse?&submit=Submit?usp=pp_url&entry.133175022=${name.value}&entry.220202485=${email.value}&entry.814784955=${message.value}`
  await fetch(url);
  isSubmitting.value = false
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style>
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

h1,
h2,
h3,
h1>a,
h2>a,
h3>a {
  font-family: "Pixelify Sans", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

p,
span,
a {
  font-family: "Nanum Pen Script", cursive;
  font-size: 21px;
}
</style>
