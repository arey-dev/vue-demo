import { ProgramScheduleService } from '@/service/ProgramSchedulService'
import { onMounted, ref } from 'vue'

export function usePrograms() {
  const initialData = ref()
  const data = ref()
  const loading = ref(false)

  const filterByProgram = (code) => {
    data.value = initialData.value.programs.filter((data) => data.code === code)[0]
  }

  onMounted(async () => {
    try {
      loading.value = true
      initialData.value = await ProgramScheduleService.getProgramSchedules()
      filterByProgram('CS')
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  })

  return { data, filterByProgram, loading }
}
