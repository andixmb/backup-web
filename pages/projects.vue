<template>
    <div>
        <div class="container">
            <h1 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">🖥️ My Projects
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
            </h1>
            <h3
                class="text-white text-xl font-bold mt-4 border-l-4  border-black ml-2 bg-gradient-to-r from-gray-500 via-white to-white p-2">
                @andixmb</h3>
            <div class="grid grid-cols-2 mt-4 gap-3 p-3">

                <div class="border-2 border-gray-500 gap-2 rounded-lg hover:border-black hover:shadow-lg bg-gradient-to-r from-transparent via-slate-100 to-gray-400 hover:bg-gradient-to-r hover:from-gray-400 hover:via-slate-100 hover:to-white"
                    v-for="repo in repositories" :key="repo.id">
                    <NuxtLink :to="repo.html_url" target="_blank">

                        <div class="flex justify-between p-3">
                            <h3 class="text-xl hover:underline">{{ repo.name }}</h3>
                            <div class="bg-gray-600 rounded p-1 text-white text-xs font-serif">{{ repo.language }}</div>
                        </div>
                    </NuxtLink>

                    <p class="text-small p-3">
                        {{ repo.description }}
                    </p>

                </div>
            </div>
            <h3
                class="text-white text-xl font-bold mt-4 border-l-4  border-black ml-2 bg-gradient-to-r from-gray-500 via-white to-white p-2">
                @andixmb</h3>
            <div class="grid grid-cols-2 mt-4 gap-3 p-3">

                <div class="border-2 border-gray-500 gap-2 rounded-lg hover:border-black hover:shadow-lg bg-gradient-to-r from-transparent via-slate-100 to-gray-400 hover:bg-gradient-to-r hover:from-gray-400 hover:via-slate-100 hover:to-white"
                    v-for="repo in repositories2" :key="repo.id">
                    <NuxtLink :to="repo.html_url" target="_blank">

                        <div class="flex justify-between p-3">
                            <h3 class="text-xl hover:underline">{{ repo.name }}</h3>
                            <div class="bg-gray-600 rounded p-1 text-white text-xs font-serif">{{ repo.language }}</div>
                        </div>
                    </NuxtLink>

                    <p class="text-small p-3">
                        {{ repo.description }}
                    </p>

                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Projects - 0xandix-mb"
});

const repositories: any = ref([])
const repositories2: any = ref([])
const getRepositories = async () => {
    try {
        let api1 = 'https://api.github.com/users/andixmb/repos'
        let api2 = 'https://api.github.com/users/andixmb/repos'
        const results = await $fetch(api1);
        const results2 = await $fetch(api2);
       
        
        repositories.value = results;
        repositories2.value = results2;
        console.log(results,results2)

    } catch (error) {
        console.log('KONTOL ' + error)
    }
}

onMounted(async () => {

    await getRepositories()
});

</script>