<template>
  <div>
    <form @submit.prevent="updateEmploye(id)">
      <div class="card-body">
        <div class="row">
          <div class="col">
              <div class="input-group mb-3">
                <input type="text" v-model="updateEmployeData.name" lass="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
              </div>
            <button @click="updateEmploye(id)">modif</button>
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
        updateEmployeData: {
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
    this.getEmploye(this.id)
  },
  watch: {
    '$route': function() {
      this.getEmploye(this.id)
    }
  },
  methods:{
      getEmploye: async function(id) {
      let response = await fetch(`${this.apiURL}/employe/${id}`)
      let result = await response.json()
      this.updateEmployeData.name = result.name
    },
    // Modifie le conge à l'index id dans le tableau conge
    updateEmploye: async function(id) {
      let response = await fetch(`${this.apiURL}/employe/${id}`, { headers: this.headers, method: 'POST', body: JSON.stringify({ name: this.updateEmployeData.name }) })
      this.$router.push({ name: 'listEmploye'})
      this.updateEmployeData.result = await response.json()
    },
  }
}
</script>