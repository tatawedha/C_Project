<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Transaksi</ion-title>
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
						<ion-label>Transaksi Terbaru</ion-label>
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
			</ion-grid>

			<ion-grid>
				<ion-row class="mb-2">
					<ion-col>
						<ion-label>Riwayat Transaksi</ion-label>
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col>
						<ion-segment
							color="success"
							mode="ios"
							:swipe-gesture="true"
							v-model="segment">
							<ion-segment-button value="beli"> Beli </ion-segment-button>
							<ion-segment-button value="jual"> Jual </ion-segment-button>
							<ion-segment-button value="hold"> Hold </ion-segment-button>
						</ion-segment>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-grid v-if="segment === 'beli'">
				<ion-row>
					<ion-col size="12">
						<div style="width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; max-height: 250px; overflow: auto">
							<ion-list
								lines="full"
								style="background: #fff; padding: 0; border-radius: 8px">
								<ion-item
									v-for="i in list_beli"
									:key="i"
									style="">
									<div style="width: 100%; display: flex">
										<div style="width: 50%; display: flex; justify-content: space-evenly">
											<ion-text>
												<h6
													v-if="i"
													class="fw-700 fz-20 fc-primary">
													<ion-icon
														aria-hidden="true"
														:icon="enterOutline" />
												</h6>
											</ion-text>
											<ion-text>
												<h6
													v-if="i"
													class="fw-700 fz-14 fc-primary">
													Rp. 200.000
												</h6>
											</ion-text>
										</div>
										<div style="width: 50%">
											<ion-text class="ion-text-end">
												<h6
													v-if="i"
													class="fw-600 fz-14 fc-primary">
													Hold
												</h6>
											</ion-text>
										</div>
									</div>
								</ion-item>
							</ion-list>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
			<ion-grid v-if="segment === 'jual'">
				<ion-row>
					<ion-col size="12">
						<div style="width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; max-height: 250px; overflow: auto">
							<ion-list
								lines="full"
								style="background: #fff; padding: 0; border-radius: 8px">
								<ion-item
									v-for="i in list_jual"
									:key="i"
									style="">
									<div style="width: 100%; display: flex">
										<div style="width: 50%; display: flex; justify-content: space-around">
											<ion-text>
												<h6
													v-if="i == 1"
													class="fw-700 fz-20 fc-success">
													<ion-icon
														aria-hidden="true"
														:icon="exitOutline" />
												</h6>
												<h6
													v-else
													class="fw-700 fz-20 fc-danger">
													<ion-icon
														aria-hidden="true"
														:icon="exitOutline" />
												</h6>
											</ion-text>
											<ion-text>
												<h6
													v-if="i == 1"
													class="fw-700 fz-14 fc-success">
													Rp. 200.000
												</h6>
												<h6
													v-else
													class="fw-700 fz-14 fc-danger">
													Rp. 200.000
												</h6>
											</ion-text>
										</div>
										<div style="width: 50%">
											<ion-text class="ion-text-end">
												<h6
													v-if="i == 1"
													class="fw-600 fz-20 fc-success">
													<ion-icon
														aria-hidden="true"
														:icon="trendingUp" />
												</h6>
												<h6
													v-else
													class="fw-600 fz-20 fc-danger">
													<ion-icon
														aria-hidden="true"
														:icon="trendingDown" />
												</h6>
											</ion-text>
										</div>
									</div>
								</ion-item>
							</ion-list>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
			<ion-grid v-if="segment === 'hold'">
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
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonGrid, IonRow, IonCol, IonList } from "@ionic/vue";
	import { pauseCircleOutline, enterOutline, exitOutline, trendingUp, trendingDown, shuffleOutline } from "ionicons/icons";
	const segment = ref<any>("beli");
	const list_beli = ref<any>([1, 2]);
	const list_jual = ref<any>([1, 2]);
	const list_hold = ref<any>([1, 2]);

	const handleRefresh = (event: any) => {
		event.target.complete();
		//  bkJxXRvOkaVeFxCvjbj-
	};
</script>
