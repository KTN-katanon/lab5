<template>
  <q-page padding>
    <div>First Page</div>
    <CounterComponent :num="2"></CounterComponent>
    <CounterComponent :num="4"></CounterComponent>
  </q-page>
</template>

<script setup lang="ts">
import CounterComponent from 'src/components/CounterComponent.vue';

//
</script>
