export const shoppingList : ShoppingListItem[] = shuffleArray([
    {
        "name": "Rundergehakt",
        "ids": [
            "rundergehakt_1",
            "rundergehakt_2"
        ]
    },
    {
        "name": "Aardappelschijfjes",
        "ids": [
            "aardappel_schijfjes_1",
            "aardappel_schijfjes_2"
        ]
    },
    {
        "name": "Roerbakgroenten",
        "ids": [
            "roerbak_groenten_italiaans",
            "roerbak_groenten_mexicaans",
            "roerbak_groenten_oosters",
            "roerbak_groenten_hollands"
        ]
    },
    {
        "name": "Cherry tomaten",
        "ids": [
            "cherry_tomaatjes_1",
            "cherry_tomaatjes_2"
        ]
    },
    {
        "name": "Parika",
        "ids": [
            "rode_paprika_1",
            "rode_paprika_2"
        ]
    },
    {
        "name": "Bananen",
        "ids": [
            "biobananen",
            "bananen"
        ]
    },
    {
        "name": "Netje Citroenen",
        "ids": [
            "citroenen_1",
            "citroenen_2"
        ]
    },
    {
        "name": "Broccoli",
        "ids": [
            "broccoli_1",
            "broccoli_2"
        ]
    },
    {
        "name": "Komkommer",
        "ids": [
            "komkommer_1",
            "komkommer_2"
        ]
    },
    {
        "name": "Veldsla",
        "ids": [
            "veldsla_1",
            "veldsla_2"
        ]
    },
    {
        "name": "Rucola",
        "ids": [
            "rucola_1",
            "rucola_2"
        ]
    },
    {
        "name": "Strooikaas",
        "ids": [
            "strooikaas_1",
            "strooikaas_2"
        ]
    },
    {
        "name": "Mozzarella",
        "ids": [
            "mozzarella_1",
            "mozzarella_2"
        ]
    },
    {
        "name": "Pak suiker",
        "ids": [
            "kristalsuiker_van_gilse",
            "kristalsuiker_bio_AH",
            "rietsuiker_1",
            "rietsuiker_2"
        ]
    },
    {
        "name": "Pasta",
        "ids": [
            "pasta_penne_1",
            "pasta_penne_2",
            "pasta_spaghetti_1",
            "pasta_spaghetti_1"
        ]
    },
    {
        "name": "Rijst",
        "ids": [
            "basmati_rijst_1",
            "basmati_rijst_2",
            "volkoren_rijst_1",
            "volkoren_rijst_2"
        ]
    },
    {
        "name": "Spinazi",
        "ids": [
            "spinazie_1",
            "spinazie_2",
            "diepvriesspinazie_1",
            "diepvriesspinazie_2"
        ]
    },
    {
        "name": "Rozijnen",
        "ids": [
            "rozijnen_1",
            "rozijnen_2"
        ]
    },
    {
        "name": "Blauwe Bessen",
        "ids": [
            "blauwe_bessen_1",
            "blauwe_bessen_2"
        ]
    },
    {
        "name": "Naturel Chips",
        "ids": [
            "chips_1",
            "chips_2"
        ]
    },
    {
        "name": "Druiven",
        "ids": [
            "druiven_1",
            "druiven_2"
        ]
    },
    {
        "name": "Diepvries Aardbeien",
        "ids": [
            "aardbeien_1",
            "aardbeien_2"
        ]
    },
    {
        "name": "Pesto",
        "ids": [
            "pesto_1",
            "pesto_2"
        ]
    },
    {
        "name": "Bloemkool",
        "ids": [
            "bloemkool_1",
            "bloemkool_2"
        ]
    },
    {
        "name": "Volle Yoghurt",
        "ids": [
            "volleyoghurt_1",
            "volleyoghurt_2"
        ]
    },
    {
        "name": "Vegan Yoghurt (Alpro)",
        "ids": [
            "veganyoghurt_1",
            "veganyoghurt_2"
        ]
    },
    {
        "name": "Ijsbergsla",
        "ids": [
            "ijsbergsla_1",
            "ijsbergsla_2"
        ]
    }
]);

export interface ShoppingListItem {
    name: string;
    ids: string[];
}

function shuffleArray<T>(array: T[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
