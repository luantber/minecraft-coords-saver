<template lang="pug">
  div
    Navbar
    div.container
      h1.title {{ world.name }}

      input#buscador(placeholder="Busca tus ubicaciones ... ")
      p.text  Todos los campos son opcionales
      div.flex
        input.coord(placeholder="x: 145")
        input.coord(placeholder="y: 145")
        input.coord(placeholder="z: 145")
        //- input 
      div.flex
        input#lugar(placeholder="Nombre del lugar ... ")
        span.ec.ec-grinning
        button Guardar

      div.flex.locations(v-for="loc in locations" )
        Location(:x="loc.x", :y="loc.y", :z="loc.z" :name="loc.name" )
        

      div.mapa

</template>

<script>
	import Navbar from "@/components/Navbar"
	import Location from "@/components/worlds/Location"
	import { mapActions, mapState } from "vuex"

	export default {
		mounted() {
			this.getWorld(this.$route.params.id)
		},
		methods: {
			...mapActions(["getWorld"])
		},
		computed: {
			...mapState(["world", "locations"])
		},
		components: {
			Navbar,
			Location
		}
	}
</script>

<style lang="sass" scoped>
	@import '@/assets/sass/variables'
	h1
	  font-size: 12pt
	  color: $alert

	input
	  background: #FFFFFF
	  border-radius: 10px
	  border: 0px
	  height: 32px
	  padding-left: 5px
	  box-sizing: border-box
	  // margin-bottom: 10px
	  ::placeholder
	    color: $light

	#buscador
	  width: 100%
	  ::after
	    color: black
	    right: 0
	    position: absolute
	    transform: translate(0,-50%)
	    content: "O"

	.flex
	  display: flex
	  gap: 5px
	  align-items: center

	.coord
	  width: 65px
	  margin-bottom: 10px

	#lugar
	  width: 160px

	button
	  background: linear-gradient(180deg, #F154A9 0%, #CD19D0 100%)
	  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15)
	  border-radius: 10px
	  border: 0px
	  width: 86px
	  height: 32px
	  color: white

	.ec
	  font-size: 14pt

	.locations
	  margin-top: 10px
	  flex-direction: column
	  gap: 10px
	  height: 200px
	  overflow: auto

	.mapa
	  background: white
	  margin-top: 10px
	  height: 200px
</style>
