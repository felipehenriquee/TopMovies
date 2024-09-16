<template>
  <header
    class="bg-gray-800 text-white p-4 flex items-center fixed w-full z-50"
  >
    <div class="container mx-auto flex gap-4 justify-between items-center">
      <div>Meus Filmes</div>
      <div class="flex gap-4">
        <nav
          v-for="menu in menus"
          :key="menu.value"
          :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
          class="lg:flex lg:items-center lg:space-x-4 cursor-pointer"
          @click="navigateTo(menu.value)"
        >
          {{ menu.name }}
        </nav>
        <button
          @click="toggleMenu"
          class="block lg:hidden p-2 focus:outline-none"
        >
          <i class="pi pi-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const menus = ref([
  { name: "Home", value: "/" },
  { name: "Filmes", value: "/movie" },
  { name: "Séries", value: "/tv" },
  { name: "Favoritos", value: "/favorite" },
  { name: "Login", value: "login" },
]);

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function navigateTo(value: string) {
  router.push(value);
}
</script>
