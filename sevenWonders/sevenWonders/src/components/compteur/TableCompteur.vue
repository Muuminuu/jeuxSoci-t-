<script setup>

import { useCompteurStore } from '@/stores';

const store = useCompteurStore()

function calcArgent (argent){
    return Math.floor(argent/3)
}

function calcPoints (compteur) {
    const resultat = compteur.merveille + calcArgent(compteur.argent) + compteur.militaire + compteur.culture + compteur.commerce + compteur.scientifique + compteur.guilde
    return resultat
}

console.log(store.getCompteur.filter((item) => typeof item === typeof 2))

//console.log(compteur)
//console.log(calcPoints(compteur))
// const vainqueur = [{ 
//    compteur.joueur : calcPoints(compteur),
//    
//}]
// @vainqueur.

</script>

<template>
    <section>
        <p>Le vainqueur est {{  }} avec {{  }} points</p>
        <p>Suivi de {{  }} en deuxième position, puis {{  }} en troisème position</p>
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
    </section>
   
</template>
    
