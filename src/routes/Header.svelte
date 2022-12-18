<script lang="ts">
  import { page } from '$app/stores';
  import music from '$lib/media/bg.mp3';

  let paused = true;
</script>

<div class="absolute inset-x-0 top-0 z-40 flex justify-between gap-12 bg-wood px-4 pt-5">
  <nav class="flex gap-4 text-white">
    <a
      href="/"
      class={`flex items-center justify-center rounded-xl p-1 ${
        $page.url.pathname === '/' ? 'bg-orange-300' : 'bg-woodlight'
      }`}
    >
      <svg fill="none" class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {' '}
        <path
          d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z"
          fill="currentColor"
        />{' '}
      </svg>
    </a>
    <a
      href="/library"
      class={`flex items-center justify-center rounded-xl p-1 ${
        $page.url.pathname === '/library' ? 'bg-orange-300' : 'bg-woodlight'
      }`}
    >
      <svg fill="none" class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {' '}
        <path
          d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"
          fill="currentColor"
        />{' '}
      </svg>
    </a>

    <a
      href="/kitchen"
      class={`flex items-center justify-center rounded-xl p-1 ${
        $page.url.pathname === '/kitchen' ? 'bg-orange-300' : 'bg-woodlight'
      }`}
    >
      <svg fill="none" class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M6 2h2v2H6V2zm2 3H6v3H2v9h6v-2h2v2h4v-2h2v2h6V8h-4V5h-2v3h-3V5h-2v3H8V5zm12 10h-4v-3h-2v3h-4v-3H8v3H4v-5h16v5zM2 20h20v2H2v-2zM13 2h-2v2h2V2zm3 0h2v2h-2V2zM2 17h2v3H2zm18 0h2v3h-2z"
          fill="currentColor"
        />
      </svg>
    </a>
  </nav>
  <div class="flex gap-2">
    <button class="btn" on:click={() => (paused = !paused)}>
      {#if paused}
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-12 w-12">
          <path
            d="M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2V2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12H7zm6-8h2v4h-2v-4zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2V4zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2V8z"
            fill="currentColor"
          />
        </svg>
      {:else}
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-12 w-12">
          <path
            d="M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2V2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12H9zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z"
            fill="currentColor"
          />
        </svg>
      {/if}
    </button>
    <a href="/auth/signout" class="btn"> Sign Out </a>
  </div>
  <audio loop bind:paused>
    <source src={music} type="audio/mp3" />
  </audio>
</div>
