<template>
  <div class="home">
    <h1>From emiter : {{textEmiter}}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message" @on-submit="submitHandler"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  message?:string = "hello world to me";
  textEmiter?:string = "";

  submitHandler(event:string):void{
    this.textEmiter = event;
  }
}
</script>
