<template>
	<ion-page id="tabs3">
		<ion-header class="ion-no-border">
			<ion-toolbar>
				<ion-grid style="padding: 10px">
					<ion-row>
						<ion-col><ion-title>Tab 3</ion-title></ion-col></ion-row
					>
				</ion-grid>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 3</ion-title>
				</ion-toolbar>
			</ion-header>

			<ExploreContainer name="Tab 3 page" />
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue";
	import ExploreContainer from "@/components/ExploreContainer.vue";
</script>

<style scoped>
	#tabs3 ion-content {
		--ion-background-color: #fff;
	}

	/* #tabs3 ion-toolbar {
		--background: #2f63c8;
		--box-shadow: none;
	} */

	#tabs3 .box-grade-success {
		width: 35px;
		height: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1da84d;
		position: absolute;
		bottom: 8px;
		right: 8px;
		border-radius: 100%;
		flex-direction: column;
		z-index: 1;
	}

	#tabs3 .box-grade-warning {
		width: 35px;
		height: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #da9200;
		position: absolute;
		bottom: 8px;
		right: 8px;
		border-radius: 100%;
		flex-direction: column;
		z-index: 1;
	}

	#tabs3 .box-grade-danger {
		width: 35px;
		height: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ed4032;
		position: absolute;
		bottom: 8px;
		right: 8px;
		border-radius: 100%;
		flex-direction: column;
		z-index: 1;
	}

	#tabs3 .box-lot {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		position: absolute;
		top: 5px;
		left: 5px;
		border-radius: 10px;
		padding: 2px 8px;
	}
</style>
