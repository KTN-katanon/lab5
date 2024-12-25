<template>
  <q-page padding style="width: 100%; max-width: 1200px; margin: auto; background-color: bisque;">
    <div class="header text-center text-h4" style="padding-bottom: 30px; font-weight: bold;">Point of Sales</div>
    <div class="row">
      <div class="col-6">
        <q-scroll-area style="height: 100%; max-width: 600px">
          <div class="row full-width">
            <div v-for="p in products" :key="p.id" class="col-4">
              <ProductCard :product="p" @select="select"></ProductCard>
            </div>
          </div>
        </q-scroll-area>
      </div>

      <div class="col-6">
        <q-card class="q-pa-md shadow-2 order-section">
          <div class="text-h6 q-mb-md">Order Summary</div>
          <q-scroll-area style="height: 60vh">
            <table class="q-table">
              <thead>
                <tr>
                  <th class="text-center">ID</th>
                  <th class="text-center">Name</th>
                  <th class="text-center">Price</th>
                  <th class="text-center">Amount</th>
                  <th class="text-center">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in productItems" :key="item.id">
                  <td class="text-center">{{ item.id }}</td>
                  <td class="text-center">{{ item.product.name }}</td>
                  <td class="text-center">{{ item.product.price }}</td>
                  <td class="text-center">{{ item.amount }}</td>
                  <td class="text-center">
                    <q-btn flat size="15px" padding="xs" icon="edit" @click="edit(item)" />
                    <q-btn
                      flat
                      size="15px"
                      padding="xs"
                      icon="delete"
                      @click="deleteItem(item.id)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </q-scroll-area>

          <!-- ปุ่มคำนวณราคา -->
          <q-btn label="Calculate Total" color="primary" @click="calculateTotal" class="q-mt-md" />

          <!-- แสดงราคาเมื่อคำนวณ -->
          <div v-if="totalPrice !== null" class="text-h5 text-right q-mt-md">
            Total: ฿{{ totalPrice }}
          </div>

          <q-btn label="Checkout" color="primary" class="q-mt-lg full-width" size="lg"></q-btn>
        </q-card>
      </div>
    </div>

    <!-- Edit Dialog -->
    <q-dialog v-model="editDialogVisible">
      <q-card>
        <q-card-section>
          <div class="text-h6">Edit Item Quantity</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newAmount" label="Enter new amount" type="number" min="1" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" @click="editDialogVisible = false" />
          <q-btn flat label="Save" color="primary" @click="saveEdit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import ProductCard from 'src/components/ProductCard.vue'
import { useProductStore } from 'src/stores/productStore'
import type { ProductItem } from 'src/stores/productStore'
import { ref } from 'vue'

const productStore = useProductStore()
const { products, productItems, select, editItem, deleteItem } = productStore

const editDialogVisible = ref(false)
const newAmount = ref(1)
const selectedItem = ref<ProductItem | null>(null)

const totalPrice = ref<number | null>(null) // กำหนดตัวแปรเพื่อเก็บผลรวมราคา

// ฟังก์ชันคำนวณราคา
function calculateTotal() {
  totalPrice.value = productItems.reduce(
    (total, item) => total + item.product.price * item.amount,
    0,
  )
}

// Edit item quantity
function edit(item: ProductItem) {
  selectedItem.value = item
  newAmount.value = item.amount
  editDialogVisible.value = true
}

// Save edited item
function saveEdit() {
  if (selectedItem.value) {
    const newAmountValue = newAmount.value
    if (newAmountValue > 0) {
      editItem(selectedItem.value.id, newAmountValue)
    }
  }
  selectedItem.value = null // Clear selected item after editing
  editDialogVisible.value = false
}
</script>
