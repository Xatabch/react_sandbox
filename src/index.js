import Info from './Components/SvelteComponent/SvelteComponent.svelte';

const info = new Info({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default info;
