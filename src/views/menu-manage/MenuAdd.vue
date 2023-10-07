<template>
  <div>
    <el-page-header content="添加菜品" icon="" title="菜品管理" />

    <el-form
      ref="menuFormRef"
      :model="menuForm"
      :rules="menuFormRules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="菜品名称" prop="title">
        <el-input v-model="menuForm.title" />
      </el-form-item>

      <el-form-item label="菜品价格" prop="introduction">
        <el-input v-model="menuForm.introduction" type="textarea" />
      </el-form-item>

      <el-form-item label="菜品详细描述" prop="detail">
        <el-input v-model="menuForm.detail" type="textarea" />
      </el-form-item>
      <el-form-item label="菜品分类" prop="type">
        <el-input v-model="menuForm.type" type="textarea" />
      </el-form-item>
      <el-form-item label="菜品图片" prop="cover">
        <Upload :avatar="menuForm.cover" @yzxchange="handleChange" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">添加菜品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Upload from "@/components/upload/Upload";
import upload from "@/util/upload";
import { useRouter } from "vue-router";
const menuFormRef = ref();
const menuForm = reactive({
  title: "",
  introduction: "",
  detail: "",
  type: "",
  cover: "",
  file: null,
});

const menuFormRules = reactive({
  title: [{ required: true, message: "请输入名字", trigger: "blur" }],
  introduction: [
    { required: true, message: "请输入菜品价格", trigger: "blur" },
  ],
  detail: [{ required: true, message: "请输入详细描述", trigger: "blur" }],
  type: [{ required: true, message: "请输入分类数1、2、3", trigger: "blur" }],
  cover: [{ required: true, message: "请上传菜品图片", trigger: "blur" }],
});

//每次选择完图片之后的回调
const handleChange = (file) => {
  menuForm.cover = URL.createObjectURL(file);
  menuForm.file = file;
};
const router = useRouter();
const submitForm = () => {
  menuFormRef.value.validate(async (valid) => {
    if (valid) {
      //提交数据到后端
      // console.log(menuForm)
      await upload("/adminapi/menu/add", menuForm);

      router.push(`/menu-manage/menulist`);
    }
  });
};
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin-top: 50px;
}
</style>
