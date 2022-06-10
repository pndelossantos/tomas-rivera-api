const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const books = {
    "chato's kitchen": {
        'bookTitle': "Chato's Kitchen",
        'authorName': "Gary Soto",
        'illustratorName': "Susan Guevara"
    },
    "the farolitos of christmas": {
        'bookTitle': "The Farolitos of Christmas",
        'authorName': 'Rudolfo Anaya',
        'illustratorName': 'Edward Gonzales' 
    },
    "in my family/en mi familia": {
        'bookTitle':"In My Family/En Mi Familia",
        'authorName': 'Carmen Lomas Garza',
        'illustratorName': 'Carmen Lomas Garza'
    },
    "tomás and the library lady": {
        'bookTitle': "Tomás and the Library Lady",
        'authorName':'Pat Mora',
        'illustratorName': 'Raúl Colón'
    },
    "the three pigs/los tres cerdos: nacho, tito, and miguel": {
        'bookTitle': "The Three Pigs/Los Tres Cerdos: Nacho, Tito, and Miguel",
        'authorName': 'Bobbi Salinas',
        'illustratorName': 'Bobbi Salinas'
    },
    "my land sings: stories of the rio grande": {
        'bookTitle': "My Land Sings: Stories of the Rio Grande",
        'authorName': 'Rudolfo Anaya',
        'illustratorName': 'Amy Córdova'
    },
    "my very own room/mi propio cuartito": {
        'bookTitle': "My Very Own Room/Mi propio cuartito",
        'authorName': 'Amada Irma Pérez',
        'illustratorName': 'Maya Christina Gonzalez'
    },
    "breaking through": {
        'bookTitle': "Breaking Through",
        'authorName': 'Francisco Jiménez',
        'illustratorName':'N/A'
    },
    "a library for juana: the world of sor juana": {
        'bookTitle': "A Library for Juana: The World of Sor Juana",
        'authorName': 'Pat Mora',
        'illustratorName': 'Beatriz Vidal'
    },
    "just a minute: a trickster tale and counting book": {
        'bookTitle': "Just a Minute: A Trickster Tale and Counting Book",
        'authorName': ' Yuyi Morales',
        'illustratorName': 'Yuyi Morales'
    },
    "becoming naomi león": {
        'bookTitle': "Becoming Naomi León",
        'authorName': 'Pam Muoñz Ryan',
        'illustratorName': 'N/A'
    },
    "josé! born to dance": {
        'bookTitle': "José! Born to Dance",
        'authorName': 'Susanna Reich',
        'illustratorName': 'Raúl Colón'
    },
    "downtown boy": {
        'bookTitle': "Downtown Boy",
        'authorName': 'Juan Felipe Herrera',
        'illustratorName':'N/A'
    },
    "los gatos black on halloween": {
        'bookTitle': "Los Gatos Black on Halloween",
        'authorName': 'Marisa Montes',
        'illustratorName': 'Yuyi Morales'
    },
    "he forgot to say goodbye": {
        'bookTitle': "He Forgot To Say Goodbye",
        'authorName': 'Benjamin Alire Sáenz',
        'illustratorName': 'N/A'
    },
    "the holy tortilla and a pot of beans": {
        'bookTitle': "The Holy Tortilla and a Pot of Beans",
        'authorName': 'Carmen Tafolla',
        'illustratorName': 'N/A'
    },
    "what can you do with a paleta?": {
        'bookTitle': "What Can You Do With a Paleta?",
        'authorName': 'Carmen Tafolla',
        'illustratorName':'Magaly Morales'
    },
    "bait": {
        'bookTitle': "Bait",
        'authorName': 'Alex Sanchez',
        'illustratorName': 'N/A'
    },
    "diego rivera: his world and ours": {
        'bookTitle': "Diego Rivera: His World and Ours",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "sylvia and aki": {
        'bookTitle': "Sylvia and Aki" ,
        'authorName': ' Winifred Conkling',
        'illustratorName': 'N/A'
    },
    "under the mesquite": {
        'bookTitle': "Under the Mesquite",
        'authorName': 'Guadalupe Garcia McCall',
        'illustratorName': 'N/A'
    },
    "diego rivera: an artist for the people": {
        'bookTitle': "Diego Rivera: An Artist for the People",
        'authorName': 'Susan Goldman Rubin',
        'illustratorName': 'Susan Goldman Rubin'
    },
    "pancho rabbit and the coyote: a migrant's tale": {
        'bookTitle': "Pancho Rabbit and the Coyote: A Migrant's Tale",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "gabi: a girl in pieces": {
        'bookTitle': "Gabi: A Girl in Pieces",
        'authorName': 'Isabel Quintero',
        'illustratorName': 'N/A'
    },
    "separate is never equal": {
        'bookTitle': "Separate is Never Equal",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "out of darkness": {
        'bookTitle': "Out of Darkness",
        'authorName': 'Ashley Hope Pérez',
        'illustratorName': 'N/A'
    },
    "funny bones: posada and his day of the dead calaveras": {
        'bookTitle': "Funny Bones: Posada and His Day of the Dead Calaveras",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "the memory of light": {
        'bookTitle': "The Memory of Light",
        'authorName': 'Francisco X. Stork',
        'illustratorName': 'N/A'
    },
    "maybe something beautiful: how art transformed a neighborhood": {
        'bookTitle': "Maybe Something Beautiful: How Art Transformed a Neighborhood",
        'authorName': "Isabel Campoy & Theresa Howell",
        'illustratorName': 'Rafael López'
    },
    "i am not your perfect mexican daughter": {
        'bookTitle': "I Am Not Your Perfect Mexican Daughter",
        'authorName': 'Erika L. Sánchez',
        'illustratorName': 'N/A'
    },
    "the first rule of punk": {
        'bookTitle': "The First Rule of Punk",
        'authorName': 'Celia C. Pérez',
        'illustratorName': 'N/A'
    },
    "all around us": {
        'bookTitle': "All Around Us" ,
        'authorName': "Xelena González",
        'illustratorName': 'Adriana M. Garcia'
    },
    "they call me güero, a border kid's poems": {
        'bookTitle': "They Call me Güero, A Border Kid's Poems",
        'authorName': "David Bowles",
        'illustratorName': "N/A"
    },
    "dreamers": {
        'bookTitle': "Dreamers" ,
        'authorName': "Yuyi Morales",
        'illustratorName': "Yuyi Morales"
    },
    "my papi has a motorcycle": {
        'bookTitle': "My Papi Has A Motorcycle",
        'authorName':"Isabel Quintero",
        'illustratorName': "Zeke Peña"
    },
    "dreaming with mariposas": {
        'bookTitle': "Dreaming with Mariposas",
        'authorName': "Sonia Gutiérrez",
        'illustratorName': 'N/A'
    },
    "the spirit of chicano park":{
        'bookTitle': "The Spirit of Chicano Park/El espíritu del Parque Chicano",
        'authorName': 'Beatrice Zamora',
        'illustratorName': 'Maira Meza'
    },
    "feathered serpent and the five suns: a mesoamerican creation myth": {
        'bookTitle': "Feathered Serpent and the Five Suns: A Mesoamerican Creation Myth",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'N/A'
    },
    "bright star": {
        'bookTitle': "Bright Star",
        'authorName': 'Yuyi Morales',
        'illustratorName': 'Yuyi Morales'
    },
    "my two border towns": {
        'bookTitle': "My Two Border Towns",
        'authorName': 'David Bowles',
        'illustratorName': 'Erika Meza'
    },
    "indivisible": {
        'bookTitle': "Indivisible",
        'authorName': 'Daniel Aleman',
        'illustratorName': 'N/A'
    },
    'unknown':{
        'bookTitle': 'unknown',
        'authorName': 'unknown',
        'illustratorName': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:title', (request, response) => {
    const bookTitles = request.params.title.toLowerCase()
    console.log(books[bookTitles])
    if( books[bookTitles] ){
        response.json(books[bookTitles])
    }else{
        response.json(books['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})