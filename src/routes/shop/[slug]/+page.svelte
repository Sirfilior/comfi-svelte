<script lang="ts">
  import type { PageData, ActionData } from './$types';
  import AudioItem from '$lib/components/AudioItem.svelte';
  import TextItem from '$lib/components/TextItem.svelte';
  import ImageItem from '$lib/components/ImageItem.svelte';
  import BuyForm from '$lib/components/BuyForm.svelte';

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
      href={`/${data.room}`}
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
    {#each data.products as item}
      <div
        class="flex flex-col items-center justify-center gap-3 border-2 border-woodlight p-3 text-white"
      >
        <svelte:component this={getItemComponent(item.type)} {item} />
        <BuyForm id={item.id} room={data.room} />
      </div>
    {/each}
  </div>
</div>
