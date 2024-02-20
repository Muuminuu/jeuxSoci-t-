<script setup>
import { ref } from 'vue'
import { useCompteurStore } from '@/stores/compteur'

const compteur = ref({
    joueur : '',
    merveille : 0,
    argent : 0,
    militaire : 0,
    culture : 0,
    commerce : 0,
    scientifique : 0,
    guilde : 0
})

const store = useCompteurStore();

function addItemAndClear(item) {
    if (item.length === 0 ){
        return
    }
    const temp = {
    joueur : this.compteur.joueur,
    merveille : this.compteur.merveille,
    argent : this.compteur.argent,
    militaire : this.compteur.militaire,
    culture : this.compteur.culture,
    commerce : this.compteur.commerce,
    scientifique : this.compteur.scientifique,
    guilde : this.compteur.guilde
    }
    console.log(temp)
    store.addCompteur(temp)
    this.compteur.joueur = ''
    this.compteur.argent = 0
    this.compteur.merveille = 0
    this.compteur.militaire = 0
    this.compteur.culture = 0
    this.compteur.commerce = 0
    this.compteur.scientifique = 0
    this.compteur.guilde = 0
    
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
                        v-model="compteur.joueur"
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
                        v-model="compteur.merveille"
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
                        v-model="compteur.argent"
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
                        v-model="compteur.militaire"
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
                        v-model="compteur.culture"
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
                        v-model="compteur.commerce"
                    >
                </div>
                <div class="mb-3">
                    <label for="scientifique" class="form-label">Science</label>
                    <input
                        type="number"
                        class="form-control"
                        id="scientifique"
                        name="scientifique"
                        aria-describedby="scientifique-help"
                        v-model="compteur.scientifique"
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
                        v-model="compteur.guilde"
                    >
                </div>
                
                
                <button class="btn btn-primary">Créer</button>
                </form>
            </div>
    </section>

</template>