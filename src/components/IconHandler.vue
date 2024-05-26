<script setup lang="ts">
import { defineProps } from "vue";
import AppSVGIcons from "../assets/icons";

interface IconHandlerProps {
  iconName: keyof typeof AppSVGIcons;
}

defineProps<IconHandlerProps>();
</script>

<template>
  <div v-html="AppSVGIcons[iconName]"></div>
</template>

<style scoped></style>
