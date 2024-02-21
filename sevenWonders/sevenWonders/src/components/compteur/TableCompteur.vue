<script >
import { useCompteurStore } from '@/stores';
import { ref } from 'vue'
const store = useCompteurStore()
export default {
    setup(props, context) {
        const x = ref(0);

        function calcArgent(argent) {
            return Math.floor(argent/3)
        }

        function calcPoints (compteur) {
            const resultat = compteur.merveille + calcArgent(compteur.argent) + compteur.militaire + compteur.culture + compteur.commerce + compteur.scientifique + compteur.guilde
            return resultat
        }


        let compteurTri = store.getCompteur.sort((j1, j2) => calcPoints(j1) - calcPoints(j2))

        function sortCompteur() {
            x=1
        }
    }
}
</script>

<template>
    <section>
        <div 
        v-if="x != 0">
            <p>Le vainqueur est {{ }} avec {{  }} points</p>
            <p>Suivi de {{  }} en deuxième position, puis {{  }} en troisème position</p>
        </div>
        <p>{{ compteurTri }}</p>
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
        <button @click="sortCompteur()">Voir vainqueur</button>
    </section>
   
</template>
    
