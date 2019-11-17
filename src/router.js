import Vue from 'vue';
import Router from 'vue-router';


import method from './components/conge/method.vue';

import listConge from './components/conge/listConge.vue';
import createConge from './components/conge/createConge.vue';
import updateConge from './components/conge/updateConge.vue';


import listEmploye from './components/employe/listEmploye.vue';
import createEmploye from './components/employe/createEmploye.vue';
import updateEmploye from './components/employe/updateEmploye.vue';


import listHoraire from './components/horaire/listHoraire.vue';
import createHoraire from './components/horaire/createHoraire.vue';
import updateHoraire from './components/horaire/updateHoraire.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/method',
      name: 'method',
      component: method,
    },

    {
      path: '/conge',
      name: 'listConge',
      component: listConge,
    },
    {
      path: '/conge/create',
      name: 'createConge',
      component: createConge,
    },
    {
      path: '/conge/update/:id',
      name: 'updateConge',
      component: updateConge,
      props: true
    },
    {
      path: '/employe',
      name: 'listEmploye',
      component: listEmploye,
    },
    {
      path: '/employe/create',
      name: 'createEmploye',
      component: createEmploye,
    },
    {
      path: '/employe/update/:id',
      name: 'updateEmploye',
      component: updateEmploye,
      props: true
    },
    {
      path: '/horaire',
      name: 'listHoraire',
      component: listHoraire,
    },
    {
      path: '/horaire/create',
      name: 'createHoraire',
      component: createHoraire,
    },
    {
      path: '/horaire/update/:id',
      name: 'updateHoraire',
      component: updateHoraire,
      props: true
    },
  ],
});