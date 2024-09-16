<template>
  <div
    class="w-[20%] min-w-[300px] relative card rounded-md group cursor-pointer"
  >
    <img
      class="rounded-md w-full h-full object-cover"
      :src="movie.poster_path"
      alt=""
    />
    <div
      class="absolute w-full h-[50%] bg-[#0000009c] z-40 bottom-0 rounded-md flex flex-col p-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <div class="flex justify-between w-full">
        <div class="capitalize text-[12px]">
          {{ movie.media_type }} -
          {{ getYear(movie.release_date ?? movie.first_air_date) }}
        </div>
        <div class="flex flex-row items-center gap-1">
          <i
            class="pi pi-star-fill text-yellow-300"
            style="font-size: 10px"
          ></i>
          <p class="text-[10px]">
            <span class="font-bold">
              {{ roundToOneDecimal(movie.vote_average) }}
            </span>
            /10
          </p>
        </div>
      </div>
      <h3 class="text-white text-md font-bold">
        {{ movie.title ?? movie.name }}
      </h3>
      <p class="text-white text-[12px] h-[45%] overflow-hidden">
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { Movies } from "../../models/movies.models";

const props = defineProps({
  movie: {
    type: Object as PropType<Movies>,
    required: true,
  },
});
function roundToOneDecimal(value: number): number {
  return parseFloat(value.toFixed(1));
}
function getYear(value: string): number {
  const date = new Date(value);
  return date.getFullYear();
}
</script>
<style>
.card {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
</style>
