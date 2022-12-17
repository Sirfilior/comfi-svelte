<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div>
  {#each data.stash as stashItem}
    <span>{stashItem.id}</span>
  {:else}
    <span class="text-white">Nothing in stash for {data.room}</span>
  {/each}
</div>
