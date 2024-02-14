import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useCounterStore=defineStore("counter",{
   state:() =>({
    
    count: 0,
   
   }),
    actions: {
        increment(){
            this.count++;
        },
    },
});
