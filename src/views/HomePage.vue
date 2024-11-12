<template>
<div class="page-container">
    <header class = "header">
    <img  src="@/assets/img/isro.png" alt="Left Logo" class="logo logo-left" />
    <h2 class="header-text">भारतीय अंतरिक्ष अनुसंधान संगठन, अंतिरक्ष विभाग<br>Indian Space Research Organisation, Department of Space<br>भारत सरकार / Government of India</h2>
    <img  src="@/assets/img/india.png" alt="Right Logo" class="logo logo-right" />
    </header>
   

    <nav>
        <NavBar />
    </nav>
    <div class="video-container">
        <video class="fullscreen-video" autoplay muted loop>
            <source src="@/assets/img/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="overlay-text">
            <h2>Geo-Ganga</h2>

        </div>
    </div>
</div>
</template>

  
  
<script>
import NavBar from './NavBar.vue';

export default {
    name: 'HomePage',
    components: {
        NavBar,
    }
};
</script>
  
  
<style scoped>

@import '@/assets/styles/homestyle.css';
@import '@/assets/styles/NavStyle.css';

</style>
