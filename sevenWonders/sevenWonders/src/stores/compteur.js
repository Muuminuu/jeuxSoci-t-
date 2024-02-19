import { defineStore } from "pinia";

export const useCompteurStore = defineStore('compteur', {
    state: () => ({
            compteur: [],
            id: 0
    }),
    actions:{
        addCompteur(item) {
            this.compteur.push({ 
                item: item, 
                id: this.id++,
                joueur: joueur.value,
                merveille: merveille.value,
                argent: argent.value,
                militaire: militaire.value,
                culture: culture.value,
                commerce: commerce.value,
                science: science.value,
                guilde: guilde.value
            })
        },
        deleteCompteur(itemId) {
            this.compteur = this.compteur.filter((object) => {
                return object.id !== itemId
            })
        }
    }
});