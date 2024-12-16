<template>
  <q-page padding>
    <div>First Page</div>
    <CounterComponent
      :num="2"
      @update="
        (num: number) => {
          console.log('Update counter 1: ' + num)
        }
      "
    ></CounterComponent>
    <CounterComponent :num="4" @update="update2"></CounterComponent>
  </q-page>
</template>

<script setup lang="ts">
import CounterComponent from 'src/components/CounterComponent.vue'
function update2(num: number) {
  console.log('Update counter 1: ' + num)
}
</script>
