<script>
	import { onMount } from 'svelte'
	import { pwaInfo } from 'virtual:pwa-info'

	
	let ReloadPrompt
  
	onMount(async () => {
	  if (pwaInfo) {
		const { registerSW } = await import('virtual:pwa-register')
		registerSW({
		  immediate: true,
		  onRegistered(r) {
			
			console.log(`SW Registered: ${r}`)
		  },
		  onRegisterError(error) {
			console.log('SW registration error', error)
		  }
		})
	  }
	});

	onMount(async () => {
    pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default)
  });
	
	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
  </script>
  
  <svelte:head>
	  {@html webManifest}
  </svelte:head>
  

  {#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}


<div class="container">
	<hgroup>
		<h1>
			<a href="/"> SvelteKit & Prisma 🔥</a>
		</h1>

		<h2> CRUD application with SvelteKit & Prisma.</h2>
	</hgroup>
	<slot />
</div>

