<script setup>
    import FormCompteur from '../components/compteur/FormCompteur.vue'
    import TableCompteur from '../components/compteur/TableCompteur.vue'
</script>

<template>
    <main>
        <section  class="container d-flex row">
            <table-compteur class="col-6" />
            <form-compteur class="col-6"/>
        </section>
    </main>
</template>