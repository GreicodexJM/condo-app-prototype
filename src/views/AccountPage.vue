<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Estado de Cuenta</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="fade" style="background-color: blueviolet">
        <ion-toolbar>
          <ion-avatar>
            <span class="initial-avatar">3A</span>
          </ion-avatar>
          <ion-title size="large" style="padding-left:2em; color: white">
            Carlos Fuentes
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="Profile">

      </div>
      <div class="account">
        <span>$20.00</span>
      </div>
      <ion-list>
        <ion-list-header>Recibos</ion-list-header>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>
              Pendientes
            </ion-label>
          </ion-item-divider>
          <ion-item detail="true" button="true" href="/pay/00010">
            <ion-label>
              <h1>Oct-2022</h1>
              <p>Vence el 10/15/2022</p>
            </ion-label>
            <ion-label slot="end">
              <h2>$20</h2>
            </ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>
              Pagados
            </ion-label>
          </ion-item-divider>

          <ion-item detail="false">
            <ion-label>
              <h1>Sep-2022</h1>
              <p>Pagado el 09/02/2022</p>
            </ion-label>
            <ion-label slot="end">
              <h2>$20</h2>
            </ion-label>
          </ion-item>
          <ion-item detail="false">
            <ion-label>
              <h1>Ago-2022</h1>
              <p>Pagado el 09/02/2022</p>
            </ion-label>
            <ion-label slot="end">
              <h2>$20</h2>
            </ion-label>
          </ion-item>
          <ion-item detail="false">
            <ion-label>
              <h1>Jul-2022</h1>
              <p>Pagado el 09/02/2022</p>
            </ion-label>
            <ion-label slot="end">
              <h2>$20</h2>
            </ion-label>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { add } from 'ionicons/icons';


export default defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return { add }
  }
});
</script>

<style scoped>

.account {
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  background-color: #d1d5db;
  color: blueviolet;

  font-size: xx-large;
  font-weight: bolder;
  padding: 0.5em;


}

ion-item span {
  padding: 0.25rem;
}
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
  height: 3rem;
  width: 3rem;
  font-weight: bolder;
  line-height: 3em;
  margin: .2em;
}
</style>