import axios from "axios";
import { createBrowserHistory } from "history";

const url = 'http://localhost:5001'

const history = createBrowserHistory();

const authProvider = {
     login: async (userData) => {
        const  headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'mode': 'no-cors',
        }
        try {
            const {data} = await axios.post(url+'/adminAuth',userData,headers);
            console.log(data.status);
            if(data.status==200){
                localStorage.setItem("mathcode-admintoken",data.user.token)
                return Promise.resolve()
            }
            
        } catch (error) {
            throw error
        }
    },
     checkError: error => Promise.resolve(),
     checkAuth: () => {
        if(localStorage.getItem('mathcode-admintoken') ){
            return Promise.resolve()
          }else{
            return Promise.reject()
          }
     },
     logout: () => {
        localStorage.removeItem('mathcode-admintoken');
        return Promise.resolve()
     },
     getIdentity: () => Promise.resolve(),
     getPermissions: () => Promise.resolve(),
};

export default authProvider;