<script setup>
import Avatar from 'primevue/avatar'
import PanelMenu from 'primevue/panelmenu'
import Divider from 'primevue/divider'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Programs',
    icon: 'pi pi-book',
    items: [
      {
        label: 'Undergraduate',
        icon: 'pi pi-graduation-cap'
      },
      {
        label: 'Graduate',
        icon: 'pi pi-mortar-board'
      }
    ]
  },
  {
    label: 'Admissions',
    icon: 'pi pi-check-circle',
    items: [
      {
        label: 'Requirements',
        icon: 'pi pi-list'
      },
      {
        label: 'Application Process',
        icon: 'pi pi-angle-double-right'
      },
      {
        label: 'Deadlines',
        icon: 'pi pi-calendar'
      }
    ]
  },
  {
    label: 'Financial Aid',
    icon: 'pi pi-money-bill',
    items: [
      {
        label: 'Scholarships',
        icon: 'pi pi-star'
      },
      {
        label: 'Grants'
      },
      {
        label: 'Financial Aid Calculator',
        icon: 'pi pi-calculator'
      }
    ]
  },
  {
    label: 'Student Life',
    icon: 'pi pi-heart',
    items: [
      {
        label: 'Campus Resources',
        icon: 'pi pi-building'
      },
      {
        label: 'Clubs & Activities',
        icon: 'pi pi-users'
      },
      {
        label: 'Student Support Services',
        icon: 'pi pi-life-ring'
      }
    ]
  }
])
</script>

<template>
  <div class="flex flex-col md:w-80 border-r p-2">
    <div
      class="relative overflow-hidden w-full flex items-center p-1 pt-3 pl-3 text-surface-700 dark:text-surface-0/80 hover:bg-surface-200 dark:hover:bg-surface-600 rounded-md"
    >
      <Avatar
        image="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        class="mr-2"
        size="large"
        shape="circle"
      />
      <span class="inline-flex flex-col justify-start">
        <span class="font-bold">Amy Elsner</span>
        <span class="text-sm">Admin</span>
      </span>
    </div>
    <Divider />
    <PanelMenu
      :model="items"
      multiple
      class="w-full"
    />
  </div>
</template>
