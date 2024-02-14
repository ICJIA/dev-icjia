import { defineStore, acceptHMRUpdate } from 'pinia';
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
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot));
  }