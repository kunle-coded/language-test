export const questions = [
  {
    id: 1,
    topic: "Introduction",
    question: "Ich heiße Martin und komme aus Schweden. Wie heißen ________?",
    options: ["sie", "Sie", "du", "Ihr"],
    type: "multiple_choice",
    correct_answer: "Sie",
  },
  {
    id: 2,
    topic: "Introduction",
    question: "Guten Tag, ich bin Felix Weber.",
    question_2: "Und wie ________ Sie?",
    options: ["heißt", "heißen", "bist", "heiße"],
    type: "multiple_choice",
    correct_answer: "heißen",
  },
  {
    id: 3,
    topic: "Introduction",
    question: "Wie alt bist du?",
    options: [
      "Ich bin 30 Jahre alt.",
      "Ich komme aus Spanien.",
      "Ich heiße Michael.",
    ],
    type: "multiple_choice",
    correct_answer: "Ich bin 30 Jahre alt.",
  },
  {
    id: 4,
    topic: "Introduction",
    question: "________ kommen Sie, Herr Dupont?",
    question_2: "________ Frankreich?",
    options: ["Wie ... In", "Wer ... Von", "Was ... Bis", "Woher ... Aus"],
    type: "multiple_choice",
    correct_answer: "Woher ... Aus",
  },
  {
    id: 5,
    topic: "Introduction",
    question: "Guten Tag, Frau Selmi. Wie geht es Ihnen?",
    question_2: "Danke, gut. Und ________, Herr Bach?",
    options: ["Ihnen", "Sie", "dir", "du"],
    type: "multiple_choice",
    correct_answer: "Ihnen",
  },
  {
    id: 6,
    topic: "Introduction",
    question: "Was sind Sie von Beruf?",
    question_2: "Ich arbeite ________ Journalist.",
    options: ["bei", "als", "in", "aus"],
    type: "multiple_choice",
    correct_answer: "als",
  },
  {
    id: 7,
    topic: "Introduction",
    question: "Wohnt ihr in Lagos?",
    question_2: "Nein, wir ________ in Lagos.",
    options: ["lebe nicht", "nicht leben", "wohnen nicht", "nicht wohnen"],
    type: "multiple_choice",
    correct_answer: "wohnen nicht",
  },
  {
    id: 8,
    topic: "Introduction",
    question: "Wer ________ das?",
    question_2: "Das sind ________ Eltern.",
    options: ["ist … meine", "sind … meine", "sind … mein", "ist … sein"],
    type: "multiple_choice",
    correct_answer: "sind … meine",
  },
  {
    id: 9,
    topic: "Introduction",
    question: "Ist Max dein Bruder?",
    question_2: "________, Max ist nicht mein Bruder, er ist mein Freund.",
    options: ["Nein", "Nicht", "Kein", "Doch"],
    type: "multiple_choice",
    correct_answer: "sind … meine",
  },
  {
    id: 10,
    topic: "Numbers, Prices, Dates",
    question: "Was kostet das Bett?",
    question_2: "________ kostet 598 €.",
    options: ["Er", "Sie", "Es", "Ihr"],
    type: "multiple_choice",
    correct_answer: "Es",
  },
  {
    id: 11,
    topic: "Numbers, Prices, Dates",
    question: "Was ist sieben plus fünf? ______________",
    type: "fill_in_the_blank",
    correct_answer: "zwölf",
  },
  {
    id: 12,
    topic: "Numbers, Prices, Dates",
    question: "Welcher Tag kommt nach Mittwoch?",
    options: ["Freitag", "Donnerstag", "Montag", "Sonntag"],
    type: "multiple_choice",
    correct_answer: "Donnerstag",
  },
  {
    id: 13,
    topic: "Numbers, Prices, Dates",
    question: "Wie spät ist es?",
    options: [
      "fünf nach halb eins",
      "fünf vor halb eins",
      "fünfundzwanzig nach zwölf",
      "fünfunddreißig vor eins",
    ],
    type: "multiple_choice",
    image: true,
    imageUrl: "src/assets/img/clock.png",
    correct_answer: "fünf vor halb eins",
  },
  {
    id: 14,
    topic: "Numbers, Prices, Dates",
    question: "Wann gehst du am Wochenende ins Kino?",
    question_2: "________ Samstag ________ halb neun. Kommst du mit?",
    options: ["Um … um", "Am … um", "Von … bis", "Um … am"],
    type: "multiple_choice",
    correct_answer: "Am … um",
  },
  {
    id: 15,
    topic: "Numbers, Prices, Dates",
    question: "Ich habe ________ 8.30 Uhr ________ 17 Uhr gearbeitet",
    options: ["von … bis", "um … am", "am … um", "bis … von"],
    type: "multiple_choice",
    correct_answer: "von … bis",
  },
  {
    id: 16,
    category: "Family and Articles",
    type: "multiple_choice",
    question: "Wie heißt der Mann von meiner Mutter?",
    options: ["Bruder", "Vater", "Opa", "Onkel"],
    correct_answer: "Vater",
  },
  {
    id: 17,
    topic: "Family, Gender, Articles",
    question: "Was ist der Plural von 'Kind'?",
    options: ["Kind", "Kinder", "Kinds", "Kindes"],
    type: "multiple_choice",
    correct_answer: "Kinder",
  },
  {
    id: 18,
    topic: "Negation and Plural",
    question: "Ich habe ________ Auto.",
    options: ["nicht", "kein", "keine", "keinen"],
    type: "multiple_choice",
    correct_answer: "kein",
  },
  {
    id: 19,
    topic: "Negation, Plural, Akkusative",
    question: "Ich habe ________ Hund.",
    options: ["keinen", "keine", "kein", "nicht"],
    type: "multiple_choice",
    correct_answer: "keinen",
  },
  {
    id: 20,
    topic: "Negation, Plural, Akkusative",
    question: "Er hat ________ Bücher.",
    options: ["die", "das", "der", "den"],
    type: "multiple_choice",
    correct_answer: "die",
  },
  {
    id: 21,
    topic: "Conjugation",
    question: "Ich ________ Deutsch.",
    options: ["lernt", "lernst", "lerne", "lernen"],
    type: "multiple_choice",
    correct_answer: "lerne",
  },
  {
    id: 22,
    topic: "Conjugation",
    question: "Wir ________ Fußball.",
    options: ["spielt", "spielst", "spielen", "spiele"],
    type: "multiple_choice",
    correct_answer: "spielen",
  },
  {
    id: 23,
    topic: "Conjugation",
    question: "Du ________ sehr gut.",
    options: ["schwimmt", "schwimmst", "schwimmen"],
    type: "multiple_choice",
    correct_answer: "schwimmst",
  },
  {
    id: 24,
    topic: "Separable verbs, Perfekt tense",
    question: "Ich ________ gestern ins Kino ________.",
    options: ["bin, gegangen", "habe, gegangen", "bin, gehen"],
    type: "multiple_choice",
    correct_answer: "bin, gegangen",
  },
  {
    id: 25,
    topic: "Separable verbs, Perfekt tense",
    question: "Wir ________ das Buch ________.",
    options: ["haben, gelesen", "sind, gelesen", "haben, lesen"],
    type: "multiple_choice",
    correct_answer: "haben, gelesen",
  },
  {
    id: 26,
    topic: "Prepositions",
    question: "Ich gehe ________ Supermarkt.",
    options: ["in den", "auf den", "im", "bei dem"],
    type: "multiple_choice",
    correct_answer: "in den",
  },
  {
    id: 27,
    topic: "Prepositions",
    question: "Das Buch liegt ________ Tisch.",
    options: ["auf den", "im", "unter der", "auf dem"],
    type: "multiple_choice",
    correct_answer: "auf dem",
  },
  {
    id: 28,
    topic: "Prepositions",
    question: "Wir sind ________ Park.",
    options: ["im", "am", "in den", "auf dem"],
    type: "multiple_choice",
    correct_answer: "im",
  },
  {
    id: 29,
    topic: "Shopping",
    question: "Wo kann man Kleidung kaufen?",
    options: ["Im Supermarkt", "Im Kaufhaus", "Im Restaurant", "Im Kino"],
    type: "multiple_choice",
    correct_answer: "Im Kaufhaus",
  },
  {
    id: 30,
    topic: "Hobbys",
    question: "Was machst du in deiner Freizeit?",
    type: "fill_in_the_blank",
    correct_answer: "[Student's hobby]",
  },
  {
    id: 31,
    topic: "Foods and Drinks",
    question: "Was trinkst du gern?",
    options: ["Wasser", "Brot", "Apfel", "Kuchen"],
    type: "multiple_choice",
    correct_answer: "Wasser",
  },
  {
    id: 32,
    topic: "Conjugation, Perfekt",
    question: "Was ________ du gestern ________?",
    options: [
      "habe … gemacht",
      "hast … machen",
      "hast … gemacht",
      "hat … gemacht",
    ],
    type: "multiple_choice",
    correct_answer: "hast … gemacht",
  },
  {
    id: 33,
    topic: "Conjugation, Perfekt",
    question: "Ich ________ erst um 23 Uhr nach Hause ________?",
    options: [
      "bin … gekommen",
      "ist … kommen",
      "ist … gekommen",
      "hat … gekommen",
    ],
    type: "multiple_choice",
    correct_answer: "bin … gekommen",
  },
  {
    id: 34,
    topic: "Conjugation, Perfekt",
    question: "Was ________ du gestern ________?",
    question_2: "________ Samstag ________ halb neun. Kommst du mit?",
    options: ["Um … um", "Am … um", "Von … bis", "Um … am"],
    type: "multiple_choice",
    correct_answer: "Am … um",
  },
  {
    id: 35,
    topic: "Conjugation, Modal verbs",
    question: "Was möchtet ihr zum Frühstück?",
    question_2: "Wir ________ gern einen Kaffee.",
    options: ["möchte", "möchtet", "möchtest", "möchten"],
    type: "multiple_choice",
    correct_answer: "möchten",
  },
  {
    id: 36,
    topic: "Conjugation, Modal verbs",
    question: "Er ________ nicht gut singen, aber er ________ sehr gut.",
    options: [
      "kann / tanzen",
      "können / tanzen",
      "kann / tanzt",
      "könnt / tanzen",
    ],
    type: "multiple_choice",
    correct_answer: "kann / tanzt",
  },
  {
    id: 37,
    topic: "Conjugation, Modal verbs",
    question: "Der Arzt sagt, ich ________ viel Tee trinken.",
    options: ["sollst", "sollen", "soll", "sollt"],
    type: "multiple_choice",
    correct_answer: "soll",
  },
  {
    id: 38,
    topic: "Prepositions",
    question: "Die Polizei ist ________  Post.",
    options: ["hinter der", "neben der", "neben die", "zwischen der"],
    type: "multiple_choice",
    image: true,
    imageUrl: "src/assets/img/polizei.png",
    correct_answer: "neben der",
  },
  {
    id: 39,
    topic: "Prepositions",
    question: "Der Zug fährt gleich ________ Tunnel. (der Tunnel)",
    options: ["durch einen", "auf einer", "durch einem", "durch eine"],
    type: "multiple_choice",
    correct_answer: "durch einen",
  },

  {
    id: 40,
    topic: "Prepositions",
    question: "Ich fahre immer ________ meinen Kindern auf Urlaub.",
    options: ["mit", "für", "bei", "in"],
    type: "multiple_choice",
    correct_answer: "mit",
  },
];
