<template>
<div>
    <nav>
        <NavBar />
    </nav>
    <h1>About</h1>
    <h2>Blah !! Blah !! Blah !! Blah !! Blah !! Blah !! Blah !!</h2>
    <img src="@/assets/img/1.jpg" alt="About Image" class="about-img" />
    <br>
    <h3>This is the about page.</h3>

    <p> The Ganga River, also known as the Ganges,
        is one of the most significant rivers in the Indian subcontinent.
        It originates from the Gangotri Glacier in the Himalayas, at an altitude of about 7,000 meters, and flows across northern India,
        eventually emptying into the Bay of Bengal through the world’s largest river delta, the Sundarbans.
        The river spans over 2,500 kilometers, draining a vast basin that supports millions of people. </p>

    <p>The Ganga River is essential for the agricultural, cultural, and religious life of the people in the region.
        The river flows through diverse landscapes, from the Himalayan foothills to the fertile plains of northern India,
        providing water for irrigation, drinking, and transportation. The Ganga's basin is home to one of the most densely populated regions in the world,
        with many major cities, such as Varanasi, Allahabad, and Kolkata, situated along its course.</p>

    <p>The rivers of the Himalayas drain into two large river systems viz. The western rivers combine into the Indus Basin.
        The Indus itself forms the northern and western boundaries of the Himalayas.
        It begins in Tibet at the confluence of Sengge and Gar rivers and flows north-west
        through India into Pakistan before turning south-west to the Arabian Sea.
        It is fed by several major tributaries draining the southern slopes of the Himalayas,
        including the Jhelum, Chenab, Ravi, Beas and Sutlej rivers, the five rivers of the Punjab.
        The other Himalayan rivers drain the Ganges-Brahmaputra Basin. Its main rivers are the Ganges,
        the Brahmaputra and the Yamuna, as well as other tributaries. The Brahmaputra originates as the Yarlung Tsangpo River in western Tibet,
        and flows east through Tibet and west through the plains of Assam.
        The Ganges and the Brahmaputra meet in Bangladesh and drain into the Bay of Bengal through the world's largest river delta, the Sunderbans.</p>

    <router-link to="/map"><button class="about-map-btn"> <i class="fas fa-map"></i> Map </button></router-link>

</div>
</template>

  
  
<script>
import NavBar from './NavBar.vue';
export default {
    name: 'AboutPage',
    components: {
        NavBar,
    }

};
</script>
  
  
<style scoped>
@import '@/assets/styles/aboutstyle.css';
</style>
