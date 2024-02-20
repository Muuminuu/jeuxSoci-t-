import { defineStore } from "pinia";

export const useCompteurStore = defineStore('compteur', {
    state: () => ({
            compteur: []
    }),
    getters: {
        getCompteur : (state) => state.compteur
    },
    actions:{
        addCompteur(item) {
            this.compteur.push(item)
                
            
        },
        deleteCompteur(itemId) {
            this.compteur = this.compteur.filter((object) => {
                return object.id !== itemId
            })
        },
    }
});