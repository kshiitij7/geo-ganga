<template>
    <div>
      <button class="toggle-button-left" @click="toggleSidebarLeft">
        <i :class="sidebarLeftOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
      <div :class="['sidebar-left', sidebarLeftOpen ? 'open-left' : '']">
        <div class="sidebar-left-header">
          <h2>Blah !!!</h2>
        </div>
        <ul class="sidebar-left-menu">
          <li><button><i class="fas fa-heart"></i>  Func A</button></li>
          <li><button><i class="fas fa-sun"></i>  Func B</button></li>
          <li><button><i class="fas fa-bell"></i>  Func C</button></li>
          <li><button><i class="fas fa-cloud"></i>  Func D</button></li>
          <li><button><i class="fas fa-desktop"></i>  Func E</button></li>
          
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideBarLeft',
    data() {
      return {
        sidebarLeftOpen: false,
      };
    },
    methods: {
      toggleSidebarLeft() {
        this.sidebarLeftOpen = !this.sidebarLeftOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  @import '/src/components/sidebar/SidebarStyles/Left.css';
  </style>
  