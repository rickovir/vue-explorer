<template>
    <div class="user-container">
        <div class="table-container">
            <PagingAction :query="pageQuery" :total_pages="totalPages" @on-change-per_page="changePerPage" @on-change-page="changePage" />
            <TableList :data="userList" />
        </div>
    </div>
</template>

<script lang="ts">
import { UserPageQuery, IPageResult, Users } from '@/user.model';
import { Component, Vue } from 'vue-property-decorator';
import {dataService} from '../service';
import TableList from '@/components/TableList.vue'; // @ is an alias to /src
import PagingAction from '@/components/PagingAction.vue'; // @ is an alias to /src

@Component({
  components: {
      TableList,
      PagingAction
  },
})
export default class UserList extends Vue {
    pageQuery:UserPageQuery = new UserPageQuery();
    userList:Users[] = [];
    totalRecords?:number = 0;
    totalPages?:number = 1;
    
    mounted(){
        this.getList();
    }

    changePerPage(event:number)
    {
        this.pageQuery.per_page = event;
        this.getList();
    }

    changePage(event:number)
    {
        this.pageQuery.page = event;
        this.getList();
    }

    getList(){
        const errorHandling = (error) => {
            console.error('error : ', error);
        };
        dataService.getUserList(this.pageQuery, errorHandling)
        .then((data:any)=>{
            const request:IPageResult = data?.data;
            this.userList = request.data;
            this.totalRecords = request.total;
            this.totalPages = request.total_pages;
        });
    }
}
</script>

<style lang="scss" scoped>
    .table-container{
        width: 80%;
        margin:auto;
        border:1px solid #ccc;
        padding: 1rem;
        border-radius: 1rem;
    }
</style>