<template>
  <div>
    <button class="toggle-button-right" @click="toggleSidebarRight">
      <i :class="sidebarRightOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>
    <div :class="['sidebar-right', sidebarRightOpen ? 'open-right' : '']">
      <div class="sidebar-right-header">
        <h2>Menu</h2>
      </div>
      <ul class="sidebar-right-menu">
        <li>
          <router-link to="/">
            <button><i class="fas fa-home"></i> Home</button>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <button><i class="fas fa-info-circle"></i> About</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarRight',
  data() {
    return {
      sidebarRightOpen: false,
    };
  },
  methods: {
    toggleSidebarRight() {
      this.sidebarRightOpen = !this.sidebarRightOpen;
    },
  },
};
</script>

<style scoped>
@import '/src/components/sidebar/SidebarStyles/Right.css';
</style>



