<!-- AdminLayout.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-[#C3C3C3] flex justify-between items-center h-[51px]">
      <div class="flex items-center pl-[39px]">
        <img src="@/assets/icons/logo_tacwork.svg" alt="logo" />
        <div
          class="ml-[10px] py-[5px] px-[13px] text-[13px] font-normal bg-[#1C1C1C] text-white rounded-md"
        >
          管理者用
        </div>
      </div>
      <ul class="flex items-center list-none h-full">
        <li>
          <RouterLink v-slot="{ isExactActive }" class="no-underline" to="/admin"
            ><p :class="isExactActive ? 'bg-white !text-[#000]' : 'bg-[#717171]'">
              取引管理
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink v-slot="{ isExactActive }" class="no-underline" to="/admin/model"
            ><p :class="isExactActive ? 'bg-white !text-[#000]' : 'bg-[#717171]'">
              車種管理
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink v-slot="{ isExactActive }" class="no-underline" to="/admin/create"
            ><p :class="isExactActive ? 'bg-white !text-[#000]' : 'bg-[#717171]'">
              アカウント管理
            </p></RouterLink
          >
        </li>
        <li>
          <button
            @click="
              () => {
                logout();
              }
            "
            class="h-full cursor-pointer px-[19px] border-none bg-black text-white text-xl font-normal"
          >
            ログアウト
          </button>
        </li>
      </ul>
    </header>
    <div class="flex-grow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { logout } from '@/utils/auth';
</script>
<style scoped>
ul li {
  height: 100%;
}
ul li p {
  line-height: 51px;
  height: 100%;
  padding: 0 40px;
  border-right: 1px solid #dddcdc;
  color: white;
  font-size: 20px;
  font-weight: 400;
}
</style>
