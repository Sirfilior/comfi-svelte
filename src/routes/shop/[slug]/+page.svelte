<script lang="ts">
  import type { PageData, ActionData } from './$types';
  import AudioItem from './AudioItem.svelte';
  import TextItem from './TextItem.svelte';
  import ImageItem from './ImageItem.svelte';
  import BuyForm from './BuyForm.svelte';
  import { flip } from 'svelte/animate';
  import { send, receive } from './transition';

  export let data: PageData;
  export let form: ActionData;

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
  <div class="mt-2 flex h-8 justify-center">
    {#if form?.error}
      <span class="text-red-500">{form.error}</span>
    {/if}
  </div>
  <div class="grid grid-cols-4 gap-5 p-10 pt-4">
    {#each data.products as item (item.id)}
      <div
        class="flex flex-col items-center justify-center gap-3 border-2 border-woodlight p-3 text-white"
        in:receive={{ key: item.id }}
        out:send|local={{ key: item.id }}
        animate:flip={{ duration: 200 }}
      >
        <svelte:component this={getItemComponent(item.type)} {item} />
        <BuyForm id={item.id} room={data.room} />
      </div>
    {/each}
  </div>
</div>
