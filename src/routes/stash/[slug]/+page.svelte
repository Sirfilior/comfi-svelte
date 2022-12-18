<script lang="ts">
  import type { PageData } from './$types';
  import AudioItem from './AudioItem.svelte';
  import TextItem from './TextItem.svelte';
  import ImageItem from './ImageItem.svelte';

  export let data: PageData;

  function getItemComponent(itemType: string) {
    switch (itemType) {
      case 'audio':
        return AudioItem;
      case 'text':
        return TextItem;
      case 'image':
        return ImageItem;
      default:
        return null;
    }
  }
</script>

<div class="relative h-full w-full overflow-y-scroll pt-20 pb-8 scrollbar-hide">
  <div class="my-2 flex justify-center">
    <a
      class="flex cursor-pointer items-center justify-center rounded-xl bg-woodlight py-2 px-4 text-white"
      href={`/${data.room === 'livingroom' ? '' : data.room}`}
    >
      Back to room
    </a>
  </div>
  <div class="grid grid-cols-4 gap-5 p-10 pt-4">
    {#each data.stash as item}
      <div
        class="flex flex-col items-center justify-center gap-3 border-2 border-woodlight p-3 text-white"
      >
        <svelte:component this={getItemComponent(item.type)} {item} />
      </div>
    {:else}
      <span class="text-white">Nothing in stash for {data.room}</span>
    {/each}
  </div>
</div>
