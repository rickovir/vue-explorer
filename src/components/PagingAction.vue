<template>
    <div class="d-flex justify-content-between">
        <div class="d-flex">
            <p class="align-self-center m-0 me-3">Menampilkan</p> 
            <select class="form-select" v-model="query.per_page" @change="onChange">
                <option :value="3">3</option>
                <option :value="5">5</option>
                <option :value="10">10</option>
                <option :value="10">15</option>
            </select>
            <p class="align-self-center m-0 ms-3">Item</p> 
        </div>
        <div class="d-flex">
            <button class="btn btn-primary me-2" v-for="(item, index) in new Array(total_pages)" :key="item" @click="changePage(index)">{{index+=1}}</button>
        </div>
    </div>
</template>


<script lang="ts">
import { UserPageQuery } from '@/user.model';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PagingAction extends Vue {
  @Prop() query: UserPageQuery;
  @Prop() total_pages: number;

  @Emit("on-change-per_page") onChange(){
      return this.query.per_page;
  }

  @Emit("on-change-page") changePage(page:number){
      return page;
  }

  mounted(){
      console.log(this.query)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>