<template>
  <div>

    <h1 class="text-4xl font-semibold mb-1 p-3">📖 {{ post.title }}</h1>
    <span class="font-light p-3">📅 {{ new Date(post.createdAt).toDateString() }}</span>

    <div class="p-5">
      <div class="prose lg:prose-lg xl:prose-xl">
        <ContentRendererMarkdown :value="parsedMarkdown" v-bind="$attrs" />
      </div>
    </div>


    <div class="mt-5">
      <!-- social media shareer -->
      <div class="flex justify-center">
        <b class="text-lg m-3 hidden md:block">🌱 Share :</b>

        <a :href="'https://twitter.com/intent/tweet?text=' + post.title + '&url=' + url + ''"
          class="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg">
          <i class="mdi mdi-twitter"></i>
        </a>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + url + ''"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2">
          <i class="mdi mdi-facebook"></i>
        </a>
        <a :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + post.title + ''"
          class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-2">
          <i class="mdi mdi-linkedin"></i>
        </a>
        <a :href="'https://wa.me/?text=' + url + ''"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ml-2">
          <i class="mdi mdi-whatsapp"></i>
        </a>
        <!-- share ig story -->
        <a href="#" @click="shareIgStory"
          class="bg-red-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg ml-2">
          <i class="mdi mdi-instagram"></i>
        </a>

      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import markdownParser from '@nuxt/content/transformers/markdown'

const post = ref({
  title: '',
  date: '',
  content: '',
  author: '',
  createdAt: ''
});
const config = useRuntimeConfig();
const route = useRoute();
const url = config.public.baseUrl + route.fullPath;
const slug = route.params.slug;
const parsedMarkdown = ref('');
const router = useRouter();


const getPost = async () => {

  const getPost: any = await $fetch('/api/post?method=slug&slug=' + slug);
  if(getPost.body == null)
  {
    return router.push('/404');
  }
  post.value = getPost.body;
  parsedMarkdown.value = await markdownParser.parse(null, getPost.body.content);
  useHead({
    title: post.value.title + " - JUSTALINKO"
  });
};



const shareIgStory = () => {
  // copy link to clipboard
  navigator.clipboard.writeText(url);
  alert('Link copied to clipboard');
  return window.location.href = 'https://www.instagram.com/stories/create';

};
onMounted(async () => {
  await getPost();
});

</script>