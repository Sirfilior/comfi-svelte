<script lang="ts">
  import '../app.css';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import Header from './Header.svelte';
  import Pomodoro from './Pomodoro.svelte';

  export let data: LayoutData;

  const PUBLIC_AUTH_DISABLED = false;
</script>

<svelte:head>
  <title>Comfi Pomodoro</title>
</svelte:head>

{#if $page.data.session || PUBLIC_AUTH_DISABLED}
  <div class="flex h-full items-center justify-center bg-wood px-12">
    <Header />
    <slot />
    <Pomodoro balance={data.balance} />
  </div>
{:else}
  <div class="flex h-full flex-col  items-center justify-center gap-4 bg-wood px-12 text-white">
    <h1 class="notSignedInText">You are not signed in</h1>
    <a href="/auth/signin" class="btn">
      <span>Sign in</span>
      <svg class="h-12 w-12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M5 3H3v4h2V5h14v14H5v-2H3v4h18V3H5zm12 8h-2V9h-2V7h-2v2h2v2H3v2h10v2h-2v2h2v-2h2v-2h2v-2z"
          fill="currentColor"
        />
      </svg>
    </a>
  </div>
{/if}
