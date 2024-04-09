export const IS_BROWSER = typeof window !== 'undefined';

export const EFFECTS_EMOJIS = ['😶', '🙂', '😁', '😐'];

export const EFFECTS_NAMES = [
  'no effect',
  'normal',
  'super effective',
  'not very effective',
];

export const EFFECTS_COLORS = ['dark', 'light', 'success', 'warning'];

export const POKEMON_EXCEPTIONS = [
  { name: 'Nidoran (male)', id: 32 },
  { name: 'Nidoran (female)', id: 29 },
  { name: 'Lycanroc Midday Form', id: 745 },
  { name: 'Lycanroc Midnight Form', id: 10126 },
  { name: 'Lycanroc Dusk Form', id: 10152 },
  { name: 'Pumpkaboo', id: 710 },
  { name: 'Gourgeist', id: 711 },
  { name: 'Galarian Meowth', id: 10161 },
  { name: 'Alolan Meowth', id: 10107 },
  { name: 'Aegislash Shield Forme', id: 681 },
  { name: 'Aegislash Blade Forme', id: 10026 },
  { name: 'Burmy Plant Cloak', id: 412 },
  { name: 'Burmy Sandy Cloak', id: 412 },
  { name: 'Burmy Trash Cloak', id: 412 },
  { name: 'Wormadam Plant Cloak', id: 413 },
  { name: 'Wormadam Sandy Cloak', id: 10004 },
  { name: 'Wormadam Trash Cloak', id: 10005 },
  { name: 'Basculin Red-Striped Form', id: 550 },
  { name: 'Basculin Blue-Striped Form', id: 10016 },
  { name: 'Basculin White-Striped Form', id: 10247 },
  { name: 'Basculegion Male', id: 902 },
  { name: 'Basculegion Female', id: 10248 },
  { name: 'Darmanitan Standard Mode', id: 555 },
  { name: 'Darmanitan Zen Mode', id: 10017 },
  { name: 'Darmanitan Galarian Standard Mode', id: 10177 },
  { name: 'Darmanitan Galarian Zen Mode', id: 10178 },
  { name: 'Darumaka', id: 554 },
  { name: 'Galarian Darumaka', id: 10176 },
  { name: 'Minior Meteor Form', id: 774 },
  { name: 'Minior Core Form', id: 10136 },
  { name: 'Meowstic Male', id: 678 },
  { name: 'Meowstic Female', id: 10025 },
  { name: 'Eiscue Ice Face', id: 875 },
  { name: 'Eiscue Noice Face', id: 10185 },
  { name: 'Alolan Diglett', id: 10105 },
  { name: 'Alolan Dugtrio', id: 10106 },
  { name: 'Alolan Exeggutor', id: 10114 },
  { name: 'Alolan Geodude', id: 10109 },
  { name: 'Alolan Rattata', id: 10091 },
  { name: 'Alolan Raticate', id: 10092 },
  { name: 'Alolan Raichu', id: 10100 },
  { name: 'Alolan Sandshrew', id: 10101 },
  { name: 'Alolan Sandslash', id: 10102 },
  { name: 'Alolan Vulpix', id: 10103 },
  { name: 'Alolan Ninetales', id: 10104 },
  { name: 'Alolan Meowth', id: 10107 },
  { name: 'Alolan Persian', id: 10108 },
  { name: 'Alolan Graveler', id: 10110 },
  { name: 'Alolan Golem', id: 10111 },
  { name: 'Alolan Grimer', id: 10112 },
  { name: 'Alolan Muk', id: 10113 },
  { name: 'Alolan Marowak', id: 10115 },
  { name: 'Galarian Ponyta', id: 10162 },
  { name: 'Galarian Rapidash', id: 10163 },
  { name: 'Galarian Slowpoke', id: 10164 },
  { name: 'Galarian Slowbro', id: 10165 },
  { name: "Galarian Farfetch'd", id: 10166 },
  { name: 'Galarian Weezing', id: 10167 },
  { name: "Sirfetch'd", id: 865 },
  { name: 'Galarian Mr. Mime', id: 10168 },
  { name: 'Mime Jr.', id: 439 },
  { name: 'Mr. Mime', id: 122 },
  { name: 'Mr. Rime', id: 866 },
  { name: 'Galarian Articuno', id: 10169 },
  { name: 'Galarian Zapdos', id: 10170 },
  { name: 'Galarian Moltres', id: 10171 },
  { name: 'Galarian Slowking', id: 10172 },
  { name: 'Galarian Corsola', id: 10173 },
  { name: 'Galarian Zigzagoon', id: 10174 },
  { name: 'Galarian Linoone', id: 10175 },
  { name: 'Galarian Yamask', id: 10179 },
  { name: 'Galarian Stunfisk', id: 10180 },
  { name: 'Deoxys Attack Forme', id: 10001 },
  { name: 'Deoxys Defense Forme', id: 10002 },
  { name: 'Deoxys Speed Forme', id: 10003 },
  { name: 'Deoxys Normal Forme', id: 386 },
  { name: 'Shaymin Land Forme', id: 492 },
  { name: 'Shaymin Sky Forme', id: 10006 },
  { name: 'Heat Rotom', id: 10008 },
  { name: 'Wash Rotom', id: 10009 },
  { name: 'Frost Rotom', id: 10010 },
  { name: 'Fan Rotom', id: 10011 },
  { name: 'Mow Rotom', id: 10012 },
  { name: 'Castform Sunny Form', id: 10013 },
  { name: 'Castform Rainy Form', id: 10014 },
  { name: 'Castform Snowy Form', id: 10015 },
  { name: 'Meloetta Aria Forme', id: 648 },
  { name: 'Meloetta Pirouette Forme', id: 10018 },
  { name: 'Tornadus Incarnate Forme', id: 641 },
  { name: 'Tornadus Therian Forme', id: 10019 },
  { name: 'Thundurus Incarnate Forme', id: 642 },
  { name: 'Thundurus Therian Forme', id: 10020 },
  { name: 'Landorus Incarnate Forme', id: 645 },
  { name: 'Landorus Therian Forme', id: 10021 },
  { name: 'Black Kyurem', id: 10022 },
  { name: 'White Kyurem', id: 10023 },
  { name: 'Keldeo Ordinary Form', id: 647 },
  { name: 'Keldeo Resolute Form', id: 10024 },
  { name: 'Mega Venusaur', id: 10033 },
  { name: 'Hisuian Growlithe', id: 10229 },
  { name: 'Hisuian Arcanine', id: 10230 },
  { name: 'Hisuian Voltorb', id: 10231 },
  { name: 'Hisuian Electrode', id: 10232 },
  { name: 'Hisuian Typhlosion', id: 10233 },
  { name: 'Hisuian Qwilfish', id: 10234 },
  { name: 'Hisuian Sneasel', id: 10235 },
  { name: 'Hisuian Samurott', id: 10236 },
  { name: 'Hisuian Lilligant', id: 10237 },
  { name: 'Hisuian Zorua', id: 10238 },
  { name: 'Hisuian Zoroark', id: 10239 },
  { name: 'Hisuian Braviary', id: 10240 },
  { name: 'Hisuian Sliggoo', id: 10241 },
  { name: 'Hisuian Decidueye', id: 10244 },
  { name: 'Dialga Origin Forme', id: 10245 },
  { name: 'Palkia Origin Forme', id: 10246 },
  { name: 'Enamorus Incarnate Forme', id: 905 },
  { name: 'Enamorus Therian Forme', id: 10249 },
  { name: 'Tauros Combat Breed', id: 10250 },
  { name: 'Tauros Blaze Breed', id: 10251 },
  { name: 'Tauros Aqua Breed', id: 10252 },
  { name: 'Paldean Wooper', id: 10253 },
  { name: 'Oinkologne Male', id: 10254 },
  { name: 'Oinkologne Female', id: 10255 },
  { name: 'Palafin Zero Form', id: 10256 },
  { name: 'Palafin Hero Form', id: 964 },
  { name: 'Maushold Family of Four', id: 925 },
  { name: 'Maushold Family of Three', id: 10257 },
  { name: 'Tatsugiri Curly Form', id: 978 },
  { name: 'Tatsugiri Droopy Form', id: 10258 },
  { name: 'Tatsugiri Stretchy Form', id: 10259 },
  { name: 'Squawkabilly Green Plumage', id: 931 },
  { name: 'Squawkabilly Blue Plumage', id: 10260 },
  { name: 'Squawkabilly Yellow Plumage', id: 10261 },
  { name: 'Squawkabilly White Plumage', id: 10262 },
  { name: 'Gimmighoul Chest Form', id: 999 },
  { name: 'Gimmighoul Roaming Form', id: 10263 },
  { name: 'Ursaluna Bloodmoon', id: 10272 },
  { name: 'Ogerpon Teal Mask', id: 1017 },
  { name: 'Ogerpon Wellspring Mask', id: 10273 },
  { name: 'Ogerpon Hearthflame Mask', id: 10274 },
  { name: 'Ogerpon Cornerstone Mask', id: 10275 },
  { name: 'Terapagos Normal Form', id: 1024 },
  { name: 'Terapagos Terastal Form', id: 10276 },
  { name: 'Terapagos Stellar Form', id: 10277 },
  { name: 'Giratina Altered Forme', id: 487 },
  { name: 'Giratina Origin Forme', id: 10007 },
  { name: 'Zygarde 50% Forme', id: 718 },
  { name: 'Zygarde 10% Forme', id: 10118 },
  { name: 'Zygarde Complete Forme', id: 10120 },
  { name: 'Oricorio Baile Style', id: 741 },
  { name: 'Oricorio Pom-Pom Style', id: 10123 },
  { name: "Oricorio Pa'u Style", id: 10124 },
  { name: 'Oricorio Sensu Style', id: 10125 },
  { name: 'Wishiwashi Solo Form', id: 746 },
  { name: 'Wishiwashi School Form', id: 10127 },
  { name: 'Type: Null', id: 772 },
  { name: 'Mimikyu', id: 778 },
  { name: 'Toxtricity Amped Form', id: 849 },
  { name: 'Toxtricity Low Key Form', id: 10184 },
  { name: 'Morpeko Full Belly Mode', id: 877 },
  { name: 'Morpeko Hangry Mode', id: 10187 },
  { name: 'Urshifu Single Strike Style', id: 892 },
  { name: 'Urshifu Rapid Strike Style', id: 10191 },
  { name: 'Dusk Mane Necrozma', id: 10155 },
  { name: 'Dawn Wings Necrozma', id: 10156 },
  { name: 'Ultra Necrozma', id: 10157 },
  { name: 'Calyrex Ice Rider', id: 10193 },
  { name: 'Calyrex Shadow Rider', id: 10194 },
  { name: 'Dudunsparce Two-Segment Form', id: 982 },
  { name: 'Dudunsparce Three-Segment Form', id: 10255 },
];

export const TYPES = [
  ['normal', '#88887B'],
  ['fire', '#FF4422'],
  ['water', '#3399FE'],
  ['electric', '#FFCC33'],
  ['grass', '#76CC55'],
  ['ice', '#65CCFF'],
  ['fighting', '#BA5544'],
  ['poison', '#AB579A'],
  ['ground', '#DEBB54'],
  ['flying', '#8799FF'],
  ['psychic', '#FF5599'],
  ['bug', '#A9BB22'],
  ['rock', '#BBAA66'],
  ['ghost', '#6666BA'],
  ['dragon', '#7666EE'],
  ['dark', '#775444'],
  ['steel', '#B7B7C5'],
  ['fairy', '#F1A8F0'],
];

export const EVOLUTION_DETAILS = {
  item: {
    'water-stone': 'Water Stone',
    'thunder-stone': 'Thunder Stone',
    'fire-stone': 'Fire Stone',
    'leaf-stone': 'Leaf Stone',
    'sun-stone': 'Sun Stone',
    'shiny-stone': 'Shiny Stone',
    'dusk-stone': 'Dusk Stone',
    'dawn-stone': 'Dawn Stone',
    'moon-stone': 'Moon Stone',
    'oval-stone': 'Oval Stone',
    'kings-rock': "King's Rock",
    'up-grade': 'Up-grade',
    'dubious-disc': 'Dubious Disc',
    'metal-coat': 'Metal Coat',
    'black-augurite': 'Black Augurite',
    'dragon-scale': 'Dragon Scale',
    'reaper-cloth': 'Reaper Cloth',
    electirizer: 'Electirizer',
    magmarizer: 'Magmarizer',
    protector: 'Protector',
    sachet: 'Sachet',
    'whipped-dream': 'Whipped Dream',
    'prism-scale': 'Prism Scale',
    'deep-sea-tooth': 'Deep Sea Tooth',
    'deep-sea-scale': 'Deep Sea Scale',
    'razor-claw': 'Razor Claw',
    'peat-block': 'Peat Block',
    'razor-fang': 'Razor Fang',
    'cracked-pot': 'Cracked Pot',
  },
  stats: {
    1: 'ATK > DEF',
    '-1': 'ATK < DEF',
    0: 'ATK = DEF',
  },
  min_happiness: 'Friendship',
  min_beauty: 'Beauty',
};

export const LETTERS_CHART = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
];

export const WEAKNESS_CHART = [
  [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 1, 1, 3, 1],
  [1, 1, 3, 3, 1, 2, 2, 1, 1, 1, 1, 1, 2, 3, 1, 3, 1, 2, 1],
  [2, 1, 2, 3, 1, 3, 1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 1, 1, 1],
  [3, 1, 1, 2, 3, 3, 1, 1, 1, 0, 2, 1, 1, 1, 1, 3, 1, 1, 1],
  [4, 1, 3, 2, 1, 3, 1, 1, 3, 2, 3, 1, 3, 2, 1, 3, 1, 3, 1],
  [5, 1, 3, 3, 1, 2, 3, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 3, 1],
  [6, 2, 1, 1, 1, 1, 2, 1, 3, 1, 3, 3, 3, 2, 0, 1, 2, 2, 3],
  [7, 1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 0, 2],
  [8, 1, 2, 1, 2, 3, 1, 1, 2, 1, 0, 1, 3, 2, 1, 1, 1, 2, 1],
  [9, 1, 1, 1, 3, 2, 1, 2, 1, 1, 1, 1, 2, 3, 1, 1, 1, 3, 1],
  [10, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1, 1, 0, 3, 1],
  [11, 1, 3, 1, 1, 2, 1, 3, 3, 1, 3, 2, 1, 1, 3, 1, 2, 3, 3],
  [12, 1, 2, 1, 1, 1, 2, 3, 1, 3, 2, 1, 2, 1, 1, 1, 1, 3, 1],
  [13, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1],
  [14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 0],
  [15, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 2, 1, 3, 1, 3],
  [16, 1, 3, 3, 3, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 2],
  [17, 1, 3, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1],
];

export const POKEMON_LIST = [
  'Abomasnow',
  'Mega Abomasnow',
  'Abra',
  'Absol',
  'Mega Absol',
  'Accelgor',
  'Aegislash Shield Forme',
  'Aegislash Blade Forme',
  'Aerodactyl',
  'Mega Aerodactyl',
  'Aggron',
  'Mega Aggron',
  'Aipom',
  'Alakazam',
  'Mega Alakazam',
  'Alcremie',
  'Alomomola',
  'Altaria',
  'Mega Altaria',
  'Amaura',
  'Ambipom',
  'Amoonguss',
  'Ampharos',
  'Mega Ampharos',
  'Annihilape',
  'Anorith',
  'Appletun',
  'Applin',
  'Araquanid',
  'Arbok',
  'Arboliva',
  'Arcanine',
  'Hisuian Arcanine',
  'Arceus',
  'Archaludon',
  'Archen',
  'Archeops',
  'Arctibax',
  'Arctovish',
  'Arctozolt',
  'Ariados',
  'Armaldo',
  'Armarouge',
  'Aromatisse',
  'Aron',
  'Arrokuda',
  'Articuno',
  'Galarian Articuno',
  'Audino',
  'Mega Audino',
  'Aurorus',
  'Avalugg',
  'Hisuian Avalugg',
  'Axew',
  'Azelf',
  'Azumarill',
  'Azurill',
  'Bagon',
  'Baltoy',
  'Banette',
  'Mega Banette',
  'Barbaracle',
  'Barboach',
  'Barraskewda',
  'Basculegion Male',
  'Basculegion Female',
  'Basculin Red-Striped Form',
  'Basculin Blue-Striped Form',
  'Basculin White-Striped Form',
  'Bastiodon',
  'Baxcalibur',
  'Bayleef',
  'Beartic',
  'Beautifly',
  'Beedrill',
  'Mega Beedrill',
  'Beheeyem',
  'Beldum',
  'Bellibolt',
  'Bellossom',
  'Bellsprout',
  'Bergmite',
  'Bewear',
  'Bibarel',
  'Bidoof',
  'Binacle',
  'Bisharp',
  'Blacephalon',
  'Blastoise',
  'Mega Blastoise',
  'Blaziken',
  'Mega Blaziken',
  'Blipbug',
  'Blissey',
  'Blitzle',
  'Boldore',
  'Boltund',
  'Bombirdier',
  'Bonsly',
  'Bouffalant',
  'Bounsweet',
  'Braixen',
  'Brambleghast',
  'Bramblin',
  'Braviary',
  'Hisuian Braviary',
  'Breloom',
  'Brionne',
  'Bronzong',
  'Bronzor',
  'Brute Bonnet',
  'Bruxish',
  'Budew',
  'Buizel',
  'Bulbasaur',
  'Buneary',
  'Bunnelby',
  'Burmy Plant Cloak',
  'Burmy Sandy Cloak',
  'Burmy Trash Cloak',
  'Butterfree',
  'Buzzwole',
  'Cacnea',
  'Cacturne',
  'Calyrex',
  'Calyrex Ice Rider',
  'Calyrex Shadow Rider',
  'Camerupt',
  'Mega Camerupt',
  'Capsakid',
  'Carbink',
  'Carkol',
  'Carnivine',
  'Carracosta',
  'Carvanha',
  'Cascoon',
  'Castform',
  'Castform Sunny Form',
  'Castform Rainy Form',
  'Castform Snowy Form',
  'Caterpie',
  'Celebi',
  'Celesteela',
  'Centiskorch',
  'Ceruledge',
  'Cetitan',
  'Cetoddle',
  'Chandelure',
  'Chansey',
  'Charcadet',
  'Charizard',
  'Mega Charizard X',
  'Mega Charizard Y',
  'Charjabug',
  'Charmander',
  'Charmeleon',
  'Chatot',
  'Cherrim',
  'Cherubi',
  'Chesnaught',
  'Chespin',
  'Chewtle',
  'Chi-Yu',
  'Chien-Pao',
  'Chikorita',
  'Chimchar',
  'Chimecho',
  'Chinchou',
  'Chingling',
  'Cinccino',
  'Cinderace',
  'Clamperl',
  'Clauncher',
  'Clawitzer',
  'Claydol',
  'Clefable',
  'Clefairy',
  'Cleffa',
  'Clobbopus',
  'Clodsire',
  'Cloyster',
  'Coalossal',
  'Cobalion',
  'Cofagrigus',
  'Combee',
  'Combusken',
  'Comfey',
  'Conkeldurr',
  'Copperajah',
  'Corphish',
  'Corsola',
  'Galarian Corsola',
  'Corviknight',
  'Corvisquire',
  'Cosmoem',
  'Cosmog',
  'Cottonee',
  'Crabominable',
  'Crabrawler',
  'Cradily',
  'Cramorant',
  'Cranidos',
  'Crawdaunt',
  'Cresselia',
  'Croagunk',
  'Crobat',
  'Crocalor',
  'Croconaw',
  'Crustle',
  'Cryogonal',
  'Cubchoo',
  'Cubone',
  'Cufant',
  'Cursola',
  'Cutiefly',
  'Cyclizar',
  'Cyndaquil',
  'Dachsbun',
  'Darkrai',
  'Darmanitan Standard Mode',
  'Darmanitan Zen Mode',
  'Darmanitan Galarian Standard Mode',
  'Darmanitan Galarian Zen Mode',
  'Dartrix',
  'Darumaka',
  'Galarian Darumaka',
  'Decidueye',
  'Hisuian Decidueye',
  'Dedenne',
  'Deerling',
  'Deino',
  'Delcatty',
  'Delibird',
  'Delphox',
  'Deoxys Normal Forme',
  'Deoxys Attack Forme',
  'Deoxys Defense Forme',
  'Deoxys Speed Forme',
  'Dewgong',
  'Dewott',
  'Dewpider',
  'Dhelmise',
  'Dialga',
  'Dialga Origin Forme',
  'Diancie',
  'Mega Diancie',
  'Diggersby',
  'Diglett',
  'Alolan Diglett',
  'Dipplin',
  'Ditto',
  'Dodrio',
  'Doduo',
  'Dolliv',
  'Dondozo',
  'Donphan',
  'Dottler',
  'Doublade',
  'Dracovish',
  'Dracozolt',
  'Dragalge',
  'Dragapult',
  'Dragonair',
  'Dragonite',
  'Drakloak',
  'Drampa',
  'Drapion',
  'Dratini',
  'Drednaw',
  'Dreepy',
  'Drifblim',
  'Drifloon',
  'Drilbur',
  'Drizzile',
  'Drowzee',
  'Druddigon',
  'Dubwool',
  'Ducklett',
  'Dudunsparce Two-Segment Form',
  'Dudunsparce Three-Segment Form',
  'Dugtrio',
  'Alolan Dugtrio',
  'Dunsparce',
  'Duosion',
  'Duraludon',
  'Durant',
  'Dusclops',
  'Dusknoir',
  'Duskull',
  'Dustox',
  'Dwebble',
  'Eelektrik',
  'Eelektross',
  'Eevee',
  'Partner Eevee',
  'Eiscue Ice Face',
  'Eiscue Noice Face',
  'Ekans',
  'Eldegoss',
  'Electabuzz',
  'Electivire',
  'Electrike',
  'Electrode',
  'Hisuian Electrode',
  'Elekid',
  'Elgyem',
  'Emboar',
  'Emolga',
  'Empoleon',
  'Enamorus Incarnate Forme',
  'Enamorus Therian Forme',
  'Entei',
  'Escavalier',
  'Espathra',
  'Espeon',
  'Espurr',
  'Eternatus',
  'Eternatus Eternamax',
  'Excadrill',
  'Exeggcute',
  'Exeggutor',
  'Alolan Exeggutor',
  'Exploud',
  'Falinks',
  "Farfetch'd",
  "Galarian Farfetch'd",
  'Farigiraf',
  'Fearow',
  'Feebas',
  'Fennekin',
  'Feraligatr',
  'Ferroseed',
  'Ferrothorn',
  'Fezandipiti',
  'Fidough',
  'Finizen',
  'Finneon',
  'Flaaffy',
  'Flabébé',
  'Flamigo',
  'Flapple',
  'Flareon',
  'Fletchinder',
  'Fletchling',
  'Flittle',
  'Floatzel',
  'Floette',
  'Floragato',
  'Florges',
  'Flutter Mane',
  'Flygon',
  'Fomantis',
  'Foongus',
  'Forretress',
  'Fraxure',
  'Frigibax',
  'Frillish',
  'Froakie',
  'Frogadier',
  'Froslass',
  'Frosmoth',
  'Fuecoco',
  'Furfrou',
  'Furret',
  'Gabite',
  'Gallade',
  'Mega Gallade',
  'Galvantula',
  'Garbodor',
  'Garchomp',
  'Mega Garchomp',
  'Gardevoir',
  'Mega Gardevoir',
  'Garganacl',
  'Gastly',
  'Gastrodon',
  'Genesect',
  'Gengar',
  'Mega Gengar',
  'Geodude',
  'Alolan Geodude',
  'Gholdengo',
  'Gible',
  'Gigalith',
  'Gimmighoul Chest Form',
  'Gimmighoul Roaming Form',
  'Girafarig',
  'Giratina Altered Forme',
  'Giratina Origin Forme',
  'Glaceon',
  'Glalie',
  'Mega Glalie',
  'Glameow',
  'Glastrier',
  'Gligar',
  'Glimmet',
  'Glimmora',
  'Gliscor',
  'Gloom',
  'Gogoat',
  'Golbat',
  'Goldeen',
  'Golduck',
  'Golem',
  'Alolan Golem',
  'Golett',
  'Golisopod',
  'Golurk',
  'Goodra',
  'Hisuian Goodra',
  'Goomy',
  'Gorebyss',
  'Gossifleur',
  'Gothita',
  'Gothitelle',
  'Gothorita',
  'Gouging Fire',
  'Gourgeist',
  'Grafaiai',
  'Granbull',
  'Grapploct',
  'Graveler',
  'Alolan Graveler',
  'Great Tusk',
  'Greavard',
  'Greedent',
  'Greninja',
  'Ash-Greninja',
  'Grimer',
  'Alolan Grimer',
  'Grimmsnarl',
  'Grookey',
  'Grotle',
  'Groudon',
  'Primal Groudon',
  'Grovyle',
  'Growlithe',
  'Hisuian Growlithe',
  'Grubbin',
  'Grumpig',
  'Gulpin',
  'Gumshoos',
  'Gurdurr',
  'Guzzlord',
  'Gyarados',
  'Mega Gyarados',
  'Hakamo-o',
  'Happiny',
  'Hariyama',
  'Hatenna',
  'Hatterene',
  'Hattrem',
  'Haunter',
  'Hawlucha',
  'Haxorus',
  'Heatmor',
  'Heatran',
  'Heliolisk',
  'Helioptile',
  'Heracross',
  'Mega Heracross',
  'Herdier',
  'Hippopotas',
  'Hippowdon',
  'Hitmonchan',
  'Hitmonlee',
  'Hitmontop',
  'Ho-oh',
  'Honchkrow',
  'Honedge',
  'Hoopa Confined',
  'Hoopa Unbound',
  'Hoothoot',
  'Hoppip',
  'Horsea',
  'Houndoom',
  'Mega Houndoom',
  'Houndour',
  'Houndstone',
  'Huntail',
  'Hydrapple',
  'Hydreigon',
  'Hypno',
  'Igglybuff',
  'Illumise',
  'Impidimp',
  'Incineroar',
  'Indeedee Male',
  'Indeedee Female',
  'Infernape',
  'Inkay',
  'Inteleon',
  'Iron Boulder',
  'Iron Bundle',
  'Iron Crown',
  'Iron Hands',
  'Iron Jugulis',
  'Iron Leaves',
  'Iron Moth',
  'Iron Thorns',
  'Iron Treads',
  'Iron Valiant',
  'Ivysaur',
  'Jangmo-o',
  'Jellicent',
  'Jigglypuff',
  'Jirachi',
  'Jolteon',
  'Joltik',
  'Jumpluff',
  'Jynx',
  'Kabuto',
  'Kabutops',
  'Kadabra',
  'Kakuna',
  'Kangaskhan',
  'Mega Kangaskhan',
  'Karrablast',
  'Kartana',
  'Kecleon',
  'Keldeo Ordinary Form',
  'Keldeo Resolute Form',
  'Kilowattrel',
  'Kingambit',
  'Kingdra',
  'Kingler',
  'Kirlia',
  'Klang',
  'Klawf',
  'Kleavor',
  'Klefki',
  'Klink',
  'Klinklang',
  'Koffing',
  'Komala',
  'Kommo-o',
  'Koraidon',
  'Krabby',
  'Kricketot',
  'Kricketune',
  'Krokorok',
  'Krookodile',
  'Kubfu',
  'Kyogre',
  'Primal Kyogre',
  'Kyurem',
  'White Kyurem',
  'Black Kyurem',
  'Lairon',
  'Lampent',
  'Landorus Incarnate Forme',
  'Landorus Therian Forme',
  'Lanturn',
  'Lapras',
  'Larvesta',
  'Larvitar',
  'Latias',
  'Mega Latias',
  'Latios',
  'Mega Latios',
  'Leafeon',
  'Leavanny',
  'Lechonk',
  'Ledian',
  'Ledyba',
  'Lickilicky',
  'Lickitung',
  'Liepard',
  'Lileep',
  'Lilligant',
  'Hisuian Lilligant',
  'Lillipup',
  'Linoone',
  'Galarian Linoone',
  'Litleo',
  'Litten',
  'Litwick',
  'Lokix',
  'Lombre',
  'Lopunny',
  'Mega Lopunny',
  'Lotad',
  'Loudred',
  'Lucario',
  'Mega Lucario',
  'Ludicolo',
  'Lugia',
  'Lumineon',
  'Lunala',
  'Lunatone',
  'Lurantis',
  'Luvdisc',
  'Luxio',
  'Luxray',
  'Lycanroc Midday Form',
  'Lycanroc Midnight Form',
  'Lycanroc Dusk Form',
  'Mabosstiff',
  'Machamp',
  'Machoke',
  'Machop',
  'Magby',
  'Magcargo',
  'Magearna',
  'Magikarp',
  'Magmar',
  'Magmortar',
  'Magnemite',
  'Magneton',
  'Magnezone',
  'Makuhita',
  'Malamar',
  'Mamoswine',
  'Manaphy',
  'Mandibuzz',
  'Manectric',
  'Mega Manectric',
  'Mankey',
  'Mantine',
  'Mantyke',
  'Maractus',
  'Mareanie',
  'Mareep',
  'Marill',
  'Marowak',
  'Alolan Marowak',
  'Marshadow',
  'Marshtomp',
  'Maschiff',
  'Masquerain',
  'Maushold Family of Four',
  'Maushold Family of Three',
  'Mawile',
  'Mega Mawile',
  'Medicham',
  'Mega Medicham',
  'Meditite',
  'Meganium',
  'Melmetal',
  'Meloetta Aria Forme',
  'Meloetta Pirouette Forme',
  'Meltan',
  'Meowscarada',
  'Meowstic Male',
  'Meowstic Female',
  'Meowth',
  'Alolan Meowth',
  'Galarian Meowth',
  'Mesprit',
  'Metagross',
  'Mega Metagross',
  'Metang',
  'Metapod',
  'Mew',
  'Mewtwo',
  'Mega Mewtwo X',
  'Mega Mewtwo Y',
  'Mienfoo',
  'Mienshao',
  'Mightyena',
  'Milcery',
  'Milotic',
  'Miltank',
  'Mime Jr.',
  'Mimikyu',
  'Minccino',
  'Minior Meteor Form',
  'Minior Core Form',
  'Minun',
  'Miraidon',
  'Misdreavus',
  'Mismagius',
  'Moltres',
  'Galarian Moltres',
  'Monferno',
  'Morelull',
  'Morgrem',
  'Morpeko Full Belly Mode',
  'Morpeko Hangry Mode',
  'Mothim',
  'Mr. Mime',
  'Galarian Mr. Mime',
  'Mr. Rime',
  'Mudbray',
  'Mudkip',
  'Mudsdale',
  'Muk',
  'Alolan Muk',
  'Munchlax',
  'Munkidori',
  'Munna',
  'Murkrow',
  'Musharna',
  'Nacli',
  'Naclstack',
  'Naganadel',
  'Natu',
  'Necrozma',
  'Dusk Mane Necrozma',
  'Dawn Wings Necrozma',
  'Ultra Necrozma',
  'Nickit',
  'Nidoking',
  'Nidoqueen',
  'Nidoran (female)',
  'Nidoran (male)',
  'Nidorina',
  'Nidorino',
  'Nihilego',
  'Nincada',
  'Ninetales',
  'Alolan Ninetales',
  'Ninjask',
  'Noctowl',
  'Noibat',
  'Noivern',
  'Nosepass',
  'Numel',
  'Nuzleaf',
  'Nymble',
  'Obstagoon',
  'Octillery',
  'Oddish',
  'Ogerpon Teal Mask',
  'Ogerpon Wellspring Mask',
  'Ogerpon Hearthflame Mask',
  'Ogerpon Cornerstone Mask',
  'Oinkologne Male',
  'Oinkologne Female',
  'Okidogi',
  'Omanyte',
  'Omastar',
  'Onix',
  'Oranguru',
  'Orbeetle',
  'Oricorio Baile Style',
  'Oricorio Pom-Pom Style',
  "Oricorio Pa'u Style",
  'Oricorio Sensu Style',
  'Orthworm',
  'Oshawott',
  'Overqwil',
  'Pachirisu',
  'Palafin Zero Form',
  'Palafin Hero Form',
  'Palkia',
  'Palkia Origin Forme',
  'Palossand',
  'Palpitoad',
  'Pancham',
  'Pangoro',
  'Panpour',
  'Pansage',
  'Pansear',
  'Paras',
  'Parasect',
  'Passimian',
  'Patrat',
  'Pawmi',
  'Pawmo',
  'Pawmot',
  'Pawniard',
  'Pecharunt',
  'Pelipper',
  'Perrserker',
  'Persian',
  'Alolan Persian',
  'Petilil',
  'Phanpy',
  'Phantump',
  'Pheromosa',
  'Phione',
  'Pichu',
  'Pidgeot',
  'Mega Pidgeot',
  'Pidgeotto',
  'Pidgey',
  'Pidove',
  'Pignite',
  'Pikachu',
  'Pikipek',
  'Piloswine',
  'Pincurchin',
  'Pineco',
  'Pinsir',
  'Mega Pinsir',
  'Piplup',
  'Plusle',
  'Poipole',
  'Politoed',
  'Poliwag',
  'Poliwhirl',
  'Poliwrath',
  'Poltchageist',
  'Polteageist',
  'Ponyta',
  'Galarian Ponyta',
  'Poochyena',
  'Popplio',
  'Porygon',
  'Porygon-Z',
  'Porygon2',
  'Primarina',
  'Primeape',
  'Prinplup',
  'Probopass',
  'Psyduck',
  'Pumpkaboo',
  'Pupitar',
  'Purrloin',
  'Purugly',
  'Pyroar',
  'Pyukumuku',
  'Quagsire',
  'Quaquaval',
  'Quaxly',
  'Quaxwell',
  'Quilava',
  'Quilladin',
  'Qwilfish',
  'Hisuian Qwilfish',
  'Raboot',
  'Rabsca',
  'Raging Bolt',
  'Raichu',
  'Alolan Raichu',
  'Raikou',
  'Ralts',
  'Rampardos',
  'Rapidash',
  'Galarian Rapidash',
  'Raticate',
  'Alolan Raticate',
  'Rattata',
  'Alolan Rattata',
  'Rayquaza',
  'Mega Rayquaza',
  'Regice',
  'Regidrago',
  'Regieleki',
  'Regigigas',
  'Regirock',
  'Registeel',
  'Relicanth',
  'Rellor',
  'Remoraid',
  'Reshiram',
  'Reuniclus',
  'Revavroom',
  'Rhydon',
  'Rhyhorn',
  'Rhyperior',
  'Ribombee',
  'Rillaboom',
  'Riolu',
  'Roaring Moon',
  'Rockruff',
  'Own Tempo Rockruff',
  'Roggenrola',
  'Rolycoly',
  'Rookidee',
  'Roselia',
  'Roserade',
  'Rotom',
  'Heat Rotom',
  'Wash Rotom',
  'Frost Rotom',
  'Fan Rotom',
  'Mow Rotom',
  'Rowlet',
  'Rufflet',
  'Runerigus',
  'Sableye',
  'Mega Sableye',
  'Salamence',
  'Mega Salamence',
  'Salandit',
  'Salazzle',
  'Samurott',
  'Hisuian Samurott',
  'Sandaconda',
  'Sandile',
  'Sandshrew',
  'Alolan Sandshrew',
  'Sandslash',
  'Alolan Sandslash',
  'Sandy Shocks',
  'Sandygast',
  'Sawk',
  'Sawsbuck',
  'Scatterbug',
  'Sceptile',
  'Mega Sceptile',
  'Scizor',
  'Mega Scizor',
  'Scolipede',
  'Scorbunny',
  'Scovillain',
  'Scrafty',
  'Scraggy',
  'Scream Tail',
  'Scyther',
  'Seadra',
  'Seaking',
  'Sealeo',
  'Seedot',
  'Seel',
  'Seismitoad',
  'Sentret',
  'Serperior',
  'Servine',
  'Seviper',
  'Sewaddle',
  'Sharpedo',
  'Mega Sharpedo',
  'Shaymin Land Forme',
  'Shaymin Sky Forme',
  'Shedinja',
  'Shelgon',
  'Shellder',
  'Shellos',
  'Shelmet',
  'Shieldon',
  'Shiftry',
  'Shiinotic',
  'Shinx',
  'Shroodle',
  'Shroomish',
  'Shuckle',
  'Shuppet',
  'Sigilyph',
  'Silcoon',
  'Silicobra',
  'Silvally',
  'Simipour',
  'Simisage',
  'Simisear',
  'Sinistcha',
  'Sinistea',
  "Sirfetch'd",
  'Sizzlipede',
  'Skarmory',
  'Skeledirge',
  'Skiddo',
  'Skiploom',
  'Skitty',
  'Skorupi',
  'Skrelp',
  'Skuntank',
  'Skwovet',
  'Slaking',
  'Slakoth',
  'Sliggoo',
  'Hisuian Sliggoo',
  'Slither Wing',
  'Slowbro',
  'Mega Slowbro',
  'Galarian Slowbro',
  'Slowking',
  'Galarian Slowking',
  'Slowpoke',
  'Galarian Slowpoke',
  'Slugma',
  'Slurpuff',
  'Smeargle',
  'Smoliv',
  'Smoochum',
  'Sneasel',
  'Hisuian Sneasel',
  'Sneasler',
  'Snivy',
  'Snom',
  'Snorlax',
  'Snorunt',
  'Snover',
  'Snubbull',
  'Sobble',
  'Solgaleo',
  'Solosis',
  'Solrock',
  'Spearow',
  'Spectrier',
  'Spewpa',
  'Spheal',
  'Spidops',
  'Spinarak',
  'Spinda',
  'Spiritomb',
  'Spoink',
  'Sprigatito',
  'Spritzee',
  'Squawkabilly Green Plumage',
  'Squawkabilly Blue Plumage',
  'Squawkabilly Yellow Plumage',
  'Squawkabilly White Plumage',
  'Squirtle',
  'Stakataka',
  'Stantler',
  'Staraptor',
  'Staravia',
  'Starly',
  'Starmie',
  'Staryu',
  'Steelix',
  'Mega Steelix',
  'Steenee',
  'Stonjourner',
  'Stoutland',
  'Stufful',
  'Stunfisk',
  'Galarian Stunfisk',
  'Stunky',
  'Sudowoodo',
  'Suicune',
  'Sunflora',
  'Sunkern',
  'Surskit',
  'Swablu',
  'Swadloon',
  'Swalot',
  'Swampert',
  'Mega Swampert',
  'Swanna',
  'Swellow',
  'Swinub',
  'Swirlix',
  'Swoobat',
  'Sylveon',
  'Tadbulb',
  'Taillow',
  'Talonflame',
  'Tandemaus',
  'Tangela',
  'Tangrowth',
  'Tapu Bulu',
  'Tapu Fini',
  'Tapu Koko',
  'Tapu Lele',
  'Tarountula',
  'Tatsugiri Curly Form',
  'Tatsugiri Droopy Form',
  'Tatsugiri Stretchy Form',
  'Tauros',
  'Tauros Combat Breed',
  'Tauros Blaze Breed',
  'Tauros Aqua Breed',
  'Teddiursa',
  'Tentacool',
  'Tentacruel',
  'Tepig',
  'Terapagos Normal Form',
  'Terapagos Terastal Form',
  'Terapagos Stellar Form',
  'Terrakion',
  'Thievul',
  'Throh',
  'Thundurus Incarnate Forme',
  'Thundurus Therian Forme',
  'Thwackey',
  'Timburr',
  'Ting-Lu',
  'Tinkatink',
  'Tinkaton',
  'Tinkatuff',
  'Tirtouga',
  'Toedscool',
  'Toedscruel',
  'Togedemaru',
  'Togekiss',
  'Togepi',
  'Togetic',
  'Torchic',
  'Torkoal',
  'Tornadus Incarnate Forme',
  'Tornadus Therian Forme',
  'Torracat',
  'Torterra',
  'Totodile',
  'Toucannon',
  'Toxapex',
  'Toxel',
  'Toxicroak',
  'Toxtricity Amped Form',
  'Toxtricity Low Key Form',
  'Tranquill',
  'Trapinch',
  'Treecko',
  'Trevenant',
  'Tropius',
  'Trubbish',
  'Trumbeak',
  'Tsareena',
  'Turtonator',
  'Turtwig',
  'Tympole',
  'Tynamo',
  'Type: Null',
  'Typhlosion',
  'Hisuian Typhlosion',
  'Tyranitar',
  'Mega Tyranitar',
  'Tyrantrum',
  'Tyrogue',
  'Tyrunt',
  'Umbreon',
  'Unfezant',
  'Unown',
  'Ursaluna',
  'Ursaluna Bloodmoon',
  'Ursaring',
  'Urshifu Single Strike Style',
  'Urshifu Rapid Strike Style',
  'Uxie',
  'Vanillish',
  'Vanillite',
  'Vanilluxe',
  'Vaporeon',
  'Varoom',
  'Veluza',
  'Venipede',
  'Venomoth',
  'Venonat',
  'Venusaur',
  'Mega Venusaur',
  'Vespiquen',
  'Vibrava',
  'Victini',
  'Victreebel',
  'Vigoroth',
  'Vikavolt',
  'Vileplume',
  'Virizion',
  'Vivillon',
  'Volbeat',
  'Volcanion',
  'Volcarona',
  'Voltorb',
  'Hisuian Voltorb',
  'Vullaby',
  'Vulpix',
  'Alolan Vulpix',
  'Wailmer',
  'Wailord',
  'Walking Wake',
  'Walrein',
  'Wartortle',
  'Watchog',
  'Wattrel',
  'Weavile',
  'Weedle',
  'Weepinbell',
  'Weezing',
  'Galarian Weezing',
  'Whimsicott',
  'Whirlipede',
  'Whiscash',
  'Whismur',
  'Wigglytuff',
  'Wiglett',
  'Wimpod',
  'Wingull',
  'Wishiwashi Solo Form',
  'Wishiwashi School Form',
  'Wo-Chien',
  'Wobbuffet',
  'Woobat',
  'Wooloo',
  'Wooper',
  'Paldean Wooper',
  'Wormadam Plant Cloak',
  'Wormadam Sandy Cloak',
  'Wormadam Trash Cloak',
  'Wugtrio',
  'Wurmple',
  'Wynaut',
  'Wyrdeer',
  'Xatu',
  'Xerneas',
  'Xurkitree',
  'Yamask',
  'Galarian Yamask',
  'Yamper',
  'Yanma',
  'Yanmega',
  'Yungoos',
  'Yveltal',
  'Zacian Hero of Many Battles',
  'Zacian Crowned Sword',
  'Zamazenta Hero of Many Battles',
  'Zamazenta Crowned Shield',
  'Zangoose',
  'Zapdos',
  'Galarian Zapdos',
  'Zarude',
  'Zebstrika',
  'Zekrom',
  'Zeraora',
  'Zigzagoon',
  'Galarian Zigzagoon',
  'Zoroark',
  'Hisuian Zoroark',
  'Zorua',
  'Hisuian Zorua',
  'Zubat',
  'Zweilous',
  'Zygarde 50% Forme',
  'Zygarde 10% Forme',
  'Zygarde Complete Forme',
];
