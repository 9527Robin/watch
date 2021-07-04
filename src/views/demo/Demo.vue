<template>
  <div class="demo">
    <ul @click="changeFont">
      <li
        v-for="(item, index) in numbers"
        :data-index="index"
        :key="index"
        :class="handleStatus(index) ? 'abled-icon' : 'disabled-icon'"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: 25,
      view1Data: [""]
    };
  },
  methods: {
    changeFont(e) {
      const classList = e.target.classList;
      const index = e.target.dataset.index;
      if (!this.handleStatus(index)) return;
      classList.remove("abled-icon");
      if (!classList.contains("boy-icon")) {
        // 当女 => 男时
        if (classList.contains("girl-icon")) {
          classList.remove("girl-icon");
        }
        classList.add("boy-icon");
        this.$set(this.view1Data, index, "BOY");
        return;
      } else {
        classList.remove("boy-icon");
      }
      if (!classList.contains("girl-icon")) {
        classList.add("girl-icon");
        this.$set(this.view1Data, index, "GIRL");
        return;
      } else {
        classList.remove("girl-icon");
      }
    },
    handleStatus(index) {
      if (index == "0") {
        return true;
      }
      if (_.get(this.view1Data, index - 1, "")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.demo {
  ul {
    display: flex;
    flex-wrap: wrap;
    height: 250px;
    flex-direction: column;
    li {
      font-size: 16px;
      height: 50px;
      width: 20px;
      border: 1px solid #000;
      width: 20%;
      box-sizing: border-box;

      span {
        height: 100%;
        width: 100%;
      }
    }
  }
  .boy-icon {
    background: url("../../assets/images/boy.png") no-repeat center;
  }
  .girl-icon {
    background: url("../../assets/images/girl.png") no-repeat center;
  }
  .disabled-icon {
    background: #999;
  }
  .abled-icon {
    background: #fff;
  }
}
</style>
