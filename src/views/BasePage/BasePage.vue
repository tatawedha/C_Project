<template>
	<ion-app>
		<ion-tabs>
			<ion-router-outlet />
			<ion-tab-bar slot="bottom">
				<ion-tab-button
					tab="tab1"
					href="/index/home">
					<ion-icon
						aria-hidden="true"
						:icon="homeOutline" />
				</ion-tab-button>
				<ion-tab-button
					tab="tab2"
					href="/index/sync">
					<!-- <ion-icon aria-hidden="true" :icon="square" /> -->
					<ion-icon
						aria-hidden="true"
						:icon="syncOutline" />
				</ion-tab-button>
				<ion-tab-button
					tab="tab3"
					href="/index/transaction">
					<!-- <ion-icon aria-hidden="true" :icon="square" /> -->
					<ion-icon
						aria-hidden="true"
						:icon="swapHorizontalOutline" />
				</ion-tab-button>
				<ion-tab-button
					tab="tab4"
					href="/index/wallet">
					<ion-icon
						aria-hidden="true"
						:icon="walletOutline" />
				</ion-tab-button>
				<ion-tab-button
					tab="tab5"
					href="/index/profile">
					<ion-icon
						aria-hidden="true"
						:icon="personOutline" />
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-app>
</template>

<script setup lang="ts">
	import { IonApp, IonRouterOutlet, IonTabButton, IonTabBar } from "@ionic/vue";
	import { swapHorizontalOutline, homeOutline, personOutline, syncOutline, walletOutline } from "ionicons/icons";
</script>

<style>
	ion-button {
		text-transform: capitalize;
	}
</style>
