<script lang="ts">
  import type { JsonContent } from '$lib/server/content';

  export let item: JsonContent;
  export let purchased = false;
</script>

<div class="flex flex-grow  flex-col items-center justify-center gap-3 text-center">
  <p>{item.name}</p>
  <img
    src={item.image}
    class:unpurchased={!purchased}
    alt="Living Room picture looks really comfi hehehehe"
  />
</div>
