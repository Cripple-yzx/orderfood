<template>
  <el-aside :width="$store.state.isCollapsed ? '64px' : '240px'">
    <el-menu
      :collapse="$store.state.isCollapsed"
      :collapse-transition="false"
      :router="true"
      :default-active="'route.fullPath'"
    >
      <el-menu-item index="/index">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <el-icon><Avatar /></el-icon>

        <span>个人中心</span>
      </el-menu-item>
      <el-sub-menu index="/user-manage" v-admin>
        <!-- center -->
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user-manage/useradd">添加用户</el-menu-item>
        <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/menu-manage">
        <template #title>
          <el-icon><Dish /></el-icon>
          <span>菜品管理</span>
        </template>
        <el-menu-item index="/menu-manage/menuadd">添加菜品</el-menu-item>
        <el-menu-item index="/menu-manage/menulist">菜品列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/notice-manage">
        <template #title>
          <el-icon><Message /></el-icon>
          <span>公告管理</span>
        </template>
        <el-menu-item index="/notice-manage/noticeadd">添加公告</el-menu-item>
        <el-menu-item index="/notice-manage/noticelist">公告列表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {
  HomeFilled,
  Dish,
  Message,
  ChatLineSquare,
  Tickets,
  Avatar,
  User,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();
const vAdmin = {
  mounted(el) {
    // console.log(el)
    if (store.state.userInfo.role !== 1) {
      el.parentNode.removeChild(el);
    }
  },
};
// console.log(route)
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
}
.el-menu {
  height: 100vh;
}
</style>
