<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Asset</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-refresher
				slot="fixed"
				@ionRefresh="handleRefresh($event)">
				<ion-refresher-content></ion-refresher-content>
			</ion-refresher>
			<!-- <ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 1</ion-title>
				</ion-toolbar>
			</ion-header>
			<Ion-button expand="block">aasdadasd </Ion-button>
			<ExploreContainer name="Tab 1 page" /> -->
			<ion-grid style="margin-top: 20px; margin-bottom: 10px">
				<ion-row>
					<ion-col>
						<ion-card style="background-color: #e0fbe2; opacity: 2">
							<ion-card-header>
								<ion-row>
									<ion-col>
										<div style="display: flex">
											<div style="width: 10%; display: flex; justify-content: space-between">
												<ion-text class="fw-700 fz-14"
													><ion-icon
														aria-hidden="true"
														:icon="serverOutline"
												/></ion-text>
											</div>
											<div>
												<ion-label class="ml-4 fw-400 fz-12"> Saldo </ion-label>
											</div>
										</div>
									</ion-col>
								</ion-row>
							</ion-card-header>

							<ion-card-content>
								<ion-grid>
									<ion-row>
										<ion-col>
											<ion-text class="fw-600 fz-14"> Rp. 5000.000 </ion-text>
										</ion-col>
									</ion-row>
								</ion-grid>
							</ion-card-content>
						</ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-grid style="margin-top: 20px; margin-bottom: 10px">
				<ion-row>
					<ion-col>
						<ion-card>
							<ion-card-content>
								<ion-row>
									<ion-col>
										<div style="display: flex">
											<!-- <div>
												<ion-text class="fw-700 fz-18 fc-success"
													><ion-icon
														aria-hidden="true"
														:icon="serverOutline"
												/></ion-text>
											</div> -->
											<div>
												<ion-label class="ml-4 fw-400 fz-12 fc-success"> Asset Aktif </ion-label>
											</div>
										</div>
									</ion-col>
								</ion-row>
								<ion-row>
									<ion-col size="12">
										<div style="width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; max-height: 250px; overflow: auto">
											<ion-list
												lines="full"
												style="background: #fff; padding: 0; border-radius: 8px">
												<ion-item
													v-for="i in list_hold"
													:key="i"
													style="">
													<div style="width: 100%; display: flex">
														<div style="width: 50%; display: flex; justify-content: space-evenly">
															<ion-text>
																<h6
																	v-if="i"
																	class="fw-700 fz-20 fc-grey">
																	<ion-icon
																		aria-hidden="true"
																		:icon="pauseCircleOutline" />
																</h6>
															</ion-text>
															<ion-text>
																<h6
																	v-if="i"
																	class="fw-700 fz-14 fc-grey">
																	Rp. 500.000
																</h6>
															</ion-text>
														</div>
														<div style="width: 50%">
															<ion-text class="ion-text-end">
																<h6
																	v-if="i"
																	class="fw-600 fz-20 fc-success">
																	<ion-icon
																		aria-hidden="true"
																		:icon="shuffleOutline" />
																</h6>
															</ion-text>
														</div>
													</div>
												</ion-item>
											</ion-list>
										</div>
									</ion-col>
								</ion-row>
							</ion-card-content>
						</ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import {
		ref,
		// reactive,
		// computed
	} from "vue";
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonList } from "@ionic/vue";
	import { pauseCircleOutline, serverOutline, shuffleOutline } from "ionicons/icons";
	const list_hold = ref<any>([1, 2]);
	// import axios from "@/axios/axios";
	const handleRefresh = (event: any) => {
		event.target.complete();
		//  bkJxXRvOkaVeFxCvjbj-
	};

	// onIonViewWillEnter(() => {
	// 	cekKoneksi();
	// });
	// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
