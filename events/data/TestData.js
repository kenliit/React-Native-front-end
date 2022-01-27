import Events from "../models/Events";

export const TestData = [
    new Events(1,
        {
            user: 'Michael King',
            avatar: 'http://things2you.com/images/user_avater.jpg',
        },
        'Calgary Zoo',
        {
            type: 'YouTube',
            uri: 'https://youtu.be/kzUwBJ8WvPs',
        },
        'ZooNights',
        'ZooNights is a regular day at zoo – with extended hours – so you can enjoy ' +
        'your favourite animals and the outdoor zoo grounds a little longer. While there is no extra charge for ZooNights (daily admission rates apply), you may find some special entertainment around the park during the evening and there will be adult beverages and special concessions items available for purchase. You can think of it as the 3 B’s – booze, bento boxes and buskers!\n' +
        '\n' +
        'A friendly reminder that the Calgary Zoo is currently an ‘outdoor-only’ experience. Our indoor animal habitats & buildings are currently closed, with the exception of Kitamba Café, retail shops and washrooms, in accordance with provincial health and safety measures.',
        'live',
        '210 St Georges Dr NE',
        {
            freeParking: true,
            meal: false,
            publicTransit: true,
            freeWifi: true,
        },
        {
            latitude: '51.0459004',
            longitude: '-114.0236738'
        },
        {
            fee: 24.95,
            orderAt: 'https://websales.calgaryzoo.com/buy/daily-tickets/',
        },
        {
            phone: '4032329396',
            email: 'kirstengk@calgaryzoo.com',
            webpage: 'https://www.calgaryzoo.com/events/zoonights',
        },
        'All',
        'May 25, 2021',
        'May 26, 2021',
        {
            start: 17,
            end: 20,
        }
    ),
    new Events(2,
        {
            user: 'Joyce Green',
            avatar: 'http://things2you.com/images/user_avater.jpg',
        },
        'Calgary Farmyard',
        {
            type: 'Facebook',
            uri: 'https://fb.watch/5LIlYNlxM_/',
        },
        'Spring at Calgary Farmyard',
        'Spring is the perfect time to meet our newly born barn babies and explore all the ' +
        'great attractions at the Farmyard. We have the cutest Barnyard Animals in Calgary (YES you can ' +
        'pet, play with and feed almost all of them!) Most of the animals on our farm are born here, and ' +
        'remain here so you can visit them each year!' +
        'Visit Llamas, Goats, Horses, Donkeys, Lambs, Bunnies, Piglets, Ducklings, Chicks, & Calves.',
        'live',
        '284022 Township Road 224, Rocky View County',
        {
            freeParking: true,
            meal: false,
            publicTransit: false,
            freeWifi: false,
        },
        {
            latitude: '50.8931772',
            longitude: '-113.8425207'
        },
        {
            fee: 17.95,
            orderAt: 'https://www.calgaryfarmyard.com/tickets-2021',
        },
        {
            phone: '4036482719',
            email: null,
            webpage: 'https://www.calgaryzoo.com/events/zoonights',
        },
        'All',
        '2021-05-28',
        '2021-05-29',
        {
            start: 9.5,
            end: 20,
        }
    ),
    new Events(3,
        {
            user: 'King Kong',
            avatar: 'http://things2you.com/images/user_avater.jpg',
        },
        'Glenmore Landing Shopping Centre',
        {
            type: 'YouTube',
            uri: 'https://youtu.be/kzUwBJ8WvPs',
        },
        'ART at the Landing',
        'ART at the Landing is an artist run pop-up fine art gallery located in the Glenmore Landing Shopping Centre until June 30, 2021. We have 1100 square feet of original art by Calgary based artists Brenda Banda Johnson, Holly Burghardt, Gerardo Carsolio and Terri Heinrichs. Each artist has their own unique style, but share a love of nature, rich textures and bold use of colour and contrast.',
        'live',
        'A104 16– 90th Avenue SW, Calgary, AB',
        {
            freeParking: true,
            meal: false,
            publicTransit: true,
            freeWifi: false,
        },
        {
            latitude: '50.9721865',
            longitude: '-114.10263'
        },
        {
            fee: 0,
            orderAt: null,
        },
        {
            phone: '4036482719',
            email: null,
            webpage: null,
        },
        'All',
        'Apr 4, 2021',
        'Jun 30, 2021',
        {
            start: 11,
            end: 18,
        }
    ),
    new Events(4,
        {
            user: 'Tracy Wong',
            avatar: 'http://things2you.com/images/user_avater.jpg',
        },
        'St John Choir Schola',
        {
            type: 'YouTube',
            uri: 'https://youtu.be/kzUwBJ8WvPs',
        },
        'Getting to Know… The Sound of Music',
        'St John Choir Schola is thrilled to announce the release of its newly recorded performance of the musical theatre production, Getting to Know… The Sound of Music. You won’t want to miss this streaming experience! Ticket holders will be able to stream the show from May 20-23, 2021 inclusively. Despite the challenges of the past year, we have found a way to bring this amazing production to life and we are so excited to share it with you. Strict Covid protocols have been followed, and the students have worked hard to bless you with their music.\n' +
        '\n' +
        'A household streaming ticket is needed to view the performance. Due to licensing agreements, we are only able to stream the show for a limited time, so mark your calendars now!',
        'online',
        null,
        {
            freeParking: false,
            meal: false,
            publicTransit: false,
            freeWifi: false,
        },
        null,
        {
            fee: 20.00,
            orderAt: 'https://sjcsparentsociety.square.site/',
        },
        {
            phone: '5872844616',
            email: 'test@test.com',
            webpage: 'https://sjcsparentsociety.square.site/',
        },
        'kids',
        '2021-05-20',
        '2021-05-30',
        {
            start: 9,
            end: 18,
        }
    ),
    new Events(5,
        {
            user: 'Ken Kimp',
            avatar: 'http://things2you.com/images/user_avater.jpg',
        },
        'Testing',
        {
            type: 'YouTube',
            uri: 'https://youtu.be/kzUwBJ8WvPs',
        },
        'On demand streaming online',
        'St John Choir Schola is thrilled to announce the release of its newly recorded performance of the musical theatre production, Getting to Know… The Sound of Music. You won’t want to miss this streaming experience! Ticket holders will be able to stream the show from May 20-23, 2021 inclusively. Despite the challenges of the past year, we have found a way to bring this amazing production to life and we are so excited to share it with you. Strict Covid protocols have been followed, and the students have worked hard to bless you with their music.\n' +
        '\n' +
        'A household streaming ticket is needed to view the performance. Due to licensing agreements, we are only able to stream the show for a limited time, so mark your calendars now!',
        'online',
        null,
        {
            freeParking: false,
            meal: false,
            publicTransit: false,
            freeWifi: false,
        },
        null,
        {
            fee: 0,
            orderAt: null,
        },
        {
            phone: '5872844616',
            email: 'test@test.com',
            webpage: 'https://sjcsparentsociety.square.site/',
        },
        'adults',
        '2021-05-20',
        '2021-05-30',
        {
            start: 9,
            end: 18,
        }
    ),
    new Events(6,
        {
            user: 'Bill Gates',
            avatar: 'http://things2you.com/images/user_avater.jpg',
        },
        'City of Calgary',
        {
            type: 'Picture',
            uri: 'https://picsum.photos/400/300',
        },
        'Movie online',
        'St John Choir Schola is thrilled to announce the release of its newly recorded performance of the musical theatre production, Getting to Know… The Sound of Music. You won’t want to miss this streaming experience! Ticket holders will be able to stream the show from May 20-23, 2021 inclusively. Despite the challenges of the past year, we have found a way to bring this amazing production to life and we are so excited to share it with you. Strict Covid protocols have been followed, and the students have worked hard to bless you with their music.\n' +
        '\n' +
        'A household streaming ticket is needed to view the performance. Due to licensing agreements, we are only able to stream the show for a limited time, so mark your calendars now!',
        'online',
        null,
        {
            freeParking: false,
            meal: false,
            publicTransit: false,
            freeWifi: false,
        },
        null,
        {
            fee: 0,
            orderAt: null,
        },
        {
            phone: '5872844616',
            email: 'test@test.com',
            webpage: 'https://calgary.ca/',
        },
        'senior',
        'May 20, 2021 00:00:00',
        'May 24, 2021 23:59:59',
        {
            start: 9,
            end: 18,
        }
    ),
]