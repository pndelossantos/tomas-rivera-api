const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const years = {
    "1996": {
        'bookTitle': "Chato's Kitchen",
        'authorName': "Gary Soto",
        'illustratorName': "Susan Guevara"
    },
    "1996": {
        'bookTitle': "The Farolitos of Christmas",
        'authorName': 'Rudolfo Anaya',
        'illustratorName': 'Edward Gonzales' 
    },
    "1997": {
        'bookTitle':"In My Family/En Mi Familia",
        'authorName': 'Carmen Lomas Garza',
        'illustratorName': 'Carmen Lomas Garza'
    },
    "1998": {
        'bookTitle': "Tomás and the Library Lady",
        'authorName':'Pat Mora',
        'illustratorName': 'Raúl Colón'
    },
    "1999": {
        'bookTitle': "The Three Pigs/Los Tres Cerdos: Nacho, Tito, and Miguel",
        'authorName': 'Bobbi Salinas',
        'illustratorName': 'Bobbi Salinas'
    },
    "2000": {
        'bookTitle': "My Land Sings: Stories of the Rio Grande",
        'authorName': 'Rudolfo Anaya',
        'illustratorName': 'Amy Córdova'
    },
    "2001": {
        'bookTitle': "My Very Own Room/Mi propio cuartito",
        'authorName': 'Amada Irma Pérez',
        'illustratorName': 'Maya Christina Gonzalez'
    },
    "2002": {
        'bookTitle': "Breaking Through",
        'authorName': 'Francisco Jiménez',
        'illustratorName':'N/A'
    },
    "2003": {
        'bookTitle': "A Library for Juana: The World of Sor Juana",
        'authorName': 'Pat Mora',
        'illustratorName': 'Beatriz Vidal'
    },
    "2004": {
        'bookTitle': "Just a Minute: A Trickster Tale and Counting Book",
        'authorName': ' Yuyi Morales',
        'illustratorName': 'Yuyi Morales'
    },
    "2005": {
        'bookTitle': "Becoming Naomi León",
        'authorName': 'Pam Muoñz Ryan',
        'illustratorName': 'N/A'
    },
    "2006": {
        'bookTitle': "José! Born to Dance",
        'authorName': 'Susanna Reich',
        'illustratorName': 'Raúl Colón'
    },
    "2007": {
        'bookTitle': "Downtown Boy",
        'authorName': 'Juan Felipe Herrera',
        'illustratorName':'N/A'
    },
    "2008": {
        'bookTitle': "Los Gatos Black on Halloween",
        'authorName': 'Marisa Montes',
        'illustratorName': 'Yuyi Morales'
    },
    "2009": {
        'bookTitle': "He Forgot To Say Goodbye",
        'authorName': 'Benjamin Alire Sáenz',
        'illustratorName': 'N/A'
    },
    "2009": {
        'bookTitle': "The Holy Tortilla and a Pot of Beans",
        'authorName': 'Carmen Tafolla',
        'illustratorName': 'N/A'
    },
    "2010": {
        'bookTitle': "What Can You Do With a Paleta?",
        'authorName': 'Carmen Tafolla',
        'illustratorName':'Magaly Morales'
    },
    "2011": {
        'bookTitle': "Bait",
        'authorName': 'Alex Sanchez',
        'illustratorName': 'N/A'
    },
    "2012": {
        'bookTitle': "Diego Rivera: His World and Ours",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "2012": {
        'bookTitle': "Sylvia and Aki" ,
        'authorName': ' Winifred Conkling',
        'illustratorName': 'N/A'
    },
    "2013": {
        'bookTitle': "Under the Mesquite",
        'authorName': 'Guadalupe Garcia McCall',
        'illustratorName': 'N/A'
    },
    "2014": {
        'bookTitle': "Diego Rivera: An Artist for the People",
        'authorName': 'Susan Goldman Rubin',
        'illustratorName': 'Susan Goldman Rubin'
    },
    "2014": {
        'bookTitle': "Pancho Rabbit and the Coyote: A Migrant's Tale",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "2015": {
        'bookTitle': "Gabi: A Girl in Pieces",
        'authorName': 'Isabel Quintero',
        'illustratorName': 'N/A'
    },
    "2015": {
        'bookTitle': "Separate is Never Equal",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "2016": {
        'bookTitle': "Out of Darkness",
        'authorName': 'Ashley Hope Pérez',
        'illustratorName': 'N/A'
    },
    "2016": {
        'bookTitle': "Funny Bones: Posada and His Day of the Dead Calaveras",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'Duncan Tonatiuh'
    },
    "2017": {
        'bookTitle': "The Memory of Light",
        'authorName': 'Francisco X. Stork',
        'illustratorName': 'N/A'
    },
    "2017": {
        'bookTitle': "Maybe Something Beautiful: How Art Transformed a Neighborhood",
        'authorName': "Isabel Campoy & Theresa Howell",
        'illustratorName': 'Rafael López'
    },
    "2018": {
        'bookTitle': "I Am Not Your Perfect Mexican Daughter",
        'authorName': 'Erika L. Sánchez',
        'illustratorName': 'N/A'
    },
    "2018": {
        'bookTitle': "The First Rule of Punk",
        'authorName': 'Celia C. Pérez',
        'illustratorName': 'N/A'
    },
    "2018": {
        'bookTitle': "All Around Us" ,
        'authorName': "Xelena González",
        'illustratorName': 'Adriana M. Garcia'
    },
    "2019": {
        'bookTitle': "They Call me Güero, A Border Kid's Poems",
        'authorName': "David Bowles",
        'illustratorName': "N/A"
    },
    "2019": {
        'bookTitle': "Dreamers" ,
        'authorName': "Yuyi Morales",
        'illustratorName': "Yuyi Morales"
    },
    "2020": {
        'bookTitle': "My Papi Has A Motorcycle",
        'authorName':"Isabel Quintero",
        'illustratorName': "Zeke Peña"
    },
    "2021": {
        'bookTitle': "Dreaming with Mariposas",
        'authorName': "Sonia Gutiérrez",
        'illustratorName': 'N/A'
    },
    "2021":{
        'bookTitle': "The Spirit of Chicano Park/El espíritu del Parque Chicano",
        'authorName': 'Beatrice Zamora',
        'illustratorName': 'Maira Meza'
    },
    "2021": {
        'bookTitle': "Feathered Serpent and the Five Suns: A Mesoamerican Creation Myth",
        'authorName': 'Duncan Tonatiuh',
        'illustratorName': 'N/A'
    },
    "2022": {
        'bookTitle': "Bright Star",
        'authorName': 'Yuyi Morales',
        'illustratorName': 'Yuyi Morales'
    },
    "2022": {
        'bookTitle': "My Two Border Towns",
        'authorName': 'David Bowles',
        'illustratorName': 'Erika Meza'
    },
    "2022": {
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
    console.log(years[bookTitles])
    if( years[bookTitles] ){
        response.json(years[bookTitles])
    }else{
        response.json(years['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})