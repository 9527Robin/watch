<template>
  <div class="search-component">
    <el-input
      :placeholder="请输入内容"
      v-model="searchValue"
      class="input-with-select"
      @keyup.enter.native="searchEnter"
    >
      <el-select
        v-model="selectType"
        class="selectType"
        slot="prepend"
        placeholder="请选择"
      >
        <el-option
          v-for="item in searchOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <a
        slot="append"
        target="_blank"
        id="searchUrl"
        :href="`${selectType}${searchValue}`"
        ><i class="el-icon-search"></i
      ></a>
    </el-input>
  </div>
</template>

<script>
import { SEARCH_OPTIONS } from "./constant";
import _ from "loadsh";
export default {
  data() {
    return {
      searchOptions: SEARCH_OPTIONS,
      searchValue: "",
      selectType: SEARCH_OPTIONS[0].value
    };
  },
  methods: {
    /**
     * enter搜索
     */
    searchEnter() {
      document.querySelector("#searchUrl").click();
    }
  }
};
</script>

<style lang="less" scoped>
.search-component {
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .input-with-select {
    width: 50%;
    /deep/ .selectType {
      width: 0.8rem;
    }
  }
  .el-input-group__append {
    cursor: pointer;
    // padding: 0;
    a {
      padding: 0 0.1rem;
    }
    .el-input-group__append {
      padding: 0;
    }
    .el-icon-search {
      font-size: 20px;
    }
  }
}
</style>
