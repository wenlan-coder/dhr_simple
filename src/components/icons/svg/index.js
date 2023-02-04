/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-11-07 22:09:10
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 22:15:23
 */
import { h, resolveComponent, defineComponent, computed, toRefs } from 'vue'
import svg from './index.vue'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '18px',
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
  setup(props) {
    const iconStyle = computed(() => {
      const { size, color } = toRefs(props)
      let s = `${size.value.replace('px', '')}px`
      return {
        fontSize: s,
        color: color,
      }
    })

    if (name.indexOf('el-icon-') === 0) {
      return () => h('el-icon', { class: 'icon el-icon', style: iconStyle.value }, [h(resolveComponent(name))])
    } else if (name.indexOf('local-') === 0) {
      return () => h(svg, { name: props.name, size: props.size, color: props.color })
    }
  },
})
