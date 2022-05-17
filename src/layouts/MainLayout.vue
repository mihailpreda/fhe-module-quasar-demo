<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> EasyFHE Library </q-toolbar-title>

        <div>EasyFHE v0.8.2</div>
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
import { defineComponent, ref } from 'vue';
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
    title: 'Github',
    caption: 'github.com/mihailpreda',
    icon: 'code',
    link: 'https://github.com/mihailpreda/fhe-module-typescript-wrapper',
    isExternal: true,
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

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
