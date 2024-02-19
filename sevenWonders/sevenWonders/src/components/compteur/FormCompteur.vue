<script setup>
import { ref } from 'vue'
import { useCompteurStore } from '@/stores/compteur'

const compteur = ref('')

// const joueur = ref('');
// const merveille = ref('');
// const argent = ref('');
// const militaire = ref('');
// const culture = ref('');
// const commerce = ref('');
// const science = ref('');
// const guilde = ref('');

const store = useCompteurStore();

// function addItemAndClear(item) {
    // compteursStore.compteurs.push({
    //     id: uuid(),
    //     name: name.value,
    //     merveille: merveille.value,
    //     argent: argent.value,
    //     militaire: militaire.value,
    //     culture: culture.value,
    //     commerce: commerce.value,
    //     science: science.value,
    //     guilde: guilde.value
    // })

    // name.value = "";
    // merveille.value = 0;
    // argent.value = 0;
    // militaire.value = 0;
    // culture.value = 0;
    // commerce.value = 0;
    // science.value = 0;
    // guilde.value = 0;

function addItemAndClear(item) {
    if (item.length === 0 ){
        return
    }
    store.addCompteur(item)
    compteur.value = ''
}

</script>

<template>
    <section>
            <div>
                <h2 class="w-f">Points du joueur</h2>
                <form @submit.prevent="addItemAndClear(compteur)">
                <div class="mb-3">
                    <label for="joueur" class="form-label">Nom</label>
                    <input 
                        type="text"
                        class="form-control" 
                        id="joueur"
                        name="joueur"
                        aria-describedby="joueur-help"
                        v-model="joueur"
                        required
                    >
                </div>
                <div class="mb-3">
                    <label for="merveille" class="form-label">Merveille</label>
                    <input 
                        type="number"
                        class="form-control" 
                        id="merveille"
                        name="merveille"
                        aria-describedby="merveille-help"
                        v-model="merveille"
                    >
                </div>
                <div class="mb-3">
                    <label for="argent" class="form-label">Argent</label>
                    <input 
                        type="number"
                        class="form-control" 
                        id="argent"
                        name="argent"
                        aria-describedby="argent-help"
                        v-model="argent"
                    >
                </div>
                <div class="mb-3">
                    <label for="militaire" class="form-label">Militaire</label>
                    <input
                        type="number"
                        class="form-control"
                        id="militaire"
                        name="militaire"
                        aria-describedby="militaire-help"
                        v-model="militaire"
                    >
                </div>
                <div class="mb-3">
                    <label for="culture" class="form-label">Culture</label>
                    <input
                        type="number"
                        class="form-control"
                        id="culture"
                        name="culture"
                        aria-describedby="culture-help"
                        v-model="culture"
                    >
                </div>
                <div class="mb-3">
                    <label for="commerce" class="form-label">Commerce</label>
                    <input
                        type="number"
                        class="form-control"
                        id="commerce"
                        name="commerce"
                        aria-describedby="commerce-help"
                        v-model="commerce"
                    >
                </div>
                <div class="mb-3">
                    <label for="science" class="form-label">Science</label>
                    <input
                        type="number"
                        class="form-control"
                        id="science"
                        name="science"
                        aria-describedby="science-help"
                        v-model="science"
                    >
                </div>
                <div class="mb-3">
                    <label for="guilde" class="form-label">Guilde</label>
                    <input
                        type="number"
                        class="form-control"
                        id="guilde"
                        name="guilde"
                        aria-describedby="guilde-help"
                        v-model="guilde"
                    >
                </div>
                
                
                <button class="btn btn-primary">Créer</button>
                </form>
            </div>
    </section>

</template>