<template>


    <div id = "nav">
      <img  src="@/assets/img/gangalogo.png" alt="Left Logo" class="logo logo-left" />
      <router-link to="/"><button class="home-btn"><i class="fas fa-home"></i> </button></router-link>
      <router-link to="/about"><button class="about-btn"> <i class="fas fa-info-circle"></i></button></router-link>
      <router-link to="/map"><button class="map-btn"> <i class="fas fa-map"></i></button></router-link>

      
      <router-view />

    </div>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<style>

@import '@/assets/styles/button.css';

</style>