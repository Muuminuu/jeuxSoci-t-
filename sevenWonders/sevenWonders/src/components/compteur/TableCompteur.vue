<script setup>
import { useCompteurStore } from '@/stores';

import { storeToRefs } from 'pinia'

const store = useCompteurStore()

const { compteur } = storeToRefs(store)



</script>

<template>
    <section>
        <div v-for="compteur in compteur" :key="compteur.id" class="item">
        <div class="content">
            <span>nom: {{ compteur.joueur }}</span>

            <!-- <span @click="deleteTodo(todo.id)">&#10060;</span> -->
        </div>
    </div>
    </section>
    <section>
        <p>Le vainqueur est {{  }} avec {{  }} points</p>
        <p>Suivi de {{  }} en deuxième position, puis {{  }} en troisème position</p>
        <table>
            <thead>
                <td>Resultats</td>
                <!-- Reussir a importer le nom saisi dans le formulaire-->
                <td>"test"</td>
                <td>"test"</td>
                <td>{{ compteur.name }}</td>
            </thead>
            <tbody>
                <tr>
                    <td>Merveilles</td>
                    <!-- REussir à importer la valeur de merveille du formulaire-->
                    <td>"3"</td>
                    <td>{{ compteur.merveille }}</td>
                    <td>{{ compteur.argent }}</td>
                    <td>{{ compteur.militaire }}</td>
                    <td>{{ compteur.culture }}</td>
                    <td>{{ compteur.commerce }}</td>
                    <td>{{ compteur.scientifique }}</td>
                    <td>{{ compteur.guilde }}</td>
                </tr>
                <tr>points totaux</tr>
            </tbody>
        </table>
    </section>
   
</template>
    
