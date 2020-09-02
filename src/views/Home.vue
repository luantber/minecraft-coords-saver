<template lang="pug">
    div
        Navbar
        div.container.grid
            WorldMini( :nombre="'Wololo'"  )
            WorldMini( :nombre="'Wolol1'"  )
            WorldMini( :nombre="'Wolol2'"  )
            WorldMini( :nombre="'Wolol3'"  )
            WorldCreate

        Footer

</template>


<script>
import Navbar from '@/components/Navbar'
import WorldMini from '@/components/worlds/WorldMini'
import WorldCreate from '@/components/worlds/WorldCreate'
export default {
    components:{
        Navbar,
        WorldMini,
        WorldCreate

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
