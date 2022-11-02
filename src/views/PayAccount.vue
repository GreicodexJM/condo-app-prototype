<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="#"></ion-back-button>
                </ion-buttons>
                <ion-title>Recibo 2022-0103</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-label>
                <h1>Reportar Pago
                </h1>
            </ion-label>
            <ion-list>
                <ion-item>
                    <ion-label>Numero de confirmacion</ion-label>
                    <ion-input placeholder="0000-0000"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label>Banco Emisor</ion-label>
                    <ion-input placeholder="Banco Ejemplo"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label>Nombre de emisor</ion-label>
                    <ion-input placeholder="Carlos Perez"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-select placeholder="Seleccione metodo de pago">
                        <ion-select-option>Efectivo USD</ion-select-option>
                        <ion-select-option>PagoMovil VED</ion-select-option>
                        <ion-select-option>Transferencia VED</ion-select-option>
                        <ion-select-option>Zelle USD</ion-select-option>
                        <ion-select-option>Transferencia USD</ion-select-option>
                    </ion-select>
                    <ion-button>Reportar Pago</ion-button>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>