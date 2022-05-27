<template>
<header :class="{ 'home-bg': home, 'journal-bg': journal }">
     <nav class="container flex">
          <div class="branding">
               <router-link  v-if="site=='home'" class="headerTitle" :to="{ name: 'home' }">chivalore.com</router-link>
               <router-link v-if="site=='journal'" class="headerTitle" :to="{ name: 'journal' }">/ prosperist journal</router-link>
          </div>
          <div class="navLinks">
               <ul v-show="!mobile">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Journal</router-link>
                    <router-link class="link" to="#">About</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
               </ul>
          </div>
     </nav>
     <menuIco @click="toggleMobileNav" class="menuIco" v-show="mobile" />
     <transition name="mobileNav">
          <ul :class="{ 'home-bg': home, 'journal-bg': journal }" class="flex mobileNav" v-show="mobileNav">
               <router-link class="link" to="#">Home</router-link>
               <router-link class="link" to="#">Journal</router-link>
               <router-link class="link" to="#">About</router-link>
               <router-link class="link" to="#">Create Post</router-link>
               <router-link class="link" to="#">Login/Register</router-link>
          </ul>
     </transition>
</header>
</template>

<script>
import menuIco from "../assets/Icons/bars-regular.svg";

export default {
     name: "NavigationMenu",
     props: {
          site: String,
     },
     components: {
          menuIco
     },
     data() {
          return {
               mobile: null,
               mobileNav: null,
               windowWidth: null,
               home: null,
               journal: null
          };
     },
     created() {
          this.checkWidth();
          window.addEventListener('resize', this.checkWidth);
          this.setNavBg();
          console.log(this.site);
     },
     methods: {
          setNavBg() {
               if (this.site === "home") {
                    this.home = true;
                    this.journal = false;
               } else if (this.site === "journal") {
                    this.home = false;
                    this.journal = true;
               }
          },

          checkWidth() {
               this.windowWidth = window.innerWidth;
               if (this.windowWidth <= 800) {
                    this.mobile = true;
                    return;
               }
               this.mobile = false;
               this.mobileNav = false;
               return;
          },

          toggleMobileNav() {
               this.mobileNav = !this.mobileNav;
          },
     }
};
</script>

<style scoped>
header {
     height: 100px;
     width: 100%;
     box-shadow: 0 5px 5px -1px rgba(0,0,0,0.2);
     color: #fff;
     position: relative;
}


header .flex {
     justify-content: space-between;
     align-items: center;
}

header .container {
     padding: 0 1.5rem;
}

header .branding .headerTitle {
     font-size: 32px;
     color: #fff;
     text-decoration: none;
}

header .navLinks {
     display: flex;
     height: 100%;
     align-items: center;
}

header .navLinks ul {
     display: flex;
     height: 100%;
     align-items: center;
     gap: 1rem;
}

header .menuIco {
     cursor: pointer;
     position: absolute;
     top: 40px;
     right: 25px;
     height: 25px;
     width: auto;
     fill: #fff;
}

header .mobileNav {
     padding: 50px 20px;
     width: 70%;
     max-width: 250px;
     flex-direction: column;
     position: fixed;
     height: 100%;
     color: #fff;
     top: 0;
     left: 0;
     justify-content: flex-start;
     align-items: flex-start;
     gap: 1.5rem;
     box-shadow: 10px 5px 10px 3px rgba(0,0,0,0.1);
     z-index: 99;
}

header .mobileNav .link {
     font-size: 1.2rem;
}

header .mobileNav-enter-active,
header .mobileNav-leave-active {
     transition: all 0.2s ease;
}

header .mobileNav-enter {
     transform: translateX(-250px);
}

header .mobileNav-enter-to {
     transform: translateX(0);
}

header .mobileNav-leave-to {
     transform: translateX(-250px);
}

@media (max-width: 400px) {
     header {
          height: 70px;
     }

     header .branding .headerTitle {
          font-size: 20px;
     }

     header .menuIco {
     top: 23px;
     right: 25px;
}
}

</style>