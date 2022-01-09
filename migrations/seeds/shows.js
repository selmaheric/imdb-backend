const { v4: uuidv4 } = require('uuid');

const SELMA_HERIC = uuidv4();

const GOOD_WILL_HUNTING = uuidv4();
const THE_BOURNE_IDENTITY = uuidv4();
const SAVING_PRIVATE_RYAN = uuidv4();
const FOREST_GUMP = uuidv4();
const TOMA = uuidv4();
const SHAWSHANK_REDEMPTION = uuidv4();
const TRIAL_OF_THE_CHICAGO_SEVEN = uuidv4();
const FIGHT_CLUB = uuidv4();
const VENOM = uuidv4();
const VENOM_2 = uuidv4();
const MATRIX = uuidv4();
const MATRIX_2 = uuidv4();
const MATRIX_3 = uuidv4();
const MATRIX_4 = uuidv4();
const GODFATHER = uuidv4();
const GODFATHER_2 = uuidv4();
const GODFATHER_3 = uuidv4();
const TRAINSPOTTING = uuidv4();
const PULP_FICTION = uuidv4();
const INCEPTION = uuidv4();
const BEAUTIFUL_MIND = uuidv4();
const GLADIATOR = uuidv4();
const SEVEN = uuidv4();
const JOKER = uuidv4();

// tv shows

const CALIFORNICATION = uuidv4();
const TWO_AND_A_HALF_MEN = uuidv4();
const AFTER_LIFE = uuidv4();
const BREAKING_BAD = uuidv4();
const GAME_OF_THRONES = uuidv4();
const FRIENDS = uuidv4();
const BLACK_MIRROR = uuidv4();
const BETTER_CALL_SAUL = uuidv4();
const HOUSE = uuidv4();
const CROWN = uuidv4();
const IT_CROWD = uuidv4();
const SILICON_VALLEY = uuidv4();
const BIG_BANG_THEORY = uuidv4();
const MODERN_FAMILY = uuidv4();
const BROOKLYN_99 = uuidv4();

const MAT_DAMON = uuidv4();
const BEN_AFFLECK = uuidv4();
const ROBIN_WILLIAMS = uuidv4();
const FRANKA_POTENTE = uuidv4();
const TOM_HANKS = uuidv4();
const ROBIN_WRIGHT = uuidv4();
const MILAN_MARIC = uuidv4();
const TAMARA_DRAGICEVIC = uuidv4();
const PETAR_BENCINA = uuidv4();
const BRAD_PITT = uuidv4();
const EDWARD_NORTON = uuidv4();
const TIM_ROBBINS = uuidv4();
const MORGAN_FREEMAN = uuidv4();
const EDDIE_REDMAYNE = uuidv4();
const SASCHA_BARON_COHEN = uuidv4();
const KEANU_REEVES = uuidv4();
const LAURENCE_FISHBOURNE = uuidv4();
const CARRIE_ANNE_MOSS = uuidv4();
const YAHYA_ABDUL_MATEEN = uuidv4();
const TOM_HARDY = uuidv4();
const WOODY_HARRELSON = uuidv4();
const RIZ_AHMED = uuidv4();
const MARLON_BRANDO = uuidv4();
const AL_PACINO = uuidv4();
const ROBERT_DE_NIRO = uuidv4();
const DIANE_KEATON = uuidv4();
const LEO_DI_CAPRIO = uuidv4();
const JOSEPH_GORDON_LEVITT = uuidv4();
const SAMUEL_L_JACKSON = uuidv4();
const UMA_THURMAN = uuidv4();
const JOHN_TRAVOLTA = uuidv4();
const RUSSEL_CROWE = uuidv4();
const ED_HARRIS = uuidv4();
const JOAQUIN_PHOENIX = uuidv4();
const EWAN_MCGREGOR = uuidv4();
const EWAN_BREMNER = uuidv4();

// shows actors

const DAVID_DUCHOVNY = uuidv4();
const NATASCHA_MCELHORNE = uuidv4();
const JON_CRYER = uuidv4();
const ASHTON_KUTCHER = uuidv4();
const CHARLIE_SHEEN = uuidv4();
const RICKY_GERVAIS = uuidv4();
const BRYAN_CRANSTON = uuidv4();
const AARON_PAUL = uuidv4();
const BOB_ODENKIRK = uuidv4();
const EMILIA_CLARKE = uuidv4();
const PETER_DINKLAGE = uuidv4();
const DAVID_SCHWIMMER = uuidv4();
const MATT_LEBLANC = uuidv4();
const MATTHEW_PERRY = uuidv4();
const JENNIFER_ANISTON = uuidv4();
const COURTNEY_COX = uuidv4();
const LISA_KUDROW = uuidv4();
const DANIEL_LAPAINE = uuidv4();
const MICHAELA_COEL = uuidv4();
const RHEA_SEEHORN = uuidv4();
const HUGH_LAURIE = uuidv4();
const LISA_EDELSTEIN = uuidv4();
const ROBERT_SEAN_LEONARD = uuidv4();
const CLAIRE_FOY = uuidv4();
const OLIVIA_COLMAN = uuidv4();
const RICHARD_AYOADE = uuidv4();
const KATHERINE_PARKINSON = uuidv4();
const THOMAS_MIDDLEDITCH = uuidv4();
const TJ_MILLER = uuidv4();
const JOHNY_GALECKI = uuidv4();
const JIM_PARSONS = uuidv4();
const KALEY_CUOCO = uuidv4();
const SOFIA_VERGARA = uuidv4();
const SARAH_HYLAND = uuidv4();
const ARIEL_WINTER = uuidv4();
const NOLAN_GOULD = uuidv4();
const ANDY_SAMBERG = uuidv4();
const CHELSEA_PERETTI = uuidv4();
const TERRY_CREWS = uuidv4();

exports.seed = async function seed(knex) {
  // Deletes ALL existing cast, actors and shows
  await knex('show_cast').del();
  await knex('ratings').del();
  await knex('actors').del();
  await knex('shows').del();
  await knex('users').del();

  // Insert users
  await knex('users').insert([
    {
      id: SELMA_HERIC,
      first_name: 'Selma',
      last_name: 'Heric',
      email: 'selma.heric@gmail.com',
      google_id: 'jedan',
    },
  ]);

  // Insert shows
  await knex('shows').insert([
    {
      id: GOOD_WILL_HUNTING,
      type: 'movie',
      title: 'Good Will Hunting',
      description:
        'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.',
      release_date: '2 December 1997',
      cover_image: 'Good_Will_Hunting.jpeg',
    },
    {
      id: THE_BOURNE_IDENTITY,
      type: 'movie',
      title: 'The Bourne Identity',
      description:
        'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.',
      release_date: '6 June 2002',
      cover_image: 'The_Bourne_Identity.jpeg',
    },
    {
      id: SAVING_PRIVATE_RYAN,
      type: 'movie',
      title: 'Saving Private Ryan',
      description:
        'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
      release_date: '21 July 1998',
      cover_image: 'Saving_Private_Ryan.jpeg',
    },
    {
      id: FOREST_GUMP,
      type: 'movie',
      title: 'Forrest Gump',
      description:
        'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      release_date: '23 June 1994',
      cover_image: 'Forrest_Gump.jpeg',
    },
    {
      id: TOMA,
      type: 'movie',
      title: 'Toma',
      description:
        'Biopic about Toma Zdravkovic, the man who is remembered not only for his songs and the unique way he sang them, but also as a bohemian, both in his behavior and his soul.',
      release_date: '15 September 2021',
      cover_image: 'Toma.jpg',
    },
    {
      id: SHAWSHANK_REDEMPTION,
      type: 'movie',
      title: 'Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      release_date: '13 September 1994',
      cover_image: 'Shawshank_Redemption.jpg',
    },
    {
      id: TRIAL_OF_THE_CHICAGO_SEVEN,
      type: 'movie',
      title: 'Trial Of The Chicago Seven',
      description:
        'The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago, Illinois.',
      release_date: '25 September 2020',
      cover_image: 'Trial_Of_The_Chicago_Seven.jpg',
    },
    {
      id: FIGHT_CLUB,
      type: 'movie',
      title: 'Fight Club',
      description:
        'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      release_date: '21 September 1999',
      cover_image: 'Fight_Club.jpg',
    },
    {
      id: VENOM,
      type: 'movie',
      title: 'Venom',
      description:
        'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.',
      release_date: '1 October 2018',
      cover_image: 'Venom.jpg',
    },
    {
      id: VENOM_2,
      type: 'movie',
      title: 'Venom: Let There Be Carnage',
      description:
        'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.',
      release_date: '14 September 2021',
      cover_image: 'Venom_Carnage.jpg',
    },
    {
      id: MATRIX,
      type: 'movie',
      title: 'The Matrix',
      description:
        'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      release_date: '24 March 1999',
      cover_image: 'Matrix.jpg',
    },
    {
      id: MATRIX_2,
      type: 'movie',
      title: 'The Matrix Reloaded',
      description:
        'Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.',
      release_date: '7 May 2003',
      cover_image: 'Matrix_Reloaded.jpg',
    },
    {
      id: MATRIX_3,
      type: 'movie',
      title: 'The Matrix Revolutions',
      description:
        'The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.',
      release_date: '27 October 2003',
      cover_image: 'Matrix_Revolutions.jpg',
    },
    {
      id: MATRIX_4,
      type: 'movie',
      title: 'Matrix Resurrections',
      description:
        'Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.',
      release_date: '18 December 2021',
      cover_image: 'Matrix_Resurrections.jpg',
    },
    {
      id: GODFATHER,
      type: 'movie',
      title: 'The Godfather',
      description:
        'The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.',
      release_date: '14 March 1972',
      cover_image: 'Godfather.jpg',
    },
    {
      id: GODFATHER_2,
      type: 'movie',
      title: 'The Godfather Part 2',
      description:
        'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      release_date: '12 December 1974',
      cover_image: 'Godfather_2.jpg',
    },
    {
      id: GODFATHER_3,
      type: 'movie',
      title: 'The Godfather Part 3',
      description:
        'Follows Michael Corleone, now in his 60s, as he seeks to free his family from crime and find a suitable successor to his empire.',
      release_date: '20 December 1990',
      cover_image: 'Godfather_3.jpg',
    },
    {
      id: TRAINSPOTTING,
      type: 'movie',
      title: 'Trainspotting',
      description:
        'Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.',
      release_date: '15 July 1996',
      cover_image: 'Trainspotting.jpeg',
    },
    {
      id: PULP_FICTION,
      type: 'movie',
      title: 'Pulp Fiction',
      description:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      release_date: '23 September 1994',
      cover_image: 'Pulp_Fiction.jpg',
    },
    {
      id: INCEPTION,
      type: 'movie',
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
      release_date: '8 July 2010',
      cover_image: 'Inception.jpg',
    },
    {
      id: BEAUTIFUL_MIND,
      type: 'movie',
      title: 'Beautiful Mind',
      description:
        'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
      release_date: '13 December 2001',
      cover_image: 'Beautiful_Mind.jpg',
    },
    {
      id: GLADIATOR,
      type: 'movie',
      title: 'Gladiator',
      description:
        'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      release_date: '1 May 2000',
      cover_image: 'Gladiator.jpg',
    },
    {
      id: SEVEN,
      type: 'movie',
      title: 'Seven',
      description:
        'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
      release_date: '15 September 1995',
      cover_image: 'Seven.jpg',
    },
    {
      id: JOKER,
      type: 'movie',
      title: 'Joker',
      description:
        'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
      release_date: '2 October 2019',
      cover_image: 'Joker.jpg',
    },
    {
      id: CALIFORNICATION,
      type: 'tv_show',
      title: 'Californication',
      description:
        'A writer tries to juggle his career, his relationship with his daughter and his ex-girlfriend, as well as his appetite for beautiful women.',
      release_date: '13 August 2007',
      cover_image: 'Californication.jpg',
    },
    {
      id: TWO_AND_A_HALF_MEN,
      type: 'tv_show',
      title: 'Two And A Half Men',
      description:
        'Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.',
      release_date: '7 May 2003',
      cover_image: 'Two_and_a_half_men.jpg',
    },
    {
      id: AFTER_LIFE,
      type: 'tv_show',
      title: 'After Life',
      description:
        "After Tony's wife dies unexpectedly, his nice-guy persona is altered into an impulsive, devil-may-care attitude; taking his old world by storm.",
      release_date: '8 March 2019',
      cover_image: 'After_life.jpg',
    },
    {
      id: BREAKING_BAD,
      type: 'tv_show',
      title: 'Breaking Bad',
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      release_date: '20 January 2008',
      cover_image: 'Breaking_bad.jpg',
    },
    {
      id: GAME_OF_THRONES,
      type: 'tv_show',
      title: 'Game Of Thrones',
      description:
        'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      release_date: '17 April 2011',
      cover_image: 'Game_of_thrones.jpg',
    },
    {
      id: FRIENDS,
      type: 'tv_show',
      title: 'Friends',
      description:
        'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
      release_date: '22 September 1994',
      cover_image: 'Friends.jpg',
    },
    {
      id: BLACK_MIRROR,
      type: 'tv_show',
      title: 'Black Mirror',
      description:
        "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
      release_date: '4 December 2011',
      cover_image: 'Black_mirror.jpg',
    },
    {
      id: BETTER_CALL_SAUL,
      type: 'tv_show',
      title: 'Better Call Saul',
      description:
        'The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.',
      release_date: '8 February 2015',
      cover_image: 'Better_call_saul.jpeg',
    },
    {
      id: HOUSE,
      type: 'tv_show',
      title: 'House M.D.',
      description:
        'An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.',
      release_date: '16 November 2004',
      cover_image: 'House.jpg',
    },
    {
      id: CROWN,
      type: 'tv_show',
      title: 'The Crown',
      description:
        "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      release_date: '4 November 2016',
      cover_image: 'Crown.jpg',
    },
    {
      id: IT_CROWD,
      type: 'tv_show',
      title: 'IT Crowd',
      description:
        'The comedic misadventures of Roy, Moss and their grifting supervisor Jen, a rag-tag team of IT support workers at a large corporation headed by a hotheaded yuppie.',
      release_date: '3 February 2006',
      cover_image: 'IT_crowd.jpg',
    },
    {
      id: SILICON_VALLEY,
      type: 'tv_show',
      title: 'Silicon Valley',
      description:
        'Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper.',
      release_date: '6 April 2014',
      cover_image: 'Silicon_valley.jpg',
    },
    {
      id: BIG_BANG_THEORY,
      type: 'tv_show',
      title: 'The Big Bang Theory',
      description:
        'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
      release_date: '1 May 2006',
      cover_image: 'Big_bang_theory.jpeg',
    },
    {
      id: MODERN_FAMILY,
      type: 'tv_show',
      title: 'Modern Family',
      description:
        'Three different but related families face trials and tribulations in their own uniquely comedic ways.',
      release_date: '23 September 2009',
      cover_image: 'Modern_family.jpg',
    },
    {
      id: BROOKLYN_99,
      type: 'tv_show',
      title: 'Brooklyn 99',
      description:
        "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
      release_date: '17 September 2013',
      cover_image: 'Brooklyn_99.jpg',
    },
  ]);

  await knex('actors').insert([
    {
      id: MAT_DAMON,
      first_name: 'Matt',
      last_name: 'Damon',
    },
    {
      id: ROBIN_WILLIAMS,
      first_name: 'Robin',
      last_name: 'Williams',
    },
    {
      id: BEN_AFFLECK,
      first_name: 'Ben',
      last_name: 'Affleck',
    },
    {
      id: FRANKA_POTENTE,
      first_name: 'Franka',
      last_name: 'Potente',
    },
    {
      id: TOM_HANKS,
      first_name: 'Tom',
      last_name: 'Hanks',
    },
    {
      id: ROBIN_WRIGHT,
      first_name: 'Robin',
      last_name: 'Wright',
    },
    {
      id: MILAN_MARIC,
      first_name: 'Milan',
      last_name: 'Maric',
    },
    {
      id: TAMARA_DRAGICEVIC,
      first_name: 'Tamara',
      last_name: 'Dragicevic',
    },
    {
      id: PETAR_BENCINA,
      first_name: 'Petar',
      last_name: 'Bencina',
    },
    {
      id: BRAD_PITT,
      first_name: 'Brad',
      last_name: 'Pitt',
    },
    {
      id: EDWARD_NORTON,
      first_name: 'Edward',
      last_name: 'Norton',
    },
    {
      id: TIM_ROBBINS,
      first_name: 'Tim',
      last_name: 'Robbins',
    },
    {
      id: MORGAN_FREEMAN,
      first_name: 'Morgan',
      last_name: 'Freeman',
    },
    {
      id: EDDIE_REDMAYNE,
      first_name: 'Eddie',
      last_name: 'Redmayne',
    },
    {
      id: SASCHA_BARON_COHEN,
      first_name: 'Sascha',
      last_name: 'Baron Cohen',
    },
    {
      id: KEANU_REEVES,
      first_name: 'Keanu',
      last_name: 'Reeves',
    },
    {
      id: LAURENCE_FISHBOURNE,
      first_name: 'Laurence',
      last_name: 'Fishbourne',
    },
    {
      id: CARRIE_ANNE_MOSS,
      first_name: 'Carrie-Anne',
      last_name: 'Moss',
    },
    {
      id: YAHYA_ABDUL_MATEEN,
      first_name: 'Yahya',
      last_name: 'Abdul-Mateen',
    },
    {
      id: TOM_HARDY,
      first_name: 'Tom',
      last_name: 'Hardy',
    },
    {
      id: WOODY_HARRELSON,
      first_name: 'Woody',
      last_name: 'Harrelson',
    },
    {
      id: RIZ_AHMED,
      first_name: 'Riz',
      last_name: 'Ahmed',
    },
    {
      id: MARLON_BRANDO,
      first_name: 'Marlon',
      last_name: 'Brando',
    },
    {
      id: AL_PACINO,
      first_name: 'Al',
      last_name: 'Pacino',
    },
    {
      id: ROBERT_DE_NIRO,
      first_name: 'Robert',
      last_name: 'De Niro',
    },
    {
      id: DIANE_KEATON,
      first_name: 'Diane',
      last_name: 'Keaton',
    },
    {
      id: LEO_DI_CAPRIO,
      first_name: 'Leonardo',
      last_name: 'Di Caprio',
    },
    {
      id: JOSEPH_GORDON_LEVITT,
      first_name: 'Joseph',
      last_name: 'Gordon-Levitt',
    },
    {
      id: SAMUEL_L_JACKSON,
      first_name: 'Samuel L',
      last_name: 'Jackson',
    },
    {
      id: UMA_THURMAN,
      first_name: 'Uma',
      last_name: 'Thurman',
    },
    {
      id: JOHN_TRAVOLTA,
      first_name: 'John',
      last_name: 'Travolta',
    },
    {
      id: RUSSEL_CROWE,
      first_name: 'Russel',
      last_name: 'Crowe',
    },
    {
      id: ED_HARRIS,
      first_name: 'Ed',
      last_name: 'Harris',
    },
    {
      id: JOAQUIN_PHOENIX,
      first_name: 'Joaquin',
      last_name: 'Phoenix',
    },
    {
      id: EWAN_MCGREGOR,
      first_name: 'Ewan',
      last_name: 'McGregor',
    },
    {
      id: EWAN_BREMNER,
      first_name: 'Ewan',
      last_name: 'Bremner',
    },
    {
      id: DAVID_DUCHOVNY,
      first_name: 'David',
      last_name: 'Duchovny',
    },
    {
      id: NATASCHA_MCELHORNE,
      first_name: 'Natascha',
      last_name: 'McElhorne',
    },
    {
      id: JON_CRYER,
      first_name: 'Jon',
      last_name: 'Cryer',
    },
    {
      id: ASHTON_KUTCHER,
      first_name: 'Ashton',
      last_name: 'Kutcher',
    },
    {
      id: CHARLIE_SHEEN,
      first_name: 'Charlie',
      last_name: 'Sheen',
    },
    {
      id: RICKY_GERVAIS,
      first_name: 'Ricky',
      last_name: 'Gervais',
    },
    {
      id: BRYAN_CRANSTON,
      first_name: 'Bryan',
      last_name: 'Cranston',
    },
    {
      id: AARON_PAUL,
      first_name: 'Aaron',
      last_name: 'Paul',
    },
    {
      id: BOB_ODENKIRK,
      first_name: 'Bob',
      last_name: 'Odenkirk',
    },
    {
      id: EMILIA_CLARKE,
      first_name: 'Emilia',
      last_name: 'Clarke',
    },
    {
      id: PETER_DINKLAGE,
      first_name: 'Peter',
      last_name: 'Dinklage',
    },
    {
      id: DAVID_SCHWIMMER,
      first_name: 'David',
      last_name: 'Schwimmer',
    },
    {
      id: MATT_LEBLANC,
      first_name: 'Matt',
      last_name: 'LeBlanc',
    },
    {
      id: MATTHEW_PERRY,
      first_name: 'Matthew',
      last_name: 'Perry',
    },
    {
      id: JENNIFER_ANISTON,
      first_name: 'Jennifer',
      last_name: 'Aniston',
    },
    {
      id: COURTNEY_COX,
      first_name: 'Courtney',
      last_name: 'Cox',
    },
    {
      id: LISA_KUDROW,
      first_name: 'Lisa',
      last_name: 'Kudrow',
    },
    {
      id: DANIEL_LAPAINE,
      first_name: 'Daniel',
      last_name: 'Lapaine',
    },
    {
      id: MICHAELA_COEL,
      first_name: 'Micahela',
      last_name: 'Coel',
    },
    {
      id: RHEA_SEEHORN,
      first_name: 'Rhea',
      last_name: 'Seehorn',
    },
    {
      id: HUGH_LAURIE,
      first_name: 'Hugh',
      last_name: 'Laurie',
    },
    {
      id: LISA_EDELSTEIN,
      first_name: 'Lisa',
      last_name: 'Edelstein',
    },
    {
      id: ROBERT_SEAN_LEONARD,
      first_name: 'Robert Sean',
      last_name: 'Leonard',
    },
    {
      id: CLAIRE_FOY,
      first_name: 'Claire',
      last_name: 'Foy',
    },
    {
      id: OLIVIA_COLMAN,
      first_name: 'Olivia',
      last_name: 'Colman',
    },
    {
      id: RICHARD_AYOADE,
      first_name: 'Richard',
      last_name: 'Ayoade',
    },
    {
      id: KATHERINE_PARKINSON,
      first_name: 'Katherine',
      last_name: 'Parkinson',
    },
    {
      id: THOMAS_MIDDLEDITCH,
      first_name: 'Thomas',
      last_name: 'Middleditch',
    },
    {
      id: TJ_MILLER,
      first_name: 'T.J.',
      last_name: 'Miller',
    },
    {
      id: JOHNY_GALECKI,
      first_name: 'Johny',
      last_name: 'Galecki',
    },
    {
      id: JIM_PARSONS,
      first_name: 'Jim',
      last_name: 'Parsons',
    },
    {
      id: KALEY_CUOCO,
      first_name: 'Kaley',
      last_name: 'Cuoco',
    },
    {
      id: SOFIA_VERGARA,
      first_name: 'Sofia',
      last_name: 'Vergara',
    },
    {
      id: SARAH_HYLAND,
      first_name: 'Sarah',
      last_name: 'Hyland',
    },
    {
      id: ARIEL_WINTER,
      first_name: 'Ariel',
      last_name: 'Winter',
    },
    {
      id: NOLAN_GOULD,
      first_name: 'Nolan',
      last_name: 'Gould',
    },
    {
      id: ANDY_SAMBERG,
      first_name: 'Andy',
      last_name: 'Samberg',
    },
    {
      id: CHELSEA_PERETTI,
      first_name: 'Chelsea',
      last_name: 'Peretti',
    },
    {
      id: TERRY_CREWS,
      first_name: 'Terry',
      last_name: 'Crews',
    },
  ]);

  await knex('show_cast').insert([
    /**
     * Good Will Hunting Cast
     */
    {
      id_show: GOOD_WILL_HUNTING,
      id_actor: MAT_DAMON,
    },
    {
      id_show: GOOD_WILL_HUNTING,
      id_actor: ROBIN_WILLIAMS,
    },
    {
      id_show: GOOD_WILL_HUNTING,
      id_actor: BEN_AFFLECK,
    },
    /**
     * The Bourne Identity Cast
     */
    {
      id_show: THE_BOURNE_IDENTITY,
      id_actor: MAT_DAMON,
    },
    {
      id_show: THE_BOURNE_IDENTITY,
      id_actor: FRANKA_POTENTE,
    },
    /**
     * Saving Private Ryan Cast
     */
    {
      id_show: SAVING_PRIVATE_RYAN,
      id_actor: MAT_DAMON,
    },
    {
      id_show: SAVING_PRIVATE_RYAN,
      id_actor: TOM_HANKS,
    },
    /**
     * Forest Gump Cast
     */
    {
      id_show: FOREST_GUMP,
      id_actor: TOM_HANKS,
    },
    {
      id_show: FOREST_GUMP,
      id_actor: ROBIN_WRIGHT,
    },
    /**
     * Toma Cast
     */
    {
      id_show: TOMA,
      id_actor: MILAN_MARIC,
    },
    {
      id_show: TOMA,
      id_actor: TAMARA_DRAGICEVIC,
    },
    {
      id_show: TOMA,
      id_actor: PETAR_BENCINA,
    },
    {
      id_show: SHAWSHANK_REDEMPTION,
      id_actor: TIM_ROBBINS,
    },
    {
      id_show: SHAWSHANK_REDEMPTION,
      id_actor: MORGAN_FREEMAN,
    },
    {
      id_show: TRIAL_OF_THE_CHICAGO_SEVEN,
      id_actor: EDDIE_REDMAYNE,
    },
    {
      id_show: TRIAL_OF_THE_CHICAGO_SEVEN,
      id_actor: SASCHA_BARON_COHEN,
    },
    {
      id_show: FIGHT_CLUB,
      id_actor: BRAD_PITT,
    },
    {
      id_show: FIGHT_CLUB,
      id_actor: EDWARD_NORTON,
    },
    {
      id_show: MATRIX,
      id_actor: KEANU_REEVES,
    },
    {
      id_show: MATRIX,
      id_actor: LAURENCE_FISHBOURNE,
    },
    {
      id_show: MATRIX,
      id_actor: CARRIE_ANNE_MOSS,
    },
    {
      id_show: MATRIX_2,
      id_actor: KEANU_REEVES,
    },
    {
      id_show: MATRIX_2,
      id_actor: LAURENCE_FISHBOURNE,
    },
    {
      id_show: MATRIX_2,
      id_actor: CARRIE_ANNE_MOSS,
    },
    {
      id_show: MATRIX_3,
      id_actor: KEANU_REEVES,
    },
    {
      id_show: MATRIX_3,
      id_actor: LAURENCE_FISHBOURNE,
    },
    {
      id_show: MATRIX_3,
      id_actor: CARRIE_ANNE_MOSS,
    },
    {
      id_show: MATRIX_4,
      id_actor: KEANU_REEVES,
    },
    {
      id_show: MATRIX_4,
      id_actor: YAHYA_ABDUL_MATEEN,
    },
    {
      id_show: MATRIX_4,
      id_actor: CARRIE_ANNE_MOSS,
    },
    {
      id_show: VENOM,
      id_actor: TOM_HARDY,
    },
    {
      id_show: VENOM,
      id_actor: WOODY_HARRELSON,
    },
    {
      id_show: VENOM,
      id_actor: RIZ_AHMED,
    },
    {
      id_show: VENOM_2,
      id_actor: TOM_HARDY,
    },
    {
      id_show: VENOM_2,
      id_actor: WOODY_HARRELSON,
    },
    {
      id_show: GODFATHER,
      id_actor: MARLON_BRANDO,
    },
    {
      id_show: GODFATHER,
      id_actor: AL_PACINO,
    },
    {
      id_show: GODFATHER_2,
      id_actor: ROBERT_DE_NIRO,
    },
    {
      id_show: GODFATHER_2,
      id_actor: AL_PACINO,
    },
    {
      id_show: GODFATHER_2,
      id_actor: DIANE_KEATON,
    },
    {
      id_show: GODFATHER_3,
      id_actor: DIANE_KEATON,
    },
    {
      id_show: GODFATHER_3,
      id_actor: AL_PACINO,
    },
    {
      id_show: INCEPTION,
      id_actor: LEO_DI_CAPRIO,
    },
    {
      id_show: INCEPTION,
      id_actor: JOSEPH_GORDON_LEVITT,
    },
    {
      id_show: INCEPTION,
      id_actor: TOM_HARDY,
    },
    {
      id_show: BEAUTIFUL_MIND,
      id_actor: RUSSEL_CROWE,
    },
    {
      id_show: BEAUTIFUL_MIND,
      id_actor: ED_HARRIS,
    },
    {
      id_show: GLADIATOR,
      id_actor: RUSSEL_CROWE,
    },
    {
      id_show: GLADIATOR,
      id_actor: JOAQUIN_PHOENIX,
    },
    {
      id_show: JOKER,
      id_actor: JOAQUIN_PHOENIX,
    },
    {
      id_show: JOKER,
      id_actor: ROBERT_DE_NIRO,
    },
    {
      id_show: PULP_FICTION,
      id_actor: SAMUEL_L_JACKSON,
    },
    {
      id_show: PULP_FICTION,
      id_actor: UMA_THURMAN,
    },
    {
      id_show: PULP_FICTION,
      id_actor: JOHN_TRAVOLTA,
    },
    {
      id_show: SEVEN,
      id_actor: BRAD_PITT,
    },
    {
      id_show: SEVEN,
      id_actor: MORGAN_FREEMAN,
    },
    {
      id_show: TRAINSPOTTING,
      id_actor: EWAN_MCGREGOR,
    },
    {
      id_show: TRAINSPOTTING,
      id_actor: EWAN_BREMNER,
    },
    {
      id_show: CALIFORNICATION,
      id_actor: DAVID_DUCHOVNY,
    },
    {
      id_show: CALIFORNICATION,
      id_actor: NATASCHA_MCELHORNE,
    },
    {
      id_show: TWO_AND_A_HALF_MEN,
      id_actor: JON_CRYER,
    },
    {
      id_show: TWO_AND_A_HALF_MEN,
      id_actor: ASHTON_KUTCHER,
    },
    {
      id_show: TWO_AND_A_HALF_MEN,
      id_actor: CHARLIE_SHEEN,
    },
    {
      id_show: AFTER_LIFE,
      id_actor: RICKY_GERVAIS,
    },
    {
      id_show: BREAKING_BAD,
      id_actor: BRYAN_CRANSTON,
    },
    {
      id_show: BREAKING_BAD,
      id_actor: AARON_PAUL,
    },
    {
      id_show: BREAKING_BAD,
      id_actor: BOB_ODENKIRK,
    },
    {
      id_show: GAME_OF_THRONES,
      id_actor: EMILIA_CLARKE,
    },
    {
      id_show: GAME_OF_THRONES,
      id_actor: PETER_DINKLAGE,
    },
    {
      id_show: FRIENDS,
      id_actor: DAVID_SCHWIMMER,
    },
    {
      id_show: FRIENDS,
      id_actor: MATT_LEBLANC,
    },
    {
      id_show: FRIENDS,
      id_actor: MATTHEW_PERRY,
    },
    {
      id_show: FRIENDS,
      id_actor: JENNIFER_ANISTON,
    },
    {
      id_show: FRIENDS,
      id_actor: COURTNEY_COX,
    },
    {
      id_show: FRIENDS,
      id_actor: LISA_KUDROW,
    },
    {
      id_show: BLACK_MIRROR,
      id_actor: DANIEL_LAPAINE,
    },
    {
      id_show: BLACK_MIRROR,
      id_actor: MICHAELA_COEL,
    },
    {
      id_show: BETTER_CALL_SAUL,
      id_actor: RHEA_SEEHORN,
    },
    {
      id_show: BETTER_CALL_SAUL,
      id_actor: BOB_ODENKIRK,
    },
    {
      id_show: HOUSE,
      id_actor: HUGH_LAURIE,
    },
    {
      id_show: HOUSE,
      id_actor: LISA_EDELSTEIN,
    },
    {
      id_show: HOUSE,
      id_actor: ROBERT_SEAN_LEONARD,
    },
    {
      id_show: CROWN,
      id_actor: CLAIRE_FOY,
    },
    {
      id_show: CROWN,
      id_actor: OLIVIA_COLMAN,
    },
    {
      id_show: IT_CROWD,
      id_actor: RICHARD_AYOADE,
    },
    {
      id_show: IT_CROWD,
      id_actor: KATHERINE_PARKINSON,
    },
    {
      id_show: SILICON_VALLEY,
      id_actor: THOMAS_MIDDLEDITCH,
    },
    {
      id_show: SILICON_VALLEY,
      id_actor: TJ_MILLER,
    },
    {
      id_show: BIG_BANG_THEORY,
      id_actor: JOHNY_GALECKI,
    },
    {
      id_show: BIG_BANG_THEORY,
      id_actor: JIM_PARSONS,
    },
    {
      id_show: BIG_BANG_THEORY,
      id_actor: KALEY_CUOCO,
    },
    {
      id_show: MODERN_FAMILY,
      id_actor: SOFIA_VERGARA,
    },
    {
      id_show: MODERN_FAMILY,
      id_actor: SARAH_HYLAND,
    },
    {
      id_show: MODERN_FAMILY,
      id_actor: ARIEL_WINTER,
    },
    {
      id_show: MODERN_FAMILY,
      id_actor: NOLAN_GOULD,
    },
    {
      id_show: BROOKLYN_99,
      id_actor: ANDY_SAMBERG,
    },
    {
      id_show: BROOKLYN_99,
      id_actor: CHELSEA_PERETTI,
    },
    {
      id_show: BROOKLYN_99,
      id_actor: TERRY_CREWS,
    },
  ]);

  await knex('ratings').insert([
    /**
     * Good Will Hunting Rating
     */
    {
      id_user: SELMA_HERIC,
      id_show: GOOD_WILL_HUNTING,
      rating: 5,
    },
    /**
     * The Bourne Identity Rating
     */
    {
      id_user: SELMA_HERIC,
      id_show: THE_BOURNE_IDENTITY,
      rating: 3,
    },
    /**
     * Saving Private Ryan Rating
     */
    {
      id_user: SELMA_HERIC,
      id_show: SAVING_PRIVATE_RYAN,
      rating: 4,
    },
    /**
     * Forest Gump Rating
     */
    {
      id_user: SELMA_HERIC,
      id_show: FOREST_GUMP,
      rating: 5,
    },
    /**
     * Toma Rating
     */
    {
      id_user: SELMA_HERIC,
      id_show: TOMA,
      rating: 5,
    },
    {
      id_user: SELMA_HERIC,
      id_show: VENOM,
      rating: 4,
    },
    {
      id_user: SELMA_HERIC,
      id_show: VENOM_2,
      rating: 2,
    },
    {
      id_user: SELMA_HERIC,
      id_show: MATRIX,
      rating: 4,
    },
    {
      id_user: SELMA_HERIC,
      id_show: MATRIX_4,
      rating: 1,
    },
    {
      id_user: SELMA_HERIC,
      id_show: GODFATHER,
      rating: 4,
    },
    {
      id_user: SELMA_HERIC,
      id_show: GODFATHER_2,
      rating: 5,
    },
    {
      id_user: SELMA_HERIC,
      id_show: GODFATHER_3,
      rating: 4,
    },
    {
      id_user: SELMA_HERIC,
      id_show: TRAINSPOTTING,
      rating: 5,
    },
    {
      id_user: SELMA_HERIC,
      id_show: GLADIATOR,
      rating: 1,
    },
    {
      id_user: SELMA_HERIC,
      id_show: JOKER,
      rating: 1,
    },
    {
      id_user: SELMA_HERIC,
      id_show: FRIENDS,
      rating: 5,
    },
    {
      id_user: SELMA_HERIC,
      id_show: CALIFORNICATION,
      rating: 5,
    },
    {
      id_user: SELMA_HERIC,
      id_show: GAME_OF_THRONES,
      rating: 4,
    },
    {
      id_user: SELMA_HERIC,
      id_show: TWO_AND_A_HALF_MEN,
      rating: 2,
    },
    {
      id_user: SELMA_HERIC,
      id_show: BLACK_MIRROR,
      rating: 1,
    },
    {
      id_user: SELMA_HERIC,
      id_show: CROWN,
      rating: 3,
    },
    {
      id_user: SELMA_HERIC,
      id_show: HOUSE,
      rating: 3,
    },
    {
      id_user: SELMA_HERIC,
      id_show: BIG_BANG_THEORY,
      rating: 1,
    },
    {
      id_user: SELMA_HERIC,
      id_show: BROOKLYN_99,
      rating: 2,
    },
    {
      id_user: SELMA_HERIC,
      id_show: SILICON_VALLEY,
      rating: 2,
    },
  ]);

  const ratingSumAndCount = await knex.raw(
    'select sum(rating), count(*), id_show from ratings group by id_show',
  );

  for (let i = 0; i < ratingSumAndCount.rows.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await knex('shows')
      .update({
        number_of_votes: Number(ratingSumAndCount.rows[i].count),
        total_rating_sum: Number(ratingSumAndCount.rows[i].sum),
        average_rating: +(ratingSumAndCount.rows[i].sum / ratingSumAndCount.rows[i].count).toFixed(
          1,
        ),
      })
      .where({
        id: ratingSumAndCount.rows[i].id_show,
      });
  }
};
