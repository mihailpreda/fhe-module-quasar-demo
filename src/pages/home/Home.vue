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
      :style="{ height: '80vh', width: '80vw' }"
      class="bg-blue-10 text-white rounded-borders"
    >
      <template v-for="(currentSlide, index) in slides" :key="index">
        <q-carousel-slide :name="currentSlide.name" class="column no-wrap flex-center">
          <div class="q-mt-md q-pa-lg text-center text-h2">
            {{ currentSlide.description.title }}
          </div>

          <q-img v-bind="currentSlide.image"></q-img>

          <div class="q-mt-md text-center text-h5">
            {{ currentSlide.description.body }}
          </div>
          <div class="q-mt-md text-h6">
            <q-list>
              <q-item v-for="(item, i) in currentSlide.description.list" :key="i">
                {{ item }}
              </q-item>
            </q-list>
          </div>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
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
            height: '30%',
            width: '30%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/easyFhelogo.png'),
            'spinner-color': 'white',
          },
          description: {
            title: 'EasyFHE',
            body: 'Fully Homomorphic Encryption for everyone',
            list: [],
          },
        },
        {
          name: 'How',
          image: {
            height: '70%',
            width: '70%',
            fit: 'contain',
            position: '50% 30%',
            src: require('/public/slides/2slide.drawio.png'),
            'spinner-color': 'white',
          },
          description: {
            title: "How it's working?",
            body: 'Place some data as input, encrypt it, make homomorphic computations, decrypt it to see the results',
            list: [],
          },
        },
        {
          name: 'Components',
          image: {
            height: '60%',
            width: '60%',
            fit: 'contain',
            position: '50% 50%',
            src: require('/public/slides/3slide.drawio.png'),
            'spinner-color': 'white',
          },
          description: {
            title: 'Components',
            body: 'EasyFHE is made of 3 components: Plain, Setup and Cipher module.',
            list: [
              'Plain manages operations done between plaintext and ciphertexts.',
              'Setup deals with the homomorphic module initialization',
              'Cipher handles operations done between cipertexts.',
            ],
          },
        },
      ];
    },
  },
});
</script>
<style lang="scss" scoped></style>
