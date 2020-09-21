<template lang="pug">
  div
    .container.top
      div.logo
        img(src="@/assets/images/logo.png")
      div
        h1.title Minecraft Location Saver
        p.text Guarda las coordenadas de lugares de tu mundo survival en Minecraft.
    
    div.center
      img.presentation(src="@/assets/images/presentation.png")

      button.btn.text(@click="login()")
        img(src="@/assets/images/google.svg")
        span Login / Sign Up
        
    Footer
</template>

<script>
	import { mapActions } from "vuex"

	export default {
		methods: {
			...mapActions(["login"])
		}
	}
</script>

<style lang="sass">
	@import '@/assets/sass/variables'


	h1
	  color: $alert
	  font-size: 14pt
	p
	  font-size: 11pt

	.top
	  display: grid
	  grid-template-columns: 1fr 3fr

	.logo
	  align-self: center

	.presentation
	  width: 180px
	  margin-top: 20px

	.center
	  display: flex
	  flex-direction: column
	  align-items: center


	.btn
	  margin-top: 50px
	  width: 130px
	  height: 50px
	  background-color: white
	  border: 0px
	  border-radius: 10px
	  display: flex
	  gap: 10px
	  align-items: center
	  font-size: 9pt
</style>
