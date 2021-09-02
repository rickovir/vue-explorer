<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>text in : {{ textIn }}</h3>
    <input type="text" v-model="textIn" />
    <button @click="onSubmit()">Test Click Me</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  textIn?:string = "";

  @Emit("on-submit") onSubmit(){
    return this.textIn;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('./HelloWorld.scss');
</style>
