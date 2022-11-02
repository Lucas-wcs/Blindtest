const api = [
  {
    id: 1,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/d26b907ad10293b61b3d1b4b845e153b/264x264-000000-80-0-0.jpg",
    titre: "bande organisee",
    artiste: "13 organise",
    date: "2020",
    genre: "rap",
    mp3: "bande_organisee.mp3",
  },
  {
    id: 2,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/1e67034f2e56796abe33e4c8a33b64ed/264x264-000000-80-0-0.jpg",
    titre: "la terre est ronde",
    artiste: "orelsan",
    date: "2011",
    genre: "rap",
    mp3: "la_terre_est_ronde.mp3",
  },
  {
    id: 3,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/3455d2d7101ec09f01103c2e4104a81c/264x264-000000-80-0-0.jpg",
    titre: "desaccorde",
    artiste: "vald",
    date: "2018",
    genre: "rap",
    mp3: "desaccorde.mp3",
  },
  {
    id: 4,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/ff5caf314549e1cff1960c5b2acfd384/264x264-000000-80-0-0.jpg",
    titre: "au dd",
    artiste: "pnl",
    date: "2019",
    genre: "rap",
    mp3: "au_dd.mp3",
  },
  {
    id: 5,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/d2cba0d91b2c02b7bd364186c4e64cf0/264x264-000000-80-0-0.jpg",
    titre: "life",
    artiste: "hamza",
    date: "2017",
    genre: "rap",
    mp3: "life.mp3",
  },
  {
    id: 6,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/e50540d7f752c93e0695ebae272be0c3/264x264-000000-80-0-0.jpg",
    titre: "faded",
    artiste: "alan walker",
    date: "2015",
    genre: "electro",
    mp3: "faded.mp3",
  },
  {
    id: 7,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/dc5cacfbaa2a9d8692f196c0b73fc879/264x264-000000-80-0-0.jpg",
    titre: "alone",
    artiste: "marshmello",
    date: "2016",
    genre: "electro",
    mp3: "alone.mp3",
  },
  {
    id: 8,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/1b43cadf09b492b3d0b26b2ab2f0db06/264x264-000000-80-0-0.jpg",
    titre: "animals",
    artiste: "martin garrix",
    date: "2013",
    genre: "electro",
    mp3: "animals.mp3",
  },
  {
    id: 9,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/af32df247aac316125d0f413c1819681/264x264-000000-80-0-0.jpg",
    titre: "unity",
    artiste: "thefatrat",
    date: "2015",
    genre: "electro",
    mp3: "unity.mp3",
  },
  {
    id: 10,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/544d04807869e82b2ecc943d006cf25c/264x264-000000-80-0-0.jpg",
    titre: "japan",
    artiste: "throttle",
    date: "2019",
    genre: "electro",
    mp3: "japan.mp3",
  },
  {
    id: 11,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/811d8289b9fb069e2db23ea6c2d4d3e2/264x264-000000-80-0-0.jpg",
    titre: "resonance",
    artiste: "home",
    date: "2014",
    genre: "electro",
    mp3: "resonance.mp3",
  },
  {
    id: 12,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/82c139e154a40073542914dfed468474/264x264-000000-80-0-0.jpg",
    titre: "turn down for what",
    artiste: "dj snake",
    date: "2013",
    genre: "electro",
    mp3: "turn_down_for_what.mp3",
  },
  {
    id: 13,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/264x264-000000-80-0-0.jpg",
    titre: "instant crush",
    artiste: "daft punk",
    date: "2014",
    genre: "electro",
    mp3: "instantCrush.mp3",
  },
  {
    id: 14,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/ec9a02f083f6d81102ec500553c1cdf0/264x264-000000-80-0-0.jpg",
    titre: "intoxicated",
    artiste: "martin solveig",
    date: "2015",
    genre: "electro",
    mp3: "intoxicated.mp3",
  },
  {
    id: 15,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/ec97306735b46ec334e0ce562290775b/264x264-000000-80-0-0.jpg",
    titre: "wake me up",
    artiste: "avicii",
    date: "2013",
    genre: "electro",
    mp3: "wake_me_up.mp3",
  },
  {
    id: 16,
    pochette:
      "https://i.discogs.com/q09KsVW0Kgzfmy1r5We6kiBeC6X_7FTsxjUqinDBql0/rs:fit/g:sm/q:90/h:600/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwNjYy/MS0xNDI2OTEzODEx/LTEyMzEuanBlZw.jpeg",
    titre: "shrek",
    artiste: "all star",
    date: "2001",
    genre: "film",
    mp3: "all_star.mp3",
  },
  {
    id: 17,
    pochette:
      "https://i.discogs.com/0GZUPBzIw4108MInwONdxiF0e8jkvWlB7X5UesdTOMU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzNTAx/My0xNDU2NjYyMDg3/LTY3MzYuanBlZw.jpeg",
    titre: "ghostbusters",
    artiste: "ray parker jr",
    date: "1984",
    genre: "film",
    mp3: "ghostbusters.mp3",
  },
  {
    id: 18,
    pochette:
      "https://i.discogs.com/-jkKR5_zJWfRoCO8q83p-BB9H1sg1Wg5NSHdo4qZBh4/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzAy/OTktMTM4ODc1MTc5/NS01Nzc0LmpwZWc.jpeg",
    titre: "pirates des caraibes",
    artiste: "klaus badelt",
    date: "2003",
    genre: "film",
    mp3: "he_s_a_pirate.mp3",
  },
  {
    id: 19,
    pochette:
      "https://i1.sndcdn.com/artworks-yMEOz1ewCyQNMsUe-cL525g-t500x500.jpg",
    titre: "the godfather",
    artiste: "love theme from",
    date: "1972",
    genre: "film",
    mp3: "love_theme_from.mp3",
  },
  {
    id: 20,
    pochette:
      "https://i1.sndcdn.com/artworks-uhU7KsC9m9AcWWT4-MyCVHQ-t500x500.jpg",
    titre: "a star is born ",
    artiste: "lady gaga",
    date: "2018",
    genre: "film",
    mp3: "shallow.mp3",
  },
  {
    id: 21,
    pochette: "https://i1.sndcdn.com/artworks-000598333847-y0whqn-t500x500.jpg",
    titre: "pulp fiction ",
    artiste: "chuck berry",
    date: "1994",
    genre: "film",
    mp3: "you_never_can_tell.mp3",
  },
  {
    id: 22,
    pochette: "https://i1.sndcdn.com/artworks-yIk2GBwn0KvU-0-t500x500.jpg",
    titre: "you're the one that i want",
    artiste: "john travolta & olivia newton john",
    date: "1978",
    genre: "film",
    mp3: "you_re_the_one_that_i_want.mp3",
  },
  {
    id: 23,
    pochette: "https://www.cinezik.org/critiques/jaquettes/famille-addams.jpg",
    titre: "la famille adams",
    artiste: "jeff danna",
    date: "1991",
    genre: "film",
    mp3: "la_famille_adams.mp3",
  },
  {
    id: 24,
    pochette: "https://i1.sndcdn.com/artworks-000077587301-ohm6wx-t500x500.jpg",
    titre: "la reine des neige",
    artiste: "anais delva",
    date: "2007",
    genre: "film",
    mp3: "liberee_delivree.mp3",
  },
  {
    id: 25,
    pochette: "https://i1.sndcdn.com/artworks-000150671986-65wkq9-t500x500.jpg",
    titre: "le roi lion",
    artiste: "Hans Zimmer",
    date: "1994",
    genre: "film",
    mp3: "histoire_de_la_vie.mp3",
  },
  {
    id: 26,
    pochette:
      "https://i.discogs.com/cXjs1voMWmIWXe0yOI2yiOK45Uu8_bjM_i2_Jic90Ps/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyMjg1/OC0xMzc5OTcyODE0/LTUxODYuanBlZw.jpeg",
    titre: "flashdance",
    artiste: "irene cara",
    date: "1983",
    genre: "film",
    mp3: "flashdance.mp3",
  },
  {
    id: 27,
    pochette:
      "https://i.discogs.com/UYmJ5Gg-iH5Q65eDz-oNmnWxZ9caBkXPdIuubN_vdSI/rs:fit/g:sm/q:90/h:240/w:240/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNzIz/MTYtMTI4MDE3Njkw/MC5qcGVn.jpeg",
    titre: "full monty",
    artiste: "joe cocker",
    date: "1986",
    genre: "film",
    mp3: "full_monty.mp3",
  },
  {
    id: 28,
    pochette:
      "https://i.discogs.com/x67-g5p0pKsA9pAogDwEFG7y4WJalY6N2eP8Eh542q0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzNTQ4/My0xNDYxODUzMTE3/LTczODQuanBlZw.jpeg",
    titre: "dirty dancing",
    artiste: "bill medley",
    date: "1987",
    genre: "film",
    mp3: "dirty_dancing.mp3",
  },
  {
    id: 29,
    pochette: "https://soundcloud.com/official-p-nk/so-what-1",
    titre: "so what",
    artiste: "pink",
    date: "2008",
    genre: "pop",
    mp3: "so_what.mp3",
  },
  {
    id: 30,
    pochette: "https://soundcloud.com/avrillavigne/when-youre-gone",
    titre: "when you're gone",
    artiste: "avril lavigne",
    date: "2007",
    genre: "pop",
    mp3: "when_youre_gone.mp3",
  },
  {
    id: 31,
    pochette: "https://soundcloud.com/nellyfurtado/say-it-right-main",
    titre: "say it right",
    artiste: "nelly furtado",
    date: "2006",
    genre: "pop",
    mp3: "say_it_right.mp3",
  },
  {
    id: 32,
    pochette: "https://soundcloud.com/kellyclarksonofficial/catch-my-breath",
    titre: "catch my breath",
    artiste: "kelly klarkson",
    date: "2012",
    genre: "pop",
    mp3: "catch_my_breath.mp3",
  },
  {
    id: 33,
    pochette: "https://soundcloud.com/de-palmas/jen-r-ve-encore-radio-edit",
    titre: "j'en reve encore",
    artiste: "gerald de palmas",
    date: "2000",
    genre: "pop",
    mp3: "jen_reve_encore.mp3",
  },
  {
    id: 34,
    pochette: "https://i1.sndcdn.com/artworks-dwSdHSyBZegJ-0-t500x500.jpg",
    titre: "(You drive me) crazy",
    artiste: "britney spears",
    date: "1999",
    genre: "pop",
    mp3: "crazy.mp3",
  },
  {
    id: 35,
    pochette: "https://soundcloud.com/spice-girls-official/wannabe-radio-edit",
    titre: "Wannabe",
    artiste: "Spice Girls",
    date: "1996",
    genre: "pop",
    mp3: "wannabe.mp3",
  },
  {
    id: 36,
    pochette:
      "https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4",
    titre: "Never Gonna Give You Up",
    artiste: "Rick Astley",
    date: "1987",
    genre: "pop",
    mp3: "never_gonna_give_you_up.mp3",
  },
  {
    id: 37,
    pochette: "https://soundcloud.com/aqua-official/barbie-girl",
    titre: "Barbie Girl",
    artiste: "Aqua",
    date: "1997",
    genre: "pop",
    mp3: "barbie_girl.mp3",
  },
  {
    id: 38,
    pochette:
      "https://soundcloud.com/vengaboys-official/boom-boom-boom-boom-airplay",
    titre: "boom, boom, boom, boom !!",
    artiste: "Vengaboys",
    date: "1998",
    genre: "pop",
    mp3: "boom.mp3",
  },
  {
    id: 39,
    pochette:
      "https://soundcloud.com/dj-kakes/beatles-come-together-kakes-re-intepretation",
    titre: "Come together",
    artiste: "The Beatles",
    date: "1969",
    genre: "pop",
    mp3: "come_together.mp3",
  },
  {
    id: 40,
    pochette: "https://soundcloud.com/bobdylan/like-a-rolling-stone-1",
    titre: "Like a rolling stone",
    artiste: "Bob Dylan",
    date: "1965",
    genre: "pop",
    mp3: "like_a_rolling_stone.mp3",
  },
  {
    id: 41,
    pochette: "https://soundcloud.com/beegees/night-fever-3",
    titre: "Saturday Night Fever",
    artiste: "Bee Gees",
    date: "1978",
    genre: "pop",
    mp3: "saturday_night_fever.mp3",
  },
  {
    id: 42,
    pochette: "https://soundcloud.com/madonna/like-a-virgin-album-version",
    titre: "Like a virgin",
    artiste: "Madonna",
    date: "1984",
    genre: "pop",
    mp3: "like_a_virgin.mp3",
  },
  {
    id: 43,
    pochette: "https://soundcloud.com/cultureclubofficial/karma-chameleon",
    titre: "Karma chameleon",
    artiste: "Culture Club",
    date: "1983",
    genre: "pop",
    mp3: "karma_chameleon.mp3",
  },
  {
    id: 44,
    pochette: "https://i1.sndcdn.com/artworks-000615249271-ntzfcj-t500x500.jpg",
    titre: "sicko mode",
    artiste: "travis scott",
    date: "2018",
    genre: "rap-us",
    mp3: "sicko_mode.mp3",
  },
  {
    id: 45,
    pochette: "https://i1.sndcdn.com/artworks-K7xcbakfqg3l-0-t500x500.jpg",
    titre: "god's plan",
    artiste: "drake",
    date: "2018",
    genre: "rap-us",
    mp3: "gods_plan.mp3",
  },
  {
    id: 46,
    pochette:
      "https://i1.sndcdn.com/artworks-Zu9NRyD7ruL6QNbV-VmwxNw-t500x500.jpg",
    titre: "ice ice baby",
    artiste: "vanilla ice",
    date: "2008",
    genre: "rap-us",
    mp3: "ice_ice_baby.mp3",
  },
  {
    id: 47,
    pochette: "https://i1.sndcdn.com/artworks-000078359650-be9u6y-t500x500.jpg",
    titre: "x gon it to ya",
    artiste: "dmx",
    date: "2007",
    genre: "rap-us",
    mp3: "x_gon_it_to_ya.mp3",
  },
  {
    id: 48,
    pochette: "https://i1.sndcdn.com/artworks-1sBxfSR81orV-0-t500x500.jpg",
    titre: "candy shop",
    artiste: "50 cent",
    date: "2005",
    genre: "rap-us",
    mp3: "candy_shop.mp3",
  },
  {
    id: 49,
    pochette: "https://i1.sndcdn.com/artworks-TdDHKnw0MRxZ-0-t500x500.jpg",
    titre: "in da club",
    artiste: "50 cent",
    date: "2003",
    genre: "rap-us",
    mp3: "in_da_club.mp3",
  },
  {
    id: 50,
    pochette: "https://i1.sndcdn.com/artworks-c8II8pEhlciX-0-t500x500.jpg",
    titre: "poppin'them thangs",
    artiste: "g-unit",
    date: "2003",
    genre: "rap-us",
    mp3: "poppin_them_thangs.mp3",
  },
  {
    id: 51,
    pochette: "https://i1.sndcdn.com/artworks-52MqivuVTpS9-0-t500x500.jpg",
    titre: "it was a good day",
    artiste: "ice cube",
    date: "2001",
    genre: "rap-us",
    mp3: "it_was_a_good_day.mp3",
  },
  {
    id: 52,
    pochette: "https://i1.sndcdn.com/artworks-000029645008-lf2o5w-t500x500.jpg",
    titre: "still d.r.e",
    artiste: "dr. d.r.e",
    date: "1999",
    genre: "rap-us",
    mp3: "still_dre.mp3",
  },
  {
    id: 53,
    pochette: "https://i1.sndcdn.com/artworks-000250680688-2thuof-t500x500.jpg",
    titre: "ambitionz az a ridah",
    artiste: "2pac",
    date: "1996",
    genre: "rap-us",
    mp3: "ambitionz_az_a_ridah.mp3",
  },
  {
    id: 54,
    pochette: "https://i1.sndcdn.com/artworks-000061968805-tnpnib-t500x500.jpg",
    titre: "gangsta's paradise",
    artiste: "coolio l.v",
    date: "1995",
    genre: "rap-us",
    mp3: "gangstas_paradise.mp3",
  },
  {
    id: 55,
    pochette: "https://i1.sndcdn.com/artworks-Pd40zPghTPoR-0-t500x500.jpg",
    titre: "Highway to Hell",
    artiste: "ACDC",
    date: "1978",
    genre: "rock",
    mp3: "highway_to_hell.mp3",
  },
  {
    id: 56,
    pochette: "https://i1.sndcdn.com/artworks-349orJGVpqM3-0-t500x500.jpg",
    titre: "Light my fire",
    artiste: "The Doors",
    date: "1967",
    genre: "rock",
    mp3: "light_my_fire.mp3",
  },
  {
    id: 57,
    pochette: "https://i1.sndcdn.com/artworks-wwkx78aOXLjw-0-t500x500.jpg",
    titre: "All along the watchtower",
    artiste: "Jimmy Hendrix",
    date: "1968",
    genre: "rock",
    mp3: "all_along_the_watchtower.mp3",
  },
  {
    id: 58,
    pochette: "https://i1.sndcdn.com/artworks-JkQ9pyV1zBwT-0-t500x500.jpg",
    titre: "Viva las Vegas",
    artiste: "Elvis Presley",
    date: "1964",
    genre: "rock",
    mp3: "viva_las_vegas.mp3",
  },
  {
    id: 59,
    pochette: "https://i1.sndcdn.com/artworks-hytLs0tHVgH3-0-t500x500.jpg",
    titre: "Sweet child O'Main",
    artiste: "Gun's N'Roses",
    date: "1987",
    genre: "rock",
    mp3: "sweet_child_o_mine.mp3",
  },
  {
    id: 60,
    pochette: "https://i1.sndcdn.com/artworks-Q9yG2TwpN7AQ-0-t500x500.jpg",
    titre: "Starlight",
    artiste: "Muse",
    date: "2010",
    genre: "rock",
    mp3: "starlight.mp3",
  },
  {
    id: 61,
    pochette: "https://i1.sndcdn.com/artworks-gOMq4hkbrQRM-0-t500x500.jpg",
    titre: "Livin' on a prayer",
    artiste: "Bon Jovi",
    date: "1986",
    genre: "rock",
    mp3: "livin_on_a_prayer.mp3",
  },
  {
    id: 62,
    pochette: "https://i1.sndcdn.com/artworks-XSFWvdSTuTUG-0-t500x500.jpg",
    titre: "Dani California",
    artiste: "Red Hot Chili Peppers",
    date: "2006",
    genre: "rock",
    mp3: "dani_california.mp3",
  },
  {
    id: 63,
    pochette: "https://i1.sndcdn.com/artworks-000027773637-143tzg-t500x500.jpg",
    titre: "Another brick in the wall",
    artiste: "Pink Floyd",
    date: "1979",
    genre: "rock",
    mp3: "another_brick_in_the_wall.mp3",
  },
  {
    id: 64,
    pochette: "https://i1.sndcdn.com/artworks-ozljxJutcEDj-0-t500x500.jpg",
    titre: "Poison",
    artiste: "Alice Cooper",
    date: "1989",
    genre: "rock",
    mp3: "poison.mp3",
  },
  {
    id: 65,
    pochette: "https://i1.sndcdn.com/artworks-JIq8sgwCnekY-0-t500x500.jpg",
    titre: "Eye of the tiger",
    artiste: "Survivor",
    date: "1982",
    genre: "rock",
    mp3: "eye_of_the_tiger.mp3",
  },
  {
    id: 66,
    pochette: "https://i1.sndcdn.com/artworks-Kj2Te9LjvLB4-0-t500x500.jpg",
    titre: "Fortunate son",
    artiste: "Creedence Clearwater Revival",
    date: "1969",
    genre: "rock",
    mp3: "fortunate_son.mp3",
  },
  {
    id: 67,
    pochette: "https://i1.sndcdn.com/artworks-000008155861-x8k4xr-t500x500.jpg",
    titre: "Rock you like a hurricane",
    artiste: "Scorpions",
    date: "1984",
    genre: "rock",
    mp3: "rock_you_like_a_hurricane.mp3",
  },
  {
    id: 68,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/e55b667aeba377649885320b499f6113/264x264-000000-80-0-0.jpg",
    titre: "say say say",
    artiste: "paul McCartney & michael jackson",
    date: "1983",
    genre: "pop",
    mp3: "say_say_say.mp3",
  },
  {
    id: 69,
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/fb0a49a91ab8137ec9d028c4dbb04021/264x264-000000-80-0-0.jpg",
    titre: "smooth criminal",
    artiste: "michael jackson",
    date: "1987",
    genre: "pop",
    mp3: ".mp3",
  },
];

module.exports = api;