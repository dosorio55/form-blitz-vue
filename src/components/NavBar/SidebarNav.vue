<script setup lang="ts">
import ItemMenu from "./ItemMenu.vue";
</script>
<!-- class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" -->

<template>
  <div class="flex">
    <nav>
      <aside
        id="default-sidebar"
        class="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
        >
          <ul class="space-y-2 font-medium">
            <ItemMenu title="Dashboard" icon="Dashboard" to="/" />
          </ul>
        </div>
      </aside>
    </nav>

    <slot></slot>
  </div>
</template>

<style scoped></style>
