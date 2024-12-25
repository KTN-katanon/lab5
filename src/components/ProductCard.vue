<template>
  <div>
    <q-card class="my-card shadow-2">
      <q-img :src="product.image" style="height: 120px">
        <div class="overlay">
          <div class="text-h6 font-bold">{{ product.name }}</div>
          <div class="text-subtitle2 font-medium">{{ product.price }}</div>
        </div>
      </q-img>

      <q-card-actions align="center" class="q-pa-none">
        <q-btn flat size="sm" @click="select" class="full-width">Select</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { type Product } from 'src/models'

const props = defineProps<{
  product: Product
}>()
const emit = defineEmits<{
  select: [product: Product]
}>()

function select() {
  emit('select', props.product)
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 200px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 5px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.q-btn {
  width: 100%;
}
</style>
