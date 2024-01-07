<template>
  <div>
    <div v-if="displayAdminMenu" class="admin-new-game">
      <newAdminMatch @addMatch="newMatch" />
    </div>


    <div class="container">
      <DisplayTeamsMatch />
      <Field />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import Player from '~/components/player.vue';

import { IMatch } from '@/types/matchType';
import newAdminMatch from '~/components/newAdminMatch.vue';
// import { useStrapi } from '@/composables/useStrapi';
import DisplayTeamsMatch from '~/components/displayTeamsMatch.vue';
import Field from '~/components/field.vue';

onBeforeMount(() => {
  console.log('MOUNTED')
  // const strapi = useStrapi();
});

const displayAdminMenu = ref(false);
const displayMatch = ref(true);
// console.log(strapi)


const newMatch = (payload: IMatch) => {
  console.log('NEW MATCH', payload)

}

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    background-color: red!important;
  }
</style>


