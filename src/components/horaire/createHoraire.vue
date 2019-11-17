<template>
    <div>
    <h2 class="card-title">Ajouter une horaire</h2>
       <div class="card-body">
        <div class="row">
          <div class="col">
              <div class="input-group mb-3">
                <input v-model="horaire_add" placeholder="modifiez-moi" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            <button class="btn btn-block btn-primary" @click="postHoraire">postHoraire</button>
          </div>
          <p>L'horaire à bien été ajouté : {{ result }}</p>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    name: 'add_horaire',
    data: function(){
        return{
            horaire_add: '',
            result: null,
                  apiURL: 'https://app-0c276a5c-b982-4d2a-905e-68c7f7cf9fd1.cleverapps.io/api',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        }

    },
    methods:{
    postHoraire: async function() {
      let response = await fetch(`${this.apiURL}/horaire`, { headers: this.headers, method: 'POST', body: JSON.stringify({ name: this.horaire_add }) })
      this.$router.push({ name: 'listHoraire'})
      this.result = await response.json()
    },
    }
}

</script>
