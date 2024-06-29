<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import DataTable from '@/components/DataTable.vue'
import { usePrograms } from '@/composables/programs'

const { data, filterByProgram, loading } = usePrograms()

const columns = [
  { field: 'examType', header: 'Exam Type' },
  { field: 'assignedRoom', header: 'Assigned Room' },
  { field: 'schedule', header: 'Schedule' },
  { field: 'time', header: 'Time' }
]

const filterFields = ['examType', 'assignedRoom', 'schedule', 'time']

const handleChange = (code) => {
  filterByProgram(code)
}
</script>

<template>
  <AppHeader />
  <div class="h-[calc(100%-6rem)] flex">
    <AppSidebar />
    <main class="flex-1 p-4">
      <section class="mb-8 mt-4">
        <h1 class="text-center font-semibold text-lg">
          Type of Exam / Schedule of Examination / Room Assignment
        </h1>
      </section>

      <DataTable
        :columns
        :loading
        :filterFields
        :data="data?.exams"
        @onFilterProgram="handleChange"
      />
    </main>
  </div>
</template>
