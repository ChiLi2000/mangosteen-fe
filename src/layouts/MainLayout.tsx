import { defineComponent, PropType } from 'vue';
import { Navbar } from '../shared/Navbar';
export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
      <Navbar>{
        {
          default: () => context.slots.title?.(),
          icon: () => context.slots.icon?.(),
        }
      }</Navbar>
      {context.slots.default?.()}
      </div>
    )
  }
}) 