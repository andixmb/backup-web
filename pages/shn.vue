<template>
    <div>
        <section class="p-5">
            <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">#️⃣ SHN-AI <svg
                    class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg></h2>

            <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                <div class="flex sm:items-center justify-between py-3 border-b-2 border-black">
                    <div class="relative flex items-center space-x-4">
                        <div class="relative">
                            <span class="absolute text-green-500 right-0 bottom-0">
                                <svg width="20" height="20">
                                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                </svg>
                            </span>
                            <img src="/shn.png"
                                alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full">
                        </div>
                        <div class="flex flex-col leading-tight">
                            <div class="text-2xl mt-1 flex items-center">
                                <span class="text-gray-700 mr-3">0xandixmb-AI CHATBOT</span>
                            </div>
                            <span class="text-lg text-gray-600">Your Alternative friends</span>
                        </div>
                    </div>

                </div>
                <div id="messages"
                    class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <div class="chat-message">
                        <div class="flex items-end justify-end">
                            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div><span
                                        class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">{{
                                        command }}</span></div>
                            </div>
                            <img src="https://ui-avatars.com/api/?size=128&name=Justalinko&background=random&color=fff&rounded=true&bold=true"
                                alt="My profile" class="w-6 h-6 rounded-full order-2">
                        </div>
                    </div>
                    <div v-if="aiResponseStream.length > 0">
                        <div v-for="(res,index) in aiResponseStream" :key="index" class="mb-2">
                            <SHNChat :aiResponse="res" />
                        </div>
                    </div>
                    <div v-else>
                        <SHNChat :aiResponse="aiResponse" />
                    </div>

                </div>
                <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                    <div class="relative flex">

                        <input type="text" placeholder="Write your message!"
                            class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200  py-3 border-2 border-black"
                            v-model="command">
                        <div class="absolute right-0 items-center inset-y-0 ">

                            <button type="button"
                                class="inline-flex items-center justify-center px-2 py-2 transition duration-500 ease-in-out text-white bg-black hover:bg-gray-500 focus:outline-none"
                                @click="sendCommand">
                                <span class="font-bold" v-if="!replyIng">Send</span>
                                <span class="font-bold" v-else>Replying...</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="h-6 w-6 ml-2 transform rotate-90">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    </div>
</template>

<style>
.scrollbar-w-2::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
    --bg-opacity: 1;
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
    --bg-opacity: 1;
    background-color: #edf2f7;
    background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
}
</style>

<script lang="ts" setup>
useHead({
    title: "SHN-AI - JUSTALINKO"
});

import { GoogleGenerativeAI } from "@google/generative-ai";
const command = ref('Hello !');
const aiResponse = ref('Hello, can i help you today?');
const aiResponseStream = ref([]);
const replyIng = ref(false);

const sendCommand = async () => {
    replyIng.value = true;
    let GEMINI_API = 'AIzaSyCORWk7gFe9EdttBMNCVaLcQRU0F5du3O8';


    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(GEMINI_API);

    // ...

    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    // const result = await model.generateContent(command);
    // const response = await result.response;
    //const text = response.text();

    const result = await model.generateContentStream(command.value);

    let text = "";
    aiResponse.value = "";
    aiResponseStream.value = [];
    for await (const chunk of result.stream) {
        const chunkText: any = chunk.text();
        text += chunkText;
        aiResponse.value += chunkText;
        aiResponseStream.value.push(chunkText);
    }
    console.log(text);
    replyIng.value = false;

};
</script>