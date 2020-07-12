



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
              <el-menu-item @click="zonghe">综合报表</el-menu-item>
              <el-menu-item @click="active">用户活跃</el-menu-item>
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
          <el-menu-item  @click="zhanghao">
            <i class="el-icon-setting"></i>
            <el-span slot="title">账号</el-span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-aside width="15px"></el-aside>
      <el-main>
        <div style="text-align: left">
          账号
          <el-button type="primary" plain @click="goto('/components/change')">编辑</el-button>
        </div>
        <el-divider></el-divider>
        <div style="text-align: left">个人信息</div>
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="180px"
          :model="formLabelAlign"
          style="margin-left:15%;margin-right:40%"
        >
          <el-form-item label="姓名:">
            <el-span>{{xingming}}</el-span>
          </el-form-item>
          <el-form-item label="微信/QQ:">
            <el-span>{{weixin}}</el-span>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-span>xx@qq.com</el-span>
          </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <div style="text-align: left">公司信息</div>
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="180px"
          :model="formLabelAlign"
          style="margin-left:15%;margin-right:40%"
        >
          <el-form-item label="公司名称:">
            <el-span>{{gongsname}}</el-span>
          </el-form-item>
          <el-form-item label="官网:">
            <el-span>{{gongsgw}}</el-span>
          </el-form-item>
          <el-form-item label="其中一个产品链接:">
            <el-span>546</el-span>
          </el-form-item>
        </el-form>
        <div style="diaplay:flex;margin-left:-60px">
          <el-button type="primary">提交</el-button>
          <el-button @click="quxiao">取消</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {

    let article = this.$axios.get(`/user/user/get_user_info`)
console.log("88888888888888")
    console.log(article.data.data)
    return {
      articleList: article.data.email,
      xingming: article.data.company_name,
      weixin: article.data.wechat,
      gongsname: article.data.orgname,
      gongsgw: article.data.product_link
    };
    console.log(article.data.email);
  },
  data() {
    return {
      articleList: "",
      xingming: "",
      weixin: "",
      gongsname: "",
      gongsgw: "",
      re: "",
      dianji: "",
      input: "",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
        gs: "",
        gw: "",
        lianjie: ""
      },
      isShow: "false"
    };
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
    app_ad(){
      this.$router.push({path:'/Advertising'})
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goto(path) {
      
      this.$router.push({ path: "/change" });
    },
    click() {
      this.dianji = true;
    },
    quxiao() {
      this.dianji = false;
      this.formLabelAlign.name = "";
      this.formLabelAlign.region = "";
      this.formLabelAlign.type = "";
      this.formLabelAlign.gs = "";
      this.formLabelAlign.gw = "";
      this.formLabelAlign.lianjie = "";
    }
  }
};
</script>

<style>
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