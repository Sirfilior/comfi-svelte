<script lang="ts">
  import type { JsonContent } from '$lib/server/content';

  export let item: JsonContent;
</script>

<div class="flex flex-grow  flex-col items-center justify-center gap-3 text-center">
  <p>{item.name}</p>
</div>
