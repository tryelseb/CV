<template>
  <div class="main-screen">
    <p class="short-text">
      #HTML #JavaScript #CSS #VUE
    </p>
    <div class="row expanded ">
      <div class="column large-4 medium-6 small-12 align-self-bottom">
        <div class="avatar">
          <img src="../assets/img/avatar.jpg" alt="">
        </div>
      </div>
      <div class="column large-5 medium-6 small-12 align-self-bottom">
        <div class="content">
          <div class="wrapper-title">
            <p>I'm</p>
            <h1>
              Oleh Sova
            </h1>
            <h4>
              A
              <span>Frontend Developer</span>
            </h4>
          </div>
          <p>
            Middle front-end developer experienced with all stages of the development cycle for dynamic web projects. I was a freelance web developer for some time, made turn-key websites using WooComerce plugin of Wordpress CMS. I also worked for an international IT company for 4+ years. I am an easy-going person striving to attach all my efforts to help my team.
          </p>
          <MainButton />
        </div>
      </div>
      <div class="column large-3 small-12 align-self-top">
        <h2 class="decor-title">
          <span>contact me</span>
        </h2>
        <ul class="contact__list">
          <li class="contact__items">
            <a href="mailto:iamolehsova@gmail.com">
              <i class="zen frs-email"></i>
              <span>iamolehsova@gmail.com</span>
            </a>
          </li>
          <li class="contact__items">
            <a href="mailto:iamolehsova@gmail.com">
              <i class="icon-phone"></i>
              <span>+3 (068) 655 38 63</span>
            </a>
          </li>
          <li class="contact__items">
            <a href="https://www.linkedin.com/in/oleh-sova">
              <i class="icon-linkedin"></i>
              <span>oleh-sova</span>
            </a>
          </li>
          <li class="contact__items">
            <a href="https://github.com/tryelseb">
              <i class="icon-github"></i>
              <span>git</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>