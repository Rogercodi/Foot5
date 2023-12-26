<template>
  <div>
    <div v-if="displayAdminMenu" class="admin-new-game">
      <AdminMatch @addMatch="newMatch" />
    </div>


    <div v-if="displayMatch" class="container">
      <div class="container__field">
        <div class="container__field__border"></div>
        <div class="container__field__goal-north"></div>
        <div class="container__field__goal-south"></div>
        <div class="container__field__center-circle"></div>
        <div class="container__field__center-line"></div>
        <div class="container__field__north-area"></div>
        <div class="container__field__south-area"></div>
        <div class="container__field__small-north-area"></div>
        <div class="container__field__small-south-area"></div>
        <div class="container__field__penalty-dot-north"></div>
        <div class="container__field__penalty-dot-south"></div>


        <Player v-for="(player, index) in positionsTeamA" :key="index" :left="player.left" :bottom="player.bottom"
          :color="index === positionsTeamA.length - 1 ? 'yellow' : 'blue'" name="Roger" />

        <Player v-for="(player, index) in positionsTeamB" :key="index" :left="player.left" :bottom="player.bottom"
          :color="index === positionsTeamA.length - 1 ? 'yellow' : 'red'" name="Roger" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import Player from '~/components/player.vue';
import { positionsTeamA, positionsTeamB } from '@/utils/positions';
import { IMatch } from '@/types/matchType';
import AdminMatch from '~/components/adminMatch.vue';
import { useStrapi } from '@/composables/useStrapi';

onBeforeMount(() => {
  console.log('MOUNTED')
  // const strapi = useStrapi();
});

const displayAdminMenu = ref(true);
const displayMatch = ref(false);
// console.log(strapi)


const newMatch = (payload: IMatch) => {
  console.log('NEW MATCH', payload)

}

</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;

  &__field {
    position: absolute;
    left: 30%;
    width: 50%;
    height: 90%;
    background-color: green !important;
    z-index: 10;

    &__border {
      position: absolute;
      left: 4%;
      top: 4%;
      width: 92%;
      height: 92%;
      border: 2px solid white;
      z-index: 20;
    }

    &__center-line {
      position: absolute;
      left: 4%;
      top: 50%;
      width: 92%;
      height: 2px;
      background-color: white;
      z-index: 30;
    }

    &__center-circle {
      position: absolute;
      left: 35%;
      top: 39%;
      width: 30%;
      height: 22%;
      border: 2px solid white;
      border-radius: 50%;
      z-index: 30;
    }

    &__north-area {
      position: absolute;
      left: 20%;
      top: 4%;
      width: 60%;
      height: 20%;
      border: 2px solid white;
      z-index: 30;
    }

    &__south-area {
      position: absolute;
      left: 20%;
      bottom: 4%;
      width: 60%;
      height: 20%;
      border: 2px solid white;
      z-index: 30;
    }

    &__small-north-area {
      position: absolute;
      left: 32.5%;
      top: 4%;
      width: 35%;
      height: 8%;
      border: 2px solid white;
      z-index: 30;
    }

    &__small-south-area {
      position: absolute;
      left: 32.5%;
      bottom: 4%;
      width: 35%;
      height: 8%;
      border: 2px solid white;
      z-index: 30;
    }


    &__goal-north {
      position: absolute;
      left: 37%;
      top: 4%;
      width: 26%;
      height: 2%;
      background-color: white;
      z-index: 30;
    }

    &__goal-south {
      position: absolute;
      left: 37%;
      bottom: 4%;
      width: 26%;
      height: 2%;
      background-color: white;
      z-index: 30;
    }

    &__penalty-dot-north {
      position: absolute;
      left: 49%;
      top: 17%;
      width: 2%;
      height: 2%;
      border: 2px solid white;
      border-radius: 50%;
      z-index: 30;
      background-color: white;
    }

    &__penalty-dot-south {
      position: absolute;
      left: 49%;
      bottom: 17%;
      width: 2%;
      height: 2%;
      border: 2px solid white;
      border-radius: 50%;
      z-index: 30;
      background-color: white;
    }

  }
}
</style>
