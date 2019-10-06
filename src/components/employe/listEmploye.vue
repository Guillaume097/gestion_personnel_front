<template>
  <div>
    <meteo/>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th><button class="btn btn-sm btn-success" @click="$router.push({ name: 'add_employe' })"><font-awesome-icon icon="plus" /></button></th>
        </tr>
      </thead>
      <transition enter-active-class="animated slideInDown">
        <tbody v-if="listEmploye">
          <tr v-for="(employe, index) of listEmploye" :key="index">
            <td>{{ index }}</td>
            <td>{{ employe.name }}</td>
            <td>
              <button class="btn btn-sm btn-danger mr-2" @click="deleteemploye(index)"><font-awesome-icon icon="trash" /></button>
              <button class="btn btn-sm btn-success" @click="$router.push({ name: 'UpdateEmploye', params: { id: `${index}` } })"><font-awesome-icon icon="edit" /></button></td>
          </tr>
        </tbody>
      </transition>
    </table>
  </div>
</template>

<script>
export default {
  name:'list',
  data: function() {
    return {
      listConge: null,
      apiURL: 'https://app-0c276a5c-b982-4d2a-905e-68c7f7cf9fd1.cleverapps.io/api',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }
  },
  created() {
    this.getemploye()
  },
  watch: {
    '$route': function() {
      this.getemploye()
    }
  },
  methods: {
    getemploye: async function() {
      let response = await fetch(`${this.apiURL}/employe`)
      this.listConge = await response.json()
    },
    deleteconge: async function(id) {
      let response = await fetch(`${this.apiURL}/employe/${id}`,
        {
          headers: this.headers,
          method: 'DELETE'
        })
      if(await response.json()) {
        this.getemploye()
      } else {
        alert('La suppression a échoué. T\'es mauvais!')
      }
    }
  }
}
</script>