<template>
    <div><van-button type="primary" @click="getData">获取</van-button>
      <video v-if="videoUrl" class="w-full h-80vh" :src="videoUrl" autoplay controls></video>
      <div v-else class="w-full h-full">
        <van-loading size="24px">加载中...</van-loading>
      </div>
    </div>
</template>
<script setup lang="ts">
  /*const {data} = await useFetch('https://api.kuleu.com/api/xjj?type=json')
  console.log(data)*/
  const videoUrl = ref('')
  const getData = async ()=> {
    const res = await useFetch('https://api.kuleu.com/api/xjj?type=json')
    console.log(res.data.value.video)
    videoUrl.value = res.data.value.video
  }
  getData()
</script>
