<template>
  <div
    class="h-full overflow-auto p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
  >
    <FormSwitcher />
    <FormPlusButton icon-name="Plus" />
    <CreateInputModal />
  </div>
</template>

<script setup lang="ts">
import CreateInputModal from "./CreateInputModal.vue";
import FormPlusButton from "./FormPlusButton.vue";
import FormSwitcher from "./FormSwitcher.vue";
</script>

<style scoped>
.layout-main-container {
  max-height: 100vh;
}
</style>
