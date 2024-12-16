<template>
  <div>{{ num }}</div>
  <div>{{ data }}</div>
  <div><button @click="dec">-</button><button @click="inc">+</button></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  num: number
}>()
onMounted(()=>{
  data.value = props.num
})
const data = ref(2)
const inc = function(){
  data.value++
}
const dec = () => {
  data.value--
}
</script>
