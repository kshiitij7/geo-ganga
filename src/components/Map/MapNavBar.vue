<template>
<div class="mapnav">
    <button class="a">Button A</button>
    <button class="b">Button B</button>
    <button class="c">Button C</button>
    

    
</div>
</template>

<script>
export default {
    name: 'MapNavBar',

}
</script>

<style>

.mapnav {
    width: 190vh;
    display: flex;
    justify-content: flex-end;
    margin-right: 160px; 
    gap: 15px; 
    background-color: black;
    padding: 10px 20px;
}

.a,
.b,
.c {
    margin-right: 50px;
    padding: 10px 20px;
    font-size: 15px;
    color: black;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    z-index: 3;
    background: linear-gradient(45deg, #E6E6FA, #C8A2D0);
    position: relative; 
}

.a:hover,
.b:hover,
.c:hover {
    background: linear-gradient(45deg, #6c6ce2, #333645);
    color: white;
    transform: scale(1.1);
}


</style>
