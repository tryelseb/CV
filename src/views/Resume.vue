<template>
    <section class="resume">
        <h1 class="page-title">
            <span>My</span> Resume
        </h1>
        <div class="row expanded">
            <div class="columns large-4 medium-6 small-12">
                <div class="prof">
                    <h3 class="education">Education</h3>
                    <span class="years"></span>
                    <ul class="prof__list">
                        <li class="prof__items">
                             <h4>Master In Computer Science</h4>
                             <span class="years">2014-2017</span>
                             <p>
                                 Third is winged man evening air isn't saw, god the doesn't green whose that moved, hath. Seasons forth Isn't subdue their grass.
                            </p>                      
                        </li>
                        <li class="prof__items">
                            <h4>Studied At New York University</h4>
                             <span class="years">2014-2017</span>
                             <p>
                                 Third is winged man evening air isn't saw, god the doesn't green whose that moved, hath. Seasons forth Isn't subdue their grass.
                            </p> 
                        </li>
                        <li class="prof__items">
                             <h4>UI/UX Developer</h4>
                             <span class="years">2014-2017</span>
                             <p>
                                 Third is winged man evening air isn't saw, god the doesn't green whose that moved, hath. Seasons forth Isn't subdue their grass.
                            </p> 
                        </li>
                    </ul>
                </div>
            </div>
            <div class="columns large-4 medium-6 small-12">
                <div class="prof">
                    <h3 class="experience">Education</h3>
                    <span class="years"></span>
                    <ul class="prof__list">
                        <li class="prof__items">
                             <h4>Master In Computer Science</h4>
                             <span class="years">2014-2017</span>
                             <p>
                                 Third is winged man evening air isn't saw, god the doesn't green whose that moved, hath. Seasons forth Isn't subdue their grass.
                            </p>                      
                        </li>
                        <li class="prof__items">
                            <h4>Studied At New York University</h4>
                             <span class="years">2014-2017</span>
                             <p>
                                 Third is winged man evening air isn't saw, god the doesn't green whose that moved, hath. Seasons forth Isn't subdue their grass.
                            </p> 
                        </li>
                        <li class="prof__items">
                             <h4>UI/UX Developer</h4>
                             <span class="years">2014-2017</span>
                             <p>
                                 Third is winged man evening air isn't saw, god the doesn't green whose that moved, hath. Seasons forth Isn't subdue their grass.
                            </p> 
                        </li>
                    </ul>
                </div>
            </div>
            <div class="columns large-4 medium-12 small-12">
                <h2 class="decor-title">
                    <span>contact me</span>
                </h2>
                <div class="wrraper-proccesin">
                    <Processing  :items="items" />
                </div>
                <h2 class="decor-title">
                    <span>Language</span>
                </h2>
                <div class="wrraper-proccesin">
                    <Processing  :items="itemsL" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Processing from '@/components/Processing'

export default {
    data: () => ({
        items: [
            {name: 'vue', value: 30},
            {name: 'HTML', value: 90},
            {name: 'JavaScript', value: 85}
        ],
        itemsL: [
            {name: 'Russian', lvl: '(Native)',value: 99},
            {name: 'Spoken english proficiency', lvl: '(Intermediate)',value: 40},
            {name: 'Written english proficiency', lvl: '(Upper-Intermediate)',value: 60},
        ]
    }),
    components: {Processing} 
}
</script>>