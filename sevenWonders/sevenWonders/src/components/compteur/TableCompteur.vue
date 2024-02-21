<script >
import { useCompteurStore } from '@/stores';
import { ref } from 'vue'

export default {
    setup() {
        const store = useCompteurStore()
        function calcArgent(argent) {
            return Math.floor(argent/3)
        }

        function calcPoints (compteur) {
            const resultat = compteur.merveille + calcArgent(compteur.argent) + compteur.militaire + compteur.culture + compteur.commerce + compteur.scientifique + compteur.guilde
            return resultat
        }
        let x = ref(false)

        let compteurTri = store.getCompteur
        function sortMachin() {
            compteurTri = store.getCompteur.sort((j1, j2) => calcPoints(j2) - calcPoints(j1))
        }
        return {
            x,
            compteurTri,
            store,
            calcPoints,
            calcArgent,
            sortMachin
        }
    }
}
//copie d'une varaible primaire : fait une copie sans interaction, autrement (array, object) ca bouge toujours les valeurs aux endroits.
</script>
<template>
    <section>
        <div 
        v-if="x == true">
            <p>Le vainqueur est {{ compteurTri[0].joueur }} avec {{ calcPoints(compteurTri[0]) }} points</p>
            <p>Suivi de {{ compteurTri[1].joueur }} en deuxième position, puis {{ compteurTri[2].joueur }} en troisème position</p>
        </div>
        <table>
            <thead class="table table-dark">

                <!-- Reussir a importer le nom saisi dans le formulaire-->
                <th scope="col">Joueur</th>
                <th scope="col">Merveille</th>
                <th scope="col">Argent</th> 
                <th scope="col">Militaire</th> 
                <th scope="col">culture</th> 
                <th scope="col">commerce</th> 
                <th scope="col">scientifique</th> 
                <th scope="col">guilde</th> 
                <th scope="col">Resultats</th>
            </thead>
            <tbody class="table table-dark table-hover">
                <tr v-for="compteur in store.getCompteur" :key="compteur.joueur" class="item">
                    <td>{{ compteur.joueur }}</td>
                    <td>{{ compteur.merveille }}</td>
                    <td>{{ calcArgent(compteur.argent) }}</td>
                    <td>{{ compteur.militaire }}</td>
                    <td>{{ compteur.culture }}</td>
                    <td>{{ compteur.commerce }}</td>
                    <td>{{ compteur.scientifique }}</td>
                    <td>{{ compteur.guilde }}</td>
                    <!-- <td>{{ resultat }}</td> -->
                    <td>{{ calcPoints(compteur) }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="sortMachin(), x=true">Voir vainqueur</button>
    </section>
   
</template>
   
 
