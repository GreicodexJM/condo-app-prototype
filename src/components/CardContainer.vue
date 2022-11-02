<template>
  <ion-card :color="color" button="true">
    <ion-img :alt="title" :src="imgSrc" v-if="imgSrc" />
  <ion-card-header>
    <ion-card-title>{{ title??'Card Title'}}</ion-card-title>
    <ion-card-subtitle>{{subTitle??'Card Subtitle'}}</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    {{smallDescription??"Here's a small text description for the card content. Nothing more, nothing less."}}
  </ion-card-content>
  
  <ion-button v-for="button in buttons" :key="button.link" fill="clear">{{button.text??'Action'}}</ion-button>
</ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
export enum CardColors {
    primary,
    secondary,
    tertiary,
    success,
    warning,
    danger,
    light,
    medium,
    dark
}
export interface CardButtonDef {
    text: string,
    link:string,
    // color:CardColors 
}
export default defineComponent({
    name:'CardContainer',
    props: {
        title: String,
        subTitle: String,
        imgSrc: String,
        smallDescription: String,
        color: String,
        buttons: Array as PropType<Array<CardButtonDef>>
    }
})
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
</style>