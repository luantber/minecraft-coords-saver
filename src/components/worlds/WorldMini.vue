<template lang="pug">
    div.world-mini(  :style="{ backgroundImage: `url(${imagen})` }" ) 
        div
            h3.title {{nombre}}      
        div.flex
            div
                span.material-icons share
                
            div
                 span.material-icons delete

</template>

<script>
export default {
    props:{
        imagen:{
            default: 'http://lorempixel.com/130/100'
        },
        nombre: String,
        url: String
    }
        
    
}
</script>


<style lang="sass" scoped>
    .world-mini
        // border: solid    
        border-radius: 10px
        width: 130px
        height: 100px
        padding: 10px
        color: white 

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    
        ::before
            background-color: rgba(0, 0, 0, 0.25)


    .title 
        height: 80px
        color: white 


    h3
        margin: 0

    .flex
        position: relative
                
        display: flex
        justify-content: space-between
        
</style>