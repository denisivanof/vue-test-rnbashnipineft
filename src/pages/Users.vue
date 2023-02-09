<template>
  <div class="users">
    <div class="users__header">
      <h2 class="users__title">
        Users
      </h2>
    </div>
    <div class="users__content">
      <UsersLists/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UsersLists from "../components/UsersLists.vue";
</script>
<style scoped lang="scss">
@import "../styles/users.scss";
</style>
