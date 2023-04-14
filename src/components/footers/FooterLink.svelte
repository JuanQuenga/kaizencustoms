<script lang="ts">
	export let href: string;
	export let text: string;
</script>

<div class="pb-6">
	<a {href} class="text-sm leading-6 text-gray-600 hover:text-black">{text}</a>
</div>
