<template>
  <Modal
    v-if="showModal"
    :buttons="[{ text: 'OK', action: handleModalAction }]"
    :close-modal="closeModal"
    decline-button="cancel"
  >
    <ModalForm />
  </Modal>
  <CircularButton icon-name="Plus" :handle-on-click="handleClick" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalForm from "./ModalForm.vue";
import CircularButton from "../../ui/CircularButton.vue";
import Modal from "../../ui/Modal.vue";

const showModal = ref(false);

const handleClick = () => {
  showModal.value = true;
};

const handleModalAction = () => {};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped></style>
