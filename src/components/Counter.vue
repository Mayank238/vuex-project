<template>
	<div>
		<button class="btn btn-info" @click='increment(100)'>Increment</button>
		<button class="btn btn-info" @click='decrement(100)'>Decrement</button>
	</div>
</template>
<script type="text/javascript">
import {mapMutations} from 'vuex'
	export default{
		methods:{
				  ...mapMutations([
		                       'increment',
		                       'decrement'
				  	])
				}
    //****using commit we get mutation func****

		// methods:{
		// 	increment(){
		// 		this.$store.commit('increment');
		// 	},
		// 	decrement(){
		// 		this.$store.commit('decrement');
		// 	}

		// }
	}
</script>
