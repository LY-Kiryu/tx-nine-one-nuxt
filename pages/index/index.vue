<template>
  <header class="fixed w-full p-4 color-white">
    <div class="container m-x-auto relative md:flex md:w-full md:justify-between md:items-center">
      <button class="toggle-menu hover:opacity-80" @click="show = !show">
        <div class="i-formkit-open w-8 h-8"></div>
      </button>
      <NuxtLink class="font-size-25px font-bold" to="/">田旭的 91 空间</NuxtLink>
      <nav :class="`text-center  top-12 bg-black bg-opacity-20 p-y-4  md:block md:bg-transparent md:relative md:top-0 md:p-0 ${show ? '' : 'hidden'} `">
        <ul class="line-height-8 md:flex md:w-full">
          <li>
            <NuxtLink to="/video">重磅大戏</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="banner h-100vh">
    <div class="color-white container m-x-auto h-full flex flex-col justify-center items-center md:items-start">
      <h2 class="font-size-10 line-height-16 font-bold m-b-4">NineOne & <br /> TIANXU</h2>
      <p class="block text-ellipsis text-nowrap overflow-hidden w-80% text-center md:text-left">Copyright © 2024-present</p>
      <div class="socials">
        <i class="i-formkit-github inline-block"></i>
        <i class="i-formkit-github inline-block"></i>
        <i class="i-formkit-github inline-block"></i>
        <i class="i-formkit-github inline-block"></i>
        <i class="i-formkit-github inline-block"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const show = ref(false)
</script>

<style lang="scss" scoped>
body{
  background: #7c7272;
}
.toggle-menu {
  @apply absolute top-0 right-0 bg-transparent w-8 h-8 color-white md:hidden
}
nav ul li {
  @apply p-y-2
}
nav ul li a {
  @apply hover:color-black hover:bg-white p-y-2 p-x-4 border-rd-full transition-all duration-300
}
.banner {
  background: url("@/assets/images/banner.webp") no-repeat center center;
  background-size: cover;
}
.socials {
  @apply m-t-4 flex gap-2
}
.socials i {
  @apply font-size-6
}
</style>
