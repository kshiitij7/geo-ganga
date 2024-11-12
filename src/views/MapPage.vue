<template>
    <div class="map-page">
      <header class = "header">
    </header>
    <nav>
        <MapNavBar/>
    </nav>
   
      <MapComponent />
      <SideBarRight />
      <SideBarLeft />

      <router-view />
    </div>
    
  </template>
  
  <script>
  import MapComponent from '@/components/Map/MapComponent.vue';
import MapNavBar from '@/components/Map/MapNavBar.vue';
import SideBarLeft from '@/components/sidebar/SideBarLeft.vue';
  import SideBarRight from '@/components/sidebar/SideBarRight.vue';

  export default {
    name: 'MapPage',
    components: {
      MapComponent,
      SideBarRight,   
      MapNavBar,
      SideBarLeft,
    },
  };
  </script>

  <style scoped>
  .header {
  background-image: url('/src/assets/img/river.jpeg'); 
  background-size: cover;  
  background-position: center; 
  background-repeat: no-repeat; 
  height: 80px; 
  color: white;  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

  .map-page {
  overflow: hidden; 
  height: 96vh; 
  width: 99vw; 
}
body {
  overflow: hidden;
}   


</style>