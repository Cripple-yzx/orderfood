import Home from "../views/home/Home.vue";
import Center from "../views/center/Center.vue"; //个人中心
import MenuAdd from "../views/menu-manage/MenuAdd.vue";
import MenuList from "../views/menu-manage/MenuList.vue";
import MenuEdit from "../views/menu-manage/MenuEdit.vue";
import NoticeAdd from "../views/notice-manage/NoticeAdd.vue";
import NoticeList from "../views/notice-manage/NoticeList.vue";
import NoticeEdit from "../views/notice-manage/NoticeEdit.vue";
import UserAdd from "../views/user-manage/UserAdd.vue";
import UserList from "../views/user-manage/UserList.vue";
import NotFound from "../views/notfound/NotFound.vue";

const routes = [
  {
    path: "/index",
    component: Home,
  },
  {
    path: "/center",
    component: Center,
  },

  {
    path: "/menu-manage/menuadd",
    component: MenuAdd,
  },
  {
    path: "/menu-manage/menulist",
    component: MenuList,
  },
  {
    path: "/menu-manage/editmenu/:id",
    component: MenuEdit,
  },
  {
    path: "/notice-manage/noticeadd",
    component: NoticeAdd,
  },
  {
    path: "/notice-manage/noticelist",
    component: NoticeList,
  },
  {
    path: "/notice-manage/editnotice/:id",
    component: NoticeEdit,
  },

  {
    path: "/user-manage/useradd",
    component: UserAdd,
    requireAdmin: true,
  },
  {
    path: "/user-manage/userlist",
    component: UserList,
    requireAdmin: true,
  },
  {
    path: "/",
    redirect: "/index", //重定向(直接到达首页)
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: NotFound,
  },
];

export default routes;
