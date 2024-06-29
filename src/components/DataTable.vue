<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import { FilterMatchMode } from 'primevue/api'
import { ref } from 'vue'

defineProps({
  columns: {
    type: Object,
    required: true
  },

  data: {
    type: Object
  },

  filterFields: {
    type: Object,
    required: true
  },

  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['onFilterProgram'])

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const programOptions = ref([
  { name: 'Computer Science', code: 'CS' },
  { name: 'Information Technology', code: 'IT' },
  { name: 'Information System', code: 'IS' }
])

const selectedProgram = ref(programOptions.value[0])
</script>

<template>
  <DataTable
    v-model:filters="filters"
    :globalFilterFields="filterFields"
    :value="data"
    tableStyle="min-width: 50rem"
    :loading="loading"
    stripedRows
    pt:header:class="border-t-0"
  >
    <template #loading> Loading data. Please wait... </template>
    <template #header>
      <div class="flex justify-between">
        <span class="relative">
          <i
            class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600"
          />
          <InputText
            v-model="filters['global'].value"
            placeholder="Keyword Search"
            class="pl-10 font-normal"
          />
        </span>
        <div class="flex gap-2 items-center font-semibold">
          <span>Program:</span>
          <Dropdown
            v-model="selectedProgram"
            :options="programOptions"
            @change="$emit('onFilterProgram', selectedProgram.code)"
            optionLabel="name"
            placeholder="Select a Program"
            class="w-full md:w-[14rem] font-normal"
          />
        </div>
      </div>
    </template>
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></Column>
  </DataTable>
</template>
