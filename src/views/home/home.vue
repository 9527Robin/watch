<template>
  <div class="home">
    <HeadLogo></HeadLogo>
    <ul class="bookmarkType">
      <li
        @click="golink(item)"
        :style="`background: ${item.background || '#3cd978'} `"
        v-for="(item, index) in typeList"
        :key="index"
      >
        <i :class="item.icon || 'el-icon-menu'"></i>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import HeadLogo from "../../components/HeadLogo";
import _ from "loadsh";
export default {
  name: "Home",
  components: {
    HeadLogo
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      typeList: bookmarkType
    };
  },
  created() {
    // console.log(bookmarkType, bookmarkList, "bookmarkType");
  },
  methods: {
    /**
     * @param { {name,background,color,icon, typeKey} } bookmarkType 书签类型
     */
    golink(bookmarkType) {
      this.$router.push({
        name: "main"
      });
      this.$store.commit("setBookmarkType", _.get(bookmarkType, "typeKey", ""));
    }
  }
};
</script>
<style lang="less" scoped>
.bookmarkType {
  font-size: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 2rem;
    height: 2rem;
    margin: 0.4rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    i {
      font-size: 0.4rem;
    }
  }
}
</style>
