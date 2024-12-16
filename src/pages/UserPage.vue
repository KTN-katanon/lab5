<template>
  <q-page padding>
    <q-table :columns="columns" :rows="users"></q-table>
  </q-page>
</template>

<script setup lang="ts">
import type { QTableColumn } from 'quasar'
import type { User } from 'src/models'
import { ref } from 'vue'

const columns: QTableColumn[] = [
  {
    name: 'id',
    field: 'id',
    label: 'ID',
    align: 'center',
  },
  {
    name: 'email',
    field: 'email',
    label: 'Email',
    align: 'center',
  },
  {
    name: 'password',
    field: 'password',
    label: 'Password',
    align: 'center',
  },
]
const users = ref<User[]>([
  {
    id: 1,
    email: 'admin@mail.com',
    password: 'Pass@1234',
  },
  {
    id: 2,
    email: 'user@mail.com',
    password: 'Pass@1234',
  },
])
// const lastUserId = 3
</script>
