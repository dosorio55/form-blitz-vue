<script setup lang="ts">
import AppSVGIcons from "./icons";

interface IconHandlerProps {
  iconName: keyof typeof AppSVGIcons;
}

defineProps<IconHandlerProps>();
</script>

<template>
  <div v-html="AppSVGIcons[iconName]"></div>
</template>

<style scoped></style>
