<template>
    <ion-page>
     
      <ion-content :fullscreen="true">
        <ion-header>
        <ion-toolbar>
          <ion-title>Noticias</ion-title>
        </ion-toolbar>
      </ion-header>
        
        <ion-list>
        <card-container 
          title="Renovacion de Jardines" 
          subTitle="Noticia"
          imgSrc="/assets/images/pexels-photo-1105019.jpeg" 
          />
        <card-container 
          title="Cambio de Piscina" 
          subTitle="Votacion"
          imgSrc="/assets/images/pexels-photo-5711732.jpeg" 
          @click="eventClicked" 
          color="warning" 
          :buttons="[
            { text:'A Favor', link:'/' },
            { text:'En Contra', link:'/' },
            { text:'Neutro', link:'/' }
            ]" 
          />
        <card-container 
          title="Alerta de Seguridad" 
          subTitle="Alerta"
          color="danger"
          imgSrc="/assets/images/pexels-photo-96612.jpeg" 
          />
      </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import CardContainer from '@/components/CardContainer.vue';
  
  export default defineComponent({
    name: 'Tab4Page',
    components: { CardContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
  });
  </script>
  