<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <!-- <ion-icon aria-hidden="true" :icon="square" /> -->
          <ion-icon aria-hidden="true" :icon="syncOutline" />
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <!-- <ion-icon aria-hidden="true" :icon="square" /> -->
          <ion-icon aria-hidden="true" :icon="swapHorizontalOutline" />
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="pieChartOutline" />
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="personOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { swapHorizontalOutline, homeOutline, personOutline, syncOutline, pieChartOutline } from 'ionicons/icons';
</script>
