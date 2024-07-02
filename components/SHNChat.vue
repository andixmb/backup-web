<template>
    <div>
        <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-sm mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                <div class="prose lg:prose-lg xl:prose-xl">{{ aiResponse }} </div></span></div>
            </div>
            <img src="/shn.png" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
const {aiResponse}:any = defineProps(['aiResponse']);

</script>