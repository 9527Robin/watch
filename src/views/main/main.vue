<template>
  <div class="main-page">
    <HeadLogo />
    <SearchComponent />
    <!-- <span class="mark-title">常用网址</span> -->
    <div class="bookmark-list">
      <a
        class="bookmark-list-item"
        v-for="(item, index) in markList"
        :key="index"
        :title="item.detail"
        :target="item.target || '_blank'"
        :href="_.get(item, 'url', '')"
      >
        <i
          v-if="!item.imageUrl"
          :style="item.color ? `color: ${item.color}` : 'color: #409eff'"
          :class="item.icon ? `${item.icon} icon` : 'el-icon-s-fold icon'"
        ></i>
        <img v-if="item.imageUrl" :src="item.imageUrl" alt="" />
        <p class="name">{{ item.name || "default Name" }}</p>
        <p class="detail">{{ item.detail || "无" }}</p>
      </a>
    </div>

    <div class="bookmark-list unusual">
      <!-- <span class="mark-title">不常用网址</span> -->
      <a
        class="bookmark-list-item"
        v-for="(item, index) in unusualMarkList"
        :key="index"
        :title="item.detail"
        :target="item.target || '_blank'"
        :href="_.get(item, 'url', '')"
      >
        <i
          v-if="!item.imageUrl"
          :style="item.color ? `color: ${item.color}` : 'color: #409eff'"
          :class="item.icon ? `${item.icon} icon` : 'el-icon-s-fold icon'"
        ></i>
        <img v-if="item.imageUrl" :src="item.imageUrl" alt="" />
        <p class="name">{{ item.name || "default Name" }}</p>
        <p class="detail">{{ item.detail || "无" }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import HeadLogo from "@/components/HeadLogo";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import _ from "loadsh";
export default {
  components: {
    HeadLogo,
    SearchComponent
  },
  data() {
    return {
      markList: [],
      unusualMarkList: []
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    const data = _.get(bookmarkList, "company", []);
    const markList = [];
    const unusualMarkList = [];
    data.forEach(item => {
      if (_.get(item, "unusual")) {
        unusualMarkList.push(item);
      } else {
        markList.push(item);
      }
    });
    this.unusualMarkList = unusualMarkList;
    this.markList = markList;
  }
};
</script>
<style lang="less" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  .unusual {
    border-top: 1px solid #b5b5b5;
  }
  .mark-title {
    font-size: 22px;
    font-weight: bold;
    padding-left: 32px;
  }
  .bookmark-list {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem;

    .bookmark-list-item {
      &:hover {
        border: 2px solid #3cd977;
      }
      width: 2.5rem;
      height: 2rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid #b5b5b5;
      margin: 0.1rem;
      padding: 0.1rem;
      .icon {
        font-size: 0.5rem;
      }
      img {
        max-width: 1rem;
        height: 0.5rem;
      }
      .name {
        font-size: 0.2rem;
        font-weight: bold;
        padding: 0.1rem 0;
        color: #000;
      }
      .detail {
        height: 0.8rem;
        color: #999;
        line-height: 25px;
        font-size: 0.16rem;
        display: -webkit-box;
        text-overflow: ellipsis;
        width: 100%;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
