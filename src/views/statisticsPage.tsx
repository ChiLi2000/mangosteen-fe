import { defineComponent } from "vue";
import { Charts } from "../components/statistics/Charts";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
const statisticsPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <TimeTabsLayout
        component={Charts}
        rerenderOnSwitchTab={true}
        hideThisYear={true}
      />
    );
  },
});

export default statisticsPage