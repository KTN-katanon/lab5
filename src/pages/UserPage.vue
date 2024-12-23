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
    <q-table :columns="columns" :rows="userStore.users">
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
import { useUserStore } from 'src/stores/userStore';
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
const userStore = useUserStore()
const id = ref(0)
const email = ref('')
const password = ref('')
function edit(row: User) {
  id.value = row.id
  email.value = row.email
  password.value = row.password
}

function onSubmit() {
  if (id.value === 0) {
    userStore.addUser({id: id.value, email: email.value, password: password.value})
  } else {
    userStore.updateUser({id: id.value, email: email.value, password: password.value})
  }
  onReset()
}
function remove(row: User) {
  userStore.delUser(row)
}
function onReset() {
  id.value = 0
  email.value = ''
  password.value = ''
}
</script>
