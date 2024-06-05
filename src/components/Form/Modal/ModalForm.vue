<template>
  <DropdownInput :menu-items="menuItems" />
  <div>
    <label
      for="Input label"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Input title</label
    >
    <input
      type="Input label"
      name="Input label"
      id="Input label"
      max="60"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      required
    />
  </div>
  <FormSwitcher input-type="Simple Input" />
</template>

<script setup lang="ts">
import DropdownInput from "../../ui/form/DropdownInput.vue";
import FormSwitcher from "../FormSwitcher.vue";

const menuItems = [{ name: "Simple Input" }, { name: "Multiline Input" }];
</script>

<style scoped></style>
