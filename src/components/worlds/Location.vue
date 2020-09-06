<template lang="pug">
    div.location.text
        div {{name}}
            span.ec.ec-grinning
        div
            div.flex
                div.coord x: {{ x }}
                div.coord y: {{ y }}
                div.coord z: {{ z }}

</template>

<script>
	export default {
		props: {
			name: String,
			x: Number,
			y: Number,
			z: Number
		}
	}
</script>

<style lang="sass" scoped>
	.location
	    display: grid
	    grid-template-columns: 2fr 3fr
	    grid-column-gap: 10px
	    background: #FFFFFF;
	    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	    border-radius: 10px;
	    height: 38px;
	    padding: 10px
	    width: 90%

	.flex
	    justify-content: space-around
	.coord
	    font-size: 11pt
</style>
