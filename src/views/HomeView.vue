<template>
  <div class="home">
    <Navigation site="home" />
    <section class="showcase flex">
      <div class="showcaseLogo">
        <img src="../assets/Logos/chivalore-logo.png" alt="Chivalore logo" />
      </div>
      <p class="showcaseText">chivalry<br />valor<br />lore.</p>
    </section>
    <section class="prosperism">
      <div class="prosperism-content flex">
        <p class="prosperism-header">
          The origin of Prosperism<br />and all Prosperist projects.
        </p>
        <div class="prosperism-definition">
          <img src="../assets/prosperism-definition.png" alt="Definition of Prosperism">
        </div>
      </div>
    </section>
    <div class="transition journal-bg"></div>
    <section class="prosperist-journal">
      <div class="container flex">
        <div class="journal-logo flex">
          <img
            src="../assets/Logos/journal-logo.png"
            alt="Prosperist Journal Logo"
          />
        </div>
        <div class="journal-text flex">
          <p>
            Read the chapters that forge the philosophy of Prosperism on my blog
            - “Prosperist Journal”
          </p>
          <router-link class="link journal-bg" :to="{ name: 'journal' }"
            ><svg
              class="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
              />
            </svg>
            prosperist journal</router-link
          >
        </div>
      </div>
    </section>
    <section class="prosperist-projects">
      <div class="prosperist-projects-bg">
        <div class="container flex">
          <h1 class="journal-bg">The Prosperist Projects</h1>
          <ul class="flex">
            <li>Knight of Illyria</li>
            <li>Kingly Tales</li>
            <li>Neverland's Saviour</li>
            <li>The Path Realm</li>
            <li>Prosperist Journal</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="transition home-bg"></div>
    <section class="contact">
      <div class="container flex">
        <form action="#" class="contact-form flex">
          <label>Write to me!</label>
          <input type="text" class="contact-input" placeholder="Name" />
          <input type="email" class="contact-input" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
        <div class="contact-svg flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M467.1 241.1L351.1 288h94.34c-7.711 14.85-16.29 29.28-25.87 43.01l-132.5 52.99h85.65c-59.34 52.71-144.1 80.34-264.5 52.82l-68.13 68.13c-9.38 9.38-24.56 9.374-33.94 0c-9.375-9.375-9.375-24.56 0-33.94l253.4-253.4c4.846-6.275 4.643-15.19-1.113-20.95c-6.25-6.25-16.38-6.25-22.62 0l-168.6 168.6C24.56 58 366.9 8.118 478.9 .0846c18.87-1.354 34.41 14.19 33.05 33.05C508.7 78.53 498.5 161.8 467.1 241.1z"
            />
          </svg>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/FooterChivalore.vue";
export default {
  name: "HomeView",
  components: { Navigation, Footer },
};
</script>

<style scoped>
.home {
  position: relative;
}

.showcase {
  width: 100%;
  height: 40vw;
  justify-content: center;
  padding-top: 12%;
  gap: 3vw;
  background: linear-gradient(
    0deg,
    rgba(227, 197, 172, 1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 80%,
    rgba(240, 226, 215, 1) 100%
  );
  clip-path: polygon(100% 0, 100% 100%, 50% 83%, 0 100%, 0 0);
  z-index: 2;
  user-select: none;
}

.showcase .showcaseLogo {
  width: 50%;
}

.showcase .showcaseText {
  font-family: "Cormorant Unicase";
  color: #4a0025;
  font-weight: 700;
  line-height: 0.6;
  letter-spacing: -0.4vw;
  font-size: 9vw;
  width: 40%;
  padding-left: 3vw;
}

.showcase .showcaseLogo img {
  width: 100%;
  height: auto;
}

.prosperism {
  position: relative;
  top: -165px;
  left: 0;
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
  background-image: url("../assets/Images/books.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  z-index: -1;
  user-select: none;
}

.prosperism::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.prosperism .prosperism-content {
  position: relative;
  padding: 195px 1rem 0 1rem;
  height: 100%;
  color: #fff;
  font-family: "Spectral";
  font-style: italic;
  letter-spacing: -0.2vw;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);
  line-height: 1.1;
}

.prosperism .prosperism-content .prosperism-header {
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
}

.prosperism .prosperism-content .prosperism-definition {
  max-width: 1100px;
  margin: 0 auto;
}

.prosperism .prosperism-content .prosperism-definition img {
  width: 100%;
}

.transition {
  height: 70px;
}

.transition.journal-bg {
  position: relative;
  margin-top: -165px;
}

.prosperist-journal {
  height: 450px;
  background: linear-gradient(
    0deg,
    rgba(227, 197, 172, 1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 80%,
    rgba(240, 226, 215, 1) 100%
  );
  padding: 1rem 0;
  color: #0c353f;
}

.prosperist-journal .flex {
  justify-content: center;
  align-items: center;
}

.prosperist-journal .journal-logo,
.prosperist-journal .journal-text {
  width: 50%;
}

.prosperist-journal .journal-logo img {
  width: 70%;
  height: auto;
}

.prosperist-journal .journal-text.flex {
  flex-direction: column;
}

.prosperist-journal .journal-text {
  font-size: 2vw;
  text-align: center;
  gap: 1rem;
  padding: 2rem;
}

.prosperist-journal .journal-text p {
  font-style: italic;
  line-height: 1;
  letter-spacing: 0vw;
}

.prosperist-journal .journal-text .link {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.prosperist-journal .journal-text .link .svgIcon {
  height: 20px;
  width: auto;
}

.prosperist-journal .journal-text .link:hover path {
  fill: #e1c1a7;
}

.prosperist-projects {
  height: 600px;
  width: 100%;
  position: relative;
  color: #fff;
  font-size: 2rem;
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);
}

.prosperist-projects h1.journal-bg {
  padding: 1rem;
}

.prosperist-projects li {
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);
  max-width: 170px;
  text-align: center;
  line-height: 1.2;
  font-weight: 700;
  font-style: italic;
  padding: 0 0.5rem;
  cursor: initial;
}

.prosperist-projects-bg {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 66, 74, 0.9) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.prosperist-projects-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("../assets/Images/table.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  z-index: -2;
}

.prosperist-projects .flex {
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: auto;
}

.prosperist-projects .prosperist-projects-bg > .flex {
  flex-direction: column;
  height: 100%;
}

.contact {
  height: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(74, 0, 37, 0.6) 100%
  );
  position: relative;
  
}

.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/Images/library.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -3;
}

.contact .flex {
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.contact .contact-form{
  width: 50%;
}

.contact .contact-svg.flex {
  justify-content: flex-start;
}

.contact .contact-svg svg {
  height: 300px;
  width: auto;
  fill: #fff;
  transition: 1s fill ease;
}

.contact .contact-svg svg:hover {
  fill: #e1c1a7;
}

.contact .contact-form.flex {
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  padding: 0 2rem;
}

.contact .contact-form label {
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  line-height: 1;
}

.contact .contact-form textarea {
  resize: vertical;
}

.contact .contact-form input,
.contact .contact-form button,
.contact .contact-form textarea {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #fff;
}

.contact .contact-form input,
.contact .contact-form textarea {
  padding-left: 1rem;
  border-bottom: #fff 5px solid;
  box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.6);
  transition: 0.5s ease;
}

.contact .contact-form input::placeholder,
.contact .contact-form textarea::placeholder  {
  color: #fff;
  transition: 0.5s ease;
}

.contact .contact-form input:focus,
.contact .contact-form input:focus-visible,
.contact .contact-form textarea:focus,
.contact .contact-form textarea:focus-visible {
  outline: none;
  border-bottom: #e1c1a7 5px solid;
}

.contact .contact-form input:focus::placeholder,
.contact .contact-form input:focus-visible::placeholder,
.contact .contact-form textarea:focus::placeholder,
.contact .contact-form textarea:focus-visible::placeholder {
  color: #e1c1a7;
}

.contact .contact-form button {
  border-bottom: #fff 5px solid;
  border-left: #fff 5px solid;
  border-right: #fff 5px solid;
  cursor: pointer;
  margin-top: 1rem;
  transition: 0.2s ease;
}

.contact .contact-form button:hover {
  color: #e1c1a7;
  border-bottom: #e1c1a7 5px solid;
  border-left: #e1c1a7 5px solid;
  border-right: #e1c1a7 5px solid;
}

@media (max-width: 800px) {
  .prosperism .prosperism-content .prosperism-header {
    font-size: 6vw;
  }

  .prosperism .prosperism-content .prosperism-definition {
    max-width: 1100px;
    margin: 0 auto;
  }

  .prosperist-journal {
    height: auto;
  }

  .prosperist-journal > .flex {
    flex-direction: column;
    gap: 2rem;
  }

  .prosperist-journal .container {
    max-width: 100%;
    padding: 2rem;
  }

  .prosperist-journal .journal-logo {
    width: 75%;
    height: auto;
  }

  .prosperist-journal .journal-logo img {
    width: 100%;
    height: auto;
  }

  .prosperist-journal .journal-text {
    padding: 0;
    height: auto;
    width: 100%;
  }

  .prosperist-journal .journal-text {
    font-size: 4.5vw;
  }

  .prosperist-projects {
    height: auto;
    text-align: center;
  }

  .prosperist-projects .container.flex {
    gap: 2rem;
    padding: 3rem;
  }

  .prosperist-projects h1.journal-bg {
    font-size: 8vw;
  }

  .prosperist-projects ul.flex {
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .prosperist-projects ul li {
    max-width: none;
    width: 100%;
    height: auto;
    font-size: 7vw;
  }

  .contact {
    height: auto;
    padding: 2rem 0;
  }

  .contact .flex {
    flex-direction: column-reverse;
  }

  .contact .contact-form.flex,
  .contact .contact-svg.flex {
    width: 100%;
    height: auto;
    padding: 0 1rem;
  }

  .contact .contact-form label {
    font-size: 2rem;
  }

  .contact .contact-form input,
  .contact .contact-form button,
  .contact .contact-form textarea {
    font-size: 1.5rem;
  }

  .contact .contact-svg svg {
    width: 100%;
    max-height: 200px;
  }

  .transition {
    height: 30px;
  }
}
</style>