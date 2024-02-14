import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useCounterStore=defineStore("counter",{
   state:() =>({
    
    count: 0,
   
   }),
   getters:{
        getInvoices: (state) => state.counter,
   },
    actions: {
        increment(){
            this.count++;
        },
        reset(){
            this.count=0;
        }
    },
  
   persist:true,
});
