<template>
  <div class="relative">
    <label
      for="input-type"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Select an input type</label
    >
    <div class="relative" @click="handleOpenDropdown" ref="inputDropdownRef">
      <input
        name="input-type"
        id="input-type"
        class="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="Simple input"
        readonly
        :value="selectedValue"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 text-gray-100 absolute end-2 top-2.5 dark:text-gray-300 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
        />
      </svg>

      <!-- DROPDOWN MENU -->
      <div
        id="dropdown"
        class="z-10 bg-white divide-y w-full absolute divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        v-if="dropdrownOpen"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            v-for="(itemMenu, index) in menuItems"
          >
            <p
              @click="
                () => {
                  handleDropdownAction(itemMenu.name);
                  if (itemMenu.action) itemMenu.action();
                }
              "
              :key="index"
            >
              {{ itemMenu.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface DropdownProps {
  menuItems: { name: string; action?: () => void }[];
}

const { menuItems } = defineProps<DropdownProps>();

const dropdrownOpen = ref(false);
const inputDropdownRef = ref<HTMLElement | null>(null);
const selectedValue = ref("Simple input");

const handleOpenDropdown = () => {
  dropdrownOpen.value = true;

  document.addEventListener("click", handleCloseOnOutsideClick);
};

const closeModalAndCleanListeners = () => {
  dropdrownOpen.value = false;
  document.removeEventListener("click", handleCloseOnOutsideClick);
};

const handleCloseOnOutsideClick = (event: MouseEvent) => {
  if (
    inputDropdownRef.value &&
    !inputDropdownRef.value.contains(event.target as Node)
  ) {
    closeModalAndCleanListeners();
  }
};

const handleDropdownAction = (option: string) => {
  closeModalAndCleanListeners();
  selectedValue.value = option;
};

onMounted(() => {
  if (!menuItems || menuItems.length === 0) {
    console.error("Dropdown menu is empty");
  }
});
</script>

<style scoped></style>
