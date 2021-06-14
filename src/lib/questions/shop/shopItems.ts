import rfdc from "rfdc";
const clone = rfdc();

const shopItemsBase : ShopItem[] = [
	{
		"id": "cherry_tomaatjes_1",
		"name": "Cherry tomaten",
		"price": 0.95,
		"range": 0,
		"compost": false,
		"tags": "tomaat groente",
		"houseBrand": true,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	},
	{
		"id": "cherry_tomaatjes_2",
		"name": "Cherry tomaten",
		"price": 0.95,
		"range": 0,
		"compost": true,
		"tags": "tomaat groente",
		"houseBrand": true,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "rode_paprika_1",
		"name": "rode paprika",
		"price": 0.93,
		"range": 0,
		"compost": false,
		"tags": "groente",
		"houseBrand": false,
		"priceFavorite": false,
		"local": true,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	},
	{
		"id": "rode_paprika_2",
		"name": "rode paprika",
		"price": 0.93,
		"range": 0.5,
		"compost": true,
		"tags": "groente",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	},
	{
		"id": "pasta_penne_1",
		"name": "Pasta Penne",
		"price": 1.4,
		"range": 0,
		"compost": false,
		"tags": "",
		"houseBrand": false,
		"priceFavorite": true,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": true,
		"bio": false
	},
	{
		"id": "pasta_penne_2",
		"name": "Pasta Penne",
		"price": 1.4,
		"range": 0.5,
		"compost": true,
		"tags": "",
		"houseBrand": true,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "strooikaas_1",
		"name": "Strooikaas",
		"price": 1.79,
		"range": 0,
		"compost": false,
		"tags": "geraspte",
		"houseBrand": false,
		"priceFavorite": true,
		"local": true,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "strooikaas_2",
		"name": "Strooikaas",
		"price": 1.79,
		"range": 0.5,
		"compost": true,
		"tags": "geraspte",
		"houseBrand": true,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "rucola_1",
		"name": "Rucola",
		"price": 1.09,
		"range": 0,
		"compost": false,
		"tags": "sla groente",
		"houseBrand": false,
		"priceFavorite": true,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	},
	{
		"id": "rucola_2",
		"name": "Rucola",
		"price": 1.09,
		"range": 0.5,
		"compost": true,
		"tags": "sla groente",
		"houseBrand": true,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "chips_1",
		"name": "Chips Naturel Huismerk",
		"price": 1.19,
		"range": 0,
		"compost": false,
		"tags": "chips snacks zout",
		"houseBrand": true,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": true,
		"vegan": false,
		"bio": false
	},
	{
		"id": "chips_2",
		"name": "Chips Naturel",
		"price": 1.19,
		"range": 0.5,
		"compost": true,
		"tags": "chips snacks zout",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": true,
		"bio": false
	},
	{
		"id": "mozzarella_1",
		"name": "Mozzarella",
		"price": 1.59,
		"range": 0,
		"compost": false,
		"tags": "kaas mozarela mozzarela mozarella",
		"houseBrand": false,
		"priceFavorite": true,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "mozzarella_2",
		"name": "Mozzarella",
		"price": 1.59,
		"range": 0.5,
		"compost": true,
		"tags": "kaas mozarela mozzarela mozarella",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "kristalsuiker_1",
		"name": "Kristalsuiker",
		"price": 0.8,
		"range": 0,
		"compost": false,
		"tags": "",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "kristalsuiker_2",
		"name": "Kristalsuiker AH",
		"price": 0.9,
		"range": 0,
		"compost": false,
		"tags": "",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "kristalsuiker_3",
		"name": "Kristalsuiker van Gilse",
		"price": 1.05,
		"range": 0,
		"compost": false,
		"tags": "",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "roerbak_groenten_italiaans",
		"name": "Roerbakgroente italiaans",
		"price": 1.89,
		"range": 0,
		"compost": false,
		"tags": "wok",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	},
	{
		"id": "roerbak_groenten_mexicaans",
		"name": "Roerbakgroente mexicaans",
		"price": 2.19,
		"range": 0,
		"compost": false,
		"tags": "wok",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "a",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "roerbak_groenten_oosters",
		"name": "Roerbakgroente oosters",
		"price": 1.79,
		"range": 0,
		"compost": false,
		"tags": "wok",
		"houseBrand": false,
		"priceFavorite": true,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	},
	{
		"id": "roerbak_groenten_hollands",
		"name": "Roerbakgroente hollands",
		"price": 2.19,
		"range": 0,
		"compost": true,
		"tags": "wok",
		"houseBrand": false,
		"priceFavorite": false,
		"local": true,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "pesto_1",
		"name": "Pesto",
		"price": 2.99,
		"range": 0,
		"compost": false,
		"tags": "pesto saus pasta",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "c",
		"vega": true,
		"vegan": false,
		"bio": false
	},
	{
		"id": "pesto_2",
		"name": "Pesto",
		"price": 2.99,
		"range": 0,
		"compost": false,
		"tags": "pesto saus pasta",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "d",
		"vega": false,
		"vegan": true,
		"bio": false
	},
	{
		"id": "pesto_3",
		"name": "Pesto Grand'Italia",
		"price": 2.79,
		"range": 0,
		"compost": false,
		"tags": "pesto saus pasta",
		"houseBrand": false,
		"priceFavorite": true,
		"local": false,
		"nutri": "",
		"vega": true,
		"vegan": false,
		"bio": false
	},
	{
		"id": "ijsbergsla_1",
		"name": "Krop Ijsbergsla",
		"price": 1.09,
		"range": 0,
		"compost": false,
		"tags": "groente",
		"houseBrand": false,
		"priceFavorite": false,
		"local": true,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "ijsbergsla_2",
		"name": "Zakje Ijsbergsla",
		"price": 1,
		"range": 0,
		"compost": false,
		"tags": "groente",
		"houseBrand": true,
		"priceFavorite": false,
		"local": true,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "diepvries_aardbeien_1",
		"name": "Diepvries Aardbeien",
		"price": 1.59,
		"range": 0,
		"compost": false,
		"tags": "fruit",
		"houseBrand": false,
		"priceFavorite": false,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	},
	{
		"id": "diepvries_aardbeien_2",
		"name": "Diepvries Aardbeien AH",
		"price": 1.49,
		"range": 0,
		"compost": false,
		"tags": "fruit",
		"houseBrand": true,
		"priceFavorite": true,
		"local": false,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": false
	},
	{
		"id": "verse_aardbeien_1",
		"name": "Verse Aardbeien",
		"price": 2.69,
		"range": 0,
		"compost": false,
		"tags": "fruit",
		"houseBrand": false,
		"priceFavorite": false,
		"local": true,
		"nutri": "",
		"vega": false,
		"vegan": false,
		"bio": true
	}
].sort(compareShopItems)

export let shopItems : ShopItem[];
export let prices: {};

export function setPrices(newPrices) {
	prices = newPrices;
	updateShopItems();
}

export function generatePrices() {
	let prices = {};

	for (const item of shopItemsBase) {
		prices[item.id] = Math.round((item.price + item.range*Math.random())*100)/100;
	}

	setPrices(prices);
}

function updateShopItems() {
	shopItems = clone(shopItemsBase);

	for (const item of shopItems) {
		item.price = prices[item.id];
	}
}

function compareShopItems(a: ShopItem, b: ShopItem) {
	return a.name.localeCompare(b.name, 'nl', { sensitivity: 'base' })
}

export interface ShopItem {
	id: string,
	name: string,
	price: number,
	range: number,
	compost: boolean,
	tags: string,
	houseBrand: boolean,
	priceFavorite: boolean,
	local: boolean,
	nutri: string,
	vega: boolean,
	vegan: boolean,
	bio: boolean
}
