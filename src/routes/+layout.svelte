<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<a href="/auth/signout" class="button">Sign out</a>
	<div class="bg-wood h-full flex items-center justify-center px-12">
		<slot />
	</div>
{:else}
	<span class="notSignedInText">You are not signed in</span>
	<a href="/auth/signin" class="buttonPrimary">Sign in</a>
{/if}
