import { Overlay } from "vant";
import { defineComponent, PropType, reactive, ref } from "vue";
import s from "../components/item/ItemList.module.scss";
import { ItemSummary } from "../components/item/ItemSummary";
import { MainLayout } from "../layouts/MainLayout";
import { Form, FormItem } from "../shared/Form";
import { OverlayIcon } from "../shared/Overlay";
import { Time } from "../shared/time";
import { Tab, Tabs } from "../shared/Tabs";
export const statisticsPage = defineComponent({
  setup: (props, context) => {
    const refSelected = ref("本月");
    const time = new Time();
    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format(),
    });
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth(),
      },
      {
        start: time.add(-1, "month").firstDayOfMonth(),
        end: time.add(-1, "month").lastDayOfMonth(),
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear(),
      },
    ];
    const refOverlayVisible = ref(false);
    const onSubmitCustomTime = (e: Event) => {
      e.preventDefault();
      refOverlayVisible.value = false;
    };
    const onSelect = (value: string) => {
      if (value === "自定义时间") {
        refOverlayVisible.value = true;
      }
    };
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Tabs
                classPrefix={"customTabs"}
                v-model:selected={refSelected.value}
                onUpdate:selected={onSelect}
              >
                <Tab name="本月">
                  <div>图表1</div>
                </Tab>
                <Tab name="上月">
                  <div>图表2</div>
                </Tab>
                <Tab name="今年">
                  <div>图表3</div>
                </Tab>
                <Tab name="自定义时间">
                  <div>图表4</div>
                </Tab>
              </Tabs>
              <Overlay show={refOverlayVisible.value} class={s.overlay}>
                <div class={s.overlay_inner}>
                  <header>请选择时间</header>
                  <main>
                    <Form onSubmit={onSubmitCustomTime}>
                      <FormItem
                        label="开始时间"
                        v-model={customTime.start}
                        type="date"
                      />
                      <FormItem
                        label="结束时间"
                        v-model={customTime.end}
                        type="date"
                      />
                      <FormItem>
                        <div class={s.actions}>
                          <button
                            type="button"
                            onClick={() => (refOverlayVisible.value = false)}
                          >
                            取消
                          </button>
                          <button type="submit">确认</button>
                        </div>
                      </FormItem>
                    </Form>
                  </main>
                </div>
              </Overlay>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
