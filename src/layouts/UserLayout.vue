<!-- UserLayout.vue -->

<template>
  <div class="flex flex-col min-h-screen">
    <header class="p-8 bg-blue-500">
      <div>
        <nav>
          <RouterLink class="mr-2" to="/">Home</RouterLink>
          <RouterLink class="mr-2" to="/about">About</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
        </nav>
      </div>
    </header>
    <div class="flex-grow p-4">
      <router-view></router-view>
    </div>
    <footer class="p-8 bg-gray-500">footer</footer>
  </div>
</template>

<script setup></script>
