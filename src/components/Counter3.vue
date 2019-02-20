<template>
	<div>
		<button class="btn btn-info" @click='asyncIncrement({by:100 , duration:1000})'>asyncIncrement</button>
		<button class="btn btn-info" @click='asyncDecrement({by:100 , duration:1000})'>asyncDecrement</button>
	</div>
</template>
<script type="text/javascript">
import {mapActions} from 'vuex'
	export default{
		methods:{
				  ...mapActions([
		                       'asyncIncrement',
		                       'asyncDecrement'
				  	])
				}

	}
</script>
