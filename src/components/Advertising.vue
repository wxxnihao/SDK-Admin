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
      <!--  me cg side 分隔 -->
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
          <el-menu-item @click="zhanghao">
            <i class="el-icon-setting"></i>
            <span slot="title">账号</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-aside width="15px"></el-aside>
      <!--  menu side 分隔 end -->
      <el-main style="padding-left:0px;padding-right:0px;padding-top:0px;">
        <el-container>
          <!--  middle menu side 分隔 start -->
          <el-aside width="250px" style="background-color: #FFF;height:900px;">
            <el-header style="font-size: 12px; background-color:#FFF">
              <span>应用({{nums}})</span>
              <el-button
                type="primary"
                @click="dialogFormaddyingyong = true"
                style="float:right;margin-top:10px"
              >添加应用</el-button>
              <!-- 中间添加他应用 -->
              <el-dialog title="添加应用" :visible.sync="dialogFormaddyingyong" width="30%">
                <el-form :model="form" ref="clear">
                  <el-form-item label="应用名称" :label-width="formLabelWidth">
                    <el-input v-model="form.app_name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="平台" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择">
                      <el-option label="IOS"></el-option>
                      <el-option label="Android" value="Android"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-radio-group v-model="radio">
                    <el-radio :label="1">应用已发布</el-radio>
                    <el-form-item label="应用商店 url" :label-width="formLabelWidth">
                      <el-input v-model="form.download_url" autocomplete="off" style="width: 150%"></el-input>
                    </el-form-item>
                    <el-radio :label="2">应用未发布</el-radio>
                    <el-form-item label="包名" :label-width="formLabelWidth">
                      <el-input v-model="form.package_name" autocomplete="off" style="width: 150%"></el-input>
                    </el-form-item>
                  </el-radio-group>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormaddyingyong = false">取 消</el-button>
                  <el-button type="primary" @click="addyingyong">确 定</el-button>
                </div>
              </el-dialog>
            </el-header>
            <!-- 搜索框 -->
            <el-input placeholder="按应用名称搜索" prefix-icon="el-icon-search" v-model="input2" clearable></el-input>

            <!-- 应用展示列表 -->

            <div>
              <el-table :data="app_list" style="width: 100%" :show-header="false">
                <el-button @click="show">
                  <el-table-column prop="app_name"></el-table-column>
                </el-button>
                <el-table-column>
                  <template slot-scope="app_scope">
                    <el-button
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      style="margin-left: 40px;"
                      @click="deleteAdApp(app_scope.$index, app_list,app_scope.row)"
                    ></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-aside>
          <el-aside width="15px"></el-aside>
          <!--  middle menu side 分隔 end -->
          <!--app 右边内容 start-->
          <el-container>
            <el-header style="font-size: 12px">
              <div style="float:left">
                <span>快日记</span>
                <!-- 右边编辑添加应用 -->
                <el-button type="primary" @click="dialogFormbianji = true">编辑</el-button>
              </div>

              <el-dialog title="添加应用" :visible.sync="dialogFormbianji" width="30%">
                <el-form :model="form">
                  <el-form-item label="应用名称" :label-width="formLabelWidth">
                    <el-input v-model="form.app_name" autocomplete="off" :placeholder="app_name"></el-input>
                  </el-form-item>
                  <el-form-item label="平台" :label-width="formLabelWidth">
                    <el-select v-model="form.os" placeholder="请选择">
                      <el-option label="IOS"></el-option>
                      <el-option label="Android"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-radio-group v-model="radio">
                    <el-radio :label="1">应用已发布</el-radio>
                    <el-form-item label="应用商店 url" :label-width="formLabelWidth">
                      <el-input v-model="form.download_url" autocomplete="off" style="width: 150%"></el-input>
                    </el-form-item>
                    <el-radio :label="2">应用未发布</el-radio>
                    <el-form-item label="包名" :label-width="formLabelWidth">
                      <el-input v-model="form.package_name" autocomplete="off" style="width: 150%"></el-input>
                    </el-form-item>
                  </el-radio-group>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>

                  <el-button
                    type="primary"
                    @click="addyingyong(scope.$index,app_list,scope.row)"
                  >确 定</el-button>
                </div>
              </el-dialog>

              <el-button
                type="primary"
                @click="dialogFormVisible = true"
                style="float:right;margin-top:10px"
              >添加广告位</el-button>

              <el-dialog title="添加广告位" :visible.sync="dialogFormVisible">
                <el-form :model="fort">
                  <el-form-item label="广告位名称" :label-width="formLabelWidth">
                    <el-input v-model="fort.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="广告位类型" :label-width="formLabelWidth">
                    <el-input v-model="fort.type" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="缓存数" :label-width="formLabelWidth">
                    <el-input v-model="fort.num" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="adadd">确 定</el-button>
                </div>
              </el-dialog>
            </el-header>
            <el-main style="margin-top:10px;">
              <!-- 获取广告数据表头 -->
              <el-table :data="ad_list" style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="sscope">
                    <!-- 嵌套广告位下具体数据列表 -->
                    <el-table :data="sscope.row.source" style="width: 100%">
                      <el-table-column label="广告网络" width="180">
                        <template slot-scope="scope">
                          <span style="margin-left: 10px">{{scope.row.instance_name}}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="广告源APPID" width="180">
                        <template slot-scope="scope">
                          <span style="margin-left: 10px">{{scope.row.slot_id }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="广告位ID" width="180">
                        <template slot-scope="scope">
                          <span style="margin-left: 10px">{{ scope.row.app_id}}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="授权状态" width="180">
                        <template slot-scope="scope">
                          <span style="margin-left: 10px">{{ scope.row.app_name}}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button type="text" @click="dialogFormVisible_2 = true">编辑</el-button>
                          <el-dialog title="编辑广告源" :visible.sync="dialogFormVisible_2">
                            <el-form :model="form_2">
                              <el-form-item label="广告源名称" :label-width="formLabelWidth">
                                <el-input v-model="form_2.name" autocomplete="off"></el-input>
                              </el-form-item>
                              <el-form-item label="MediaId" :label-width="formLabelWidth">
                                <el-input v-model="form_2.leixing" autocomplete="off"></el-input>
                              </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                              <el-button @click="dialogFormVisible_2 = false">取 消</el-button>
                              <el-button type="primary" @click="dialogFormVisible_2 = false">确 定</el-button>
                            </div>
                          </el-dialog>

                          <el-button
                            type="warning"
                            @click="remove(scope.$index, scope.row)"
                            size="mini"
                          >删除</el-button>

                          <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
                            <div class="del-dialog-cnt">删除不可恢复</div>

                            <span slot="footer" class="dialog-footer">
                              <el-button @click="delVisible = false">取 消</el-button>

                              <el-button type="primary" @click="deleteRow">确 定</el-button>
                            </span>
                          </el-dialog>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>

                <!--广告列表 start-->
                <el-table-column label="广告位" width="180">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.seat_name }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="广告类型" prop="ad_type" width="180"></el-table-column>

                <el-table-column label="同时缓存数" prop="cache_num" width="180"></el-table-column>

                <el-table-column label="第三方广告源" prop="seat_name" width="180"></el-table-column>
                <!-- 操作块 -->
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <!-- 操作列下的添加广告源 -->
                    <el-button type="text" @click="yincang = true">添加广告源</el-button>
                    <el-form :model="form_3">
                      <el-dialog title="添加广告源" :visible.sync="yincang">
                        <el-form :model="form_3" ref="formData">
                          <el-form-item label="广告网络" :label-width="formLabelWidth">
                            <el-input v-model="form_3.instance_name" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="广告源名称" :label-width="formLabelWidth">
                            <el-input v-model="form_3.adsource_name" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="APPID" :label-width="formLabelWidth">
                            <el-input v-model="form_3.app_id" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="slot_id" :label-width="formLabelWidth">
                            <el-input v-model="form_3.slot_id" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="callOf('addGroupData')">取 消</el-button>
                          <el-button type="primary" @click="addadsorce">确 定</el-button>
                        </span>
                      </el-dialog>
                    </el-form>

                    <el-button type="text" @click="dialogFormVisible_1 = true">编辑</el-button>
                    <!-- 编辑-编辑广告位 -->

                    <el-dialog title="编辑广告位" :visible.sync="dialogFormVisible_1">
                      <el-form :model="edit">
                        <el-form-item label="广告名称" :label-width="formLabelWidth">
                          <el-input v-model="edit.seat_name_1" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="广告类型" :label-width="formLabelWidth">
                          <el-input v-model="edit.ad_type_1" autocomplete="off"></el-input>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible_1 = false">取 消</el-button>
                        <el-button type="primary" @click="modifyAd(scope.$index, scope.row)">确 定</el-button>
                      </div>
                    </el-dialog>

                    <el-button
                      type="warning"
                      @click="deleteAdseat(scope.$index,ad_list,scope.row)"
                      size="mini"
                    >删除</el-button>
                  </template>
                </el-table-column>
                <!--广告列表 end-->
              </el-table>
            </el-main>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>


<script>
// http://192.168.1998.69:082/user/ad/

import qs from "qs";
import axios from "axios";
export default {
  layout: "about",
  head: {
    title: "About"
  },
  created() {
    const urladdress = this.GLOBAL.serverSrc;
    axios.get(urladdress + "/user/ad/list").then(response => {
      var res = response.data;
      this.ad_list = res.data;
      console.log("33333333333333");
      console.log(res.data);
      this.seat_name = res.data.seat_name;
      this.seat_type = res.data.seat_type;
      this.ad_id = res.data.seat._id;
      this.seat_name_1 = res.data.seat_name;
      this.seat_type_1 = res.data.seat_type;
      console.log(res.data.seat_name);
    });
    axios.get(urladdress + "/user/app/list").then(response => {
      var res = response.data;
      this.nums = res.data.length;
      this.app_list = res.data;
      this.app_name = res.data.app_name;
    });
  },

  data() {
    return {
      nums: "",
      packData: [],
      ad_list: null,
      seat_name: "",
      seat_type: "",
      app_list: null,
      app_name: "",

      delVisible: false, //删除提示弹框的状态

      msg: "", //记录每一条的信息，便于取id

      delarr: [], //存放删除的数据

      dialogFormaddyingyong: false,
      dialogFormbianji: false,
      dialogFormVisible: false,
      dialogFormVisible_1: false,
      dialogFormVisible_2: false,
      yincang: false,
      yincang: false,
      form: {
        app_name: "",
        os: "Android",
        pic_url: "",
        user_id: "",
        price: "",
        currency: "",
        download_url: "",
        package_name: "com.ruiyi.diary",
        region: "Andioid"
      },
      edit: {
        // seat_name_1: "应用宝",
        // ad_type_1: "123"
      },
      form_2: {
        Unit: "",
        Media: "",

        name: "",

        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      form_3: {
        app_id: "",
        slot_id: "",
        instance_name: "",
        adsource_name: ""
      },
      fort: {
        name: "",
        num: "",
        type: ""
      },
      formLabelWidth: "150px",
      radio: 1,
      radio: 2,
      input2: ""
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
    show() {
      console.log("66666");
    },
    // 添加应用
    // closeDialog(){
    //   this.form = '';//清空数据
    // },
    addyingyong(index, data, row) {
      const urladdress = this.GLOBAL.serverSrc;

      axios
        .post(urladdress + `/user/app/add`, this.form)
        .then(res => {
          const h = this.$createElement;
        })

        .then(res => {
          this.dialogFormaddyingyong = false;
          this.created();

          if (res.data) {
            this.$message({
              showClose: true,
              message: "添加成功",
              type: "success"
            });
          } else {
            this.$message.error("添加失败");
          }
        });
    },

    // 添加广告位
    adadd() {
      const urladdress = this.GLOBAL.serverSrc;

      axios
        .post(urladdress + "/user/ad/add", {
          seat_name: this.fort.name,
          ad_type: 0,
          cache_num: 0
        })
        .then(res => {
          this.dialogFormVisible = false;

          if (res.data) {
            this.$message({
              showClose: true,
              message: "添加成功",
              type: "success"
            });
          } else {
            this.$message.error("添加失败");
          }
          this.created();
        });
    },
    // 删除应用
    deleteAdApp(index, data, row) {
      var urladdress = this.GLOBAL.serverSrc;
      console.log("999999999");
      // console.log(t);
      //  rows.splice(index, 1);
      axios

        .post(urladdress + "/user/app/delete", {
          _id: row._id
        })

        .then(res => {
          if (res.data) {
            this.$message({
              showClose: true,
              message: "删除成功",
              type: "success"
            });
            data.splice(index, 1);
          } else {
            this.$message.error("删除失败");
          }
        });
    },
    // 广告位删除
    deleteAdseat(index, data, row) {
      const urladdress = this.GLOBAL.serverSrc;

      console.log("888");
      console.log(row);
      axios

        // http://192.168.199.69:8082/user/ad/add
        .post(urladdress + "/user/ad/delete", {
          _id: row._id
        })

        .then(res => {
          if (res.data) {
            this.$message({
              showClose: true,
              message: "删除成功",
              type: "success"
            });
            data.splice(index, 1);
          } else {
            this.$message.error("删除失败");
          }
        });
    },

    // 编辑
    modifyAd(index, row) {
      const urladdress = this.GLOBAL.serverSrc;

      console.log("5555555555");
      console.log(row);
      const admessage = JSON.stringify(row);
      console.log("3333333");
      console.log(admessage);
      axios
        .post(
          urladdress + "/user/ad/update",
          admessage

          // this.edit,
          // admessage
        )
        .then(res => {
          this.dialogFormVisible_1 = false;

          if (res.data) {
            this.$message({
              showClose: true,
              message: "修改成功",
              type: "success"
            });
          } else {
            this.$message.error("修改失败");
          }
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
    // 添加广告源
    addadsorce() {
      const urladdress = this.GLOBAL.serverSrc;

      axios
        .post(urladdress + `/user/ad/addsource?_id=` + ad_id, this.form_3)
        .then(res => {
          if (res.data) {
            this.$message({
              showClose: true,
              message: "添加成功",
              type: "success"
            });
          } else {
            this.$message.error("添加失败");
          }
        });
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
#app {
  margin-top: 0px;
}
</style>