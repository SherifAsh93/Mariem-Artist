<script>
import { Card, } from 'flowbite-svelte';
const images = [
        {alt:'img1', src:'/1.jpg'},
        {alt:'img2', src:'/2.jpg'},
        {alt:'img3', src:'/3.jpg'},
        {alt:'img4', src:'/4.jpg'},
        {alt:'img5', src:'/5.jpg'},
        {alt:'img6', src:'/6.jpg'},
        {alt:'img9', src:'/9.jpg'},
        {alt:'img10', src:'/10.jpg'},
        {alt:'img11', src:'/11.jpg'},
        {alt:'img12', src:'/6.jpg'},
        {alt:'img13', src:'/13.jpg'},
        {alt:'img14', src:'/14.jpg'}
    ];
</script>
<!-- To display them just add images array inside items attribute inside Gallarey Component -->
 <!-- <Gallery class='gap-3 grid-cols-2 h-20 w-140 p-3' items={images}/> -->
  <!-- {#each images as image }
  <Card class="grid grid-cols-3" img={image.src} size="sm"/>
  {/each} -->

  <div class="grid grid-cols-3 mx-auto max-w-screen-xl my-1">
    {#each images as image }
    <Card size="sm" class="h-64 shadow-2xl shadow-neutral-900" 
    img={image.src} href="{image.src}" target="_blank"/>
    {/each}
  </div>