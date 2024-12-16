<template>
  <q-page padding>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your Password"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Please type your password']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    <q-table :columns="columns" :rows="users"></q-table>
  </q-page>
</template>

<script setup lang="ts">
import { type QTableColumn } from 'quasar'
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
const name = ref('')
const password = ref('')
let lastUserId = 3

function onSubmit() {
  users.value.push({id: lastUserId++,email: name.value, password: password.value})
  onReset()
}

function onReset() {
  name.value = ''
  password.value = ''
}
</script>
