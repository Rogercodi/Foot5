<template>
<div :style="{ left: left, bottom: bottom }" class="player">
    <div :style="{ background: color}" class="player__icon">
        <div 
        class="player__icon__number"
        >
            {{ number }}
        </div>
    </div>
    <span class="player__icon__tag">{{ name }}</span>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


defineProps({
    left: {
        type: String,
        required: true,
        default: '0' 
    },
    bottom: {
        type: String,
        required: true,
        default: '0' 
    },
    name: {
        type: String,
        required: true,
        default: 'players' 
    },
    number: {
        type: Number,
        required: true,
        default: '0' 
    },
    color: {
        type: String,
        required: true,
        default: 'white' 
    },
});

</script>

<style lang="scss" scoped>
.player {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    z-index:100;
    width:9%;
    height: 8%;
    
    &__icon {
        width: 100%;
        height: 100%;
        border: 1px solid black;
        border-radius: 50%;
        z-index: 30;
        background-color: white;

        &__number {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: black;
        }
        
        &__tag {
            background-color: transparent;
            color: white;
        }
    }
    
}

</style>