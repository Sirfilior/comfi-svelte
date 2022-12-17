<script lang="ts">
  import { onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import { getActiveRoomUrl } from '$lib/util/util';

  export let balance: number;

  const pomodoroMins = 1;
  const pomodoroLength = pomodoroMins * 60 * 1000;
  let pomodoros = 0;

  let running = false;

  let studyTime = 0;
  const interval = setInterval(() => {
    if (running) {
      studyTime = studyTime + 1000;
      if (studyTime >= pomodoroLength) {
        running = false;
        studyTime = 0;
        clearInterval(interval);
        console.log('Pomodoro complete!');
        add();
      }
    }
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });

  async function add() {
    const response = await fetch('/api/balance/add', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
    balance = await response.json();
  }

  function reset() {
    studyTime = 0;
    running = false;
  }

  function millisToMinutesAndSeconds(time: number) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time - minutes * 60000) / 1000);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  $: remainingTime = millisToMinutesAndSeconds(pomodoroLength - studyTime);

  //TODO:; This is kinda wack

  $: shopUrl = getActiveRoomUrl($page.url.pathname);
</script>

<div class="absolute inset-x-0 bottom-0 z-40 flex justify-between gap-12 bg-wood px-4 pb-5">
  <div>
    <a
      href={`/shop/${shopUrl}`}
      class={`flex items-center justify-center rounded-xl p-1 text-white ${
        $page.url.pathname.includes('/shop') ? 'bg-orange-300' : 'bg-woodlight'
      }`}
    >
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-12 w-12">
        <path
          d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"
          fill="currentColor"
        />
      </svg>
      <span class="text-xl leading-none">{balance}</span>
    </a>
  </div>
  <div class="flex gap-2">
    {#if running}
      <button
        class="flex items-center justify-center rounded-xl bg-woodlight p-1 text-white"
        on:click={reset}
      >
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-12 w-12">
          <path
            d="M11 1H9v2h2v2H5v2H3v10h2v2h2v-2H5V7h6v2H9v2h2V9h2V7h2V5h-2V3h-2V1zm8 4h-2v2h2v10h-6v-2h2v-2h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2V5z"
            fill="currentColor"
          />
        </svg>
      </button>
    {:else}
      <button
        class="flex items-center justify-center rounded-xl bg-woodlight p-1 text-white"
        on:click={() => (running = true)}
      >
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-12 w-12">
          <path d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" fill="currentColor" />
        </svg>
      </button>
    {/if}
    <div class="flex items-center justify-center rounded-xl bg-woodlight p-1 text-white">
      <span>{remainingTime}</span>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-12 w-12">
        <path
          d="M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</div>
