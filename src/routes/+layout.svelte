<script lang="ts">
  import '../app.css';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import { PUBLIC_AUTH_DISABLED } from '$env/static/public';
  import Header from './Header.svelte';
  import Pomodoro from './Pomodoro.svelte';

  export let data: LayoutData;
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
  <span class="notSignedInText">You are not signed in</span>
  <a href="/auth/signin" class="buttonPrimary">Sign in</a>
{/if}
