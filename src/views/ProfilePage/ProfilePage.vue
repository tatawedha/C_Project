<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Profil</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-grid>
				<ion-row
					class="ion-align-items-center"
					style="padding: 10px">
					<ion-col size="3">
						<ion-avatar>
							<img
								alt="Silhouette of a person's head"
								src="https://ionicframework.com/docs/img/demos/avatar.svg" />
						</ion-avatar>
					</ion-col>
					<ion-col>
						<ion-label>
							<h1>Username</h1>
							<p>Title</p>
						</ion-label>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-grid>
				<ion-row>
					<ion-col>
						<ion-card>
							<ion-list>
								<ion-item>
									<ion-icon
										aria-hidden="true"
										:icon="personOutline"
										slot="start"></ion-icon>
									<ion-label>Informasi Pribadi</ion-label>
									<ion-icon
										aria-hidden="true"
										:icon="chevronForward"
										slot="end"></ion-icon>
								</ion-item>
								<ion-item>
									<ion-icon
										aria-hidden="true"
										:icon="walletOutline"
										slot="start"></ion-icon>
									<ion-label>Wallet</ion-label>
									<ion-icon
										aria-hidden="true"
										:icon="chevronForward"
										slot="end"></ion-icon>
								</ion-item>
								<ion-item>
									<ion-icon
										aria-hidden="true"
										:icon="cardOutline"
										slot="start"></ion-icon>
									<ion-label>payment</ion-label>
									<ion-icon
										aria-hidden="true"
										:icon="chevronForward"
										slot="end"></ion-icon>
								</ion-item>
								<ion-item>
									<ion-icon
										aria-hidden="true"
										:icon="constructOutline"
										slot="start"></ion-icon>
									<ion-label>Setting</ion-label>
									<ion-icon
										aria-hidden="true"
										:icon="chevronForward"
										slot="end"></ion-icon>
								</ion-item>
							</ion-list>
						</ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-grid>
				<ion-row>
					<ion-col>
						<ion-card>
							<ion-list>
								<ion-item>
									<ion-icon
										aria-hidden="true"
										:icon="fingerPrintOutline"
										slot="start"></ion-icon>
									<ion-label>Biometrik</ion-label>
									<ion-toggle type="ios" justify="end"></ion-toggle>
								</ion-item>
								<ion-item>
									<ion-icon
										aria-hidden="true"
										:icon="contrastOutline"
										slot="start"></ion-icon>
									<ion-label>Dark Mode</ion-label>
									<ion-toggle
										type="ios"
										:checked="paletteToggle"
										@ionChange="toggleChange($event)"
										justify="end"></ion-toggle>
								</ion-item>
							</ion-list>
						</ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-grid>
				<ion-row>
					<ion-col>
						<ion-card>
							<ion-list>
								<ion-item>
									<ion-icon
										aria-hidden="true"
										:icon="exitOutline"
										slot="start"></ion-icon>
									<ion-label>Log Out</ion-label>
								</ion-item>
							</ion-list>
						</ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-grid>
				<ion-row>
					<ion-col>
						<div
							v-for="i in traffic"
							:key="i">
							<ion-card>
								<ion-grid>
									<ion-row>
										<ion-col> {{ i }}</ion-col></ion-row
									></ion-grid
								></ion-card
							>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import type { ToggleCustomEvent } from "@ionic/vue";
	import { onIonViewWillEnter, IonCard, IonList, IonItem, IonLabel, IonAvatar, IonToggle } from "@ionic/vue";
	import { personOutline, walletOutline, exitOutline, fingerPrintOutline, constructOutline, chevronForward, contrastOutline, cardOutline } from "ionicons/icons";
	import axios from "@/axios/axios";
	const data = ref("iki");
	const traffic = ref<any>([]);

	async function cekKoneksi() {
		console.log(data);
		const ok = await axios("tapi/btc_idr/ticker");
		console.log(ok);
	}

	onIonViewWillEnter(() => {
		cekKoneksi();
	});
	// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

	const paletteToggle = ref(false);

	// Use matchMedia to check the user preference
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

	// Add or remove the "ion-palette-dark" class on the html element
	const toggleDarkPalette = (shouldAdd: any) => {
		document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
	};

	// Check/uncheck the toggle and update the palette based on isDark
	const initializeDarkPalette = (isDark: any) => {
		paletteToggle.value = isDark;
		toggleDarkPalette(isDark);
	};

	// Initialize the dark palette based on the initial
	// value of the prefers-color-scheme media query
	initializeDarkPalette(prefersDark.matches);

	// Listen for changes to the prefers-color-scheme media query
	prefersDark.addEventListener("change", (mediaQuery) => initializeDarkPalette(mediaQuery.matches));

	// Listen for the toggle check/uncheck to toggle the dark palette
	const toggleChange = (ev: ToggleCustomEvent) => {
		toggleDarkPalette(ev.detail.checked);
	};
</script>

<style scoped>
	ion-avatar img {
		width: 100% !important;
		height: 100% !important;
		max-width: 50px !important;
		max-height: 50px !important;
	}
</style>
