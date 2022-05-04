<template>
  <q-dialog
    v-model="openDialog"
    transition-show="rotate"
    transition-hide="rotate"
  >
    <q-card>
      <q-form @submit="add">
        <q-card-section>
          <div class="text-h6">Adding a new homomorphic computation</div>
        </q-card-section>

        <q-separator></q-separator>

        <q-card-section style="max-height: 50vh" class="scroll">
          <q-select
            filled
            v-model="newScheme.scheme"
            map-options
            option-value="value"
            :options="schemes"
            label="Encryption scheme"
            class="q-pa-sm"
            options-selected-class="text-deep-blue"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-icon :name="scope.opt.icon"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.fullName }}</q-item-label>
                  <q-item-label caption>{{
                    scope.opt.description
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            filled
            v-model="newScheme.security"
            map-options
            option-value="value"
            :options="securities"
            label="EasySecurity"
            class="q-pa-sm"
            options-selected-class="text-deep-blue"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-icon :name="scope.opt.icon"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.fullName }}</q-item-label>
                  <q-item-label caption>{{
                    scope.opt.description
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            filled
            v-model="newScheme.speed"
            map-options
            option-value="value"
            :options="speeds"
            label="Processing speed"
            class="q-pa-sm"
            options-selected-class="text-deep-blue"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-icon :name="scope.opt.icon"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.fullName }}</q-item-label>
                  <q-item-label caption>{{
                    scope.opt.description
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            v-if="newScheme.scheme.value == EasyScheme.CKKS"
            filled
            v-model="newScheme.precision"
            map-options
            option-value="value"
            :options="precisions"
            label="EasyPrecision"
            class="q-pa-sm"
            options-selected-class="text-deep-blue"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-icon :name="scope.opt.icon"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.fullName }}</q-item-label>
                  <q-item-label caption>{{
                    scope.opt.description
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </q-card-section>

        <q-separator></q-separator>

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" @click="close"></q-btn>
          <q-btn flat label="Accept" color="primary" type="submit"></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import { EasyPrecision, EasyScheme, EasySecurity, EasySpeed } from 'easyFHE';

import { HomomorphicScheme } from 'src/types/models';
export default defineComponent({
  name: 'AddScheme',
  components: {},
  setup() {
    const playgroundStore = usePlaygroundStore();
    const { homomorphicSchemes, openDialog, schemeID } =
      storeToRefs(playgroundStore);
    const schemes = [
      {
        label: 'BFV',
        value: EasyScheme.BFV,
        fullName: 'Brakerski-Fan-Vercauteren encryption scheme',
        description: 'Used for integer operations',
        icon: 'mdi-script-text',
      },
      {
        label: 'BGV',
        value: EasyScheme.BGV,
        fullName: 'Brakerski-Gentry-Vercauteren encryption scheme',
        description: 'Used for integer operations',
        icon: 'mdi-script-text',
      },
      {
        label: 'CKKS',
        value: EasyScheme.CKKS,
        fullName: 'Cheon-Kim-Kim-Song encryption scheme',
        description: 'Used for floating-point (real) operations',
        icon: 'mdi-script-text',
      },
    ];
    const securities = [
      {
        label: '128 bits',
        value: EasySecurity.TC128,
        fullName: 'Minimum level of security according',
        description: 'to NIST standards',
        icon: 'mdi-shield-lock',
      },
      {
        label: '192 bits',
        value: EasySecurity.TC192,
        fullName: 'Minimum level of security according',
        description: 'to NIST standards',
        icon: 'mdi-shield-lock',
      },
      {
        label: '256 bits',
        value: EasySecurity.TC256,
        fullName: 'Minimum level of security according',
        description: 'to NIST standards',
        icon: 'mdi-shield-lock',
      },
    ];
    const speeds = [
      {
        label: 'Fast',
        value: EasySpeed.FAST,
        fullName: 'The scheme parameters will have smaller values,',
        description: 'increasing the speed of computations',
        icon: 'mdi-circle-slice-2',
      },
      {
        label: 'Normal',
        value: EasySpeed.NORMAL,
        fullName: 'The scheme parameters will have normal values,',
        description: 'keeping constant the speed of computations',
        icon: 'mdi-circle-slice-3',
      },
      {
        label: 'Slow',
        value: EasySpeed.SLOW,
        fullName: 'The scheme parameters will have bigger',
        description: 'values, impacting the speed of computations',
        icon: 'mdi-circle-slice-4',
      },
      {
        label: 'Very slow',
        value: EasySpeed.VERY_SLOW,
        fullName: 'The scheme parameters will have the biggest',
        description: 'values, impacting severely the speed of computations',
        icon: 'mdi-circle-slice-5',
      },
    ];
    const precisions = [
      {
        label: 'Low',
        value: EasyPrecision.LOW,
        fullName: 'The bites reserved for preserving accuracy of computations',
        description: '2^10 bits or 1024 bits',
        icon: 'mdi-chevron-up',
      },
      {
        label: 'Normal',
        value: EasyPrecision.NORMAL,
        fullName: 'The bites reserved for preserving accuracy of computations',
        description: '2^20 bits or 1048576 bits',
        icon: 'mdi-chevron-double-up',
      },
      {
        label: 'High',
        value: EasyPrecision.HIGH,
        fullName: 'The bites reserved for preserving accuracy of computations',
        description: '2^30 bits or 1073741824 bits',
        icon: 'mdi-chevron-triple-up',
      },
    ];
    const newScheme: Ref<HomomorphicScheme> = ref({
      schemeID: schemeID.value,
      scheme: schemes[0],
      security: securities[0],
      speed: speeds[0],
      precision: precisions[0],
      operations: [],
    });
    playgroundStore.schemeID += 1;
    return {
      schemes,
      securities,
      speeds,
      precisions,
      newScheme,
      EasyScheme,
      homomorphicSchemes,
      openDialog,
    };
  },
  methods: {
    close() {
      this.openDialog = false;
    },
    add(): void {
      this.homomorphicSchemes.push(this.newScheme);
      this.openDialog = false;
    },
  },
});
</script>
