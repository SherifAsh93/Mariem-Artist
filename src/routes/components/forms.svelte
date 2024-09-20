<script>
	import { Card } from "flowbite-svelte";
  import RegForm from "./regForm.svelte";
  

</script>

<div class="grid grid-cols-1 grid-rows-2 my-40 space-y-3 mx-auto h-fit w-fit">

    <Card class="text-center">
      <span class="text-3xl text-zinc-700 bg-slate-300 h-auto w-32 mx-auto">You Like</span>
      <span class="text-xl pt-1 pb-2">See More Here</span>
      <a href="https://www.facebook.com/profile.php?id=100064039751994" target="_blank">
        <img class="h-20 mx-auto" src="/fb.png" alt="fb" srcset=""></a>
      
      <span class="text-xl mt-3 text-zinc-700">Or</span>
      <span class="text-xl">Call Us On</span>
      <span class="text-xl mt-3 text-zinc-700 underline">+20 1029797894</span>
    </Card>
    <RegForm/>
  </div>