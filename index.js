// NODE

const express = require('express');
require('dotenv').config();
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');


const app = express();
const PORT = 3000;

//Conexión a la Base de Datos
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

conexion.connect((err) => {
    if (err) {
        console.error(`Error en la conexión: ${err.stack}`)
        return;
    }
    console.log(`Conectado a la Base de Datos ${process.env.DATABASE}`);
}); 


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res, next) => {
    res.render('index', {
        titulo: 'Home',
        style: 'styles.css',
        pagetitle: 'Pokemon',
        icon: 'img/RcIcons/rawpb.png'
    })
});

// POKEDEX ROUTES

app.get('/kanto', (req, res) => {
    res.render('pokedex/kanto', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Kanto Pokedex',
        icon: 'img/pokedex/pki.png',
        funcMon: 'kantomegason()',
        funcMoff: 'kantomegasoff()',
        funcRFon: 'kantoregon()',
        funcRFoff: 'kantoregoff()',
        funcCFon: 'kantocombon()',
        funcCFoff: 'kantocomboff()'
    })
}); 

app.get('/jhoto', (req, res) => {
    res.render('pokedex/jhoto', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Jhoto Pokedex',
        icon: 'img/pokedex/pki2.png',
        funcMon: 'jhotomegason()',
        funcMoff: 'jhotomegasoff()',
        funcRFon: 'jhotoregon()',
        funcRFoff: 'jhotoregoff()',
    })
}); 

app.get('/hoenn', (req, res) => {
    res.render('pokedex/hoenn', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Hoenn Pokedex',
        icon: 'img/pokedex/pki3.png',
        funcMon: 'hoennmegason()',
        funcMoff: 'hoennmegasoff()',
        funcRFon: 'hoennregon()',
        funcRFoff: 'hoennregoff()',
        funcCFon: 'hoenncombon()',
        funcCFoff: 'hoenncomboff()'
    })
}); 

app.get('/sinnoh', (req, res) => {
    res.render('pokedex/sinnoh', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Sinnoh Pokedex',
        icon: 'img/pokedex/pki4.png',
        funcMon: 'sinnohmegason()',
        funcMoff: 'sinnohmegasoff()',
        funcCFon: 'sinnohcombon()',
        funcCFoff: 'sinnohcomboff()'
    })
}); 

app.get('/teselia', (req, res) => {
    res.render('pokedex/teselia', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Teselia Pokedex',
        icon: 'img/pokedex/pki5.png',
        funcMon: 'teseliamegason()',
        funcMoff: 'teseliamegasoff()',
        funcRFon: 'teseliaregon()',
        funcRFoff: 'teseliaregoff()',
        funcCFon: 'teseliacombon()',
        funcCFoff: 'teseliacomboff()'
    })
}); 

app.get('/kalos', (req, res) => {
    res.render('pokedex/kalos', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Kalos Pokedex',
        icon: 'img/pokedex/pki6.png',
        funcMon: 'kalosmegason()',
        funcMoff: 'kalosmegasoff()',
        funcRFon: 'kalosregon()',
        funcRFoff: 'kalosregoff()',
        funcCFon: 'kaloscombon()',
        funcCFoff: 'kaloscombof()'
    })
}); 

app.get('/alola', (req, res) => {
    res.render('pokedex/alola', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Alola Pokedex',
        icon: 'img/pokedex/pki7.png',
        funcRFon: 'alolaregon()',
        funcRFoff: 'alolaregoff()',
        funcCFon: 'alolacombon()',
        funcCFoff: 'alolacomboff()'
    })
}); 

app.get('/galar', (req, res) => {
    res.render('pokedex/galar', {
        style: 'pokedex-style.css',
        pagetitle: 'Pokemon | Galar Pokedex',
        icon: 'img/pokedex/pki8.png',
        funcCFon: 'galarcombon()',
        funcCFoff: 'galarcomboff()'
    })
}); 

app.get('/random', (req, res) => {
    res.render('pokedex/random', {
        style: 'pokedex-style.css',
        style: 'random.css',
        pagetitle: 'Pokemon | Random Pokedex',
        icon: 'img/pokedex/pkir.png'
    })
}); 
// TYPE ROUTES

app.get('/bug', (req, res) => {
    res.render('typespoke/bug', {
        titulo: 'BUG TYPE',
        style: 'type.css',
        pagetitle: 'Pokemon | Bug Type',
        icon: 'img/iconType/header-icons/bug.png'
    })
}); 

app.get('/dark', (req, res) => {
    res.render('typespoke/dark', {
        titulo: 'DARK TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Dark Type',
        icon: 'img/iconType/header-icons/dark.png'
    })
}); 

app.get('/dragon', (req, res) => {
    res.render('typespoke/dragon', {
        titulo: 'DRAGON TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Dragon Type',
        icon: 'img/iconType/header-icons/dragon.png'
    })
}); 

app.get('/electric', (req, res) => {
    res.render('typespoke/electric', {
        titulo: 'ELECTRIC TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Electric Type',
        icon: 'img/iconType/header-icons/electric.png'
    })
}); 

app.get('/fairy', (req, res) => {
    res.render('typespoke/fairy', {
        titulo: 'FAIRY TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Fairy Type',
        icon: 'img/iconType/header-icons/fairy.png'
    })
}); 

app.get('/fight', (req, res) => {
    res.render('typespoke/fight', {
        titulo: 'FIGHT TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Fight Type',
        icon: 'img/iconType/header-icons/fight.png'
    })
}); 

app.get('/fire', (req, res) => {
    res.render('typespoke/fire', {
        titulo: 'FIRE TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Fire Type',
        icon: 'img/iconType/header-icons/fire.png'
    })
}); 

app.get('/fly', (req, res) => {
    res.render('typespoke/fly', {
        titulo: 'FLY TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Fly Type',
        icon: 'img/iconType/header-icons/fly.png'
    })
}); 

app.get('/ghost', (req, res) => {
    res.render('typespoke/ghost', {
        titulo: 'GHOST TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Ghost Type',
        icon: 'img/iconType/header-icons/ghost.png'
    })
}); 

app.get('/grass', (req, res) => {
    res.render('typespoke/grass', {
        titulo: 'GRASS TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Grass Type',
        icon: 'img/iconType/header-icons/grass.png'
    })
}); 

app.get('/ground', (req, res) => {
    res.render('typespoke/ground', {
        titulo: 'GROUND TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Ground Type',
        icon: 'img/iconType/header-icons/ground.png'
    })
}); 

app.get('/ice', (req, res) => {
    res.render('typespoke/ice', {
        titulo: 'ICE TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Ice Type',
        icon: 'img/iconType/header-icons/ice.png'
    })
}); 

app.get('/normal', (req, res) => {
    res.render('typespoke/normal', {
        titulo: 'NORMAL TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Normal Type',
        icon: 'img/iconType/header-icons/normal.png'
    })
}); 

app.get('/poison', (req, res) => {
    res.render('typespoke/poison', {
        titulo: 'POISON TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Poison Type',
        icon: 'img/iconType/header-icons/poison.png'
    })
}); 

app.get('/psychic', (req, res) => {
    res.render('typespoke/psychic', {
        titulo: 'PSYCHIC TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Psychic Type',
        icon: 'img/iconType/header-icons/psychic.png'
    })
}); 

app.get('/rock', (req, res) => {
    res.render('typespoke/rock', {
        titulo: 'ROCK TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Rock Type',
        icon: 'img/iconType/header-icons/rock.png'
    })
}); 

app.get('/steel', (req, res) => {
    res.render('typespoke/steel', {
        titulo: 'STEEL TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Steel Type',
        icon: 'img/iconType/header-icons/steel.png'
    })
}); 

app.get('/water', (req, res) => {
    res.render('typespoke/water', {
        titulo: 'WATER TYPE',
        style: 'types-style.css',
        pagetitle: 'Pokemon | Water Type',
        icon: 'img/iconType/header-icons/water.png'
    })
}); 

// Footer Menus

app.get('/dexfootmenu', (req, res) => {
    res.render('dexfootmenu', {
        pagetitle: 'Pokemon | Pokedex Menu',
        icon: 'img/RcIcons/rawpb.png'
    })
}); 

app.get('/typefootmenu', (req, res) => {
    res.render('typefootmenu', {
        pagetitle: 'Pokemon | Type Menu',
        icon: 'img/RcIcons/rawpb.png'
    })
}); 

// HOME LOGIN FORM
app.get('/form', (req, res) => {
    res.render('form', {
        pagetitle: 'Pokemon | Register',
        icon: 'img/RcIcons/rawpb.png'
    })
}); 


//DATABASE CONNECTION

app.get('/formulario', (req, res) => {
    res.render('formulario', {
        titulo: 'Pokemon Form',
        style: 'form.css'
    })
});

app.get('/pokemons', (req, res) => {

     let sql = 'SELECT * FROM poketest'

    conexion.query(sql, (err, result) => {
        if (err) throw err;
                res.render('pokemons', {
                titulo: 'Pokemon List',
                results: result,
        });
    });
});

app.post ('/formulario', (req, res) => {

    const { nombrepokemon, tipo } = req.body;

    console.log(nombrepokemon, tipo);

    if (nombrepokemon == '' || tipo == '') {
        let validacion = 'Rellene los campos';
        res.render('formulario', {
            titulo: 'Pokemon Form',
            validacion
        });
    } else {

        let datos= {
            nombrepokemon: nombrepokemon,
            tipo: tipo
        };

        let sql = 'INSERT INTO poketest SET ?'

            conexion.query(sql, datos, (err, result) => {
            if (err) throw err;
            res.render('formulario', {
                titulo: 'Pokemon Form'
            });
        });
    }
});

app.get('/form', (req, res) => {
    res.render('form', {
        pagetitle: 'Pokemon | Register',
        icon: 'img/RcIcons/rawpb.png'
    })
}); 

app.post('/form', (req, res) => {
    const { nombre, email } = req.body;

        res.render('enviado', {
            pagetitle: 'Pokemon | Register',
            icon: 'img/RcIcons/rawpb.png',
            email: email
        });

        console.log(nombre);
        console.log(email);
})
        

app.listen(PORT, ()=> {
    console.log(`el servidor esta trabajando en el puerto ${PORT}`)
	console.log(`Por el momento funciona `);
})  
