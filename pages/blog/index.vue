<template>
    <div>
        <section class="p-5">

            <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">
                📄 Blog Posts
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
            </h2>
            <ul className="mt-2">


                <li class="flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600"
                    v-for="(post, index) in posts" :key="post.slug">
                    <NuxtLink :to="'/blog/' + post.slug + ''">{{ iconPost[index] ?? '💠' }} {{ post.title }}</NuxtLink>
                    <span>[{{ new Date(post.createdAt).toDateString() }}]</span>
                </li>

            </ul>
            <!-- next and previous post -->
            <div class="flex justify-between mt-5">
                <NuxtLink v-show="prevShow" :to="'/blog/?p=' + prevLink" @click="pages = prevLink"
                    class="text-black font-bold hover:text-amber-800">🔙 Previous </NuxtLink>
                <span class="text-gray-600 font-bold " v-show="!prevShow">🔙 Previous</span>
                    <span class="text-white p-1 rounded-full  bg-black font-bold"> ( {{ pages }} / {{ postFull.totalPage }} )</span>
                <NuxtLink v-show="nextShow" :to="'/blog/?p=' + nextLink" @click="pages = nextLink"
                    class="text-black font-bold hover:text-amber-800">Next 🔜</NuxtLink>
                    <span class="text-gray-600 font-bold " v-show="!nextShow">Next 🔜</span>
            </div>




        </section>
    </div>
</template>


<script lang="ts" setup>
useHead({
    title: "Blogs - 0xandixmb"
});

const posts: any = ref([]);
const nextLink: any = ref('');
const prevLink: any = ref('');
const nextShow = ref(true);
const prevShow = ref(false);
const postFull = ref([]);



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

const route = useRoute();
const pages: any = ref(1);

const getPostData = async (page: any) => {
    const getPost: any = await $fetch('/api/post?method=pagination&page=' + page);
    posts.value = getPost.body;
    nextLink.value = (parseInt(page) + 1);
    prevLink.value = (parseInt(page) - 1);
    postFull.value = getPost;
    pages.value = page;
    if(page <= 1){
        prevShow.value = false;
    }else{
        prevShow.value = true;
    }
    if(page >= postFull.value.totalPage){
        nextShow.value = false;
    }else{
        nextShow.value = true;
    }

};

watch(pages, async (value) => {
    await getPostData(value);
    let ps: any = postFull.value;

    if (value >= ps.totalPage) {
        nextShow.value = false;
    } else {
        nextShow.value = true;

    }
    if (value <= 1) {
        prevShow.value = false;
    } else {
        prevShow.value = true;
    }

});

onMounted(async () => {
    let page = route.query.p ?? 1;
    pages.value = page;
    
    await getPostData(pages.value);

});


</script>
