<template>
  <div id="app">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王希贤</span>
    </el-header>
    <el-container style="height:900px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #FFF;height:900px;margin-left:-30px">
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="0">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-potato-strips"></i>
              <span>报表</span>
            </template>
            <el-menu-item-group>
              <!-- <nuxt-link :to="{name:home-report-zonghe}"></nuxt-link> -->
              <!-- <nuxt-link :to="{name:home-report-active}"></nuxt-link> -->

              <el-menu-item @click="zonghe">综合报表</el-menu-item>
              <el-menu-item @click="zonghe">用户活跃</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item @click="Advertising">
            <i class="el-icon-menu"></i>
            <span slot="title">应用&广告位</span>
          </el-menu-item>
          <el-menu-item @click="intermediary">
            <i class="el-icon-office-building"></i>
            <span slot="title">中介</span>
          </el-menu-item>
          <el-menu-item @click="guanggao">
            <i class="el-icon-position"></i>
            <span slot="title">广告网络</span>
          </el-menu-item>
          <el-menu-item @click="zhanghao">
            <i class="el-icon-setting"></i>
            <span slot="title">账号</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-aside width="15px"></el-aside>
      <el-main>
        <div id="echarts">
          <div id="myChart"></div>
          <div id="myChart2"></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script  type="text/javascript">
export default {
  name: "Echarts",
  data() {
    return {};
  },
  methods: {
       intermediary() {
      this.$router.push({ path: "/intermediary" });
    },
    zonghe() {
      this.$router.push({ path: "/zonghe" });
    },
    active() {
      this.$router.push({ path: "/active" });
    },
    Advertising() {
      this.$router.push({ path: "/Advertising" });
    },
    zhanghao() {
      this.$router.push({ path: "/setting" });
    },
    guanggao(){
      this.$router.puah({path:"/guanggao"})
    },
    echartsInit() {
      // 找到容器
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 开始渲染
      myChart.setOption({
        title: { text: "图表分析" },
        tooltip: {},
        xAxis: {
          data: ["xx", "xx", "xxx", "xxx", "xxx", "xxx"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    echartsInit2() {
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      myChart.setOption({
        title: { text: "echarts 饼图" },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ]
          }
        ]
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goto(path) {
      this.$router.replace(path);
    },
    handleClick() {
      alert("button click");
    }
  },
  mounted() {
    this.echartsInit();
    this.echartsInit2();
  }
};
</script>

<style>
#myChart {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
#myChart2 {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: right;
}
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #eee;
  background-color: #eee;
}
</style>