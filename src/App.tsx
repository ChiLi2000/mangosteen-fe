import { defineComponent, ref } from 'vue'

export const App = defineComponent({
  setup() {
    const refCount = ref(0)
    return () => <>
      <h1>{refCount.value}</h1>
      <button onClick={()=>{
        refCount.value++
      }}>+1</button>
      </>
  }
})

