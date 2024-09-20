<script>
	import { Card } from "flowbite-svelte";
    const images = [
        {alt:'img6', src:'/6.jpg'},
        {alt:'img7', src:'/7.jpg'},
        {alt:'img8', src:'/8.jpg'},
        {alt:'img9', src:'/9.jpg'},
        {alt:'img10', src:'/10.jpg'},
    ];
</script>
<Card size="md" class="mt-5 mx-auto mb-10 ml-5">
    {#each images as image}
    <img src={image.src} alt={image.alt} class="object-cover max-h-48">
  {/each}
  </Card>