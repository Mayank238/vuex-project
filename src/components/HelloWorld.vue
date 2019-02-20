<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <hr>
        <app-another-counter></app-another-counter>
        <hr>
        <app-count></app-count>
        <hr>
        <input type="text" v-model="value" >
        <hr>
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import counter from '@/components/Counter'
import result from '@/components/Result'
import anotherresult from '@/components/Anoterresult'
import anothercounter from '@/components/AnotherCounter'
import counter3 from '@/components/Counter3'
  export default{
    computed:{
      value:{
        get(){
          return this.$store.state.value
        },
        set(value1){
          this.$store.dispatch('updatevalue', value1)
        }
      }
    },
    // methods:{
    //   updatevalu(event){
    //      this.$store.dispatch('updatevalue', event.target.value)
    //   }
    // },
    components:{
      'app-result': result,
      'app-counter': counter,
      'app-another-result': anotherresult,
      'app-another-counter': anothercounter,
      'app-count': counter3
    }
  }
</script>
