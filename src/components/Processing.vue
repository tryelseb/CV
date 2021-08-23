<template>
    <div>
        <div class="develop"
        v-for="item in items"
        :key="item.name"
        >
            <div class="wrp-title">
                <h4>
                    {{item.name}}
                     <span>{{item.lvl ? item.lvl : '' }}</span>
                </h4>
               
            </div>
            <div class="develop__bg">
                <div class="develop__progress" :style="{width: `${item.value}%`}"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items'],
    mounted() {
        console.log(this.items)
    },
}

</script>