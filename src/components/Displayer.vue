<template>
    <div class="displayer text-end">
        <h2 class="font-weight-bold m-0">{{data || '0'}}</h2>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Displayer extends Vue {
  @Prop() data?: string;
  @Prop() type?: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .displayer{
        color:#FFF;
        padding:0.5rem 1rem;
        border:1px solid #030303;
        background: #303030;
        border-radius: 1rem;
        margin-bottom: 0.5rem;
    }
</style>