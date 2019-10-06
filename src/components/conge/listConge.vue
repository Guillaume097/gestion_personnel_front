<template>
  <div>
    <meteo/>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th><button class="btn btn-sm btn-success" @click="$router.push({ name: 'add_conge' })"><font-awesome-icon icon="plus" /></button></th>
        </tr>
      </thead>
      <transition enter-active-class="animated slideInDown">
        <tbody v-if="listConge">
          <tr v-for="(conge, index) of listConge" :key="index">
            <td>{{ index }}</td>
            <td>{{ conge.name }}</td>
            <td>
              <button class="btn btn-sm btn-danger mr-2" @click="deleteconge(index)"><font-awesome-icon icon="trash" /></button>
              <button class="btn btn-sm btn-success" @click="$router.push({ name: 'UpdateConge', params: { id: `${index}` } })"><font-awesome-icon icon="edit" /></button></td>
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
    this.getconge()
  },
  watch: {
    '$route': function() {
      this.getconge()
    }
  },
  methods: {
    getconge: async function() {
      let response = await fetch(`${this.apiURL}/conge`)
      this.listConge = await response.json()
    },
    deleteconge: async function(id) {
      let response = await fetch(`${this.apiURL}/conge/${id}`,
        {
          headers: this.headers,
          method: 'DELETE'
        })
      if(await response.json()) {
        this.getconge()
      } else {
        alert('La suppression a échoué. T\'es mauvais!')
      }
    }
  }
}
</script>