<template>
    <section class="main">
        <Sidebar/>
        <router-view />
    </section>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default ({
    name: 'main-layout',
    components: {Sidebar}
})
</script>