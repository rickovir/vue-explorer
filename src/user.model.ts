export class UserPageQuery{
    page:number;
    per_page:number;
    constructor(){
        this.page = 1;
        this.per_page = 5;
    }
}

export interface IPageResult{
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data:any[];
}

export class Users{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;

    constructor()
    {
        this.id = 0;
        this.email = "";
        this.first_name = "";
        this.last_name = "";
        this.avatar = "";
    }
}