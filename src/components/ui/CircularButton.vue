<template>
  <button
    type="button"
    ref="buttonRef"
    class="absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
    :class="[isTop ? 'top-8' : 'bottom-8', isStart ? 'start-8' : 'end-8']"
    @click="handleOnClick"
  >
    <IconHandler :icon-name="iconName.iconName" />
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import IconHandler from "../../assets/IconHandler.vue";
import AppSVGIcons from "../../assets/icons";

interface IconName {
  iconName: keyof typeof AppSVGIcons;
  handleOnClick?: () => void;
  isTop?: boolean;
  isStart?: boolean;
}

const emit = defineEmits(["buttonRef"]);
const buttonRef = ref<HTMLElement | null>(null);

onMounted(() => {
  emit("buttonRef", buttonRef.value);
});

const iconName = defineProps<IconName>();
</script>

<style scoped></style>
