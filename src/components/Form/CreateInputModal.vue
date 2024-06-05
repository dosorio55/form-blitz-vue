<template>
  <Modal
    v-if="showModal"
    :buttons="[
      { text: 'OK', action: handleModalAction },
      { text: 'ID', action: handleModalAction },
    ]"
    :close-modal="closeModal"
    decline-button="cancel"
  >
    <DropdownInput :menu-items="menuItems"  />
  </Modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Modal from "../ui/Modal.vue";
import DropdownInput from "../ui/form/DropdownInput.vue";

const showModal = ref(true);

const menuItems = [
  { name: "Simple Input" },
  { name: "Profile" },
  { name: "Logout" },
];

const handleModalAction = () => {
  console.log("Modal action");
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped></style>
