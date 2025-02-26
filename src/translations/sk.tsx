/* eslint-disable */

import React, { Fragment } from 'react';
import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import { Badge } from 'react-bootstrap';

const errorMarkup = `<h1>Chyba aplikácie</h1>
<p>
  Chyba nám bola automaticky reportovaná pod ID <b>{ticketId}</b>.
  Môžeš ju nahlásiť aj na <a href="https://github.com/FreemapSlovakia/freemap-v3-react/issues/new" target="_blank" rel="noopener noreferrer">GitHub</a>,
  prípadne nám poslať detaily na <a href="mailto:freemap@freemap.sk?subject=Nahlásenie%20chyby%20na%20www.freemap.sk">freemap@freemap.sk</a>.
</p>
<p>
  Ďakujeme.
</p>`;

export default {
  general: {
    elevationProfile: 'Výškový profil',
    save: 'Uložiť',
    cancel: 'Zrušiť',
    modify: 'Upraviť',
    delete: 'Zmazať',
    remove: 'Odstrániť',
    close: 'Zavrieť',
    exitFullscreen: 'Zrušiť zobrazenie na celú obrazovku',
    fullscreen: 'Na celú obrazovku',
    yes: 'Áno',
    no: 'Nie',
    masl: 'm.n.m.',
    copyCode: 'Skopírovať kód',
    loading: 'Načítavam…',
    ok: 'OK',
    preventShowingAgain: 'Už viac nezobrazovať',
    closeWithoutSaving: 'Zavrieť okno bez uloženia zmien?',
    back: 'Späť',
    internalError: `!HTML!${errorMarkup}`,
    appUpdated: 'Je dostupná aktualizácia. Obnoviť stránku?',
    seconds: 'sekundy',
    minutes: 'minúty',
    meters: 'metre',
    createdAt: 'Vytvorené',
    actions: 'Akcie',
    add: 'Pridať nové',
    processorError: 'Chyba aplikácie: ${error}',
  },

  tools: {
    none: 'Zavrieť nástroj',
    tools: 'Nástroje',
    routePlanner: 'Vyhľadávač trás',
    objects: 'Miesta',
    gallery: 'Fotografie',
    measurement: 'Meranie',
    trackViewer: 'Prehliadač trás (GPX)',
    infoPoint: 'Body v mape',
    changesets: 'Zmeny v mape',
    mapDetails: 'Detaily v mape',
    tracking: () => (
      <>
        Sledovanie <Badge>BETA</Badge>
      </>
    ),
  },

  routePlanner: {
    convertToMeasurement: 'Skonvertovať na meranie',
    start: 'Štart',
    finish: 'Cieľ',
    swap: 'Prehodiť štart a cieľ',
    point: {
      pick: 'Vybrať na mape',
      current: 'Tvoja poloha',
      home: 'Domov',
    },
    transportType: {
      car: 'Auto, vrátane spoplatnených ciest',
      'car-free': 'Auto, mimo spoplatnených ciest',
      bikesharing: 'Bike sharing',
      imhd: 'MHD v Bratislave',
      'bike-osm': 'Bicykel',
      bike: 'Cykloturistika',
      'foot-stroller': 'S kočíkom / vozíčkom',
      nordic: 'Bežky',
      ski: 'Zjazdové lyžovanie',
      'foot-osm': 'Pešo',
      foot: 'Turistika',
    },
    development: 'vo vývoji',
    mode: {
      route: 'Po poradí',
      trip: 'Návšteva miest',
      roundtrip: 'Návšteva miest (okruh)',
    },
    alternative: 'Alternatíva',
    // eslint-disable-next-line
    distance: ({ value }) => (
      <Fragment>
        Vzdialenosť: <b>{value} km</b>
      </Fragment>
    ),
    // eslint-disable-next-line
    duration: ({ h, m }) => (
      <Fragment>
        Trvanie:{' '}
        <b>
          {h} h {m} m
        </b>
      </Fragment>
    ),
    // eslint-disable-next-line
    summary: ({ distance, h, m }) => (
      <Fragment>
        Vzdialenosť: <b>{distance} km</b> | Trvanie:{' '}
        <b>
          {h} h {m} m
        </b>
      </Fragment>
    ),
    noHomeAlert: 'Najprv si musíte nastaviť domovskú polohu.',
    showMidpointHint:
      'Pre pridanie prechodného bodu potiahnite úsek cesty na zvolené miesto.',
    gpsError: 'Nepodarilo sa získať aktuálnu polohu.',
    routeNotFound:
      'Cez zvolené body sa nepodarilo vyhľadať trasu. Skúste zmeniť parametre alebo posunúť body trasy.',
    fetchingError: 'Nastala chyba pri hľadaní trasy: {err}',
    maneuverWithName: '{type} {modifier} na {name}',
    maneuverWithoutName: '{type} {modifier}',

    maneuver: {
      types: {
        turn: 'odbočte',
        'new name': 'choďte',
        depart: 'začnite',
        arrive: 'ukončte',
        merge: 'pokračujte',
        // 'ramp':
        'on ramp': 'choďte na príjazdovú cestu',
        'off ramp': 'opusťte príjazdovú cestu',
        fork: 'zvoľte cestu',
        'end of road': 'pokračujte',
        // 'use lane':
        continue: 'pokračujte',
        roundabout: 'vojdite na kruhový objazd',
        rotary: 'vojdite na okružnú cestu',
        'roundabout turn': 'na kruhovom objazde odbočte',
        // 'notification':
        'exit rotary': 'opusťte okružnú cestu', // undocumented
        'exit roundabout': 'opusťte kruhový objazd', // undocumented
      },

      modifiers: {
        uturn: 'otočte sa',
        'sharp right': 'prudko doprava',
        'slight right': 'mierne doprava',
        right: 'doprava',
        'sharp left': 'prudko doľava',
        'slight left': 'mierne doľava',
        left: 'doľava',
        straight: 'priamo',
      },
    },

    imhd: {
      total: {
        // eslint-disable-next-line
        short: ({ arrival, price, numbers }) => (
          <Fragment>
            Príchod: <b>{arrival}</b> | Cena: <b>{price} €</b> | Spoje:{' '}
            {numbers.map((n, i) => (
              <Fragment key={n}>
                {i > 0 ? ', ' : ''}
                <b>{n}</b>
              </Fragment>
            ))}
          </Fragment>
        ),
        // eslint-disable-next-line
        full: ({ arrival, price, numbers, total, home, foot, bus, wait }) => (
          <Fragment>
            Príchod: <b>{arrival}</b> | Cena: <b>{price} €</b> | Spoje:{' '}
            {numbers.map((n, i) => (
              <Fragment key={n}>
                {i > 0 ? ', ' : ''}
                <b>{n}</b>
              </Fragment>
            ))}{' '}
            | Trvanie{' '}
            <b>
              {total} {numberize(total, ['minút', 'minúta', 'minúty'])}
            </b>
            <br />
            Do odchodu: <b>{home}</b>, pešo: <b>{foot}</b>, MHD: <b>{bus}</b>,
            čakanie:{' '}
            <b>
              {wait} {numberize(wait, ['minút', 'minúta', 'minúty'])}
            </b>
          </Fragment>
        ),
      },
      step: {
        // eslint-disable-next-line
        foot: ({ departure, duration, destination }) => (
          <Fragment>
            o <b>{departure}</b> pešo{' '}
            <b>
              {duration} {numberize(duration, ['minút', 'minútu', 'minúty'])}
            </b>{' '}
            {destination === 'TARGET' ? (
              <b>do cieľa</b>
            ) : (
              <Fragment>
                na <b>{destination}</b>
              </Fragment>
            )}
          </Fragment>
        ),
        // eslint-disable-next-line
        bus: ({ departure, type, number, destination }) => (
          <Fragment>
            o <b>{departure}</b> {type} <b>{number}</b> na <b>{destination}</b>
          </Fragment>
        ),
      },
      type: {
        bus: 'autobusom',
        tram: 'električkou',
        trolleybus: 'trolejbusom',
        foot: 'pešo',
      },
    },
    bikesharing: {
      step: {
        // eslint-disable-next-line
        foot: ({ duration, destination }) => (
          <Fragment>
            pešo{' '}
            <b>
              {duration} {numberize(duration, ['minút', 'minútu', 'minúty'])}
            </b>{' '}
            {destination === 'TARGET' ? (
              <b>do cieľa</b>
            ) : (
              <Fragment>
                na <b>{destination}</b>
              </Fragment>
            )}
          </Fragment>
        ),
        // eslint-disable-next-line
        bicycle: ({ duration, destination }) => (
          <Fragment>
            bicyklom{' '}
            <b>
              {duration} {numberize(duration, ['minút', 'minútu', 'minúty'])}
            </b>{' '}
            na <b>{destination}</b>
          </Fragment>
        ),
      },
    },
    imhdAttribution: 'trasy liniek MHD',
  },

  more: {
    more: 'Ďalšie',
    logOut: 'Odhlásiť {name}',
    logIn: 'Prihlásenie',
    settings: 'Nastavenia',
    gpxExport: 'Exportovať do GPX',
    mapExports: 'Exporty mapy',
    shareMap: 'Zdieľať mapu',
    embedMap: 'Vložiť do webstránky',
    reportMapError: 'Nahlásiť chybu zobrazenia v mape',
    reportAppError: 'Nahlásiť chybu v portáli',
    supportUs: 'Podporiť Freemap',
    help: 'Pomoc',
    back: 'Naspäť',
    mapLegend: 'Legenda mapy',
    contacts: 'Kontakty',
    tips: 'Tipy',
    facebook: 'Freemap na Facebooku',
    twitter: 'Freemap na Twitteri',
    github: 'Freemap na GitHub-e',
    automaticLanguage: 'Automaticky',
    pdfExport: 'Exportovať do PDF (pre tlač)',
  },

  main: {
    clearMap: 'Vyčistiť mapu',
    close: 'Zavrieť',
    closeTool: 'Zavrieť nástroj',
    locateMe: 'Kde som?',
    zoomIn: 'Priblížiť mapu',
    zoomOut: 'Oddialiť mapu',
    devInfo: () => (
      <div>
        Toto je testovacia verzia portálu Freemap Slovakia. Pre ostrú verziu
        prejdite na <a href="https://www.freemap.sk/">www.freemap.sk</a>.
      </div>
    ),
    copyright: 'Licencia',
  },

  gallery: {
    filter: 'Filter',
    allPhotos: 'Všetky fotky',
    upload: 'Nahrať',
    f: {
      firstUploaded: 'od prvej nahranej',
      lastUploaded: 'od poslednej nahranej',
      firstCaptured: 'od najstaršie odfotenej',
      lastCaptured: 'od najnovšie odfotenej',
      leastRated: 'od najmenšieho hodnotenia',
      mostRated: 'od najväčšieho hodnotenia',
    },
    viewer: {
      title: 'Fotografia',
      comments: 'Komentáre',
      newComment: 'Nový komentár',
      addComment: 'Pridaj',
      yourRating: 'Tvoje hodnotenie:',
      showOnTheMap: 'Ukázať na mape',
      openInNewWindow: 'Otvoriť v…',
      uploaded: 'Nahral {username} dňa {createdAt}',
      captured: 'Odfotené dňa {takenAt}',
      deletePrompt: 'Zmazať obrázok?',
      modify: 'Úprava',
    },
    editForm: {
      name: 'Názov',
      description: 'Popis',
      takenAt: {
        datetime: 'Dátum a čas fotenia',
        date: 'Dátum fotenia',
        time: 'Čas fotenia',
      },
      location: 'Pozícia',
      tags: 'Tagy',
      setLocation: 'Nastaviť pozíciu',
    },
    uploadModal: {
      title: 'Nahrať fotky',
      uploading: 'Nahrávam ({n})',
      upload: 'Nahrať',
      rules: `
        <p>Potiahnite sem fotky, alebo sem kliknite pre ich výber.</p>
        <ul>
          <li>Nevkladajte príliš malé obrázky (miniatúry). Maximálny rozmer nie je obmedzený, je však obmedzená veľkosť súboru na max. 10MB. Väčšie súbory server odmietne.</li>
          <li>Vkladajte len fotografie krajiny, vrátane dokumentačných fotografií. Portréty a makro-fotografie sú považované za nevhodný obsah a budú bez varovania vymazané.</li>
          <li>Zvýšenú pozornosť venujte tomu, aby ste nahrávali výlučne vlastnú tvorbu.</li>
          <li>Nahraté fotografie sú ďalej šírené pod licenciou CC-BY-SA 2.0.</li>
          <li>Prevádzkovateľ Freemap.sk sa týmto zbavuje akejkoľvek zodpovednosti a nezodpovedá za priame ani nepriame škody vzniknuté uverejnením fotografie v galérii, za fotografiu nesie plnú zodpovednosť osoba, ktorá fotografiu na server uložila.</li>
          <li>Prevádzkovateľ si vyhradzuje právo upraviť popis, názov, pozíciu a tagy fotografie, alebo fotografiu vymazať, ak je jej obsah nevhodný (porušuje tieto pravidlá).</li>
          <li>Prevádzkovateľ si vyhradzuje právo zrušiť konto v prípade, že používateľ opakovane porušuje pravidlá galérie uverejňovaním nevhodného obsahu.</li>
        </ul>
      `,
      success: 'Fotografie boli úspešne nahrané.',
      showPreview: 'Zobraziť náhľady (náročnejšie na výkon a pamäť)',
    },
    locationPicking: {
      title: 'Zvoľte pozíciu fotografie',
    },
    layerHint:
      'Pre zapnutie vrstvy s fotografiami zvoľte Fotografie z ponuky vrstiev (alebo stlačte klávesy Shift+F).',
    deletingError: 'Nastala chyba pri mazaní obrázka: {err}',
    tagsFetchingError: 'Nastala chyba pri načítavaní tagov: {err}',
    pictureFetchingError: 'Nastala chyba pri načítavaní fotky: {err}',
    picturesFetchingError: 'Nastala chyba pri načítavaní fotiek: {err}',
    savingError: 'Nastala chyba pri ukladaní fotky: {err}',
    commentAddingError: 'Nastala chyba pri pridávaní komentára: {err}',
    ratingError: 'Nastala chyba pri hodnotení: {err}',
    unauthenticatedError:
      'Pre nahrávanie fotiek do galérie musíte byť prihlásený.',
    missingPositionError: 'Chýba pozícia.',
    invalidPositionError: 'Nesprávny formát súradníc.',
    invalidTakenAt: 'Nevalidný dátum a čas fotenia.',
  },

  measurement: {
    distance: 'Vzdialenosť',
    elevation: 'Výška a poloha',
    area: 'Plocha',
    elevationLine: 'Nadmorská výška:',
    elevationFetchError: 'Nastala chyba pri získavaní výšky bodu: {err}',
  },

  trackViewer: {
    upload: 'Nahrať',
    moreInfo: 'Viac info',
    share: 'Zdieľať',
    colorizingMode: {
      none: 'Neaktívne',
      elevation: 'Nadmorská výška',
      steepness: 'Sklon',
    },
    details: {
      startTime: 'Čas štartu',
      finishTime: 'Čas v cieli',
      duration: 'Trvanie',
      distance: 'Vzdialenosť',
      avgSpeed: 'Priemerná rýchlosť',
      minEle: 'Najnižší bod',
      maxEle: 'Najvyšší bod',
      uphill: 'Celkové stúpanie',
      downhill: 'Celkové klesanie',
      durationValue: '{h} hodín {m} minút',
    },
    uploadModal: {
      title: 'Nahrať trasu',
      drop: 'Potiahnite sem .gpx súbor, alebo sem kliknite pre jeho výber.',
    },
    shareModal: {
      title: 'Zdieľať trasu',
      description: 'Trasa je dostupná na nasledovnej adrese:',
    },
    fetchingError: 'Nastala chyba pri získavaní záznamu trasy: {err}',
    savingError: 'Nepodarilo sa uložiť trasu: {err}',
    tooBigError: 'Veľkosť nahraného súboru prevyšuje limit {maxSize} MB.',
  },

  infoPoint: {
    modify: 'Zmeniť popis',
    edit: {
      title: 'Zmeniť popis infobodu',
      label: 'Popis infobodu:',
      example: 'Tu sa stretneme',
      hint: 'Ak nechcete aby mal infobod popis, nechajte pole popisu prázdne.',
    },
  },

  settings: {
    tab: {
      map: 'Mapa',
      account: 'Účet',
      general: 'Všeobecné',
      expert: 'Expert',
    },
    map: {
      imgFormat: {
        label: 'Formát dlaždíc pre automapu, turistickú a cyklistickú mapu:',
        hint:
          'Mapové dlaždice vyzerajú lepšie v PNG formáte, ale sú asi 4x väčšie než JPEG dlaždice. ' +
          'Pri pomalom internete preto odporúčame zvoliť JPEG.',
      },
      overlayPaneOpacity: 'Viditeľnosť čiar na mape:',
      homeLocation: {
        label: 'Domovská poloha:',
        select: 'Vybrať na mape',
        undefined: 'neurčená',
      },
    },
    account: {
      name: 'Meno',
      email: 'E-Mail',
      noAuthInfo: 'Dostupné iba pre prihlásených používateľov.',
    },
    general: {
      tips: 'Zobrazovať tipy po otvorení stránky',
    },
    expertInfo: `
      <div style="text-align: left">
        V expertnom móde sú dostupné nástroje pre pokročilých používateľov, napríklad:
        <ul>
          <li>rozšírené nastavenia</li>
          <li>extra mapové vrstvy</li>
          <li>extra profily vyhľadávača trás</li>
        </ul>
      </div>
    `,
    expert: {
      switch: 'Expertný mód',
      overlayOpacity: 'Viditeľnosť vrstvy:',
      trackViewerEleSmoothing: {
        label:
          'Úroveň vyhladzovania pri výpočte celkovej nastúpanej/naklesanej nadmorskej výšky v prehliadači trás: {value}',
        info:
          'Pri hodnote 1 sa berú do úvahy všetky nadmorské výšky samostatne. Vyššie hodnoty zodpovedajú šírke plávajúceho okna ktorým sa vyhladzujú nadmorské výšky.',
      },
    },
    saveSuccess: 'Zmeny boli uložené.',
    savingError: 'Nastala chyba pri ukladaní nastavení: {err}',
  },

  changesets: {
    allAuthors: 'Všetci autori',
    download: 'Stiahnuť zmeny',
    olderThan: ({ days }) => `${days} dn${days === 3 ? 'i' : 'í'}`,
    olderThanFull: ({ days }) =>
      `Zmeny novšie ako ${days} dn${days === 3 ? 'i' : 'í'}`,
    notFound: 'Neboli nájdené žiadne zmeny.',
    fetchError: 'Nastala chyba pri získavaní zmien: {err}',
  },

  mapDetails: {
    road: 'Info o ceste',
    notFound: 'Nebola nájdená žiadna cesta.',
    fetchingError: 'Nastala chyba pri získavaní detailov o ceste: {err}',
  },

  objects: {
    type: 'Typ',
    lowZoomAlert: {
      message: 'Vyhľadávanie miest je možné až od priblíženia úrovne 12.',
      zoom: 'Priblíž',
    },
    fetchingError: 'Nastala chyba pri získavaní objektov: {err}',
    categories: {
      1: 'Príroda',
      2: 'Služby',
      3: 'Doprava',
      4: 'Pamiatky',
      5: 'Zdravotníctvo',
      6: 'Obchody',
      7: 'Energetika',
      8: 'Ubytovanie a Stravovanie',
      9: 'Turizmus, turistika',
      10: 'Územné členenie',
      11: 'Ostatné',
      12: 'Voľný čas',
      13: 'Šport',
      14: 'Vzdelávanie',
      15: 'Bicyklovanie',
    },
    subcategories: {
      1: 'Jaskyňa',
      2: 'Vrch',
      3: 'Čerpacia stanica',
      4: 'Reštaurácia',
      5: 'Hotel',
      6: 'Parkovisko',
      7: 'Letisko',
      8: 'Železničná stanica',
      9: 'Autobusová stanica',
      10: 'Autobusová zastávka',
      11: 'Hrad',
      12: 'Zámok',
      13: 'Zrúcanina',
      14: 'Múzeum',
      15: 'Pamätihodnosť',
      16: 'Pamätník',
      17: 'Lekáreň',
      18: 'Nemocnica',
      19: 'Ordinácia',
      20: 'Polícia',
      21: 'Poliklinika',
      22: 'Hraničný prechod',
      23: 'Nemocnica s pohotovosťou',
      24: 'Supermarket',
      26: 'Jadrová elektráreň',
      27: 'Tepelná elektráreň (uhlie)',
      28: 'Vodná elektráreň',
      29: 'Veterná elektráreň',
      30: 'Potraviny',
      31: 'Hasičská stanica',
      32: 'Kostol',
      33: 'Pohostinstvo',
      34: 'Banka',
      35: 'Bankomat',
      36: 'Rýchle občerstvenie',
      39: 'Banka',
      40: 'Výhľad',
      41: 'Kemping',
      42: 'Chránené stromy',
      43: 'Prameň',
      44: 'Rázcestník',
      45: 'Orientačná mapa',
      46: 'Útulňa',
      47: 'Prístrešok, altánok',
      48: 'Poštový úrad',
      49: 'Pamätník, bojisko',
      50: 'Poľovnícky posed',
      51: 'Vysielač',
      52: 'Rozhľadňa',
      53: 'Motel',
      54: 'Penzión',
      55: 'Privát',
      56: 'Regionálne mesto',
      57: 'Okresné mesto',
      58: 'Veľké mesto',
      59: 'Mesto',
      60: 'Obec',
      61: 'Osada',
      62: 'Mestský obvod',
      63: 'Horáreň',
      64: 'Zubár',
      65: 'Predajňa bicyklov',
      66: 'Stojan na bicykle',
      67: 'Prenájom bicyklov',
      68: 'Predaj alkoholu',
      69: 'Umenie',
      70: 'Pekáreň',
      71: 'Starostlivosť o krásu',
      72: 'Postele',
      73: 'Nápoje',
      74: 'Kníhkupectvo',
      75: 'Butik',
      76: 'Mäsiarstvo',
      77: 'Predaj áut',
      78: 'Autoservis',
      79: 'Charita',
      80: 'Drogéria',
      81: 'Oblečenie',
      82: 'Počítače',
      83: 'Cukrovinky',
      84: 'Kopírovanie',
      85: 'Záclony a závesy',
      86: 'Delikatesy',
      87: 'Obchodný dom',
      89: 'Čistiareň',
      90: 'Domáce výrobky',
      91: 'Elektronika',
      92: 'Erotika',
      93: 'Firemná predajňa',
      94: 'Farmárske produkty',
      95: 'Kvetinárstvo',
      96: 'Obrazy',
      98: 'funeral_directors',
      99: 'Nábytok',
      100: 'Záhradné centrum',
      101: 'Rozličný tovar',
      102: 'Darčeková predajňa',
      103: 'glaziery',
      104: 'Ovocie, zelenina',
      105: 'Kaderníctvo',
      106: 'Železiarstvo',
      107: 'Načúvacie pomôcky',
      108: 'HI-FI',
      109: 'Zmrzlina',
      110: 'interior_decoration',
      111: 'Zlatníctvo',
      112: 'Kiosk',
      113: 'Kuchynské potreby',
      114: 'Práčovňa',
      115: 'Nákupné centrum',
      116: 'Masáže',
      117: 'Mobilné telefóny',
      118: 'money_lender',
      119: 'Motocykle',
      120: 'Hudobné nástroje',
      121: 'Noviny',
      122: 'Optika',
      124: 'Outdoor',
      125: 'Farby',
      126: 'pawnbroker',
      127: 'Zvieratá',
      128: 'Plody mora',
      129: 'Second hand',
      130: 'Obuv',
      131: 'Športové potreby',
      132: 'Papiernictvo',
      133: 'Tetovanie',
      134: 'Hračkárstvo',
      135: 'Stavebniny',
      136: 'vacant',
      137: 'Vysávače',
      138: 'variety_store',
      139: 'Video/DVD',
      140: 'ZOO',
      141: 'Horská chata',
      142: 'Atrakcia',
      143: 'Toalety',
      144: 'Telefón',
      145: 'Miestny úrad',
      146: 'Väznica',
      147: 'Trhovisko',
      148: 'Bar',
      149: 'Kaviareň',
      150: 'Verejný gril',
      151: 'Pitná voda',
      152: 'Taxi',
      153: 'Knižnica',
      154: 'Umývačka áut',
      155: 'Veterinár',
      156: 'Semafor',
      157: 'Železničná zástavka',
      158: 'Železničné priecestie',
      159: 'Zástavka električky',
      160: 'Heliport',
      161: 'Vodárenská veža',
      162: 'Veterný mlyn',
      163: 'Sauna',
      164: 'Čerpacia stanica LPG',
      166: 'Park pre psov',
      167: 'Športové centrum',
      168: 'Kurzy golfu',
      169: 'Štadión',
      170: 'Ihrisko',
      171: 'Vodný park',
      172: 'Vypúšťanie lodí',
      173: 'Rybolov',
      174: 'Park',
      175: 'Detské ihrisko',
      176: 'Záhrada',
      177: 'Verejná plocha',
      178: 'Klzisko',
      179: 'Mini-golf',
      180: 'Tanec',
      181: 'Základná škola',
      182: '9pin',
      183: 'Bowling',
      184: 'Americký futbal',
      185: 'Lukostreľba',
      186: 'Atletika',
      187: 'australian_football',
      188: 'Baseball',
      189: 'Basketball',
      190: 'Plážový volejbal',
      191: 'Bmx',
      192: 'Boules',
      193: 'Bowls',
      194: 'canadian_football',
      195: 'Kanoe',
      196: 'Šach',
      197: 'Lezenie',
      198: 'Kriket',
      199: 'cricket_nets',
      200: 'croquet',
      201: 'Bicyklovanie',
      202: 'Potápanie',
      203: 'Preteky psov',
      204: 'Jazdenie na koni',
      205: 'Futbal',
      206: 'gaelic_football',
      207: 'Golf',
      208: 'Gymnastika',
      209: 'Hokej',
      210: 'horseshoes',
      211: 'Dostihy',
      212: 'ice_stock',
      213: 'korfball',
      214: 'Motorky',
      215: 'Multi',
      216: 'orienteering',
      217: 'paddle_tennis',
      218: 'Paragliding',
      219: 'pelota',
      220: 'racquet',
      221: 'rowing',
      222: 'rugby_league',
      223: 'rugby_union',
      224: 'Streľba',
      225: 'Korčuľovanie',
      226: 'Skateboard',
      227: 'Lyžovanie',
      228: 'Futbal',
      229: 'Plávanie',
      230: 'Stolný tenis',
      231: 'Hádzaná',
      232: 'Tenis',
      233: 'Tobogan',
      234: 'Volejbal',
      235: 'Vodné lyžovanie',
      236: 'Univerzita',
      237: 'Materská škola',
      238: 'Stredná škola',
      239: 'Autoškola',
      240: 'Kaplnka',
      241: 'Miesto na piknik',
      242: 'Miesto s ohniskom',
      243: 'Lokalita',
      244: 'Vodopád',
      245: 'Jazero',
      246: 'Priehrada',
      248: 'Prírodná rezervácia',
      249: 'Prírodná pamiatka',
      250: 'Chránený areál',
      251: 'Chránená krajinná oblasť',
      252: 'Národný park',
      253: 'Automat na mlieko',
      254: 'Významné mokriny (RAMSAR)',
      255: 'Adresné body',
      256: 'Banícka šachta',
      257: 'Štôlňa',
      258: 'Studňa',
      259: 'Kríž',
      260: 'Svätyňa',
      261: 'Posilňovňa',
      262: 'Paroplynová elektráreň',
      263: 'Kaštieľ',
      264: 'Geomorfologické členenie',
      265: 'Vojenský bunker',
      266: 'Príjazd/Výjazd z diaľnice',
      267: 'Sochy',
      268: 'Komín',
      269: 'Paragliding',
      270: 'Závesné lietanie',
      271: 'Krmelec',
      272: 'Ohnisko',
      273: 'Bedminton/Squash',
      274: 'Rázcestník',
      275: 'Nabíjacia stanica pre bicykle',
    },
  },

  external: {
    openInExternal: 'Otvoriť v externej aplikácii',
    osm: 'OpenStreetMap',
    oma: 'OMA',
    googleMaps: 'Google Mapy',
    hiking_sk: 'Hiking.sk',
    mojamapa_sk: 'mojamapa.sk',
    'mapy_cz-aerial': 'Mapy.cz Letecká',
    josm: 'Editor JOSM',
    id: 'Editor iD',
    'routing-debug': 'Ladenie navigácie',
    window: 'Nové okno',
    url: 'Zdieľať URL',
    image: 'Zdieľať fotografiu',
  },

  search: {
    inProgress: 'Hľadám…',
    noResults: 'Nenašli sa žiadne výsledky',
    prompt: 'Zadajte lokalitu',
    routeFrom: 'Navigovať odtiaľto',
    routeTo: 'Navigovať sem',
    fetchingError: 'Nastala chyba pri spracovaní výsledkov vyhľadávania: {err}',
  },

  shareMap: {
    label: 'Zvolený pohľad na mapu je dostupný na tejto adrese:',
  },

  embed: {
    code: 'Vložte na vašu stránku tento html kód:',
    example: 'Výsledok bude vyzerať následovne:',
    dimensions: 'Veľkosť:',
    height: 'Výška:',
    width: 'Šírka:',
    enableFeatures: 'Povoliť funkcie:',
    enableSearch: 'vyhľadávanie',
    enableMapSwitch: 'prepínanie vrstiev mapy',
    enableLocateMe: 'nájdenie vlastnej pozície',
  },

  tips: {
    previous: 'Predošlý tip',
    next: 'Ďalší tip',
    prevent: 'Nabudúce nezobrazovať',
  },

  supportUs: {
    explanation:
      'Mapový portál Freemap tvoria ľudia bezodplatne vo svojom voľnom čase. Na fungovanie a prevádzku je však potrebný hardware a služby komerčných spoločností.',
    account: 'Bankové spojenie:',
    paypal: 'Prispieť cez PayPal',
    thanks: 'Za každý príspevok vám budeme veľmi vďační.',
    registration: 'Registrované na MV/VVS/1-900/90-34343 dňa 2.10.2009',
  },

  gpxExport: {
    export: 'Exportovať',
    exportError: 'Chyba exportovania GPX: {err}',
    what: {
      plannedRoute: 'vyhľadanú trasu',
      plannedRouteWithStops: 'vyhľadanú trasu so zastávkami',
      objects: 'miesta',
      pictures: 'fotografie (vo viditeľnej časti mapy)',
      distanceMeasurement: 'meranie vzdialenosti',
      areaMeasurement: 'meranie plochy',
      elevationMeasurement: 'meranie výšky a polohy',
      infoPoint: 'body v mape',
      tracking: 'sledovanie',
      gpx: 'GPX trasu',
    },
    disabledAlert:
      'Aktívne sú iba voľby ktorých objekty sa nachádzajú na mape.',
  },

  logIn: {
    with: {
      facebook: 'Prihlásiť sa pomocou Facebooku',
      google: 'Prihlásiť sa pomocou Googlu',
      osm: 'Prihlásiť sa pomocou OpenStreetMap',
    },
    success: 'Boli ste úspešne prihlásený.',
    logInError: 'Nepodarilo sa prihlásiť: {err}',
    logInError2: 'Nepodarilo sa prihlásiť.',
    logOutError: 'Nepodarilo sa odhlásiť: {err}',
    verifyError: 'Nepodarilo sa overiť prihlásenie: {err}',
  },

  logOut: {
    success: 'Boli ste úspešne odhlásený.',
  },

  mapLayers: {
    missingStravaAuth:
      'Prosím prihláste sa najprv na strava.com/heatmap a následne obnovte túto stránku.',
    layers: 'Vrstvy',
    photoFilterWarning: 'Filter fotografií je aktívny',
    minZoomWarning: 'Dostupné až od priblíženia {minZoom}',
    base: {
      A: 'Automapa',
      T: 'Turistická',
      C: 'Cyklomapa',
      K: 'Lyžiarska',
      S: 'Satelitná',
      O: 'OpenStreetMap',
      M: 'mtbmap.cz',
      p: 'OpenTopoMap',
      d: 'Verejná doprava (ÖPNV)',
      h: 'Historická',
      X: 'Nová Outdoorová',
      Y: 'Nová Outdoorová (local)',
    },
    overlay: {
      I: 'Fotografie',
      n: 'Lesné cesty NLC',
      1: 'Názvy (auto)',
      2: 'Názvy (turistika)',
      3: 'Názvy (cyklo)',
      g: 'OSM GPS stopy',
      t: 'Turistické trasy',
      c: 'Cyklotrasy',
      q: 'OpenSnowMap',
      r: 'Render. klienti',
      s0: 'Strava (Všetko)',
      s1: 'Strava (Cyklojazdy)',
      s2: 'Strava (Beh)',
      s3: 'Strava (Vodné aktivity)',
      s4: 'Strava (Zimné aktivity)',
    },
    type: {
      map: 'mapa',
      data: 'dáta',
      photos: 'fotografie',
    },
    attr: {
      freemap: '©\xa0Freemap Slovakia',
      osmData: '©\xa0prispievatelia OpenStreetMap',
      srtm: '©\xa0SRTM',
      hot: '©\xa0Humanitárny tím OpenStreetMap',
    },
  },

  elevationChart: {
    distance: 'Vzdialenosť [km]',
    ele: 'Nadm. výška [m.n.m.]',
    fetchError: 'Nastala chyba pri získavaní výškového profilu: {err}',
  },

  errorCatcher: {
    html: `${errorMarkup}
      <p>
        Akcie:
      </p>
      <ul>
        <li><a href="">znovu načítať poslednú stránku</a></li>
        <li><a href="/">znovu načítať úvodnú stránku</a></li>
        <li><a href="/?reset-local-storage">zmazať lokálne dáta a znovunačítať úvodnú stránku</a></li>
      </ul>
    `,
  },

  osm: {
    fetchingError: 'Nastala chyba pri získavaní OSM dát: {err}',
  },

  roadDetails: {
    roadType: 'Typ cesty:',
    surface: 'Povrch:',
    suitableBikeType: 'Vhodný typ bicykla:',
    lastChange: 'Posledná zmena:',
    showDetails: 'Zobraziť detaily na osm.org',
    surfaces: {
      asphalt: 'asfalt',
      gravel: 'štrk',
      fine_gravel: 'jemný štrk',
      dirt: 'hlina',
      ground: 'hlina',
      cobblestone: 'dlažba',
      compacted: 'spevnený',
      paved: 'spevnený',
      unknown: 'neznámy',
      unpaved: 'nespevnený',
      'concrete:plates': 'betónové platne',
      concrete: 'betón',
      grass: 'trávnatý',
    },
    trackClasses: {
      motorway: 'diaľnica',
      trunk: 'rýchlostná cesta',
      primary: 'cesta I. triedy',
      secondary: 'cesta II. triedy',
      tertiary: 'cesta III. triedy',
      service: 'prístupová',
      unclassified: 'prístupová',
      residential: 'prístupová',
      grade1: 'kvalitná spevnená cesta (1. stupeň)',
      grade2: 'udržiavaná spevnená cesta  (2. stupeň)',
      grade3: 'spevnená cesta  (3. stupeň)',
      grade4: 'poľná cesta/zvážnica (4. stupeň)',
      grade5: 'ťažko priechodná/zarastená cesta (5. stupeň)',
      path: 'chodník',
      footway: 'chodník',
      pedestrian: 'pešia zóna',
      unknown: 'neznámy',
    },
    bicycleTypes: {
      'road-bike': 'cestný',
      'trekking-bike': 'trekkingový',
      'mtb-bike': 'horský',
      'no-bike': 'vjazd na bicykli zakázaný',
      unknown: 'neznámy',
    },
  },

  tracking: {
    savingError: 'Chyba ukladania: {err}',
    loadError: 'Chyba načítania: {err}',
    deleteError: 'Chyba mazania: {err}',

    unauthenticatedError:
      'Prosím, prihláste sa, aby ste mohli spravovať vaše zariadenia.',
    trackedDevices: {
      button: 'Sledované zariadenia',
      modalTitle: 'Sledované zariadenia',
      desc:
        'Tu môžete spravovať sledované zariadenia, aby ste videli pozíciu svojich priateľov.',
      modifyTitle: 'Upraviť sledované zariadenie',
      createTitle: ({ name }) => (
        <>
          Sledovať zariadenie <i>{name}</i>
        </>
      ),
    },
    accessToken: {
      token: 'Token sledovania',
      timeFrom: 'Od',
      timeTo: 'Do',
      listingLabel: 'Popisok v zozname',
      note: 'Poznámka',
    },
    accessTokens: {
      modalTitle: ({ deviceName }) => (
        <>
          Tokeny sledovania pre <i>{deviceName}</i>
        </>
      ),
      desc: ({ deviceName }) => (
        <p>
          Zadefinujte tokeny sledovania, aby ste mohli zdieľať pozíciu vášho
          zariadenia <i>{deviceName}</i> s vašimi priateľmi.
        </p>
      ),
      createTitle: ({ deviceName }) => (
        <>
          Pridať token sledovania pre <i>{deviceName}</i>
        </>
      ),
      modifyTitle: ({ token, deviceName }) => (
        <>
          Upraviť token sledovania <i>{token}</i> pre <i>{deviceName}</i>
        </>
      ),
    },
    trackedDevice: {
      token: 'Token sledovania',
      label: 'Popisok',
      fromTime: 'Pozície od',
      maxAge: 'Najstaršia pozícia',
      maxCount: 'Maximálny počet pozícií',
      splitDistance: 'Vzdialenosť na rozdelenie',
      splitDuration: 'Pauza na rozdelenie',
      color: 'Farba',
      width: 'Šírka',
    },
    devices: {
      button: 'Moje zariadenia',
      modalTitle: 'Moje zariadenia',
      createTitle: 'Pridať zariadenie',
      watchTokens: 'Sledovacie tokeny',
      watchPrivately: 'Sledovať privátne',
      modifyTitle: ({ name }: { name: string }) => (
        <>
          Upraviť zariadenie <i>{name}</i>
        </>
      ),
      desc: () => (
        <>
          <p>
            Tu môžete spravovať svoje zariadenia. Ostatní môžu sledovať ich
            pozíciu, ak k nim vytvoríte sledovacie tokeny, pomocou tlačidla{' '}
            <FontAwesomeIcon icon="key" />.
          </p>
          <p>
            Do vášho trackera (napríklad{' '}
            <a href="https://docs.locusmap.eu/doku.php?id=manual:user_guide:functions:live_tracking">
              Locus
            </a>{' '}
            alebo OsmAnd) vložte nasledujúcu URL:{' '}
            <code>
              {process.env.API_URL}/tracking/track/<i>token</i>
            </code>{' '}
            kde <i>token</i> je vypísaný v tabuľke nižšie.
          </p>
          <p>
            Server podporuje HTTP <code>GET</code> alebo <code>POST</code> s URL
            parametrami:
          </p>
          <ul>
            <li>
              <code>lat</code> - zemepisná dĺžka v stupňoch (povinné)
            </li>
            <li>
              <code>lon</code> - zemepisná šírka v stupňoch (povinné)
            </li>
            <li>
              <code>time</code>, <code>timestamp</code> - dátum a čas
              parsovateľný JavaScript-om alebo Unixový čas v sekundách alebo
              milisekundách
            </li>
            <li>
              <code>alt</code>, <code>altitude</code> - nadmorská výška v
              metroch
            </li>
            <li>
              <code>speed</code> - rýchlosť v ㎧
            </li>
            <li>
              <code>speedKmh</code> - rýchlosť v km/h
            </li>
            <li>
              <code>acc</code> - presnosť v metroch
            </li>
            <li>
              <code>hdop</code> - horizontálna DOP
            </li>
            <li>
              <code>bearing</code> - smer v stupňoch
            </li>
            <li>
              <code>battery</code> - batéria v percentách
            </li>
            <li>
              <code>gsm_signal</code> - GSM signál v percentách
            </li>
            <li>
              <code>message</code> - správa (poznámka)
            </li>
          </ul>
        </>
      ),
    },
    device: {
      token: 'Token zaznamenávania',
      name: 'Názov',
      maxAge: 'Najstaršia pozícia',
      maxCount: 'Maximálny počet pozícií',
      regenerateToken: 'Vygenerovať nový token',
    },
    visual: {
      line: 'Spojnica',
      points: 'Pozície',
      'line+points': 'Spojnica + Pozície',
    },
    subscribeNotFound: ({ id }) => (
      <>
        Token sledovania <i>{id}</i> neexistuje.
      </>
    ),
    subscribeError: ({ id }) => (
      <>
        Chyba sledovania pomocou sledovacieho tokenu <i>{id}</i>.
      </>
    ),
  },
  pdfExport: {
    title: 'Exportovať do PDF',
    area: 'Exportovať oblasť:',
    areas: {
      visible: 'Viditeľnú oblasť mapy',
      pinned: 'Plochu ohraničenú bodmi v mape',
    },
    layersTitle: 'Voliteľné vrstvy:',
    layers: {
      contours: 'Vrstevnice',
      shading: 'Tieňovaný reliéf',
      hikingTrails: 'Turistické trasy',
      bicycleTrails: 'Cyklotrasy',
      skiTrails: 'Lyžiarské trasy',
      horseTrails: 'Jazdecké trasy',
    },
    mapScale: 'Mierka mapy:',
    alert: () => (
      <>
        Upozornenia:
        <ul>
          <li>Exportuje sa outdoorova mapa bez interatívnych prvkov.</li>
          <li>Export mapy do PDF môže trvať aj desiatky sekúnd.</li>
          <li>
            Pri publikovanej mapy je do nej nutné uviesť jej licenciu:
            <br />
            <em>
              mapa ©{' '}
              <a
                href="https://www.freemap.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freemap Slovakia
              </a>
              , dáta{' '}
              <a
                href="https://osm.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
              >
                © prispievatelia OpenStreetMap
              </a>
              , © SRTM
            </em>
          </li>
        </ul>{' '}
      </>
    ),
  },
};

function numberize(n: number, words: [string, string, string]) {
  return n < 1 ? words[0] : n < 2 ? words[1] : n < 5 ? words[2] : words[0];
}
