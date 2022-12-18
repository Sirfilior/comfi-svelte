<script lang="ts">
  import type { JsonContent } from '$lib/server/content';

  export let item: JsonContent;
</script>

<div class="flex flex-grow flex-col items-center justify-center gap-3 text-center">
  <p>{item.name}</p>

  <div class="group relative overflow-hidden">
    <div class="absolute inset-0 z-10 hidden p-2 group-hover:block">
      {item.description}
    </div>
    <img class="transition-all duration-200 group-hover:blur-2xl" src={item.image} />

    <div class="bottom-0 z-10 p-2 text-center text-xs group-hover:block">
      {item.date}
    </div>
  </div>
</div>
