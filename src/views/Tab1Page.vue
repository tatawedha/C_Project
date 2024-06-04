<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Tab 1</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<!-- <ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 1</ion-title>
				</ion-toolbar>
			</ion-header>
			<Ion-button expand="block">aasdadasd </Ion-button>
			<ExploreContainer name="Tab 1 page" /> -->

			<div>
				<span>{{ initialValue }}</span>

				<span style="margin-left: 10px">{{ capital }}</span>
				<span style="margin-left: 10px">{{ initialPrice }}</span>
				<span style="margin-left: 10px">{{ loss }}</span>
			</div>

			<ion-button @click="simulated()"> Button</ion-button>

			<ion-grid>
				<ion-row>
					<ion-col>
						<div
							v-for="i in transaction"
							:key="i">
							{{ i }}
						</div>
					</ion-col>
					<ion-col>
						<div
							v-for="i in traffic"
							:key="i">
							{{ i }}
						</div></ion-col
					></ion-row
				></ion-grid
			>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import { ref, reactive, computed } from "vue";
	import { onIonViewWillEnter } from "@ionic/vue";
	import axios from "@/axios/axios";
	const data = ref("iki");
	const initialValue = ref(100000);
	const initialPrice = ref(100);
	const countdown = ref(1440);
	const transaction = ref<any>([]);
	const history = ref<any>([]);
	const totalProfit = reactive<any>(0);
	const traffic = ref<any>([]);

	async function cekKoneksi() {
		console.log(data);
		const ok = await axios("tapi/btc_idr/ticker");
		console.log(ok);
	}

	const capital = computed(() => {
		let x = 0;
		transaction.value.forEach((i: any) => {
			x += Number(i.vbuy);
		});
		return (x += initialValue.value);
	});

	const loss = computed(() => {
		let x = 0;
		transaction.value.forEach((i: any) => {
			const modifier = initialPrice.value - i.buy / 100;
			const lost = (Number(i.vbuy) * modifier) / 100;
			x += lost;
		});
		return x;
	});

	const simulated = async function () {
		for (let i = 0; i < countdown.value; i++) {
			const plus = Math.random() * 100 > 49;
			const modifier = Math.random() * 5;
			const buys = initialValue.value * 0.2;
			const newPrice = plus ? initialPrice.value + (initialPrice.value * modifier) / 100 : initialPrice.value - (initialPrice.value * modifier) / 100;
			// console.log(plus ? `+ ${modifier.toFixed(2)} %` : `- ${modifier.toFixed(2)} %`);
			// console.log(initialPrice.value, newPrice);
			if (transaction.value.length == 0) {
				transaction.value.push({ buy: newPrice, sell: 0, vbuy: buys, vsell: 0 });
				initialValue.value -= buys;
				traffic.value.push({ state: "buy", modal: initialValue.value });
			} else {
				let xx = 0;
				transaction.value.forEach((i: any) => {
					initialValue.value - buys;
					const newModifier = ((newPrice - Number(i.buy)) / Number(i.buy)) * 100;
					// console.log(newModifier, "newMod");
					const goSell = newModifier > 1;
					if (goSell) {
						xx++;
						const margin = (i.vbuy * newModifier) / 100;
						const totalSell = (Number(i.vbuy) + margin) * 0.98;
						i.sell = newPrice;
						i.vsell = totalSell;
						i.profit = margin;
						totalProfit + Number(margin);
						history.value.push(i);
						const newValue = initialValue.value + totalSell;
						i.values = newValue;
						const idx = transaction.value.indexOf(i);
						transaction.value.splice(idx, 1);
						initialValue.value = newValue;
						traffic.value.push({ state: "sell", modal: newValue });
					}
					return goSell;
				});
				// console.log(xx);
				if (xx == 0) {
					if (transaction.value.length <= 3) {
						initialValue.value -= buys;
						transaction.value.push({ buy: newPrice.toFixed(2), sell: 0, vbuy: buys, vsell: 0 });
						traffic.value.push({ state: "buy", modal: initialValue.value });
					}
				}
			}
			initialPrice.value = newPrice;
		}
	};

	onIonViewWillEnter(() => {
		cekKoneksi();
	});
	// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
