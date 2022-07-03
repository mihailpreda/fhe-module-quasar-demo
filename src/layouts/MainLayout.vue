<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> EasyFHE Library </q-toolbar-title>

        <div>EasyFHE v1.0.0</div>
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
    title: 'Download presentation',
    caption: 'Have the presentation saved locally',
    icon: 'mdi-download',
    link: 'https://github.com/mihailpreda/fhe-module-quasar-demo/raw/master/public/pdf/Prezentare%20PREDA%20Mihail%20Irinel%20-%20EasyFHE.pdf',
    isExternal: true,
  },
  {
    title: 'Download installation guide',
    caption: 'Have the getting started guide saved locally',
    icon: 'mdi-download',
    link: 'https://github.com/mihailpreda/fhe-module-quasar-demo/raw/a14357efe7cfd7ef721c5ff50b509e65f3a79537/public/pdf/Prezentare%20PREDA%20Mihail%20Irinel%20-%20EasyFHE%20-%20Getting%20Started%20v2.pdf',
    isExternal: true,
  },
  {
    title: 'Source code',
    caption: 'EasyFHE source code repository',
    icon: 'code',
    link: 'https://github.com/mihailpreda/easyFHE',
    isExternal: true,
  },
  {
    title: 'LinkedIn',
    caption: 'Profile',
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/mihail-irinel-preda/',
    isExternal: true,
  },
  {
    title: 'Github',
    caption: 'account',
    icon: 'mdi-github',
    link: 'https://github.com/mihailpreda',
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
