<template>
    <mt-header fixed title="fixed top"></mt-header>
</template>

<script>
    import Vue from 'vue'
    import { Header } from 'mint-ui';
    import 'mint-ui/lib/style.css'
    import '../../../lib/mui/css/mui.min.css'
    Vue.component(Header.name, Header);

    export default {
        name: "Header"
    }
</script>

<style>

</style>