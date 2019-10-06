<template>
  <div>
    <form @submit.prevent="updateConge(id)">
      <div class="card-body">
        <div class="row">
          <div class="col">
              <div class="input-group mb-3">
                <input type="text" v-model="updateCongeData.name" lass="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
              </div>
            <button @click="updateConge(id)">modif</button>
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
        updateCongeData: {
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
    this.getConge(this.id)
  },
  watch: {
    '$route': function() {
      this.getConge(this.id)
    }
  },
  methods:{
      getConge: async function(id) {
      let response = await fetch(`${this.apiURL}/conge/${id}`)
      let result = await response.json()
      this.updateCongeData.name = result.name
    },
    // Modifie le conge à l'index id dans le tableau conge
    updateConge: async function(id) {
      let response = await fetch(`${this.apiURL}/conge/${id}`, { headers: this.headers, method: 'POST', body: JSON.stringify({ name: this.updateCongeData.name }) })
      this.$router.push({ name: 'listConge'})
      //this.updateCongeData.result = await response.json()
    },
  }
}
</script>