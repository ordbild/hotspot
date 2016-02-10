var imgPath = 'assets/img/personalbilder/';
var gameData = [
    {
        profession: 'Enhetschef',
        description: 'Planerar, organiserar och leder arbetet så att verksamhetens mål uppfylls. Har ansvar för personal och budget. Bra på att skapa engagemang och delaktighet.',
        image: imgPath + 'enhetschef.png'
    },
    {
        profession: 'Kommunikatör',
        description: 'Kreativ, utåtriktad, nyfiken och stresstålig. Är bra på att uttrycka sig i tal och skrift och gillar att samarbeta med andra.',
        image: imgPath + 'kommunikator.png'
    },
    {
        profession: 'Stödassistent ',
        description: 'Ansvarsfull, lyhörd och har stor inlevelseförmåga. Är bra på att sätta sig in i andra människors situation och kan sporra och uppmuntra. Gillar samarbete.  ',
        image: imgPath + 'stodassistent.png'
    },
    {
        profession: 'Vaktmästare',
        description: 'Flexibel, handlingskraftig, händig och serviceinriktad. Gillar att lösa praktiska problem och ta egna initiativ. Måste ofta prioritera om arbetsuppgifterna när något akut inträffar. ',
        image: imgPath + 'vaktmastare.png'
    },
    {
        profession: 'Behandlings-assistent',
        description: 'Samarbetsförmåga och stort tålamod. Gillar att engagera sig i andra människor och deras livssituation. Är bra på att lyssna och samtala. Ibland psykiskt krävande men ger mycket tillbaka.  ',
        image: imgPath + 'behandlingsassistent.png'
    },
    {
        profession: 'Servicevärd',
        description: 'Utåtriktad, noggrann och sätter kunden i fokus oavsett om det handlar om att göra fint i lokaler, eller att ta emot besökare i en reception. Självständig och handlingskraftig.',
        image: imgPath + 'servicevard.png'
    },
    {
        profession: 'Airportofficer',
        description: 'Noggrann, serviceinriktad och språkbegåvad. Bra på att förklara olika regler och kan hantera konflikter även om det är stressigt. Sätter alltid säkerheten först.  Får inte vara färgblind.',
        image: imgPath + 'airportofficer.png'
    },
    {
        profession: 'Förskollärare',
        description: 'Empatisk, kreativ och pedagogisk. Lärande med hjälp av lek, bild och sång. Viktig samtalspartner för både barn och vuxna. Jobbet är intensivt, får ofta förklara och medla. Jobbar även utomhus.',
        image: imgPath + 'forskollarare.png'
    },
    {
        profession: 'Sjuksköterska',
        description: 'Är uppmärksam, lyhörd och förstår andra människors behov. Ansvarig för andras hälsa, vård och mediciner. Bra på att ge information. Bidrar till andras trygghet. ',
        image: imgPath + 'sjukskoterska.png'
    },
    {
        profession: 'Ekonom',
        description: 'Noggrann, förmåga att se detaljer och att analysera komplexa sammanhang. Systematisk och bra på att tolka regler och förklara för andra hur viktigt det är att göra rätt.',
        image: imgPath + 'ekonom.png'
    },
    {
        profession: 'Gymnasielärare',
        description: 'Skapa intresse, ha tålamod, uppmärksamhet och lyhördhet. Gillar kunskaper och vill se andra utvecklas. Samarbetar, planerar och utvärderar. Bra på att förklara och är nutidsorienterad.',
        image: imgPath + 'gymnasielarare.png'
    },
    {
        profession: 'Social - sekreterare',
        description: 'Möter andra i samtal som leder till förändring. Engagerad och empatisk men måste kunna sätta gränser och hålla distans. Tolkar lagen, skriver utredningar och fattar ibland svåra beslut.',
        image: imgPath + 'socialsekreterare.png'
    },
    {
        profession: 'Bibliotekarie',
        description: 'Bra på att analysera, förklara och organisera. Lyhörd, servicekänsla och öppen för nya impulser. Samlar, strukturerar och förmedlar information och upplevelser i olika medier.',
        image: imgPath + 'biblotekarie.png'
    },
    {
        profession: 'IT-arkitekt',
        description: 'Utvecklar strategier för hur olika system kan användas och förbättras. Har helhetssyn men även sinne för detaljer. Samarbetar ofta med andra och är lyhörd. Användarbarhet är ett nyckelord.',
        image: imgPath + 'it-arkitekt.png'
    },
    {
        profession: 'Byggnads - ingenjör',
        description: 'Har analytisk förmåga, är kreativ och hittar optimala lösningar. Är bra på att organisera och ser till att hålla tidsplaner och kalkyler. Planerar, leder och levererar fysiska resultat.',
        image: imgPath + 'byggnadsingenjor.png'
    },
    {
        profession: 'Stadsjurist',
        description: 'Är lyhörd och en god problemlösare. Förhandlar, fattar beslut och ger råd. Är konsekvent och har stort ansvar. Tolkar lagar och avtal, skriver utredningar och upprättar kontrakt.',
        image: imgPath + 'stadsjurist.png'
    },
    {
        profession: 'Företagslots',
        description: 'Ger råd och upplysningar eller slussar till rätt instans. Är serviceinriktad och gillar att ha många externa kontakter. Ser möjligheter, gillar näringslivsutveckling och att arbeta utåtriktat. ',
        image: imgPath + 'foretagslots.png'
    },
    {
        profession: 'System - förvaltare',
        description: 'Jobbar både med utveckling, förvaltning och driftsäkerhet. Är bra på att förklara och förstå användarnas behov. Planerar uppdateringar och hittar fel. Är systematisk och ordningsam.',
        image: imgPath + 'systemforvaltare.png'
    },
    {
        profession: 'Konsument - rådgivare',
        description: 'Informerar om rättigheter, förklarar lagar och regler, ger råd och stöd. Är bra på att uttrycka sig i tal och skrift och kan medla i konflikter. Jobbar förebyggande och hjälper ibland till så att du får rätt.',
        image: imgPath + 'konsumentradgivare.png'
    },
    {
        profession: 'Miljöinspektör',
        description: 'Besöker olika verksamheter och kontrollerar att lagar och förordningar följs. Är expert inom sitt område. Är bra på att undersöka, analysera, jämföra och informera. Skriver yttranden och beslut.',
        image: imgPath + 'miljoinspektor.png'
    },
    {
        profession: 'Personal - sekreterare ',
        description: 'Utreder, förhandlar, utbildar och ger råd. Är bra på att uttrycka sig i tal och skrift. Gillar samarbete. Är stöd för medarbetare och organisation och ser till att lagar och riktlinjer följs.',
        image: imgPath + 'personalsekreterare.png'
    },
    {
        profession: 'Undersköterska',
        description: 'Är uppmärksam, ansvarsfull och lyhörd. Bra på att se människors behov. Ger omvårdnad och stöd i dagliga rutiner. Är noggrann och bra på att kommunicera.',
        image: imgPath + 'underskoterska.png'
    },
    {
        profession: 'Nämnd - sekreterare',
        description: 'Ordning, struktur och sinne för detaljer. Samordnar och planerar så alla handlingar är klara i tid. Förbereder ärenden och sammanställer material. Skriver kallelser och protokoll.',
        image: imgPath + 'namndsekreterare.png'
    },
    {
        profession: 'Fritidsledare',
        description: 'Bra på att skapa gemenskap och trygghet. Stödjer, förebygger, planerar och arrangerar. Är en stabil förebild som är engagerad och kreativ. Gillar att få andra att växa och utvecklas.',
        image: imgPath + 'fritidsledare.png'
    },
    {
        profession: 'Bovärd',
        description: 'Serviceinriktad, händig och bra på att lösa problem. Bidrar till trygghet och trivsel. Är ansiktet utåt och fångar upp signaler. Bra på att ha kontakt med andra människor, även i besvärliga situationer.',
        image: imgPath + 'bovard.png'
    },
    {
        profession: 'Elektriker',
        description: 'Jobbar med installationer, reparationer och underhåll. Får ibland laga akuta fel. Gillar kundkontakter, noggrannhet och att arbeta efter ritningar och instruktioner. Farligt om det inte blir rätt.',
        image: imgPath + 'elektriker.png'
    }
];
/*var gameData = [
  {
  profession: 'Städare',
  description: 'Du gillar att städa',
  image: ''
  },
  {
  profession: 'Golfare',
  description: 'Du gillar att spela golf',
  image: ''
  },
  {
  profession: 'Läkare',
  description: 'Du räddar liv',
  image: ''
  },
  {
  profession: 'Polis',
  description: 'Du är bra på att lösa mordgåtor',
  image: ''
  },
  {
  profession: 'Lärare',
  description: 'Du är duktig på att lära ut',
  image: ''
  },
  {
  profession: 'Legobyggare',
  description: 'Du bygger saker av små plastbitar.',
  image: ''
  },
  {
  profession: 'Skådespelare',
  description: 'Du låtsas att du är någon annan',
  image: ''
  }
  ];*/
