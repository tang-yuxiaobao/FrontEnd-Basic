<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转并携带query参数（一）：to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp; -->
        <!-- 跳转并携带query参数（二）：to的对象写法 -->
        <router-link
          :to="{
            name: 'xiangQing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "homeMessage",
  data() {
    return {
      messageList: [
        { id: "001", title: "Message 001" },
        { id: "002", title: "Message 002" },
        { id: "003", title: "Message 003" },
      ],
    };
  },
};
</script>
