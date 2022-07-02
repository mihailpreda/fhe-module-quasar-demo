<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> EasyFHE Library </q-toolbar-title>

        <div>EasyFHE v0.9.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    caption: 'Lightweight presentation',
    icon: 'mdi-presentation',
    to: '/',
    isExternal: false,
  },
  {
    title: 'Getting started',
    caption: 'How to obtain and setup the module',
    icon: 'mdi-cog',
    to: '/getting-started',
    isExternal: false,
  },
  {
    title: 'Playground',
    caption: 'Try different homomorphic operations for yourself',
    icon: 'mdi-cards-playing',
    to: '/playground',
    isExternal: false,
  },
  {
    title: 'Presentation',
    caption: 'Try different homomorphic operations for yourself',
    icon: 'mdi-presentation',
    to: '/presentation',
    isExternal: false,
  },
  {
    title: 'Presentation - extern',
    caption: 'Try different homomorphic operations for yourself',
    icon: 'mdi-presentation',
    link: './../../public/pdf/Prezentare PREDA Mihail Irinel - EasyFHE.pdf',
    isExternal: true,
  },
  {
    title: 'Github',
    caption: 'github.com/mihailpreda',
    icon: 'code',
    link: 'https://github.com/mihailpreda/easyFHE',
    isExternal: true,
  },
];
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const playgroundStore = usePlaygroundStore();
    const { leftDrawerOpen } = storeToRefs(playgroundStore);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
