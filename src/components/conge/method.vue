<template>
  <div>
    <div class="card my-3">
      <div class="card-header">
        <h5 class="card-title">getConges</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <button class="btn btn-block btn-primary" @click="getConges">getConges</button>
          </div>
          <div class="col">
              <code><pre>{{ getCongesData.result }}</pre></code>
          </div>
        </div>
      </div>
    </div>
    <div class="card my-3">
      <div class="card-header">
        <h5 class="card-title">getConge</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <input type="number" class="form-control mb-2" v-model="getCongeData.id" />
            <button class="btn btn-primary btn-block" @click="getConge(getCongeData.id)">getConge({{ getCongeData.id }})</button>
          </div>
          <div class="col">
            <code><pre>{{ getCongeData.result }}</pre></code>
          </div>
        </div>
      </div>
    </div>
    <div class="card my-3">
      <div class="card-header">
        <h5 class="card-title">postConge</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control mb-2" v-model="postCongeData.name" />
            <button class="btn btn-primary btn-block" @click="postConge">postConge</button>
          </div>
          <div class="col">
            <code><pre>{{ postCongeData.result }}</pre></code>
          </div>
        </div>
      </div>
    </div>
    <div class="card my-3">
      <div class="card-header">
        <h5 class="card-title">updateConge</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control mb-2" v-model="updateCongeData.name" />
            <input type="number" class="form-control mb-2" v-model="updateCongeData.id" />
            <button class="btn btn-primary btn-block" @click="updateConge(updateCongeData.id)">updateConge({{ updateCongeData.id }})</button>
          </div>
          <div class="col">
            <code><pre>{{ updateCongeData.result }}</pre></code>
          </div>
        </div>
      </div>
    </div>
    <div class="card my-3">
      <div class="card-header">
        <h5 class="card-title">deleteConge</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <input type="number" class="form-control mb-2" v-model="deleteCongeData.id" />
            <button class="btn btn-primary btn-block" @click="deleteConge(deleteCongeData.id)">deleteConge({{ deleteCongeData.id }})</button>
          </div>
          <div class="col">
            <code><pre>{{ deleteCongeData.result }}</pre></code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'method',
  data: function () {
    return {
      getCongesData: {
        result: null
      },
      getCongeData: {
        id: 0,
        result: null
      },
      postCongeData: {
        name: '',
        result: null
      },
      updateCongeData: {
        id: 0,
        name: '',
        result: null
      },
      deleteCongeData: {
        id: 0,
        result: null
      },
      apiURL: 'https://app-0c276a5c-b982-4d2a-905e-68c7f7cf9fd1.cleverapps.io/api',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }
  },
  methods: {
    // Recupere le tableau d'artistes
    getConges: async function() {
      let response = await fetch(`${this.apiURL}/conges`)
      this.getCongesData.result = await response.json()
    },
    // Recupere l'artiste à l'index id dans le tableau artistes
    getConge: async function(id) {
      let response = await fetch(`${this.apiURL}/conge/${id}`)
      this.getCongeData.result = await response.json()
    },
    // Ajoute un artiste au tableau artistes
    postConge: async function() {
      let response = await fetch(`${this.apiURL}/conge`, { headers: this.headers, method: 'POST', body: JSON.stringify({ name: this.postCongeData.name }) })
      this.postCongeData.result = await response.json()
    },
    // Modifie l'artiste à l'index id dans le tableau artistes
    updateConge: async function(id) {
      let response = await fetch(`${this.apiURL}/conge/${id}`, { headers: this.headers, method: 'POST', body: JSON.stringify({ name: this.updateCongeData.name }) })
      this.updateCongeData.result = await response.json()
    },
    // Supprime l'artiste à l'index id dans le tableau artistes
    deleteConge: async function(id) {
      let response = await fetch(`${this.apiURL}/conge/${id}`, { headers: this.headers, method: 'DELETE'})
      this.deleteCongeData.result = await response.json()
    }
  }
}
</script>
