<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Eventos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Eventos</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-datetime></ion-datetime>
      <ion-list>
        <ion-item router-direction="forward" button="true" detail="true">
          <ion-icon :icon="calendarClearOutline"/>
          <ion-text>Fiesta de Halloween</ion-text>
          <ion-text slot="end">10/31/2022</ion-text>
        </ion-item>
        <ion-item router-direction="forward" button="true" detail="true">
          <ion-icon :icon="boat"/>
          <ion-text>Mudanza</ion-text>
          <ion-text slot="end">10/19/2022</ion-text>
        </ion-item>
        <ion-item router-direction="forward" button="true" detail="true">
          <ion-icon :icon="wine"></ion-icon>
          <ion-text>Alquiler de Salon de fiestas </ion-text>
          <ion-text slot="end">10/4/2022</ion-text>
        </ion-item>
        <ion-item router-direction="forward" button="true" detail="true"> 
          <ion-icon :icon="constructOutline"></ion-icon>
          <ion-text>Trabajos de Remodelacion</ion-text>
          <ion-text slot="end">10/4/2022</ion-text>
        </ion-item>
      </ion-list>
      <!-- fab placed to the bottom end -->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { add, constructOutline, calendarClearOutline, wine, boat } from 'ionicons/icons';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {

    return { add, constructOutline,calendarClearOutline, wine, boat };
  },
  methods: {
    eventClicked: (data: any) => {
      console.log(data)
    }
  }
});
</script>
<style scoped>
.initial-avatar {
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: #d1d5db;
  color: blueviolet;

  /* Rounded border */
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  font-size: small;
  font-weight: bolder;
  line-height: 3em;
  margin: .2em;
}
</style>
