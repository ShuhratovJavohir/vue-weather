<template>
  <main class="main">
		<MainContent />
		<MainWeek />
	</main>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import MainWeek from "@/components/MainWeek.vue"
export default {
	components: {
		MainContent,
		MainWeek
	}
};
</script>