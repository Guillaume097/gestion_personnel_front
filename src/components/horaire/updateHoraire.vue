<template>
  <div>
    <form @submit.prevent="updateHoraire(id)">
      <div class="card-body">
        <div class="row">
          <div class="col">
              <div class="input-group mb-3">
                <input type="text" v-model="updateHoraireData.name" lass="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
              </div>
            <button @click="updateHoraire(id)">modif</button>
          </div>
        </div>
      </div>
        </form>
      </div>
</template>

<script>
export default {
  name: 'update',
  data:function(){
    return{
        updateHoraireData: {
        id: 0,
        name: '',
        result: null
      },
      apiURL: 'https://app-0c276a5c-b982-4d2a-905e-68c7f7cf9fd1.cleverapps.io/api',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }
  },
  props: {
    id: String
  },
  created() {
    this.getHoraire(this.id)
  },
  watch: {
    '$route': function() {
      this.getHoraire(this.id)
    }
  },
  methods:{
      getHoraire: async function(id) {
      let response = await fetch(`${this.apiURL}/horaire/${id}`)
      let result = await response.json()
      this.updateHoraireData.name = result.name
    },
    // Modifie le conge à l'index id dans le tableau conge
    updateHoraire: async function(id) {
      let response = await fetch(`${this.apiURL}/horaire/${id}`, { headers: this.headers, method: 'POST', body: JSON.stringify({ name: this.updateHoraireData.name }) })
      this.$router.push({ name: 'listHoraire'})
      //this.updateCongeData.result = await response.json()
    },
  }
}
</script>