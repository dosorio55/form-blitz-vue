<template>
  <div>
    <component :is="inputSwitcher()" />

    {{ inputType }}
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Input from "../ui/form/InputElement.vue";

interface FormProps {
  inputType: string;
}

const { inputType } = defineProps<FormProps>();

const form = reactive({
  email: "",
  password: "",
});

const inputSwitcher = () => {
  switch (inputType) {
    case "Simple Input":
      return Input;
    // case "Multiline Input":
    //   return <div>Multiline Input</div>;
    default:
      return null;
  }
};
</script>

<style scoped></style>
