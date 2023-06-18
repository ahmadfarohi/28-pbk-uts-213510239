<template>
    <div>
      <h1>INI STORE DENGAN PINIA</h1>
      <p>Counter: {{ store.counter }}</p>
      <button @click="incrementCounter">Tambahkan Counter</button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useMyStore } from '../store/myStore';
  
  export default defineComponent({
    name: 'Store',
    setup() {
      const store = useMyStore();
  
      const incrementCounter = () => {
        store.increment();
      };
  
      return {
        store,
        incrementCounter,
      };
    },
  });
  </script>
  