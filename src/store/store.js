import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
   state:{
   	 value: 0
   },
   getters:{
   	 value: state => {
   	 	 return state.value
   	 }
   },
   mutations:{
   	updatevalue: (state,payload) => {
   		state.value = payload
   	}
   },
   actions,
   modules:{
   	 counter
   }
})
