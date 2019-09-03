import Vue from 'vue';
import Router from 'vue-router';


///import method from './components/artist/method.vue';

import listConge from './components/conge/listConge.vue';
import createConge from './components/conge/createConge.vue';
import deleteConge from './components/conge/deleteConge.vue';
import updateConge from './components/conge/updateConge.vue';

import listEmploye from './components/employe/listEmploye.vue';
import createEmploye from './components/employe/createEmploye.vue';
import deleteEmploye from './components/employe/deleteEmploye.vue';
import updateEmploye from './components/employe/updateEmploye.vue';

import listHoraire from './components/horaire/listHoraire.vue';
import createHoraire from './components/horaire/createHoraire.vue';
import deleteHoraire from './components/horaire/deleteHoraire.vue';
import updateHoraire from './components/horaire/updateHoraire.vue';

Vue.use(Router);

export default new Router({
  routes: [

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
        path: '/conge/delete',
        name: 'deleteConge',
        component: deleteConge,
    },
    {
        path: '/conge/update',
        name: 'updateConge',
        component: updateConge,
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
        path: '/employe/delete',
        name: 'deleteEmploye',
        component: deleteEmploye,
    },
    {
        path: '/employe/update',
        name: 'updateEmploye',
        component: updateEmploye,
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
        path: '/horaire/delete',
        name: 'deleteHoraire',
        component: deleteHoraire,
    },
    {
        path: '/horaire/update',
        name: 'updateHoraire',
        component: updateHoraire,
    }
  ],
});