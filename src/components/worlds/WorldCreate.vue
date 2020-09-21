<template lang="pug">
    div.world-mini
        span.material-icons add_circle_outline

</template>

<script></script>

<style lang="sass" scoped>
	@import '@/assets/sass/variables'

	.world-mini
	    cursor: pointer
	    // border: solid
	    border-radius: 10px
	    width: 130px
	    height: 100px
	    padding: 10px


	    color: $alert
	    background-color: white


	    display: flex
	    justify-content: center
	    align-items: center


	    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

	    ::before
	        background-color: rgba(0, 0, 0, 0.45)
</style>
