<template>
  <q-page padding style="width: 600px">
    <div>Pos Page</div>
    <div class="row fullscreen">
      <div class="col-6">
        <div class="row">
          <div v-for="p in products" :key="p.id" class="col-4">
            <ProductCard :product="p" @select="select"></ProductCard>
          </div>
        </div>
      </div>
      <div class="col-6">
        <table>
          <thead>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>amount</th>
          </thead>
          <tbody>
            <tr v-for="item in productItems" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.product.name }}</td>
              <td>{{ item.product.price }}</td>
              <td>{{ item.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ProductCard from 'src/components/ProductCard.vue'
import { type Product } from 'src/models'
import { ref } from 'vue'
interface ProductItem {
  id: number
  product: Product
  amount: number
}
let lastProductItemId = 1
const products = ref<Product[]>([
  {
    id: 1,
    name: 'Coffee 1',
    price: 20,
    image: 'product1.png',
    size: 'ML',
  },
  {
    id: 2,
    name: 'Coffee 2',
    price: 20,
    image: 'product2.png',
    size: 'ML',
  },
  {
    id: 3,
    name: 'Coffee 3',
    price: 20,
    image: 'product3.png',
    size: 'ML',
  },
  {
    id: 4,
    name: 'Coffee 4',
    price: 20,
    image: 'product4.png',
    size: 'ML',
  },
  {
    id: 5,
    name: 'Coffee 5',
    price: 20,
    image: 'product5.png',
    size: 'ML',
  },
  {
    id: 6,
    name: 'Coffee 6',
    price: 20,
    image: 'product6.png',
    size: 'ML',
  },
  {
    id: 7,
    name: 'Coffee 7',
    price: 20,
    image: 'product7.png',
    size: 'ML',
  },
  {
    id: 8,
    name: 'Coffee 8',
    price: 20,
    image: 'product8.png',
    size: 'ML',
  },
  {
    id: 9,
    name: 'Coffee 9',
    price: 20,
    image: 'product9.png',
    size: 'ML',
  },
  {
    id: 10,
    name: 'Coffee 10',
    price: 20,
    image: 'product10.png',
    size: 'ML',
  },
])
const productItems = ref<ProductItem[]>([])
function select(product: Product) {
  console.log(product)
  productItems.value.push({ id: lastProductItemId++, product: product, amount: 1 })
}
</script>
