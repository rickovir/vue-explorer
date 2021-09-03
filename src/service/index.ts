import { UserPageQuery } from '@/user.model';
import axios from 'axios';

class DataService{
    public async getUserList(payload:UserPageQuery, onError:any)
    {
        return axios.get('api/users',{params:payload}).catch((error)=>{
            if(onError){
                onError(error);
            }
        });
    }
}

export const dataService = new DataService();