<script setup lang="ts">
import SidebarNav from "./components/NavBar/SidebarNav.vue";
</script>

<template>
  <main class="main">
    <SidebarNav>
      <div class="layout-main-container p-4 w-full relative">
        <RouterView />
      </div>
    </SidebarNav>
  </main>
</template>

<style scoped>
.main {
  overflow: hidden;
}
</style>
