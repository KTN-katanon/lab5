<template>
  <q-page padding>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
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
    <q-table :columns="columns" :rows="users">
      <template v-slot:body-cell-operation="{ row }">
        <q-btn flat icon="edit" @click="edit(row)"></q-btn
        ><q-btn flat icon="delete" @click="remove(row)"><template #default> </template></q-btn>
      </template>
    </q-table>
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
    sortable: true,
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
  {
    name: 'operation',
    field: 'operation',
    label: '',
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
const id = ref(0)
const email = ref('')
const password = ref('')
let lastUserId = 3
function edit(row: User) {
  id.value = row.id
  email.value = row.email
  password.value = row.password
}

function onSubmit() {
  if (id.value === 0) {
    users.value.push({ id: lastUserId++, email: email.value, password: password.value })
  } else {
    const index = users.value.findIndex((item) => item.id === id.value)
    users.value[index]!.id = id.value
    users.value[index]!.email = email.value
    users.value[index]!.password = password.value
  }
  onReset()
}
function remove(row: User) {
  const index = users.value.findIndex((item) => item.id === row.id)
  users.value.splice(index, 1)
}
function onReset() {
  id.value = 0
  email.value = ''
  password.value = ''
}
</script>
