<template lang="pug">
    div.location.text
        div Mundo de Luis y Marga 
            span.ec.ec-grinning
        div
            div.flex
                div.coord x: -145
                div.coord x: -145
                div.coord x: -145

</template>

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

    .flex 
        justify-content: space-around
    .coord
        font-size: 11pt
        
        
        
</style>