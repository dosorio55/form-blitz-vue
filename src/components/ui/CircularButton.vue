<template>
  <button
    type="button"
    ref="buttonRef"
    class="absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
    :class="[isTop ? 'top-8' : 'bottom-8', isStart ? 'start-8' : 'end-8']"
    @click="handleClick"
  >
    <IconHandler :icon-name="iconName.iconName" />
  </button>

  <div
    id="dropdown"
    class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    :class="invertDropdown ? '-translate-y-44' : 'translate-y-0'"
    v-if="dropdownOpen && buttonRef"
    :style="{
      position: 'fixed',
      top: `${
        buttonPosition.top + buttonRef.clientHeight - (verticalOffset ?? 0)
      }px`,
      left: `${buttonPosition.left + -(horizontalOffset ?? 150)}px`,
    }"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Earnings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Sign out</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import IconHandler from "../../assets/IconHandler.vue";
import AppSVGIcons from "../../assets/icons";

interface IconName {
  iconName: keyof typeof AppSVGIcons;
  isTop?: boolean;
  isStart?: boolean;
  verticalOffset?: number;
  horizontalOffset?: number;
}

const iconName = defineProps<IconName>();

const buttonRef = ref<HTMLElement | null>(null);
const dropdownOpen = ref(false);
const buttonPosition = ref({ top: 0, left: 0 });
const invertDropdown = ref(false);

const handleClick = () => {
  dropdownOpen.value = !dropdownOpen.value;

  document.addEventListener("click", (e) => {
    if (buttonRef.value && !buttonRef.value.contains(e.target as Node)) {
      dropdownOpen.value = false;
    }
  });

  if (dropdownOpen.value && buttonRef.value) {
    const rect = buttonRef.value.getBoundingClientRect();

    buttonPosition.value = {
      top: rect.top,
      left: rect.left,
    };

    invertDropdown.value =
      rect.top + buttonRef.value.clientHeight + 100 > window.innerHeight;
  }
};

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>

<style scoped></style>
