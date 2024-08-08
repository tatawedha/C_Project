<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Sync</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-grid>
				<ion-row>
					<ion-col>
						<ion-card>
							<ion-card-header>
								<ion-row>
									<ion-col>
										<ion-card-title>Sinkronisasi Wallet</ion-card-title>
										<ion-card-subtitle>Indodax Wallet</ion-card-subtitle>
									</ion-col>
								</ion-row>
							</ion-card-header>

							<ion-card-content>
								<ion-row>
									<ion-col> Here's a small text description for the card content. Nothing more, nothing less. </ion-col>
								</ion-row>
								<ion-row style="padding-top: 10px">
									<ion-col>
										<ion-button
											style="width: 100%"
											fill="outline"
											color="success">
											Sync Sekarang
											<ion-icon
												slot="end"
												:icon="syncOutline"></ion-icon>
										</ion-button>
									</ion-col>
								</ion-row>
							</ion-card-content>
						</ion-card>
					</ion-col>
				</ion-row>

				<ion-row>
					<ion-col>
						<ion-card>
							<ion-card-header>
								<ion-row>
									<ion-col>
										<ion-card-title>Riwayat Sinkronisasi</ion-card-title>
									</ion-col>
								</ion-row>
							</ion-card-header>

							<ion-card-content>
								<ion-list>
									<ion-item>
										<ion-thumbnail slot="start">
											<img
												alt="Silhouette of mountains"
												src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
										</ion-thumbnail>
										<ion-label>Item</ion-label>
									</ion-item>

									<ion-item>
										<ion-thumbnail slot="start">
											<img
												alt="Silhouette of mountains"
												src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
										</ion-thumbnail>
										<ion-label>Item</ion-label>
									</ion-item>

									<ion-item>
										<ion-thumbnail slot="start">
											<img
												alt="Silhouette of mountains"
												src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
										</ion-thumbnail>
										<ion-label>Item</ion-label>
									</ion-item>

									<ion-item lines="none">
										<ion-thumbnail slot="start">
											<img
												alt="Silhouette of mountains"
												src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
										</ion-thumbnail>
										<ion-label>Item</ion-label>
									</ion-item>
								</ion-list>
							</ion-card-content>
						</ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	// import { ref, reactive, computed } from "vue";
	import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/vue";
	// import axios from "@/axios/axios";
	import { syncOutline } from "ionicons/icons";

	// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
