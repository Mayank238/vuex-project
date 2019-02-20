<template>
	<div>
		<button class="btn btn-info" @click='increment(100)'>Increment</button>
		<button class="btn btn-info" @click='decrement(100)'>Decrement</button>
	</div>
</template>
<script type="text/javascript">
import {mapActions} from 'vuex'
	export default{
		methods:{
				  ...mapActions([
		                       'increment',
		                       'decrement'
				  	])
          // increment(by){
          // 	this.$store.dispatch('increment', by)
          // }
				}

	}
</script>
