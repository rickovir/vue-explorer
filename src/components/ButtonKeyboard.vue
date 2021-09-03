<template>
  <button class="btn btn-dark" @click="onSelected">{{data}}</button>
</template>


<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ButtonKeyboard extends Vue {
  @Prop() data?: string;

  @Emit("on-pressed") onSelected(){
    return this.data;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .btn{
    border-radius: 16px;
    width: 100%;
    margin: 0.25rem;
  }
</style>