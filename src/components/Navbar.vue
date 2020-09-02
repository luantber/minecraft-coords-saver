<template lang="pug">
    div.barra.text
        div 
            img(src="@/assets/images/logo.png")
        div Luis B.  V

</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/variables'
    .barra
        height: 45px
        background-color: $light
        margin-bottom: 10px
        padding-left: 20px
        padding-right: 20px
        display: flex
        justify-content: space-between
        align-items: center
        color: $principal


</style>