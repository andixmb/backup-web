<template>
    <div>
        <div class="container p-5">
            <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current mb-5">
                ➕ New Post
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
            </h2>
            <div v-if="isSuccessful" class="bg-green-300 p-2 text-black m-2" v-html="message"></div>

            <form class="shadow rounded-lg p-5 m-5" @submit.prevent="createPost">
                <div class="mb-2">
                <label htmlFor="name">Title</label>
                <input type="text"  class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500" v-model="title"/>
                </div>
                <div class="mb-2">
                <label htmlFor="name">Content</label>
               
                <textarea class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500 h-60" v-model="content"></textarea>

                </div>
                <div class="mb-2">
                <label htmlFor="name">Author</label>
                <input type="text"  class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500" v-model="author"/>
                </div> 
                <div class="mb-2">
                <label htmlFor="name">Password</label>
                <input type="text"  class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500" v-model="password"/>
                </div>  
                <div class="mb-2">
                <NuxtTurnstile v-model="token" />
                </div>

                <button class="mt-4 p-2 bg-black text-white  hover:bg-gray-600 w-full" type="submit">Create</button>
            
            </form>

        </div>
    </div>
</template>

<script lang="ts" setup>
import type TiptapEditor from '~/components/TiptapEditor.vue';

const title = ref('');
const content = ref('');
const author = ref('');
const token = ref('');
const password = ref('');
const isSuccessful = ref(false);
const message = ref('');
const config = useRuntimeConfig();




const createPost = async() => {
    const res: any = await $fetch('/api/post',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                title: title.value,
                content: content.value,
                author: author.value,
                token: token.value,
                password: password.value
            
            }
        }
    );
    if(res.statusCode == 200)
    {
        isSuccessful.value = true;
        message.value = "Your post link is : <a href='"+config.public.baseUrl+"/blog/"+res.body.slug+"'>"+config.public.baseUrl+"/blog/"+res.body.slug+"</a>";
    }
}

</script>