import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  size: string
}

export interface ProductItem {
  id: number
  product: Product
  amount: number
}

export const useProductStore = defineStore('productStore', () => {
  const lastProductItemId = ref(1)

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
    const existingItem = productItems.value.find((item) => item.product.id === product.id)
    if (existingItem) {
      existingItem.amount += 1
    } else {
      productItems.value.push({
        id: lastProductItemId.value++,
        product,
        amount: 1,
      })
    }
  }
  const sumPrice = computed(() => {
    return productItems.value.reduce((total, item) => total + item.product.price * item.amount, 0)
  })

  function updateItem(itemId: number, newAmount: number) {
    const index = productItems.value.findIndex((item) => item.id === itemId)
    if (index !== -1 && newAmount > 0) {
      productItems.value[index]!.amount = newAmount
    }
  }

  function editItem(itemId: number, newAmount: number) {
    const item = productItems.value.find((item) => item.id === itemId)
    if (item && newAmount > 0) {
      item.amount = newAmount
    }
  }

  function deleteItem(itemId: number) {
    const index = productItems.value.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      productItems.value.splice(index, 1) // ลบ item ออกจาก productItems
    }
    console.log('Updated product items:', productItems.value) // ตรวจสอบว่า productItems ถูกอัพเดตหลังจากลบ
  }

  return {
    products,
    productItems,
    select,
    editItem,
    deleteItem,
    updateItem,
    sumPrice,
  }
})
