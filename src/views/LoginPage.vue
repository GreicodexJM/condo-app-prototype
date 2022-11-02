<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>App Condominio</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-img class="logo" src="/assets/images/thumbnail.svg"></ion-img>
            <ion-list>
                <ion-item class="usercode">
                    <ion-label>Codigo</ion-label>
                    <ion-input slot="end" placeholder="Codigo de Usuario de su Recibo" required="true" ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label><p>Remember me</p></ion-label>
                    <ion-toggle slot="end" checked="true"></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-button size="default" href="/tabs" >Login</ion-button>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script>
export default {

}
</script>

<style>
.logo {
    max-height: 250px;
}
.usercode {
    display: flex;
    align-items: center;
}
</style>