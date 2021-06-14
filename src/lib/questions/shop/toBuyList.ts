export const shoppingList : ShoppingListItem[] = shuffleArray([
    {
      "name": "Cherry tomaten",
      "ids": ['cherry_tomaatjes_1','cherry_tomaatjes_2']
    },
    {
      "name": "Rode paprika",
      "ids": ['rode_paprika_1','rode_paprika_2']
    },
    {
      "name": "Pasta penne",
      "ids": ['pasta_penne_1','pasta_penne_2']
    },
    {
      "name": "Strooikaas",
      "ids": ['strooikaas_1','strooikaas_2']
    },
    {
      "name": "Rucola",
      "ids": ['rucola_1','rucola_2']
    },
    {
      "name": "Chips",
      "ids": ['chips_1','chips_2']
    },
    {
      "name": "Mozzarella",
      "ids": ['mozzarella_1','mozzarella_2']
    },
    {
      "name": "Kristalsuiker",
      "ids": ['kristalsuiker_1','kristalsuiker_2','kristalsuiker_3']
    },
    {
      "name": "Roerbakgroenten",
      "ids": ['roerbak_groenten_italiaans','roerbak_groenten_mexicaans','roerbak_groenten_oosters','roerbak_groenten_hollands']
    },
    {
      "name": "Pesto",
      "ids": ['pesto_1','pesto_2','pesto_3']
    },
    {
      "name": "Ijsbergsla",
      "ids": ['ijsbergsla_1','ijsbergsla_2']
    },
    {
      "name": "Aardbeien",
      "ids": ['diepvries_aardbeien_1','diepvries_aardbeien_2','verse_aardbeien_1']
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
