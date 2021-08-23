<template>
    <nav class="nav">
        <ul class="nav__list">
            <!-- <li class="nav__items"navigate>
                <router-link :to="link.url" active-class="active">
                    <i class="zen" :class="[isActive ? link.bold : link.iconClass]"></i>
                </router-link>
            </li> -->
            <router-link 
                :to="link.url" 
                custom
                v-for="link in links"
                :key="link.url"
                active-class="active"
                v-slot="{ href, navigate, isActive}">
                <li class="nav__items">
                    <a class="zen" @click="navigate" :class="[isActive ? link.bold + ' active' : link.iconClass]" :href="href"></a>
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        data: () => ({
            links: [{
                    iconClass: 'frs-home',
                    bold: 'frs-home_solid',
                    url: '/'
                },
                {
                    iconClass: 'frs-user',
                    bold: 'frs-user_solid',
                    url: '/about'
                },
                {
                    iconClass: 'frs-resume_website',
                    bold: 'frs-resume_website_solid',
                    url: '/resume'
                }
            ]
        })
    }
</script>