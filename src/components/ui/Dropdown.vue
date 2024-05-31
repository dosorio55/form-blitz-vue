<template>
  <div
    id="dropdown"
    class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    :class="invertDropdown ? '-translate-y-44' : 'translate-y-0'"
    :style="{
      position: 'fixed',
      top: `${
        anchorPosition.top + (anchorRef.clientHeight - (verticalOffset ?? 0))
      }px`,
      left: `${anchorPosition.left + -(horizontalOffset ?? 150)}px`,
    }"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li
        v-for="(itemMenu, index) in dropdownItems"
        class="cursor-pointer"
        :key="index"
      >
        <p
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          @click="itemMenu.action"
        >
          {{ itemMenu.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

interface IconName {
  verticalOffset?: number;
  horizontalOffset?: number;
  anchorRef: HTMLElement;
  dropdownOpen: boolean;
  dropdownItems: { name: string; action: () => void }[];
}

const { anchorRef } = defineProps<IconName>();
const emit = defineEmits(["updateDropdownState"]);

const invertDropdown = ref(false);
const anchorPosition = ref({ top: 0, left: 0 });

const handleClick = (event: Event) => {
  if (!anchorRef.contains(event.target as Node)) {
    emit("updateDropdownState");
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);

  if (anchorRef) {
    const rect = anchorRef.getBoundingClientRect();

    anchorPosition.value = {
      top: rect.top,
      left: rect.left,
    };

    invertDropdown.value =
      rect.top + anchorRef.clientHeight + 100 > window.innerHeight;
  }
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>

<style scoped></style>
