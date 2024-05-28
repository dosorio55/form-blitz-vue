<template>
  <div
    class="h-full overflow-auto p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
  >
    <FormSwitcher />
    <CircularButton icon-name="Plus" ref="buttonRef" />
    <!-- <Dropdown :element-ref="buttonRef" v-if="dropdownOpen" /> -->
    {{ dropdownOpen }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CircularButton from "../ui/CircularButton.vue";
import FormSwitcher from "./FormSwitcher.vue";
import Dropdown from "../ui/Dropdown.vue";

const dropdownOpen = ref(false);
const buttonRef = ref(null);

const handleClick = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped>
.layout-main-container {
  max-height: 100vh;
}
</style>
