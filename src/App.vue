<script setup lang="ts">
import Topbar from './components/Topbar.vue';
</script>

<template>
  <topbar />
  <router-view class="pt-10 " />
</template>

<style>
body{
  background-color: #1d1d1d;
}
</style>