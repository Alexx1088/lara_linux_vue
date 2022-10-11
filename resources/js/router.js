/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue"

import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
  routes: [
      {
          path: '/people', component: function () {
              return import('./components/Person/Index')
          },
          name: 'person.index'
      }
  ]
})
