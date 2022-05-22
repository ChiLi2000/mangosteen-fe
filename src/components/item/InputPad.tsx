import { defineComponent, PropType, ref } from 'vue';
import { Icon } from '../../shared/Icon';
import { time } from '../../shared/time';
import s from './InputPad.module.scss';
import { DatetimePicker, NumberKeyboard, Popup } from 'vant';
export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const now = new Date()
    const refDate = ref<Date>(now)
    const refDatePickerVisible = ref(false)
    const showDatePicker = () => refDatePickerVisible.value = true
    const hideDatePicker = () => refDatePickerVisible.value = false
    const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
    const refAmount = ref('100')
    return () => <>
      <div class={s.dateAndAmount}>
        <span class={s.date}>
          <Icon name="date" class={s.icon} />
          <span>
            <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
              <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                onConfirm={setDate} onCancel={hideDatePicker}
              />
            </Popup>
          </span>
        </span>
        <span class={s.amount}>{refAmount.value}</span>
      </div>
      <div class={s.buttons}>
        数字面板
      </div>
    </>
  }
})