<template>
	<div>
		<P>Counter is:{{ counte}}</P>
	</div>
</template>
<script type="text/javascript">
	export default{
		computed:{
			counte(){
			  return this.$store.getters.doublecounter;
		  }
		}
	}
</script>
