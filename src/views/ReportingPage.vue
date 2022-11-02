<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Reportes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Reportes</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item router-direction="forward" button="true" detail="true" href="/report/1">
          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="/assets/images/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>
            <h2>Muro perimetral</h2>
            <p>El muro perimetral esta cediendo ...</p>
            <small>Reportado 3/9/2022</small>
          </ion-label>
        </ion-item>
        <ion-item router-direction="forward" button="true" detail="true" href="/report/2">
          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="/assets/images/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>
            <h2>Fuga de agua</h2>
            <p>Hay una tuberia rota en el estacionamiento ...</p>
            <small>Reportado 3/9/2022</small>
          </ion-label>
        </ion-item>
        <ion-item router-direction="forward" button="true" detail="true" href="/report/3">
          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="/assets/images/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>
            <h2>Piscina Sucia</h2>
            <p>Todos los dias bajo a la piscina y me....</p>
            <small>Reportado 3/9/2022</small>
          </ion-label>
        </ion-item>
      </ion-list>
      <!-- fab placed to the bottom end -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
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
import { add } from 'ionicons/icons';


export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return { add }
  }
});
</script>
