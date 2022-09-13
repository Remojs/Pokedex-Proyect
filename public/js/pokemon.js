// Reload Navbar
let refresh = document.getElementById('recargar');
refresh.addEventListener('click', _ => {
            location.reload();
})

//array with the IDs of the pokemon from the pokedex
const pokedexArray = [ //1th Gen
	'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
	'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate',
	'spearow', 'fearow', 'ekans', 'arbok', 'sandshrew', 'sandslash', 'pikachu', 'raichu', 'jigglypuff', 'wigglytuff',
	'nidoranF', 'nidorina', 'nidoqueen', 'nidoranM', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales',
	'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett',
	'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag',
	'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell',
	'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro',
	'magnamite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'grimer', 'muk', 'seel', 'dewgong', 'shellder',
	'cloyster', 'gastly', 'haunter', 'gengar', 'drowzee', 'hypno', 'onix', 'krabby', 'kingler', 'voltorb',
	'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickytung', 'koffing', 'weezing',
	'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu',
	'starmie', 'mrmime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados',
	'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto',
	'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo',
	'mew', 'megavenusaur', 'megacharizardy', 'megacharizardx', 'megablastoise', 'megabeedrill', 'megapidgeot', 
	'megaslowbro', 'megagengar', 'megakangaskhan', 'megapinsir', 'megagyarados', 'megaaerodactyl', 'megamewtwox', 'megamewtwoy',
	'rattataA', 'raticateA', 'raichuA', 'sandslashA', 'sandshrewA','vulpixA', 'ninetalesA', 'diglettA', 
	'dugtrioA', 'meowthA', 'meowthG', 'persianA', 'growlitheH', 'arcanineH', 'geodudeA', 'gravelerA', 
	'golemA', 'ponytaG', 'rapidashG', 'slowpokeG', 'slowbroG', 'farfetchdG', 'grimerA', 'mukA', 
	'voltorbH', 'electrodeH', 'exeggutorA', 'marowakA', 'weezingG', 'mrmimeG', 'articunoG', 'zapdosG', 'moltresG',
	'charizarddmax', 'venusaurdmax', 'blastoisedmax', 'butterfreedmax', 'machampdmax', 'snorlaxdmax',
	'laprasdmax', 'eeveedmax', 'pikachudmax', 'meowthdmax', 'gengardmax', 'kinglerdmax', 
	//2nd Gen
	'chikorita', 'bayleef', 'meganium', 'cyndaquil', 'quilava', 'typhlosion', 'totodile', 'croconaw', 'feraligatr', 'sentret', 
	'furret', 'hoothoot', 'noctowl', 'ledyba', 'ledian', 'spinarak', 'ariados', 'crobat', 'chinchou', 'lanturn',
	'pichu', 'cleffa', 'igglybuff', 'togepi', 'togetic', 'natu', 'xatu', 'mareep', 'flaaffy', 'ampharos',
	'bellossom', 'marill', 'azumarill', 'sudowoodo', 'politoed', 'hoppip', 'skiploom', 'jumpluff', 'aipom', 'sunkern',
	'sunflora', 'yanma', 'wooper', 'quagsire', 'espeon', 'umbreon', 'murkrow', 'slowking', 'misdreavus', 'unown',
	'wobbuffet', 'girafarig', 'pineco', 'forretress', 'dunsparce', 'gligar', 'steelix', 'snubbull', 'granbull', 'qwilfish',
	'scizor', 'shuckle', 'heracross', 'sneasel', 'teddiursa', 'ursaring', 'slugma', 'magcargo', 'swinub', 'piloswine',
	'corsola', 'remoraid', 'octillery', 'delibird', 'mantine', 'skarmory', 'houndour', 'houndoom', 'kingdra', 'phanpy',
	'donphan', 'porygon2', 'stantler', 'smeargle', 'tyrogue', 'hitmontop', 'smoochum', 'elekid', 'magby', 'miltank',
	'blissey', 'raikou', 'entei', 'suicune', 'larvitar', 'pupitar', 'tyranitar', 'hooh', 'lugia', 'celebi',
	'megaampharos', 'megascizor', 'megasteelix', 'megahoundoom', 'megatyranitar', 'megaheracross', 'typhlosionH', 
	'slowkingG', 'corsolaG', 'qwilfishH', 'sneaselH', 'wooperP',
	//3rd Gen
	'treecko', 'grovyle', 'sceptile', 'torchic', 'combusken', 'blaziken', 'mudkip', 'marshtomp', 'swampert', 'poochyena',
	'mightyena', 'zigzagoon', 'linoone', 'wurmple', 'silcoon', 'beautifly', 'cascoon', 'dustox', 'lotad', 'lombre',
	'ludicolo', 'seedot', 'nuzleaf', 'shiftry', 'taillow', 'swellow', 'wingull', 'pelipper', 'ralts', 'kirlia',
	'gardevoir', 'surskit', 'masquerain', 'shroomish', 'breloom', 'slakoth', 'vigoroth', 'slaking', 'nincada', 'ninjask',
	'shedinja', 'whismur', 'loudred', 'exploud', 'makuhita', 'hariyama', 'azurill', 'nosepass', 'skitty', 'delcatty',
	'sableye', 'mawile', 'aron', 'lairon', 'aggron', 'meditite', 'medicham', 'electrike', 'manectric', 'plusle',
	'minun', 'volbeat', 'illumise', 'roselia', 'gulpin', 'swalot', 'carvanha', 'sharpedo', 'wailmer', 'wailord',
	'numel', 'camerupt', 'torkoal', 'spinda', 'spoink', 'grumpig', 'trapinch', 'vibrava', 'flygon', 'cacnea',
	'cacturne', 'swablu', 'altaria', 'zangoose', 'seviper', 'lunatone', 'solrock', 'barboach', 'whiscash', 'corphish',
	'crawdaunt', 'baltoy', 'claydol', 'lileep', 'cradily', 'anorith', 'armaldo', 'feebas', 'milotic', 'castform',
	'kecleon', 'shuppet', 'banette', 'duskull', 'dusclops', 'tropius', 'chimecho', 'absol', 'wynaut', 'snorunt',
	'glalie', 'spheal', 'sealeo', 'walrein', 'clamperl', 'huntail', 'gorebyss', 'relicanth', 'luvdisc', 'bagon',
	'shelgon', 'salamence', 'beldum', 'metang', 'metagross', 'regirock', 'regice', 'registeel', 'latias', 'latios',
	'kyogre', 'groudon', 'rayquaza', 'jirachi', 'deoxys', 'megablaziken', 'megaswampert', 'megasceptile', 'megagardevoir', 
    'megasableye', 'megamawile','megaaggron', 'megamedicham', 'megamanectric', 'megabanette', 'megaabsol', 'megasharpedo', 
    'megarayquaza','megacamerupt', 'megaglalie', 'megasalamence', 'megaaltaria', 'megametagross', 'megalatias', 'megalatios',
	'kyogrePF', 'groudonPF', 'deoxysSF', 'deoxysAF', 'deoxysDF', 'castformRF', 'castformSnF', 'castformSwF','zigzagoonG', 'linooneG',
	//4th Gen
	'turtwig', 'grotle', 'torterra', 'chimchar', 'monferno', 'infernape', 'piplup', 'prinplup', 'empoleon', 'starly',
	'staraptor', 'staravia', 'bidoof', 'bibarel', 'kricketot', 'kricketune', 'shinx', 'luxio', 'luxray', 'budew',
	'roserade', 'cranidos', 'rampardos', 'shelgon', 'bastiodon', 'burmy', 'wormadam', 'mothim', 'combee', 'vespiqueen',
	'pachirisu', 'buizel', 'floatzel', 'cherubi', 'cherrim', 'shellos', 'gastrodon', 'ambipom', 'drifloon', 'drifblim',
	'buneary', 'lopunny', 'mismagius', 'honchkrow', 'glameow', 'purugly', 'chingling', 'stunky', 'skuntank', 'bronzor',
	'bronzong', 'bonsly', 'mimejr', 'happiny', 'chatot', 'spiritomb', 'gible', 'gabite', 'garchomp', 'munchlax',
	'riolu', 'lucario', 'hippopotas', 'hippowdon', 'skorupi', 'drapion', 'croagunk', 'toxicroak', 'carnivine', 'finneon',
	'lumineon', 'mantine', 'snover', 'abomasnow', 'weavile', 'magnezone', 'lickilicky', 'rhyperior', 'tangrowth', 'electrivire',
	'magmortar', 'togekiss', 'yanmega', 'leafeon', 'glaceon', 'gliscor', 'mamoswine', 'porygonz', 'gallade', 'probopass',
	'dusknoir', 'froslass', 'rotom', 'uxie', 'mesprit', 'azelf', 'dialga', 'palkia', 'heatran', 'regigigas',
	'giratina', 'cresselia', 'phione', 'manaphy', 'darkrai', 'shaymin', 'arceus', 'victini', 'megalucario', 
	'megagarchomp', 'megaabomasnow', 'megagallade', 'megalopunny', 'burmySF', 'burmyTF', 'wormadamSF', 
    'wormadamTF', 'cherrimSF', 'rotomHF', 'rotomWF', 'rotomCoF', 'rotomFF', 'rotomCuF', 'dialgaOF', 'palkiaOF', 
    'giratinaOF', 'shayminSF',
	//5th Gen
	'snivy', 'servine', 'serperior', 'tepig', 'pignite', 'emboar', 'oshawott', 'dewott', 'samurott', 'patrat',
	'watchog', 'lillipup', 'herdier', 'stoutland', 'purrloin', 'liepard', 'pansage', 'simisage', 'pansear', 'simisear',
	'panpour', 'simipour', 'munna', 'musharna', 'pidove', 'tranquill', 'unfezant', 'blitzle', 'zebstrika', 'roggenrola',
	'boldore', 'gigalith', 'woobat', 'swoobat', 'drilbur', 'excadrill', 'audino', 'timburr', 'gurdurr', 'conkeldurr',
	'tympole', 'palpitoad', 'seismitoad', 'throh', 'sawk', 'sewaddle', 'swadlon', 'leavanny', 'venipede', 'whirlipede',
	'scolipede', 'cottonee', 'whimsicott', 'petilil', 'lilligant', 'basculin', 'sandile', 'krokorok', 'krookodile', 'darumaka',
	'darmanitan', 'maractus', 'dwebble', 'crustle', 'scraggy', 'scrafty', 'sigilyph', 'yamask', 'cofagrigus', 'tirtouga',
	'carracosta', 'archen', 'archeops', 'trubbish', 'garbodor', 'zorua', 'zoroark', 'minccino', 'cinccino', 'gothita',
	'gothorita', 'gothitelle', 'solosis', 'duosion', 'reuniclus', 'ducklett', 'swanna', 'vanillite', 'vanillish', 'vanilluxe',
	'deerling', 'sawsbuck', 'emolga', 'karrablast', 'escavalier', 'foongus', 'amoonguss', 'frillish', 'jellicent', 'alomomola',
	'joltik', 'galvantula', 'ferroseed', 'ferrothorn', 'klink', 'klang', 'klinklang', 'tynamo', 'eelektrik', 'eelektross',
	'elgyem', 'beheeyem', 'litwick', 'lampent', 'chandelure', 'axew', 'fraxure', 'haxorus', 'cubchoo', 'beartic',
	'cryogonal', 'shelmet', 'accelgor', 'stunfisk', 'mienfoo', 'mienshao', 'druddigon', 'golett', 'golurk', 'pawniard',
	'bisharp', 'bouffalant', 'rufflet', 'braviary', 'vullaby', 'mandibuzz', 'heatmor', 'larvesta', 'volcarona', 'deino',
	'zweilous', 'hydreigon', 'durant', 'cobalion', 'terrakion', 'virizion', 'tornadus', 'thundurus', 'reshiram', 'zekrom',
	'landorus', 'kyurem', 'keldeo', 'meloetta', 'genesect', 'megaaudino', 'samurottH', 'lilligantH', 'zoruaH', 'zoroarkH', 
    'braviaryH', 'darumakaG', 'darmanitanG', 'yamaskG', 'stunfiskG', 'basculinBF', 'basculinWF', 'darmanitanZF', 
    'deerlingWF', 'deerlingAF', 'deerlingSF', 'sawsbuckWF', 'sawsbuckAF', 'sawsbuckSF', 'thundurusTF', 'landorusTF', 
	'tornadusTF', 'kyuremWF', 'kyuremBF', 'meloettaPF', 'keldeoRF', 
	//6th Gen
	'chespin', 'quilladin', 'chesnaught', 'fennekin', 'braixen', 'delphox', 'froakie', 'frogadier', 'greninja', 'bunnelby',
	'diggersby', 'fletchling', 'fletchinder', 'talonflame', 'scatterbug', 'spewpa', 'vivillon', 'litleo', 'pyroar', 'flabebe',
	'floette', 'florges', 'skiddo', 'gogoat', 'pancham', 'pangoro', 'furfrou', 'espurr', 'meowstic', 'honedge',
	'doublade', 'aegislash', 'spritzee', 'aromatisse', 'swirlix', 'slurpuff', 'inkay', 'malamar', 'binacle', 'barbaracle',
	'skrelp', 'dragalge', 'clauncher', 'clawitzer', 'heliolisk', 'helioptile', 'tyrunt', 'tyrantrum', 'amaura', 'aurorus',
	'sylveon', 'hawlucha', 'dedenne', 'carbink', 'goomy', 'sliggoo', 'goodra', 'klefki', 'phantump', 'trevenant',
	'pumpkaboo', 'gourgeist', 'bergmite', 'avalugg', 'noibat', 'noivern', 'xerneas', 'yveltal', 'zygarde', 'diancie',
	'hoopa', 'volcanion', 'aegislashSF', 'zygardeIF', 'zygardeCF', 'hoopaUF', 'sliggooH', 'goodraH', 'avaluggH', 'megadiancie', 'ashgreninja',
	//7th Gen
	'rowlet', 'dartrix', 'decidueye', 'litten', 'torracat', 'incineroar', 'popplio', 'brionne', 'primarina', 'pikipek',
	'trumbeak', 'toucannon', 'yungoos', 'gumshoos', 'grubbin', 'charjabug', 'vikabolt', 'crabrawler', 'crabominable', 'oricorio',
	'cutiefly', 'ribombee', 'rockruff', 'lycanroc', 'wishiwashi', 'mareanie', 'toxapek', 'mudbray', 'mudsdale', 'dewpider',
	'araquanid', 'fomantis', 'lurantis', 'morelull', 'shiinotic', 'salandit', 'salazzle', 'stufful', 'bewear', 'bounsweet',
	'steenee', 'tsareena', 'comfey', 'oranguru', 'passimian', 'wimpod', 'golisopod', 'sandygast', 'palossand', 'pyukumuku',
	'codigocero', 'silvally', 'minior', 'komala', 'turtonator', 'togedemaru', 'mimikyu', 'bruxish', 'drampa', 'dhelmise',
	'jangmoo', 'hakamoo', 'kommoo', 'tapukoko', 'tapulele', 'tapubulu', 'tapufini', 'cosmog', 'cosmoem', 'solgaleo',
	'lunala', 'nihilego', 'buzzwole', 'pheromosa', 'xurkitree', 'celesteela', 'kartana', 'guzzlord', 'necrozma', 'magearna',
	'marshadow', 'poipole', 'naganadel', 'stakataka', 'blacephalon', 'zeraora', 'meltan', 'melmetal', 'decidueyeH', 'oricorioPPF', 
	'oricorioPF', 'oricorioSF', 'lycanrockMF', 'lycanrockDF', 'necrozmaDMF', 'necrozmaDWF', 'necrozmaUF', 'miniorCF', 'wishiwashiSF',
	//8th Gen
	'grookey', 'thwackey', 'rillaboom', 'scorbunny', 'raboot', 'cinderace', 'sobble', 'drizzile', 'inteleon', 'skwovet',
	'greedent', 'rookidee', 'corvisquire', 'corviknight', 'blipbug', 'dottler', 'orbeetle', 'nickit', 'thievul', 'gossifleur',
	'eldegoss', 'wooloo', 'dubwool', 'chewtle', 'drednaw', 'yamper', 'boltund', 'rolycoly', 'carkol', 'coalossal',
	'applin', 'flapple', 'appletun', 'silicobra', 'sandaconda', 'cramorant', 'arrokuda', 'barraskewda', 'toxel', 'toxtricity',
	'sizzlipede', 'centiskorch', 'clobbopus', 'grapploct', 'sinistea', 'polteageist', 'hatenna', 'hattrem', 'hatterene', 'impidimp',
	'morgrem', 'grimmsnarl', 'obstagoon', 'perrserker', 'cursola', 'sirfetchd', 'mrrime', 'runerigus', 'milcery', 'alcremie',
	'falinks', 'pincurchin', 'snom', 'frosmoth', 'stonjourner', 'eiscue', 'indeedee', 'morpeko', 'cufant', 'copperajah',
	'dracozolt', 'arctozolt', 'dracovish', 'arctovish', 'duraludon', 'dreepy', 'drakloak', 'dragapult', 'zacian', 'zamazenta',
	'eternatus', 'kubfu', 'urshifu', 'zarude', 'regieleki', 'regidrago', 'glastrier', 'spectrier', 'calyrex', 'wyrdeer',
	'kleavor', 'ursaluna', 'basculegion', 'sneasler', 'overqwil', 'enamorus'
];

// functions
let removePokemon = (item) => {
	let i = pokedexArray.indexOf( item );
    i !== -1 && pokedexArray.splice( i, 1 );
};

let classgiver = (poke, giveclass) => {
	let i = document.getElementById(poke);
    i.className += giveclass;
};

// randomizer
let randomizer = () => {
	let i = pokedexArray[Math.floor(Math.random()*pokedexArray.length)];
	removePokemon(i);
	classgiver(i, "pokedex-view")
}

// randomizer of 6 pokemons
let count = "aaaaaa"

for(let i of count){
	randomizer();
}



