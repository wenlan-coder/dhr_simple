<!--
 * @version: 
 * @Author: wenlan
 * @Date: 2022-11-07 22:17:28
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-08 16:20:37
-->
<script>
/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-11-07 22:09:10
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 22:15:23
 */
import { h, resolveComponent, defineComponent, computed, toRefs } from 'vue'
import svg from './svg/index.vue'
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
    const { size, color, name } = toRefs(props)
    console.log('size', size.value, name.value, color.value)
    const iconStyle = computed(() => {
      let s = size.value
      return {
        fontSize: s,
        color: color.value,
      }
    })

    if (name.value.indexOf('el-icon-') === 0) {
      return () =>
        h('el-icon', { class: 'icon el-icon', style: iconStyle.value }, [
          h(resolveComponent(name.value), { style: { width: '1em' } }),
        ])
    } else if (name.value.indexOf('local-') === 0) {
      return () => h(svg, { name: name.value, size: size.value, color: color.value })
    } else {
      return () => h(svg, { name: name.value, size: size.value, color: color.value })
    }
  },
})
</script>
