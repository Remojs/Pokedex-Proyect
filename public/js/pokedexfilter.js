//Filter Functions

let classgive = (poke, giveclass) => {
	let i = document.getElementById(poke);
    i.className += giveclass;
};

let classremove = (poke, removeclass) => {
	let i = document.getElementById(poke).classList.remove(removeclass) 
}

let on = (clas, arr) => {
	for (let poke of arr){
		classgive(poke, clas)
	}
};

let off = (clas, arr) => {
	for (let poke of arr){
		classremove(poke, clas)
	}
};

//Pokemon Arrays

const kantoMegas= [
    'megavenusaur', 'megacharizardy', 'megacharizardx', 
	'megablastoise', 'megabeedrill', 'megapidgeot', 
	'megaslowbro', 'megagengar', 'megakangaskhan', 
	'megapinsir', 'megagyarados', 'megaaerodactyl', 
	'megamewtwox', 'megamewtwoy'
];

const kantoReg = [ 
    'rattataA', 'raticateA', 'raichuA', 'sandslashA', 
    'sandshrewA','vulpixA', 'ninetalesA', 'diglettA', 
	'dugtrioA', 'meowthA', 'meowthG', 'persianA', 
	'growlitheH', 'arcanineH', 'geodudeA', 'gravelerA', 
	'golemA', 'ponytaG', 'rapidashG', 'slowpokeG',
	'slowbroG', 'farfetchdG', 'grimerA', 'mukA', 
	'voltorbH', 'electrodeH', 'exeggutorA', 'marowakA',
	'weezingG', 'mrmimeG', 'articunoG', 'zapdosG', 'moltresG'
];

const kantoDmax = [
    'charizarddmax', 'venusaurdmax', 'blastoisedmax',
    'butterfreedmax', 'machampdmax', 'snorlaxdmax',
    'laprasdmax', 'eeveedmax', 'pikachudmax',
    'meowthdmax', 'gengardmax', 'kinglerdmax' 
];

const jhotoMegas = [
    'megaampharos', 'megascizor', 'megasteelix', 
    'megahoundoom', 'megatyranitar', 'megaheracross'
];

const jhotoReg = [
    'typhlosionH', 'slowkingG', 'corsolaG', 
    'qwilfishH', 'sneaselH', 'wooperP'
];

const hoennMegas = [
    'megablaziken', 'megaswampert', 'megasceptile', 'megagardevoir', 
    'megasableye', 'megamawile','megaaggron', 'megamedicham', 
    'megamanectric', 'megabanette', 'megaabsol', 'megasharpedo', 
    'megarayquaza','megacamerupt', 'megaglalie', 'megasalamence', 
    'megaaltaria', 'megametagross', 'megalatias', 'megalatios'
];

const hoennReg = ['zigzagoonG', 'linooneG'];

const hoennComb = ['kyogrePF', 'groudonPF', 'deoxysSF', 'deoxysAF', 'deoxysDF', 'castformRF', 'castformSnF', 'castformSwF'];

const sinnohMegas = ['megalucario', 'megagarchomp', 'megaabomasnow', 'megagallade', 'megalopunny'];

const sinnohAlter = ['shellosES', 'gastrodonES'];

const sinnohComb = [
    'burmySF', 'burmyTF', 'wormadamSF', 
    'wormadamTF', 'cherrimSF', 'rotomHF', 
    'rotomWF', 'rotomCoF', 'rotomFF', 
    'rotomCuF', 'dialgaOF', 'palkiaOF', 
    'giratinaOF', 'shayminSF' 
];

const teseliaMegas = ['megaaudino'];

const teseliaReg = [
    'samurottH', 'lilligantH', 'zoruaH', 'zoroarkH', 
    'braviaryH', 'darumakaG', 'darmanitanG', 
    'yamaskG', 'stunfiskG'
];

const teseliaAlter = [
    'basculinBF', 'basculinWF','deerlingWF',
    'deerlingAF', 'deerlingSF', 'sawsbuckWF',
    'sawsbuckAF', 'sawsbuckSF'
    ];

const teseliaComb = [
    'darmanitanZF', 'thundurusTF', 'landorusTF', 'tornadusTF', 
    'kyuremWF', 'kyuremBF', 'meloettaPF', 'keldeoRF', 'garbodordmax'
];

const kalosMegas = ['megadiancie', 'ashgreninja'];

const kalosReg = ['sliggooH', 'goodraH', 'avaluggH' ];

const kalosAlter = ['vivillonCW', 'vivillonOW', 'vivillonOrW', 'vivillonMW', 'vivillonSW', 'vivillonOaW'];

const kalosComb = ['aegislashSF', 'zygardeIF', 'zygardeCF', 'hoopaUF'];

const alolaReg = ['decidueyeH'];

const alolaDmax = ['melmetaldmax'];

const alolaComb = [
    'oricorioPPF', 'oricorioPF', 'oricorioSF', 
    'lycanrockMF', 'lycanrockDF', 'necrozmaDMF', 
    'necrozmaDWF', 'necrozmaUF', 'miniorCF', 'wishiwashiSF'
];

const galarDmax = [
    'rillaboomdmax', 'cinderancedmax', 'inteleondmax', 
    'corviknightdmax', 'drednawdmax', 'orbeetledmax', 
    'coalossaldmax', 'appletundmax', 'sandacondadmax', 
    'toxtricitydmax', 'centiskorchdmax', 'hatterenedmax', 
    'grimmsnarldmax', 'alcremiedmax', 'copperajahdmax', 
    'duraludondmax', 'urshifudmax', 'urshifudmax2'
];

const galarComb = [
    'toxtricityAF', 'zacianSwF', 'zamazentaShF',
    'urshifuRS', 'calyrexIR', 'calyrexSR',
    'enamorusTF', 'morpekoHM', 'eternatusID'
];

// Button Functions

    //Kanto
let kantomegason = () => {
	on(' mega-on', kantoMegas)
};

let kantomegasoff = () => {
	off('mega-on', kantoMegas)
};

let kantoregon = () => {
    on(' regForm-on', kantoReg)
};

let kantoregoff = () => {
    off('regForm-on', kantoReg)
};

let kantocombon = () => {
    on(' dmax-on', kantoDmax)
};

let kantocomboff = () => {
    off('dmax-on', kantoDmax)
};


    //Jhoto
let jhotomegason = () => {
    on(' mega-on', jhotoMegas)
};

let jhotomegasoff = () => {
    off('mega-on', jhotoMegas)
};

function jhotoregon(){
    on(' regForm-on', jhotoReg)
};

function jhotoregoff(){
    off('regForm-on', jhotoReg)
};

    //Hoenn
let hoennmegason = () => {
    on(' mega-on', hoennMegas)
};

let hoennmegasoff = () => {
    off('mega-on', hoennMegas)
};

let hoennregon = () => {
    on(' regForm-on', hoennReg)
};
let hoennregoff = () => {
    off('regForm-on', hoennReg)
}

let hoenncombon = () => {
    on(' combatForm-on', hoennComb)
};

let hoenncomboff = () => {
    off('combatForm-on', hoennComb)
};

    //Sinnoh 

let sinnohmegason = () => {
    on(' mega-on', sinnohMegas)
};

let sinnohmegasoff = () => {
    off('mega-on', sinnohMegas)
};

let sinnohcombon = () => {
    on(' combatForm-on', sinnohComb)
    on(' alter-on', sinnohAlter)
};

let sinnohcomboff = () => {
    off('combatForm-on', sinnohComb)
    off(' alter-on', sinnohAlter)
};

    //Teselia


let teseliamegason = () =>{
    on(' mega-on', teseliaMegas)
}

let teseliamegasoff = () =>{
    off('mega-on', teseliaMegas)
}

let teseliaregon = () =>{
    on(' regForm-on', teseliaReg)
    on(' alter-on', teseliaAlter)
}

let teseliaregoff = () =>{
    off('regForm-on', teseliaReg)
    off('alter-on', teseliaAlter)
}

let teseliacombon = () =>{
    on(' combatForm-on', teseliaComb)
}

let teseliacomboff = () =>{
    off('combatForm-on', teseliaComb)
}

    //Kalos


let kalosmegason = () => {
    on(' mega-on', kalosMegas)
}

let kalosmegasoff = () => {
    off('mega-on', kalosMegas)
}

let kalosregon = () => {
    on(' regForm-on', kalosReg)
    on(' alter-on', kalosAlter)
}

let kalosregoff = () => {
    off('regForm-on', kalosReg)
    off(' alter-on', kalosAlter)
}

let kaloscombon = () => {
    on(' combatForm-on', kalosComb)
}

let kaloscomboff = () => {
    off('combatForm-on', kalosComb)
}

    //Alola


let alolaregon = () =>{
    on(' regForm-on', alolaReg)
}

let alolaregoff = () =>{
    off(' regForm-on', alolaReg)
}

let alolacombon = () =>{
    on(' combatForm-on', alolaComb)
    on(' dmax-on', alolaDmax)
}

let alolacomboff = () =>{
    off(' combatForm-on', alolaComb)
    off('dmax-on', alolaDmax)
}

    //Galar

    let galarcombon = () =>{
        on(' combatForm-on', galarComb)
        on(' dmax-on', galarDmax)
    }

    let galarcomboff = () =>{
        off('combatForm-on', galarComb)
        off('dmax-on', galarDmax)
    }


// header buttons

function loginform() {
	location.href = "/form";
};

function database() {
	location.href = "/formulario";
};

function table() {
	location.href = "/pokemons";
};
