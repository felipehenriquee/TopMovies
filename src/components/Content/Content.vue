<template>
  <div class="home" ref="scrollContainer">
    <div
      class="container mx-auto flex flex-row gap-8 flex-wrap justify-center sm:justify-between pt-8"
    >
      <Card v-for="(movie, i) in movies" :key="i" :movie="movie" />
      <ProgressSpinner v-if="isLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, defineProps } from "vue";
import { QueryParams } from "../../models/pagination.models";
import { MoviesRest } from "../../services/movies";
import { Movies } from "../../models/movies.models";
import Card from "../../components/Cards/Card.vue";
import { Generics } from "../../utils/generics";

const props = defineProps<{
  typeMedia: string;
}>();

const service = new MoviesRest();
const params = new QueryParams(1);
const generics = new Generics();
const movies = ref<Movies[]>([]);
const currentType = ref<string>(props.typeMedia || "all");
const isLoading = ref<boolean>(false);
const hasMore = ref<boolean>(true);

const scrollContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  getAll();
  setupInfiniteScroll();
});

function getAll(): void {
  if (isLoading.value) return;
  isLoading.value = true;

  service
    .getAll(params, currentType.value)
    .then((response) => {
      movies.value = [...movies.value, ...response.results];
      hasMore.value = response.page < response.total_pages;
      movies.value.forEach((movie) => {
        movie.poster_path = generics.getImagePath(movie.poster_path);
        movie.media_type = generics.getMediaTypeValue(movie.media_type);
      });
      isLoading.value = false;
      params.page++;
    })
    .catch(() => {
      isLoading.value = false;
    });
}

function setupInfiniteScroll(): void {
  const container = scrollContainer.value;
  if (!container) return;

  const handleScroll = () => {
    if (
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 50
    ) {
      if (hasMore.value && !isLoading.value) {
        getAll();
      }
    }
  };

  container.addEventListener("scroll", handleScroll);
  onUnmounted(() => {
    container.removeEventListener("scroll", handleScroll);
  });
}
</script>

<style>
.home {
  max-height: 100vh; /* Ajuste conforme necessário */
  overflow-y: auto;
}
</style>
