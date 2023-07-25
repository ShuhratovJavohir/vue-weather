<template>
	<header class="header">
		<nav class="header__nav">
			<div class="header__logo">
				<img src="@/assets/images/logo.svg" alt="logo">
				<span>vue weather</span>
			</div>
			<div class="header__search">
				<img src="@/assets/images/caplya.svg" alt="caplya">
				<input 
					type="text" 
					placeholder="Выбрать город"
					v-model="city"
					@keydown.enter="getWaether(city)"
				>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		data(){
			return{
				city: ''
			}
		},
		methods:{
			...mapActions(['getWaether'])
		}
	}
</script>