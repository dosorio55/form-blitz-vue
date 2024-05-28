<script setup lang="ts">
import { defineProps } from "vue";
import IconHandler from "../../assets/IconHandler.vue";
import AppSVGIcons from "../../assets/icons";

interface IProps {
  title: string;
  icon: keyof typeof AppSVGIcons;
  to: string;
}

defineProps<IProps>();
</script>

<template>
  <li>
    <a
      href="#"
      class="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <div class="flex items-center">
        <IconHandler icon-name="Dashboard" />
        <RouterLink class="ms-3" :to="to">{{ title }}</RouterLink>
      </div>
      <span
        class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
        >Pro</span
      >
    </a>
  </li>
</template>

<style scoped></style>
