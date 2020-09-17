<template>
  <div class="index"
    id="index">
    <div class="leftCtn">
      <div class="companyNameCtn">
        <img class="logo"
          :src="logoUrl" />
        <span class="name">织慧科技</span>
      </div>
      <el-menu default-active="2"
        class="el-menu-vertical"
        background-color="#001529"
        text-color='rgba(255,255,255,0.65)'
        active-text-color="#FFF">
        <template v-for="(itemN,indexN) in navList">
          <template v-if="itemN.children">
            <el-submenu :index="itemN.index"
              :key="indexN">
              <template slot="title">
                <i :class="itemN.icon_class_name"></i>
                <span>{{itemN.name}}</span>
              </template>
              <template v-for="(itemNI1,indexNI1) in itemN.children">
                <template v-if="itemNI1.children">
                  <el-submenu :index="itemNI1.index"
                    :key="indexNI1">
                    <template slot="title">
                      <!-- <i :class="itemNI1.icon_class_name"></i> -->
                      <span>{{itemNI1.name}}</span>
                    </template>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index="itemNI1.index"
                    :key="indexNI1">
                    <!-- <i :class="itemNI1.icon_class_name"></i> -->
                    <span slot="title">{{itemNI1.name}}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="itemN.index"
              :key="indexN">
              <i :class="itemN.icon_class_name"></i>
              <span slot="title">{{itemN.name}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
    <div class="rightCtn">
      <div class="header">
        <div class="top_nav">
          <div class="top_nav_left el-icon-s-unfold icon"></div>
          <div class="top_nav_right">
            <span class="item el-icon-search icon"></span>
            <span class="item el-icon-bell icon"></span>
            <span class="item user_info">
              <img class="user_avatar"
                :src="noPicUrl"
                alt=""
                srcset="">
              <div class="user_no_avatar">测</div>
              <span class="user_name">测试人员</span>
            </span>
          </div>
        </div>
        <div class="bottom_breadcrumb">
          <el-breadcrumb class="breadcrumb">
            <el-breadcrumb-item v-for="(itemB,indexB) in breadcrumbArr"
              :key="indexB"
              :to="{path:itemB.path}">{{itemB.name_CH}}</el-breadcrumb-item>
          </el-breadcrumb>
          <h2 class="name">{{breadcrumbArr[breadcrumbArr.length -1].name_CH}}</h2>
        </div>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { getBreadcrumbArr } from '@/assets/js/common.js'
export default {
  data () {
    return {
      logoUrl: require('@/assets/image/logo.png'),
      noPicUrl: require('@/assets/image/noPic.jpg'),
      navList: [
        {
          index: '1',
          icon_class_name: 'el-icon-location',
          name: '首页',
          path: '/index/'
        }, {
          index: '2',
          icon_class_name: 'el-icon-location',
          name: '我的公司',
          children: [
            {
              index: '2-1',
              icon_class_name: 'el-icon-location',
              name: '产品管理'
            }
          ]
        }, {
          index: '3',
          icon_class_name: 'el-icon-location',
          name: '产品管理',
          children: []
        }, {
          index: '4',
          icon_class_name: 'el-icon-location',
          name: '需求管理',
          children: []
        }, {
          index: '5',
          icon_class_name: 'el-icon-location',
          name: '个人中心',
          path: '/index/'
        },
      ]
    }
  },
  methods: {

  },
  created () {
  },
  computed: {
    breadcrumbArr () {
      return getBreadcrumbArr(this.$router.options.routes, this.$route)
    }
  }
}
</script>

<style scoped lang='less'>
@import "~@/assets/less/index.less";
</style>
<style lang='less'>
#index {
  .el-submenu,
  .el-menu-item {
    transition: all 0.2s linear;
    &:hover {
      background: #1a95ff !important;
    }
    .el-submenu__title {
      background-color: transparent !important;
    }
  }
  .el-menu-item {
    &.is-active {
      background: #1a95ff !important;
    }
  }
}
</style>
 