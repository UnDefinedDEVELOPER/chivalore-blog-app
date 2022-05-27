<template>
  <footer>
       <div class="container flex">
            <div class="left flex">
                 <div class="col-1">
                      <ul class="flex">
                           <router-link class="link" :to="{ name: 'home' }">Home</router-link>
                           <router-link class="link" :to="{ name: 'journal' }">Journal</router-link>
                           <router-link class="link" :to="{ name: 'about' }">About</router-link>
                           <router-link v-if="user" class="link" :to="{ name: 'newpost' }">Create Post</router-link>
                           <router-link v-if="!user" class="link" :to="{ name: 'login' }">Login/Register</router-link>
                      </ul>
                 </div>
                 <div class="col-2 flex">
                    <div class="branding">
                         <router-link class="headerTitle" :to="{ name: 'home' }">chivalore.com</router-link>
                    </div>
                    <ul class="flex">
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
            <div class="right flex">
                 <img class="logo" src="../assets/Logos/chivalore-logo.png" alt="Chivalore logo">
                 <p>Copyright 2022 | All Rights Reserved</p>
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
     name: "FooterChivalore",
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
     position: relative;
     top: 0;
     left: 0;
     background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(74,0,37,1) 100%);
     height: 200px;
     width: 100%;
     justify-content: center;
     align-content: center;
     box-shadow: 0px -5px 10px rgba(0,0,0,0.2);
}

footer .left,
footer .right {
     width: 50%;
     height: 100%;
}

footer .left .col-1 {
     width: 35%;
}

footer .left .col-2 {
     width: 65%;
}

footer .left,
footer .right {
     padding: 1rem;
}

footer .left {
     font-size: 1rem;
}

footer .left .col-1 ul.flex {
     flex-direction: column;
     justify-content: center;
     gap: 0.3rem;
}

footer .left .col-2.flex {
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 1rem;
}

footer .left .col-2 .branding .headerTitle {
     font-size: 2rem;
}

footer .left .col-2 ul.flex {
     width: 100%;
     justify-content: space-evenly;
     height: auto;
     gap: 1.5rem;
}

footer .left .svgIcon {
     height: 30px;
     width: auto;
}



footer .right {
     background: #fff;
}

footer .right.flex {
     flex-direction: column;
     justify-content: center;
     align-items: center;
}

footer .right p {
     color: #4a0025;
     font-weight: 700;
}

footer .right .logo {
     height: 150px;
     width: auto;
}

@media (max-width: 800px) {
     footer {
          height: auto;
     }

     footer > .flex {
          flex-direction: column-reverse;
     }

     footer .left,
     footer .right {
          width: 100%;
          height: auto;
     }

     footer .left {
          padding: 1.5rem;
     }

     footer .right.flex {
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 0rem;
     }

     footer .right .logo {
          width: 50%;
          height: auto;
     }

}

@media (max-width: 360px) {
     footer, footer .left .col-1 {
          font-size: 0.5rem;
     }

     footer .left .col-2.flex {
          height: 100%;
          gap: 0rem;
          justify-content: center;
          align-items: center;
     }

     footer .left .col-2 .svgIcon {
          height: 10px;
     }

     footer .left .col-2 ul.flex {
          width: 100%;
          justify-content: center;
          gap: 0.2rem;
     }

     footer .left .col-2 .branding .headerTitle {
          font-size: 1rem;
     }
}

</style>