<template>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">email</th>
                <th scope="col">avatar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <th scope="row" class="align-middle">{{item.id}}</th>
                    <td class="align-middle">{{item.first_name}}</td>
                    <td class="align-middle">{{item.last_name}}</td>
                    <td class="align-middle">{{item.email}}</td>
                    <td class="align-middle"><img :src="item.avatar" class="img-thumbnail rounded" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script lang="ts">
import { Users } from '@/user.model';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TableList extends Vue {
  @Prop() data?: Users[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .img-thumbnail{
        width: 100px;
        height: 100px;
    }
</style>