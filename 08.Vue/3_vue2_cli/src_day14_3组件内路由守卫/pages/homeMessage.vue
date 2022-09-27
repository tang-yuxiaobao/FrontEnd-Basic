<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转并携带params参数（一）：to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp; -->
        <!-- 跳转并携带params参数（二）：to的对象写法 -->
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
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
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
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xiangQing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangQing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>
