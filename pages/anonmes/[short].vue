<template>
    <div>
        <div class="container">
            <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">💁 AnonMess: {{
                anlink.author }} <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg></h2>
            <p>
                AnonMess is a simple anonymous messaging app that allows other people to send messages to you without
                revealing identity.
            </p>
            <div class="bg-blue-300 p-2 text-black m-2">
                Send your anonymous message to <b class="text-black">{{ anlink.author }}</b> by writing in the
                box below !
            </div>

            <div class="w-full md:w-2/3 mx-auto">
                <div class="bg-green-300 p-2 text-black m-2" v-if="isSuccessful">
                    Message sent successfully !
                </div>

                <form @submit.prevent="sendMessage">
                  
                    <textarea
                        class="p-2 border-2 border-black w-full h-28 mt-4 focus:border-gray-400 focus:shadow-md hover:border-amber-900"
                        v-model="message" placeholder="Your Message"></textarea>
                        <br>
                        <NuxtTurnstile v-model="token" />
                    <button class="mt-4 p-2 bg-black text-white  hover:bg-gray-600 w-full" type="submit">Send</button>
                </form>
            </div>

            <hr class="mt-3 border-1 border-black">

            <div class="border-2 border-black rounded-r-xl rounded-tl-xl p-4 mt-5 bg-gradient-to-r from-slate-100 via-white to-gray-600 flex justify-between"
                v-for="(mes, i) in anonmes" :key="i">
                <span class="text-black">{{ mes.content }}</span>
                <span class="text-white ">📆 {{ new Date(mes.createdAt).toLocaleDateString() }}</span>
            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>


const anonmes: any = ref([]);
const anlink:any = ref({});

const route = useRoute();
const message = ref('');
const token = ref('');
const isSuccessful = ref(false);



const getMess = async () => {
    const res: any = await $fetch('/api/anon?method=show&short=' + route.params.short);
    anonmes.value = res.body;
    anlink.value = res.anlink;
    useHead({
    title: "Send Anonymous message to "+anlink.value.author+" ! - JUSTALINKO"
    });
};

const sendMessage = async () => {

    if(message.value == '')
    {
        alert('Message cannot be empty');
        return;
    }
    const res: any = await $fetch('/api/anon', {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            short: route.params.short,
            message: message.value,
            token: token.value
        
        }
    });
    if(res.statusCode == 200)
    {
        isSuccessful.value = true;
        message.value = '';
        await getMess();
    }


};
onMounted(async () => {
    await getMess();
});


</script>