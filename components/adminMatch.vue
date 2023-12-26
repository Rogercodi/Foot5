<template>
    <div class="container mt-6">
        <b-select v-model="newMatch.place" class="container__select p-2 has-text-centered" name="place" id="place"
            placeholder="Escull un camp per la partida">
            <option disabled selected value="">Escull un camp per la partida</option>
            <option value="horta">Horta</option>
            <option value="Sants">Sants</option>
        </b-select>
        <b-datepicker 
        v-model="newMatch.date" 
        inline 
        class="container__date-picker has-text-centered p-2"
        :first-day-of-week="1"
        :min-date="dayjs().toDate()"
        >
        </b-datepicker>
        <p class="container__date-selected has-text-centered p-2" v-if="newMatch.date !== null">Has sel·leccionat: {{
            dayjs(newMatch.date).format('DD/MM/YYYY') }}</p>
        <b-button :disabled="addMatchValues" class="mt-2" @click="addMatch">Afegir</b-button>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { reactive, computed, onMounted } from 'vue'
import { IMatch } from "~/types/matchType";
import { useStrapi} from '@/composables/useStrapi'


onMounted(() => {
    console.log('MOUNTED')
    // const strapi = useStrapi();
});
const emit = defineEmits(['addMatch']);


const newMatch: IMatch = reactive({
    date: null,
    place: ''
});

const addMatchValues = computed(() => {
    return (newMatch.date && newMatch.place) ? false : true;

})



const addMatch = () => {
    emit('addMatch', {
        ...newMatch,
        date: dayjs(newMatch.date).format('DD/MM/YYYY')
    });
}

</script>



<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 35% !important;
    height: 55% !important;
    padding: 15px;
    border: 1px solid grey;
    border-radius: 5px;

    &__date-selected {
        background-color: green;
        color: white;
        border-radius: 5px;
    }

    &__date-picker {
        width: 100% !important;
        border-top: 1px solid black;
        margin-top: 5px;
    }

    &__select {
        margin-bottom: 10px;
    }
}
</style>