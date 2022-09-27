import { onBeforeMount, onMounted, reactive } from "vue";
export default function () {
  // 所用数据
  let point = reactive({
    x: 0,
    y: 0,
  });

  // 方法
  function savePoint(event) {
    // console.log(event.pageX, event.pageY);
    point.x = event.pageX;
    point.y = event.pageY;
  }

  // 相关的生命周期钩子
  onMounted(() => {
    // 绑定事件监听
    window.addEventListener("click", savePoint);
  });

  onBeforeMount(() => {
    // 在卸载之前移除事件监听
    window.removeEventListener("click", savePoint);
  });

  return point;
}
