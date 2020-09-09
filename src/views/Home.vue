<template lang="pug">
    div
        Navbar
        div.container.grid
            template(v-for="w in worlds")    
                WorldMini( :nombre="w.name"  :id="w.id" )
                
            WorldCreate( @click.native="showCreate()" )
            
        
        //- https://github.com/euvl/vue-js-modal
        modal(name="my-first-modal")  
            form(@submit.prevent="createWorld(nuevoMundo)")
                h3 Crear nuevo mundo
                input(placeholder="Mundo. .." v-model="nuevoMundo.name")
                button(type="submit") Crear
        
        Footer

</template>

<script>
	import Navbar from "@/components/Navbar"
	import WorldMini from "@/components/worlds/WorldMini"
	import WorldCreate from "@/components/worlds/WorldCreate"

	import { mapActions, mapState } from "vuex"

	export default {
		data() {
			return {
				nuevoMundo: {
					name: ""
				}
			}
		},
		components: {
			Navbar,
			WorldMini,
			WorldCreate
		},
		mounted() {
			this.getWorlds()
		},

		methods: {
			showCreate() {
				this.$modal.show("my-first-modal")
			},
			...mapActions(["getWorlds", "createWorld"])
		},

		computed: {
			...mapState(["worlds"])
		}
	}
</script>

<style lang="sass" scoped>
	.grid
	    display: grid
	    grid-template-columns: 1fr 1fr
	    row-gap: 15px
	    justify-items: center

	.container
	    height: 95%
</style>
