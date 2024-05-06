<template>
  <title>{{ author }}</title>
  <!-- Include Font Awesome -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  <div class="container">
    <div class="row">
      <div class="three columns" align="center">
        <header>
          <!-- Avatar -->
          <img id="avatar" alt="👋 Hi, that's me!" src="~/assets/avatars/avatar.png" />
          <!-- Metadata -->
          <p id="name">{{ author }}</p>
          <p id="bio">{{ bio }}</p>
          <!-- Socials -->
          <div id="socials">
            <a
              href="https://github.com/alxdrcirilo"
              target="_blank"
              id="github-icon"
              rel="icon"
              class="fab fa-github icon"
            ></a>
            <a
              href="https://www.instagram.com/alxdrcirilo/"
              target="_blank"
              id="instagram-icon"
              rel="icon"
              class="fab fa-instagram icon"
            ></a>
            <a
              href="https://www.linkedin.com/in/alxdrcirilo/"
              target="_blank"
              id="linkedin-icon"
              rel="icon"
              class="fab fa-linkedin icon"
            ></a>
          </div>
          <!-- Utils -->
          <div>
            <a
              @click="switchTheme"
              rel="icon"
              :class="themeIcon"
              class="icon util-icon">
            </a>
            <a
              href="/cv.pdf"
              rel="icon"
              class="fas fa-file icon util-icon">
            </a>
            <a
              href="/rss.xml"
              rel="icon"
              class="fas fa-rss icon util-icon">
            </a>
          </div>
          <!-- Buttons -->
          <hr class="delimiter" />
          <nav>
            <ul>
              <li><NuxtLink id="nav-button" to="/">Home</NuxtLink></li>
              <li><NuxtLink id="nav-button" to="/archive">Archive</NuxtLink></li>
              <li><NuxtLink id="nav-button" to="/tags">Tags</NuxtLink></li>
            </ul>
          </nav>
        <hr class="delimiter" />
        </header>
      </div>
      <div class="nine columns">
        <!-- Slot -->
        <slot />
        <!-- Footer -->
        <footer>
          <hr style="margin-bottom: 20px;"/>
          © 2024 Alexandre Cirilo. Powered by <a href="https://vuejs.org"><strong>Vue</strong></a> and <a href="https://nuxt.com/"><strong>Nuxt</strong></a>.
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      author: "Alexandre Cirilo",
      bio: "Software engineer based in Amsterdam, the Netherlands.",
      isDarkTheme: null,
      themeIcon: "fas fa-moon",
    };
  },
  methods: {
    switchTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      const colorMode = useColorMode();
      colorMode.preference = this.isDarkTheme ? "dark" : "light";
      this.themeIcon = this.isDarkTheme ? "fas fa-sun" : "fas fa-moon";
    },
  },
  mounted() {
    // Set proper themeIcon after mounting
    const colorMode = useColorMode();
    this.isDarkTheme = colorMode.preference == "dark" ? true : false;
    this.themeIcon = this.isDarkTheme ? "fas fa-sun" : "fas fa-moon";
  },
};
</script>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #fcf2ec;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #222;
  color: #ebf4f1;
}
.delimiter {
  border: 0.5px dashed #555; 
  width: 60%;
}
.chip {
  background: #a0c8fa1a;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 0 0.2rem;
  padding: 0.2rem 0.5rem;
}
.chip:hover {
  opacity: 0.7;
}
.tags {
  display: inline-block;
  padding-bottom: 4px;  
}
</style>
