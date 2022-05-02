<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
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
    caption: 'lightweight presentation',
    icon: 'school',
    to: '/',
    isExternal: false,
  },
  {
    title: 'Getting started',
    caption: 'How to obtain and setup the module',
    icon: 'code',
    to: '/getting-started',
    isExternal: false,
  },
  {
    title: 'easyFHE Components',
    caption: 'From what is really made of',
    icon: 'code',
    to: '/components',
    isExternal: false,
  },
  {
    title: 'Playground',
    caption: 'Try different homomorphic operations for yourself',
    icon: 'code',
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
