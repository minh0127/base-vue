<template>
  <div class="not-found">
    <h1>404 - Không tìm thấy</h1>
    <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
    <router-link to="/">Quay lại trang chủ</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

router-link {
  text-decoration: underline;
  color: blue;
  font-size: 1rem;
}
</style>
