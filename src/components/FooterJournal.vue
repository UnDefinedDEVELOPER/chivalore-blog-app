<template>
     <footer>
          <div class="container flex">
               <img class="logo" src="../assets/Logos/prosperist-banner.png" alt="Banner of Prosperism">
               <div class="footerContent flex">
                    <div class="branding">
                         <router-link class="headerTitle" :to="{ name: 'journal' }">/ prosperist journal</router-link>
                    </div>
                    <ul class="nav flex">
                         <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                         <router-link class="link" :to="{ name: 'journal' }">Journal</router-link>
                         <router-link class="link" :to="{ name: 'about' }">About</router-link>
                         <router-link v-if="user" class="link" :to="{ name: 'newpost' }">Create Post</router-link>
                         <router-link v-if="!user" class="link" :to="{ name: 'login' }">Login/Register</router-link>
                    </ul>
                    <ul class="social flex">
                         <li>
                              <a href="#"><youTube class="svgIcon" /></a>
                         </li>
                         <li>
                              <a href="#"><twitter class="svgIcon" /></a>
                         </li>
                         <li>
                              <a href="#"><instagram class="svgIcon" /></a>
                         </li>
                         <li>
                              <a href="#"><linkedin class="svgIcon" /></a>
                         </li>
                    </ul>
               </div>
          </div>
     </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
     name: "FooterJournal",
     components: {
          youTube,
          twitter,
          instagram,
          linkedin
     }
};
</script>

<style scoped>
footer {
     position: fixed;
     bottom: 0;
     left: 0;
     background: rgb(0,0,0);
     background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,66,74,1) 100%);
     height: 200px;
     width: 100%;
     box-shadow: 0px -5px 10px rgba(0,0,0,0.2);
}

footer .flex {
     height: auto;
}

footer .logo {
     position: absolute;
     bottom: 0px;
     left: 10px;
     width: 230px;
     height: auto;
}

footer > .flex {
     position: relative;
     height: 100%;
     width: 100%;
     justify-content: flex-end;
     align-items: center;
}

footer .footerContent.flex {
     flex-direction: column;
     padding-right: 2rem;
     align-items: flex-end;
     justify-content: center;
     gap: 1rem;
}

footer .footerContent .branding .headerTitle {
     font-size: 2rem;
}

footer .footerContent .nav {
     gap: 1rem;
     font-size: 1.2rem;
}

footer .footerContent .social.flex {
     width: 100%;
     justify-content: space-between;
}

footer .footerContent .social .svgIcon {
     height: 25px;
     width: auto;
}

@media (max-width: 700px) {
     footer {
          height: 180px;
     }

     footer .logo {
          bottom: 30px;
          left: 20px;
          width: 140px;
          height: auto;
     }

     footer .footerContent .branding .headerTitle {
          font-size: 6vw;
     }

     footer .footerContent .nav {
          gap: 0.5rem;
          font-size: 3vw;
     }
}

@media (max-width: 500px) {
     footer {
          height: auto;
          padding: 1rem;
          padding-top: 5rem;
     }

     footer .flex,
     footer .footerContent.flex {
          justify-content: center;
          align-items: center;
          padding: 0;
     }

     footer .logo {
          bottom: 90%;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: auto;
          margin: 0 auto;
     }
}
</style>