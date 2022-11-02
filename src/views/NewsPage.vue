<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Noticias</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Noticias</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item></ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>