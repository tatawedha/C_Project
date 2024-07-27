<template>
	<ion-page id="tabs2">
		<ion-header class="ion-no-border">
			<ion-toolbar>
				<ion-title>Tab 2</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 2</ion-title>
				</ion-toolbar>
			</ion-header>

			<ExploreContainer name="Tab 2 page" />
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue";
	import ExploreContainer from "@/components/ExploreContainer.vue";
</script>

<style scoped>
	#tabs2 ion-content {
		--ion-background-color: #fff;
	}

	#tabs2 ion-toolbar {
		--background: #2f63c8;
		--box-shadow: none;
	}

	#tabs2 .box-grade-success {
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

	#tabs2 .box-grade-warning {
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

	#tabs2 .box-grade-danger {
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

	#tabs2 .box-lot {
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
