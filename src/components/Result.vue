<template>
	<div>
		<P>Counter is: {{ doublecounter}}</P>
		<p>clicks result: {{stringclick}}</p>
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
	export default{
		computed:{
			...mapGetters([
                     'doublecounter',
                     'stringclick'
				])
			// counter(){
			//   return this.$store.state.counter;
		 //  }
		}
	}
</script>
