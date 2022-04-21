import { defineComponent, ref } from 'vue'
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    const refCount = ref(0)
    return () => <>
      <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Foot</router-link>
    <router-link to="/about">Go to Head</router-link>
  </p>
  <router-view></router-view>
      </>
  }
})

