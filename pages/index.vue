<template>

    <section class="p-5">
        <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">💁 Who's ? <svg
                class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg></h2>
            <div class="flex flex-col md:flex-row">
                <div>
                    <img src="/jst.png" class="max-w-50 mr-5 "/>
                </div>
                <div>
        <p
            class="ml-2 mt-10 bg-gradient-to-r from-red-500 via-blue-900 to-yellow-600 text-transparent bg-clip-text bg-300% animate-gradient">
          
            0xandixmb is a regular human being who enjoys researching different projects in the crypto space. 
            has basic knowledge of blockchain, web3, ai and investing. 
            Enjoy sharing information and discussions from different points of view. 
            like many things about technology and the future. He has a lot of ideas that could be created but he only focuses on his passion in the web3 space. 
            another ability is about being able to make long-term plans about his life and spirituality..
        </p>
    </div>
    </div>
    <p class="ml-2 mt-2 bg-gradient-to-r from-red-500 via-blue-900 to-yellow-600 text-transparent bg-clip-text bg-300% animate-gradient">
       Hello Everyone !!!
    </p>
    </section>

    <section class="p-5">
        <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">🤸 What I can do?
            <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>
        </h2>
        <p
            class="mt-2 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
       i don't give up easily in doing something, i often make plans and process data to be made into information to make a decision in my life. 
       i usually think about what happens in the long run. my expertise is in the field of technology and information..
        </p>
    </section>

    <section class="p-5">

        <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">
            📄 Latest Posts
            <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>
        </h2>
        <ul className="mt-2">

            <li class="flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600"
                v-for="(post, index) in posts" :key="post.slug">
                <NuxtLink :to="'/blog/'+post.slug+''">{{ iconPost[index] }} {{ post.title }}</NuxtLink>
                <span>[{{ new Date(post.createdAt).toDateString() }}]</span>
            </li>

        </ul>
        <NuxtLink to="/blog" class="mt-2 block text-center text-black font-bold hover:text-amber-800">📚 More
            Posts</NuxtLink>

    </section>

</template>

<script lang="ts" setup>

const iconPost: any = ref({
    0: '🔥',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    10: '🔟',
});
const posts: any = ref([]);
const getPost: any = await $fetch('/api/post?method=limit&limit=11');
posts.value = getPost.body;


</script>