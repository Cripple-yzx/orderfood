<template>
  <div>
    <el-page-header content="添加公告" icon="" title="公告管理" />
    <el-form
      ref="noticeFormRef"
      :model="noticeForm"
      :rules="noticeFormRules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="noticeForm.title" />
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <!-- 封装出自己的组件 components下的editor  安装使用npm i wangeditor --save -->
        <editor @event="handleChange" />
      </el-form-item>

      <el-form-item label="类别" prop="category">
        <el-select
          v-model="noticeForm.category"
          class="m-2"
          placeholder="Select"
          style="width: 100%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="封面" prop="cover">
        <Upload :avatar="noticeForm.cover" @yzxchange="handleUploadChange" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">添加公告</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import editor from "@/components/editor/Editor";
import Upload from "@/components/upload/Upload";
import upload from '@/util/upload'
import {useRouter} from 'vue-router'
const router = useRouter()
const noticeFormRef = ref();
const noticeForm = reactive({
  title: "",
  content: "",
  category: 1, //1 最新动态, 2典型案例 3 通知公告
  cover: "",
  file: null,
  isPublish: 0 // 0 未发布, 1 已发布
});

const noticeFormRules = reactive({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  content: [{ required: true, message: "请输入内容", trigger: "blur" }],
  category: [{ required: true, message: "请选择分类", trigger: "blur" }],
  cover: [{ required: true, message: "请上传图片", trigger: "blur" }]
});

//每次editor内容改变的回调
const handleChange = data => {
  // console.log(data)
  noticeForm.content = data;
};
//新闻类别
const options = [
  {
    label: "最新动态",
    value: 1
  },
  {
    label: "典型案例",
    value: 2
  },
  {
    label: "通知公告",
    value: 3
  }
];

const handleUploadChange = (file)=>{
    noticeForm.cover = URL.createObjectURL(file);
    noticeForm.file = file
}

const submitForm = ()=>{
    noticeFormRef.value.validate(async (valid)=>{
        if(valid){
            // console.log(noticeForm)
            //后台通信,
            await upload("/adminapi/notice/add",noticeForm)
            router.push(`/notice-manage/noticelist`)
        }
    })
}
</script>

<style lang="scss" scoped>
.el-form {
  margin-top: 50px;
}
</style>