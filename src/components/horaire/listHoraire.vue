<template>
  <div>
    <meteo/>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th><button class="btn btn-sm btn-success" @click="$router.push({ name: 'add_Horaire' })"><font-awesome-icon icon="plus" /></button></th>
        </tr>
      </thead>
      <transition enter-active-class="animated slideInDown">
        <tbody v-if="listHoraire">
          <tr v-for="(horaire, index) of listHoraire" :key="index">
            <td>{{ index }}</td>
            <td>{{ horaire.name }}</td>
            <td>
              <button class="btn btn-sm btn-danger mr-2" @click="deletehoraire(index)"><font-awesome-icon icon="trash" /></button>
              <button class="btn btn-sm btn-success" @click="$router.push({ name: 'UpdateHoraire', params: { id: `${index}` } })"><font-awesome-icon icon="edit" /></button></td>
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
      listHoraire: null,
      apiURL: 'https://app-0c276a5c-b982-4d2a-905e-68c7f7cf9fd1.cleverapps.io/api',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }
  },
  created() {
    this.gethoraire()
  },
  watch: {
    '$route': function() {
      this.gethoraire()
    }
  },
  methods: {
    gethoraire: async function() {
      let response = await fetch(`${this.apiURL}/horaire`)
      this.listHoraire = await response.json()
    },
    deletehoraire: async function(id) {
      let response = await fetch(`${this.apiURL}/horaire/${id}`,
        {
          headers: this.headers,
          method: 'DELETE'
        })
      if(await response.json()) {
        this.gethoraire()
      } else {
        alert('La suppression a échoué. T\'es mauvais!')
      }
    }
  }
}
</script>