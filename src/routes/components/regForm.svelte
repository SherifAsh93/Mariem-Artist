<script>
	import { Card, Button } from "flowbite-svelte";
    // import { connectToDatabase } from "$lib/db";

    

</script>
<Card class="text-center">
    <span class="text-3xl text-zinc-700 mb-4 bg-slate-300">Wanna Learn How To Draw like these</span>
    <span class=" text-center text-lg underline">Register For a Course </span>
    <div class="flowbit-input-group space-x-3 text-center">
      <input type="text" class="flowbit-input-group-item w-28 mt-4" placeholder="Your Name">
      <input type="text" class="flowbit-input-group-item w-28" placeholder="Your Phone"><br>
      <Button class="mt-8 bg-neutral-500 hover:bg-slate-400">Register</Button>
    </div>
  </Card>