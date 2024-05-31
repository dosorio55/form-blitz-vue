<template>
  <CircularButton
    icon-name="Plus"
    :handle-on-click="handleClick"
    @button-ref="setButtonRef"
  />
  {{ dropdownOpen }}
  <Dropdown
    v-if="dropdownOpen && buttonRef"
    :anchor-ref="buttonRef"
    :dropdown-open="dropdownOpen"
    :vertical-offset="-30"
    @update-dropdown-state="handleDropdownState"
    :dropdown-items="[
      { name: 'Settings', action: () => console.log('Settings') },
      { name: 'Profile', action: () => console.log('Profile') },
      { name: 'Logout', action: () => console.log('Logout') },
    ]"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppSVGIcons from "../../assets/icons";
import CircularButton from "../ui/CircularButton.vue";
import Dropdown from "../ui/Dropdown.vue";

interface IconName {
  iconName: keyof typeof AppSVGIcons;
  isTop?: boolean;
  isStart?: boolean;
}

defineProps<IconName>();

const buttonRef = ref<HTMLElement | null>(null);
const dropdownOpen = ref(false);

const handleClick = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const handleDropdownState = () => {
  dropdownOpen.value = false;
};

const setButtonRef = (ref: HTMLElement) => {
  buttonRef.value = ref;
};
</script>

<style scoped></style>
