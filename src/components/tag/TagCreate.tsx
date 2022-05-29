import { defineComponent, reactive } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Icon } from "../../shared/Icon";
import s from "./TagCreate.module.scss";
export const TagCreate = defineComponent({
  setup: (props, context) => {
      const formData= reactive({
          name:'',
          sign:'',
      })
    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => <Icon name="left" />,
          default: () => (
            <form>
              <div>
                <label>
                  <span>标签名</span>
                  <input />
                </label>
              </div>
              <div>
                <label>
                  <span>{'符号 ' + formData.sign}</span>
                  <EmojiSelect v-model={formData.sign}/>
                </label>
              </div>
              <div>
              <p class={s.tips}>记账时长按标签即可进行编辑</p>
              </div>
              <div>
              <Button class={s.button}>确定</Button>
              </div>
            </form>
          ),
        }}
      </MainLayout>
    );
  },
});
