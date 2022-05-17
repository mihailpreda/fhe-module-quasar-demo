<template>
  <q-page class="row items-center justify-evenly">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :padding="true"
      :arrows="true"
      :navigation="true"
      navigation-position="bottom"
      :style="{ height: '80vh', width: '80vw', borderRadius: '12px' }"
      class="bg-blue-10 text-white rounded-borders shadow-1"
    >
      <template v-for="(currentSlide, index) in slides" :key="index">
        <q-carousel-slide :name="currentSlide.name" class="column no-wrap flex-center">
          <div class="q-mt-md q-pa-lg text-center text-h2 text-bold">
            {{ currentSlide.description.title }}
          </div>

          <q-img v-bind="currentSlide.image" :style="currentSlide.image.style"></q-img>

          <div class="column">
            <div
              class="q-mt-md q-ptbr-lg text-bold text-h5"
              :class="{
                'text-center': currentSlide.description.center,
                'text-left': !currentSlide.description.center,
              }"
            >
              {{ currentSlide.description.body }}
            </div>
            <div class="text-h6 text-left">
              <q-list>
                <q-item v-for="(item, i) in currentSlide.description.list" :key="i">
                  {{ item }}
                </q-item>
              </q-list>
            </div>
            <div
              class="q-mt-md q-ptbr-lg text-bold text-h5"
              :class="{
                'text-center': currentSlide.description.center,
                'text-left': !currentSlide.description.center,
              }"
            >
              {{ currentSlide.description.body2 }}
            </div>
            <div class="text-h6 text-left" style="white-space: pre">
              <q-list>
                <q-item v-for="(item, i) in currentSlide.description.list2" :key="i">
                  {{ item }}
                </q-item>
              </q-list>
            </div>
          </div>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GettingStarted',
  components: {},
  setup() {
    const slide = ref('Home');
    return { slide };
  },
  methods: {
    //
  },
  computed: {
    slides() {
      return [
        {
          name: 'Home',
          image: {
            style: {
              margin: '25px',
            },
            height: '40%',
            width: '40%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/gettingStarted/whiteCog.png'),
            'spinner-color': 'white',
          },
          description: {
            center: false,
            title: 'Getting started',
            body: 'Setup steps for EasyFHE usage',
            list: [],
            body2: '',
            list2: [],
          },
        },
        {
          name: 'How',
          image: {
            style: {
              margin: '25px',
            },
            height: '60%',
            width: '60%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/gettingStarted/node&npm.png'),
            'spinner-color': 'white',
          },
          description: {
            center: false,
            title: 'Pre-requirements',
            body: 'https://nodejs.org/en/download/',
            list: [],
            body2: '',
            list2: [],
          },
        },
        {
          name: 'Installing',
          image: {
            style: {
              margin: '25px',
            },
            height: '40%',
            width: '40%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/gettingStarted/quasarlogo.png'),
            'spinner-color': 'white',
          },
          description: {
            center: false,
            title: 'Installing',
            body: 'Open the terminal and type the following command:',
            list: ['npm i -g @quasar/cli'],
            body2: '',
            list2: [],
          },
        },
        {
          name: 'CreateProject',
          image: {
            style: {
              margin: '25px',
            },
            height: '40%',
            width: '40%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/gettingStarted/creatingproject.png'),
            'spinner-color': 'white',
          },
          description: {
            center: false,
            title: 'Creating and Setting up a Quasar project',
            body: 'Open the terminal and type the following command:',
            list: ['npm init quasar'],
            body2:
              " Go in 'quasar.config.js' and add to the build property the following:",
            list2: [
              `      extendWebpack(cfg) {
        cfg.experiments = {
          asyncWebAssembly: true,
        };
      },`,
            ],
          },
        },
        {
          name: 'cloneEasyFHE',
          image: {
            style: {
              margin: '25px',
            },
            height: '40%',
            width: '40%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/gettingStarted/easyFhelogo.png'),
            'spinner-color': 'white',
          },
          description: {
            center: false,
            title: 'Adding EasyFHE to the project',
            body: 'Open the terminal and type the following command:',
            list: [
              'git clone https://github.com/mihailpreda/fhe-module-typescript-wrapper.git easyFHE',
              'cd easyFHE',
              'npm install',
            ],
            body2:
              "Then go to Quasar project's 'package.json' file and add EasyFHE to dependencies like:",
            list2: ['easyFHE : file:../easyFHE'],
          },
        },
        {
          name: 'Questions',
          image: {
            style: {
              margin: '25px',
            },
            height: '40%',
            width: '40%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/gettingStarted/8slide.drawio.png'),
            'spinner-color': 'white',
          },
          description: {
            center: true,
            title: 'Questions',
            body: 'Preda Mihail Irinel',
            list: [],
            body2: '',
            list2: [
              'mihaipreda1997@gmail.com',
              'github.com/mihailpreda/',
              'linkedin.com/in/mihail-irinel-preda/',
            ],
          },
        },
      ];
    },
  },
});
</script>
<style lang="scss" scoped></style>
