<script>
	import { Card } from "flowbite-svelte";
    const images = [
        {alt:'img1', src:'/1.jpg'},
        {alt:'img2', src:'/2.jpg'},
        {alt:'img3', src:'/3.jpg'},
        {alt:'img4', src:'/4.jpg'},
        {alt:'img5', src:'/5.jpg'},
    ];
</script>
<Card size="md" class="mt-5 mx-auto mb-10 ml-5">
    {#each images as image}
    <img src={image.src} alt={image.alt} class="object-cover max-h-48">
  {/each}
  </Card>