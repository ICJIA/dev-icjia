import { defineStore,acceptHMRUpdate } from 'pinia';
import { watch } from 'vue';

export const useCounterStore=defineStore("counter",{
    state: () => ({
        count: parseInt(localStorage.getItem('counter')) || 0,
}),
   actions:{
    increment(){
        this.count++;
    },
    reset(){
        this.count=0;
    }
    
   },

  // persist:{
   // storage: persistedState.localStorage,
  // },
});



export const useThemeStore=defineStore('theme',{
    state:()=>({
       isDarkTheme: localStorage.getItem('theme') === 'dark' ,
    }),
    actions:{
       toggleTheme(){
            this.isDarkTheme =! this.isDarkTheme;
            localStorage.setItem('theme',this.isDarkTheme ? 'dark' : 'light')
            },
       },
   });
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
  }
