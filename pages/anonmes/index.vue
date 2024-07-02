<template>
    <div>
        <div class="container">
            <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">💁 AnonMess <svg
                    class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg></h2>
            <p>
                AnonMess is a simple anonymous messaging app that allows other people to send messages to you without
                revealing identity.
            </p>

            <div class="mt-5 mb-3 w-2/3 mx-auto">
                <h2 class="text-black text-4xl mx-1 font-extrabold  relative inline-block stroke-current ">❓ Create
                    Yours !<svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5"
                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2">
                        </path>
                    </svg></h2>
                <br>

                <input type="text"
                    class="w-full p-2 border-2 border-black  mt-4 focus:border-gray-400 focus:shadow-md hover:border-amber-900"
                    placeholder="Your Name" v-model="username">
                <br>
                <NuxtTurnstile v-model="token" />

                <button class="mt-4 p-2 bg-black text-white  hover:bg-gray-600 w-full" type="button"
                    @click="createAnon">Create</button>

                <div class="mt-5 bg-green-600 p-3 rounded-lg text-white" v-show="shortId != null">
                    <p>Your AnonMess URL is <a :href="'/anonmes/' + shortId" class="underline">/anonmes/{{ shortId }}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const username = ref('');
const shortId = ref(null);
const token = ref('');

useHead({
    title: "Anonymous Message - JUSTALINKO"
});


const createAnon = async () => {
    const res: any = await $fetch('/api/anon?method=create&name=' + username.value+'&token='+token.value);
    let shortx = res.body.short;
    if (shortx) {
        shortId.value = shortx;
    } else {
        shortId.value = null;
    }
};

</script>