/* eslint-disable */

import React, { Fragment } from 'react';
import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import { Badge } from 'react-bootstrap';

const errorMarkup = `
<h1>Alkalmazáshiba</h1>
<p>
  A hiba automatikusan be lett jelentve, és a következő jegyazonosítót (Ticked ID) kapta: <b>{ticketId}</b>.
  A hibát Ön is bejelentheti a <a href="https://github.com/FreemapSlovakia/freemap-v3-react/issues/new" target="_blank" rel="noopener noreferrer">GitHubon</a>,
  vagy végső esetben elküldheti nekünk az adatokat e-mailen: <a href="mailto:freemap@freemap.sk?subject=Nahlásenie%20chyby%20na%20www.freemap.sk">freemap@freemap.sk</a>.
</p>
<p>
  Köszönjük!
</p>`;

export default {
  general: {
    elevationProfile: 'Magassági profil',
    save: 'Mentés',
    cancel: 'Mégse',
    modify: 'Módosítás',
    delete: 'Törlés',
    remove: 'Eltávolítás',
    close: 'Bezárás',
    exitFullscreen: 'Kilépés a teljes képernyős módból',
    fullscreen: 'Teljes képernyő',
    yes: 'Igen',
    no: 'Nem',
    masl: 'm tszf.',
    copyCode: 'Kód másolása',
    loading: 'Töltés…',
    ok: 'OK',
    preventShowingAgain: 'Következő alkalommal ne jelenjék meg',
    closeWithoutSaving:
      'Az ablak nem mentett módosításokat tartalmaz. Bezárja?',
    back: 'Vissza',
    internalError: `!HTML!${errorMarkup}`,
    appUpdated: 'Új frissítés érhető el. Szeretné frissíteni az oldalt?',
    seconds: 'másodperc',
    minutes: 'perc',
    meters: 'méter',
    createdAt: 'Létrehozva:',
    actions: 'Műveletek',
    add: 'Új hozzáadása',
    processorError: 'Alkalmazáshiba: ${error}',
  },

  tools: {
    none: 'Zárja be az eszközt', // TODO google-translated
    tools: 'Eszközök',
    routePlanner: 'Útvonaltervező',
    objects: 'Objektumok (érdekes pontok, POI-k)',
    gallery: 'Fényképek',
    measurement: 'Mérés',
    trackViewer: 'Nyomvonalmegtekintő (GPX)',
    infoPoint: 'Gombostűk',
    changesets: 'Térkép változásai',
    mapDetails: 'Térképadatok',
    tracking: () => (
      <>
        Live tracking <Badge>BETA</Badge>
      </>
    ),
  },

  routePlanner: {
    convertToMeasurement: 'Convert to measurement', // TODO translate
    start: 'Kiindulás',
    finish: 'Úti cél',
    swap: 'Kiindulási pont és cél felcserélése',
    point: {
      pick: 'Kijelölés a térképen',
      current: 'Az Ön pozíciója',
      home: 'Lakhely',
    },
    transportType: {
      car: 'Gépkocsi',
      'car-free': 'Gépkocsi (útdíj nélkül)',
      bikesharing: 'Kerékpármegosztás',
      imhd: 'Tömegközlekedés (SK/Bratislava)',
      'bike-osm': 'Kerékpár (OSM)', // TODO "Bicycle touring"
      bike: 'Kerékpár',
      'foot-stroller': 'Babakocsi / kerekesszék',
      nordic: 'Sífutás',
      ski: 'Alpesi sí',
      foot: 'Gyaloglás', // TODO "Hiking"
      'foot-osm': 'Gyaloglás (OSM)',
    },
    development: 'fejl. alatt',
    mode: {
      route: 'Megadott sorrendben',
      trip: 'Legrövidebb úton',
      roundtrip: 'Legrövidebb úton (körutazás)',
    },
    alternative: 'Alternatíva',
    // eslint-disable-next-line
    distance: ({ value }) => (
      <Fragment>
        Távolság: <b>{value} km</b>
      </Fragment>
    ),
    // eslint-disable-next-line
    duration: ({ h, m }) => (
      <Fragment>
        Időtartam:{' '}
        <b>
          {h} óra {m} perc
        </b>
      </Fragment>
    ),
    // eslint-disable-next-line
    summary: ({ distance, h, m }) => (
      <Fragment>
        Távolság: <b>{distance} km</b> | Időtartam:{' '}
        <b>
          {h} óra {m} perc
        </b>
      </Fragment>
    ),
    noHomeAlert: 'Először meg kell adnia a lakóhelyét a beállításoknál.',
    showMidpointHint: 'Köztes pont megadásához húzzon el egy útszakaszt.',
    gpsError: 'Hiba történt jelenlegi pozíciójának meghatározásakor.',
    routeNotFound:
      'Nem sikerült útvonalat találni. Próbálja meg módosítani a paramétereket vagy áthelyezni az út pontjait.',
    fetchingError: 'Hiba történt az útvonaltervezésnél: {err}',
    maneuverWithName: '{type} {modifier} itt: {name}',
    maneuverWithoutName: '{type} {modifier}',

    maneuver: {
      types: {
        turn: 'forduljon',
        'new name': 'menjen',
        depart: 'indulás',
        arrive: 'megérkezés',
        merge: 'menjen tovább',
        // 'ramp':
        'on ramp': 'hajtson fel',
        'off ramp': 'hajtson le',
        fork: 'válasszon utat',
        'end of road': 'menjen tovább',
        // 'use lane':
        continue: 'menjen tovább',
        roundabout: 'hajtson be a körforgalomba',
        rotary: 'hajtson be a körforgalomba',
        'roundabout turn': 'a körforgalomban forduljon',
        // 'notification':
        'exit rotary': 'hajtson ki a körforgalomból', // undocumented
        'exit roundabout': 'hajtson ki a körforgalomból', // undocumented
      },

      modifiers: {
        uturn: 'forduljon meg',
        'sharp right': 'élesen jobbra',
        'slight right': 'enyhén jobbra',
        right: 'jobbra',
        'sharp left': 'élesen balra',
        'slight left': 'enyhén balra',
        left: 'balra',
        straight: 'egyenesen',
      },
    },
    imhd: {
      total: {
        // eslint-disable-next-line
        short: ({ arrival, price, numbers }) => (
          <Fragment>
            Érkezés: <b>{arrival}</b> | Ár: <b>{price} €</b> | Járat:{' '}
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
            Érkezés: <b>{arrival}</b> | Ár: <b>{price} €</b> | Járat:{' '}
            {numbers.map((n, i) => (
              <Fragment key={n}>
                {i > 0 ? ', ' : ''}
                <b>{n}</b>
              </Fragment>
            ))}{' '}
            | Időtartam{' '}
            <b>
              {total} {numberize(total, ['minutes', 'minute'])}
            </b>
            <br />
            Az indulásig van: <b>{home}</b>, séta: <b>{foot}</b>,
            tömegközlekedés: <b>{bus}</b>, várakozás :{' '}
            <b>
              {wait} {numberize(wait, ['minutes', 'minute'])}
            </b>
          </Fragment>
        ),
      },
      step: {
        // eslint-disable-next-line
        foot: ({ departure, duration, destination }) => (
          <Fragment>
            <b>{departure}</b> sétáljon{' '}
            <b>
              {duration} {numberize(duration, ['minutes', 'minute'])}
            </b>{' '}
            {destination === 'TARGET' ? (
              <b>ide:</b>
            ) : (
              <Fragment>
                ide: <b>{destination}</b>
              </Fragment>
            )}
          </Fragment>
        ),
        // eslint-disable-next-line
        bus: ({ departure, type, number, destination }) => (
          <Fragment>
            <b>{departure}</b> {type} <b>{number}</b> erre: <b>{destination}</b>
          </Fragment>
        ),
      },
      type: {
        bus: 'szálljon fel erre a buszra:',
        tram: 'szálljon fel erre a villamosra:',
        trolleybus: 'szálljon fel erre a torlibuszra:',
        foot: 'sétáljon',
      },
    },
    bikesharing: {
      step: {
        // eslint-disable-next-line
        foot: ({ duration, destination }) => (
          <Fragment>
            sétáljon{' '}
            <b>
              {duration} {numberize(duration, ['minutes', 'minute'])}
            </b>{' '}
            {destination === 'TARGET' ? (
              <b>a célponthoz</b>
            ) : (
              <Fragment>
                ide: <b>{destination}</b>
              </Fragment>
            )}
          </Fragment>
        ),
        // eslint-disable-next-line
        bicycle: ({ duration, destination }) => (
          <Fragment>
            kerékpározzék{' '}
            <b>
              {duration} {numberize(duration, ['minutes', 'minte'])}
            </b>{' '}
            ide: <b>{destination}</b>
          </Fragment>
        ),
      },
    },
    imhdAttribution: 'public transport routes',
  },

  more: {
    more: 'Továbbiak',
    logOut: 'Kijelentkezés: {name}',
    logIn: 'Bejelentkezés',
    settings: 'Beállítások',
    gpxExport: 'Exportálás GPX-be',
    mapExports: 'Térkép exportálása',
    shareMap: 'Térkép megosztása',
    embedMap: 'Térkép beágyazása',
    reportMapError: 'Térképhiba bejelentése',
    reportAppError: 'Alkalmazáshiba bejelentése',
    supportUs: 'A Freemap támogatása',
    help: 'Súgó',
    back: 'Vissza',
    mapLegend: 'Jelmagyarázat',
    contacts: 'Kapcsolat',
    tips: 'Tippek',
    facebook: 'Freemap a Facebookon',
    twitter: 'Freemap a Twitteren',
    github: 'Freemap a GitHubon',
    automaticLanguage: 'Automatikus',
    pdfExport: 'Exportálás PDF-be (nyomtatáshoz)',
  },

  main: {
    clearMap: 'Térképelemek törlése',
    close: 'Bezárás',
    closeTool: 'Eszköz bezárása',
    locateMe: 'Saját pozícióm',
    zoomIn: 'Nagyítás',
    zoomOut: 'Kicsinyítés',
    devInfo: () => (
      <div>
        Ez a Freemap Slovakia tesztverziója. A termelési verziót itt találja:{' '}
        <a href="https://www.freemap.sk/">www.freemap.sk</a>.
      </div>
    ),
    copyright: 'Szerzői jog',
  },

  gallery: {
    filter: 'Szűrő',
    allPhotos: 'Minden fénykép',
    upload: 'Feltöltés',
    f: {
      firstUploaded: 'az először feltöltöttől',
      lastUploaded: 'az utoljára feltöltöttől',
      firstCaptured: 'a legrégebbitől',
      lastCaptured: 'a legújabbtól',
      leastRated: 'a leggyöngébbre értékelttől',
      mostRated: 'a legjobbra értékelttől',
    },
    viewer: {
      title: 'Fénykép',
      comments: 'Hozzászólások',
      newComment: 'Új hozzászólás',
      addComment: 'Hozzáadás',
      yourRating: 'Az Ön értékelése:',
      showOnTheMap: 'Megjelenítés a térképen',
      openInNewWindow: 'Megnyitás…',
      uploaded: '{username} töltötte fel ekkor: {createdAt}',
      captured: 'Ekkor készült: {takenAt}',
      deletePrompt: 'Kép törlése?',
      modify: 'Módosítás',
    },
    editForm: {
      name: 'Név',
      description: 'Leírás',
      takenAt: {
        datetime: 'Felvétel napja és ideje',
        date: 'Felvétel napja',
        time: 'Felvétel időpontja',
      },
      location: 'Hely',
      tags: 'Címkék',
      setLocation: 'Hely megadása',
    },
    uploadModal: {
      title: 'Fényképek feltöltése',
      uploading: 'Feltöltés folyamatban ({n})',
      upload: 'Feltöltés',
      rules: `
        <p>Húzza ide a fényképeit vagy kattintson ide a kijelölésükhöz.</p>
        <ul>
          <li>Ne töltsön fel túl kicsi fényképeket (bélyegképek/thumbnails). A fénykép legnagyobb mérete nincs korlátozva. A legnagyobb fájlméret 10MB, a nagyobb fájlok elutasíttatnak.</li>
          <li>Csak tájak fényképeit vagy dokumentációs jellegű képeket töltsön fel. A portrék és a makrofényképek nem kívánatosak, és figyelmeztetés nélkül töröltetnek.</li>
          <li>Kérjük, csak a saját fényképeit töltse fel.</li>
          <li>A fényképek feltöltésével hozzájárul, hogy azokat a CC-BY-SA 2.0 licenc alapján terjesszék.</li>
          <li>Az üzemeltető (Freemap.sk) minden kötelezettséget elhárít, és nem vállal felelősséget a fénykép galériában történő közzétételéből eredő közvetlen vagy közvetett károkért. A fényképért teljes mértékben az azt a kiszolgálóra feltöltő személy felel.</li>
          <li>Az üzemeltető fenntartja a jogot, hogy a fénykép leírását, nevét, pozíciójáőt és címkéit szerkesszt, illetve hogy a fényképet törölje, ha annak tartalma nem megfelelő (megszegi ezeket a szabályokat).</li>
          <li>Az üzemeltető fenntartja a jogot, hogy törölje azt a fiókot, amelynek felhasználója nem megfelelő tartalom közzétételével ismételten megsérti a galéria szabályzatát.</li>
        </ul>
      `,
      success: 'A képek sikeresen fel lettek töltve.',
      showPreview:
        'Előnézetek megjelenítése (több processzorteljesítményt és memóriát használ)',
    },
    locationPicking: {
      title: 'Fénykép helyének kijelölése',
    },
    layerHint:
      'A fényképeket tartalmazó rátétréteg megjelenítéséhez jelölje ki a Térképrétegek menüből a Fényképeket (vagy nyomja meg a Shift + F billentyűket.',
    deletingError: 'Hiba történt a fénykép törlésénél: {err}',
    tagsFetchingError: 'Hiba történt a címkék beolvasásánál: {err}',
    pictureFetchingError: 'Hiba történt a fénykép beolvasásánál: {err}',
    picturesFetchingError: 'Hiba történt a fényképek beolvasásánál: {err}',
    savingError: 'Hiba történt a fénykép mentésénél: {err}',
    commentAddingError: 'Hiba történt a hozzászólás hozzáadásánál: {err}',
    ratingError: 'Hiba történt a fénykép értékelésénél: {err}',
    unauthenticatedError:
      'Fényképek galériába történő feltöltéséhez kérjük, jelentkezzék be.',
    missingPositionError: 'Hiányzik a hely.',
    invalidPositionError: 'A hely koordinátáinak formátuma érvénytelen.',
    invalidTakenAt: 'A fénykép készítésének dátuma és időpontja érvénytelen.',
  },

  measurement: {
    distance: 'Távolság',
    elevation: 'Magasság és pozíció',
    area: 'Terület',
    elevationLine: 'Magasság:',
    elevationFetchError:
      'Hiba történt a pont magasságának beolvasásakor: {err}',
  },

  trackViewer: {
    upload: 'Feltöltés',
    moreInfo: 'További információ',
    share: 'Megosztás',
    colorizingMode: {
      none: 'Inaktív',
      elevation: 'Magasság',
      steepness: 'Meredekség',
    },
    details: {
      startTime: 'Indulási idő',
      finishTime: 'Érkezési idő',
      duration: 'Időtartam',
      distance: 'Távolság',
      avgSpeed: 'Átlagsebesség',
      minEle: 'Legkisebb magasság',
      maxEle: 'Legnagyobb magasság',
      uphill: 'Összes emelkedés',
      downhill: 'Összes lejtés',
      durationValue: '{h} óra {m} perc',
    },
    uploadModal: {
      title: 'A nyomvonal feltöltése',
      drop: 'Húzza ide a .gpx fájlt vagy kattintson ide a kijelöléséhez.',
    },
    shareModal: {
      title: 'Nyomvonal megosztása',
      description: 'A nyomvonal a következő címen érhető el:',
    },
    fetchingError: 'Hiba történt a nyomvonal adatainak beolvasásakor: {err}',
    savingError: 'Hiba történt a nyomvonal mentésekor: {err}',
    tooBigError: 'A nyomvonal nagyobb, mint a megengedett {maxSize} MB.',
  },

  infoPoint: {
    modify: 'Felirat módosítása',
    edit: {
      title: 'Gombostű feliratának módosítása',
      label: 'Gombostű leírása:',
      example: 'Itt találkozunk',
      hint: 'Felirat nélküli gombostűhöz hagyja üresen a leírását.',
    },
  },

  settings: {
    tab: {
      map: 'Térkép',
      account: 'Fiók',
      general: 'Általános',
      expert: 'Szakértő',
    },
    map: {
      imgFormat: {
        label: 'Az autós, túrázós és kerékpáros térkép csempéinek formátuma:',
        hint:
          'A térkép jobban néz ki PNG formátumban, de ehhez kb. 4× több adatot kell letölteni, mint a JPEG-nél. ' +
          'Lassú internetkapcsolat esetén a JPEG-et ajánljuk.',
      },
      overlayPaneOpacity: 'Saját vonalak átlátszatlansága:',
      homeLocation: {
        label: 'Lakóhely:',
        select: 'Kijelölés a térképen',
        undefined: 'meghatározatlan',
      },
    },
    account: {
      name: 'Név',
      email: 'E-mail',
      noAuthInfo: 'Csak bejelentkezett felhasználóknak.',
    },
    general: {
      tips:
        'Megnyitáskor jelenjenek meg tippek (csak szolvák és cseh nyelvnél)',
    },
    expertInfo: `
      <div style="text-align: left">
        A szakértői mód haladó felhasználóknak kínál funkciókat, például:
        <ul>
          <li>kibővített beállítások</li>
          <li>további térképrétegek</li>
          <li>további útvonaltervezési profilok</li>
        </ul>
      </div>
    `,
    expert: {
      switch: 'Szakértői mód',
      overlayOpacity: 'Réteg átlátszatlansága:',
      trackViewerEleSmoothing: {
        label:
          'A simítás szintje a teljes emelkedés/lejtés kiszámításánál a nyomvonal-megtekintőben: {value}',
        info:
          '1 értéknél minden magasság egyenként figyelembe vétetik. A nagyobb értékek a magasságok elsimítására szolgáló lebegő ablakszélességet jelentenek.',
      },
    },
    saveSuccess: 'A beállítások el lettek mentve.',
    savingError: 'Hiba történt a beállítások mentésénél: {err}',
  },

  changesets: {
    allAuthors: 'Minden szerző',
    download: 'Változások letöltése',
    olderThan: ({ days }) => `${days} nap`,
    olderThanFull: ({ days }) => `Az elmúlt ${days} nap módosításkészletei`,
    notFound: 'Nincs módosításkészlet.',
    fetchError: 'Hiba történt a módosításkészletek beolvasásánál: {err}',
  },

  mapDetails: {
    road: 'Út adatai',
    notFound: 'Itt nincs út.',
    fetchingError: 'Hiba történt az út adatainak beolvasásakor: {err}',
  },

  objects: {
    type: 'Típus',
    lowZoomAlert: {
      message:
        'Ahhoz, hogy az objektumok típusok szerint látsszanak, legalább a 12. szintre kell nagyítani.',
      zoom: 'Nagyítás',
    },
    fetchingError: 'Hiba történt az objektumok (POI-k) beolvasásánál: {err}',
    categories: {
      1: 'Természet',
      2: 'Szolgáltatások',
      3: 'Közlekedés',
      4: 'Történelmi objektumok',
      5: 'Egészségügy',
      6: 'Üzletek',
      7: 'Energia',
      8: 'Szállás & étkezés',
      9: 'Turizmus',
      10: 'Közigazgatási beosztás',
      11: 'Egyéb',
      12: 'Szabadidő',
      13: 'Sport',
      14: 'Oktatás',
      15: 'Kerékpározás',
    },
    subcategories: {
      1: 'Barlangbejárat',
      2: 'Hegycsúcs',
      3: 'Benzinkút',
      4: 'Étterem',
      5: 'Szálloda',
      6: 'Parkoló',
      7: 'Repülőtér',
      8: 'Vasútállomás',
      9: 'Buszállomás',
      10: 'Buszmegálló',
      11: 'Vár',
      12: 'Kastély',
      13: 'Rom',
      14: 'Múzeum',
      15: 'Monumentális, épületszerű emlékmű',
      16: 'Emlékmű',
      17: 'Gyógyszertár',
      18: 'Kórház',
      19: 'Orvosi rendelő',
      20: 'Rendőrség',
      21: 'Rendelőintézet',
      22: 'Határátkelő',
      23: 'Kórház sürgősségi osztállyal',
      24: 'Szupermarket',
      26: 'Atomerőmű',
      27: 'Hőerőmű',
      28: 'Vízerőmű',
      29: 'Szélerőmű',
      30: 'Kis élelmiszerbolt',
      31: 'Tűzoltóság',
      32: 'Templom',
      33: 'Kocsma',
      34: 'Bank ATM nélkül',
      35: 'Bankautomata (ATM)',
      36: 'Büfé, gyorsétterem',
      39: 'Bank ATM-mel',
      40: 'Kilátóhely',
      41: 'Kemping',
      42: 'Védett fa',
      43: 'Forrás',
      44: 'Útirányjelző tábla (gyalogos)',
      45: 'Tájékoztató térkép (gyalogos)',
      46: 'Menedékház (személyzet nélkül)',
      47: 'Esőbeálló',
      48: 'Posta',
      49: 'Történelmi csatatér',
      50: 'Magasles',
      51: 'Távközlési torony',
      52: 'Kilátótorony',
      53: 'Motel',
      54: 'Vendégház',
      55: 'Turistaszálló',
      56: 'Kerületszékhely (Szlovákia)',
      57: 'Járásszékhely (Szlovákia)',
      58: 'Nagyváros',
      59: 'Kisváros',
      60: 'Község',
      61: 'Falucska',
      62: 'Városrész',
      63: 'Vadőrház',
      64: 'Fogorvos',
      65: 'Kerékpárbolt',
      66: 'Kerékpártároló',
      67: 'Kerékpárkölcsönző',
      68: 'Alkoholbolt',
      69: 'Műalkotásbolt',
      70: 'Pékség',
      71: 'Szépségszalon',
      72: 'Ágy, hálószoba-felszerelés',
      73: 'Italt árusító bolt',
      74: 'Könyvesbolt',
      75: 'Butik',
      76: 'Hentes',
      77: 'Autókereskedés',
      78: 'Autószerelő',
      79: 'Jótékonysági bolt',
      80: 'Drogéria',
      81: 'Ruházati bolt',
      82: 'Számítógépüzlet',
      83: 'Édességbolt',
      84: 'Fénymásoló',
      85: 'Függönybolt',
      86: 'Csemegés',
      87: 'Nagyáruház',
      88: 'Búvárfelszerelés-bolt',
      89: 'Vegytisztító',
      90: 'Barkácsbolt',
      91: 'Szórakoztató elektronikai bolt',
      92: 'Erotikus bolt',
      93: 'Méteráru',
      94: 'Termelői bolt',
      95: 'Virágüzlet',
      96: 'Képkeretbolt',
      97: 'Kazánbolt',
      98: 'Temetkezési iroda',
      99: 'Bútorbolt',
      100: 'Kertészet',
      101: 'Vegyesbolt',
      102: 'Ajándékbolt, souvenir',
      103: 'Üveges',
      104: 'Zöldség-gyümölcs',
      105: 'Fodrász',
      106: 'Vas-műszaki kereskedés',
      107: 'Hallókészülékbolt',
      108: 'Hi-Fi üzlet',
      109: 'Fagylaltozó',
      110: 'Lakberendezési bolt',
      111: 'Ékszerüzlet',
      112: 'Trafik',
      113: 'Konyhafelszerelés',
      114: 'Mosoda',
      115: 'Bevásárlóközpont',
      116: 'Masszázsszalon',
      117: 'Mobiltelefon-üzlet',
      118: 'Pénzkölcsönző',
      119: 'Motorkerékpár-kereskedés',
      120: 'Hangszerüzlet',
      121: 'Újságárus',
      122: 'Optika',
      123: 'Biotermékeket árusító bolt',
      124: 'Túrafelszerelés-bolt',
      125: 'Festékbolt',
      126: 'Zálogház',
      127: 'Kisállat-kereskedés',
      128: 'Tengerihalbolt',
      129: 'Használtáru-kereskedés',
      130: 'Cipőbolt',
      131: 'Sportfelszerelés-bolt',
      132: 'Papírbolt',
      133: 'Tetoválás',
      134: 'Játékbolt',
      135: 'Építőanyag-áruház',
      136: 'Üres üzlethelyiség',
      137: 'Porszívóüzlet',
      138: '100 forintos bolt',
      139: 'Videófilmbolt vagy -kölcsönző',
      140: 'Állatkert',
      141: 'Menedékház (személyzettel)',
      142: 'Látványosság',
      143: 'WC',
      144: 'Telefon',
      145: 'Városháza, községháza',
      146: 'Börtön',
      147: 'Piac',
      148: 'Bár',
      149: 'Kávézó',
      150: 'Grillezőhely',
      151: 'Ivóvíz',
      152: 'Taxi',
      153: 'Könyvtár',
      154: 'Autómosó',
      155: 'Állatorvos',
      156: 'Jelzőlámpa',
      157: 'Vasúti megállóhely',
      158: 'Vasúti átjáró',
      159: 'Villamosmegálló',
      160: 'Helikopter-leszállóhely',
      161: 'Víztorony',
      162: 'Szélmalom',
      163: 'Szauna',
      164: 'Benzinkút (LPG)',
      166: 'Kutyafuttató',
      167: 'Sportközpont',
      168: 'Golfpálya',
      169: 'Stadion',
      170: 'Sportpálya',
      171: 'Strand, élményfürdő',
      172: 'Sólya',
      173: 'Horgászat',
      174: 'Park',
      175: 'Játszótér',
      176: 'Kert',
      177: 'Szabadidős tevékenységre használható közös föld (UK)',
      178: 'Műjégpálya',
      179: 'Minigolf',
      180: 'Tánctér',
      181: 'Iskola',
      182: 'Teke',
      183: 'Bowling',
      184: 'Amerikai futball',
      185: 'Íjászat',
      186: 'Atlétika',
      187: 'Ausztrál futball',
      188: 'Baseball',
      189: 'Kosárlabda',
      190: 'Strandröplabda',
      191: 'BMX-kerékpár',
      192: 'Pétanque',
      193: 'Gyepteke',
      194: 'Kanadai futball',
      195: 'Kenu',
      196: 'Sakk',
      197: 'Hegymászás',
      198: 'Krikett',
      199: 'Krikettháló',
      200: 'Krokett',
      201: 'Kerékpározás',
      202: 'Búvárkodás',
      203: 'Kutyaverseny',
      204: 'Lovaglás',
      205: 'Valamilyen futball',
      206: 'Kelta futball',
      207: 'Golf',
      208: 'Torna',
      209: 'Hoki',
      210: 'Patkódobás',
      211: 'Lóverseny',
      212: 'Bajor curling',
      213: 'Korfball',
      214: 'Motorverseny',
      215: 'Több sport',
      216: 'Tájékozódási futás',
      217: 'Kispályás tenisz',
      218: 'Siklóernyőzés',
      219: 'Pelota',
      220: 'Raketball',
      221: 'Evezés',
      222: 'Ligarögbi',
      223: 'Uniós rögbe',
      224: 'Lövészet',
      225: 'Jégkorcsolya',
      226: 'Gördeszka',
      227: 'Síelés',
      228: 'Labdarúgás',
      229: 'Úszás',
      230: 'Asztalitenisz',
      231: 'Kézilabda',
      232: 'Tenisz',
      233: 'Szánkó',
      234: 'Röplabda',
      235: 'Vízisí',
      236: 'Egyetem',
      237: 'Óvoda',
      238: 'Főiskola',
      239: 'Autósiskola',
      240: 'Kápolna',
      241: 'Piknikezőhely',
      242: 'Beltéri tűzrakóhely',
      243: 'Lakatlan hely, dűlő',
      244: 'Vízesés',
      245: 'Tó',
      246: 'Víztározó',
      248: 'Természetvédelmi terület (fokozottan védett)',
      249: 'Természetvédelmi terület (természeti emlék)',
      250: 'Természetvédelmi terület (védett)',
      251: 'Természetvédelmi terület (tájvédelmi körzet)',
      252: 'Természetvédelmi terület (nemzeti park)',
      253: 'Tejautomata („vastehén”)',
      254: 'Természetvédelmi terület (RAMSAR vizes élőhely)',
      255: 'Házszám',
      256: 'Bányaakna (függőlege)',
      257: 'Bányatárna (vízszintes)',
      258: 'Kút',
      259: 'Út menti kereszt',
      260: 'Út menti kegyhely',
      261: 'Fitness',
      262: 'Gázturbina',
      263: 'Udvarház, kúria',
      264: 'Felszínalaktani (geomorfológiai) egység, táj határa',
      265: 'Katonai bunker',
      266: 'Autópályacsomópont',
      267: 'Szobor',
      268: 'Kémény',
      269: 'Siklóernyőzés',
      270: 'Sárkányrepülés',
      271: 'Állatetető',
      272: 'Tűzrakó hely',
      273: 'Tollaslabda, fallabda',
      274: 'Útirányjelző tábla (kerékpáros)',
      275: 'Kerékpártöltő állomás',
    },
  },

  external: {
    openInExternal: 'Megnyitás külső alkalmazásban',
    osm: 'OpenStreetMap',
    oma: 'OMA',
    googleMaps: 'Google térkép',
    hiking_sk: 'hiking.sk',
    mojamapa_sk: 'mojamapa.sk',
    'mapy_cz-aerial': 'mapy.cz légifelvétel',
    josm: 'Szerkesztés JOSM-mal',
    id: 'Szerkesztés iD-vel',
    'routing-debug': 'Útvonaltervezési hibakereső',
    window: 'Új ablakban',
    url: 'Share URL', // TODO
    image: 'Share photo', // TODO
  },

  search: {
    inProgress: 'Keresés…',
    noResults: 'Nincs találat',
    prompt: 'Adja meg a helyet',
    routeFrom: 'Útvonal innen',
    routeTo: 'Útvonal ide',
    fetchingError: 'Keresési hiba: {err}',
  },

  shareMap: {
    label: 'A jelenlegi térképnézet URL-je:',
  },

  embed: {
    code: 'A következő kódot írja be HTML-oldalába:',
    example: 'Az eredmény így fog kinézni:',
    dimensions: 'Méretek:',
    height: 'Magasság:',
    width: 'Szélesség:',
    enableFeatures: 'Funkciók engedélyezése:',
    enableSearch: 'keresés',
    enableMapSwitch: 'térképréteg-kapcsoló',
    enableLocateMe: 'saját hely megtalálása',
  },

  tips: {
    previous: 'Előző tipp',
    next: 'Következő tipp',
    prevent: 'Következő alkalommal ne jelenjék meg',
  },

  supportUs: {
    explanation:
      'A Freemap térképportált önkéntesek szerkesztik szabad idejükben. A működéshez azonban szükség van hardverre és kereskedelmi vállalatok szolgáltatásaira, ami bizony pénzbe kerül.',
    account: 'Bankszámlaszám:',
    paypal: 'Adományozás PayPallal',
    thanks: 'Minden adományért hálásak vagyunk. Köszönjük!',
    registration: 'Bejegyzés: 2009. október 2. (MV/VVS/1-900/90-34343)',
  },

  gpxExport: {
    export: 'Exportálás:',
    exportError: 'Error exporting GPX: {err}', // TODO
    what: {
      plannedRoute: 'útvonal',
      plannedRouteWithStops: 'útvonal (including stops)', // TODO
      objects: 'érdekes pontok (POI-k)',
      pictures: 'fényképek (a látható térképterületen)',
      distanceMeasurement: 'lemért távolságok',
      areaMeasurement: 'lemért területek',
      elevationMeasurement: 'lemért magasságok és pozíciók',
      infoPoint: 'gombostűk',
      tracking: 'élő nyomkövetés',
      gpx: 'GPX track', // TODO
    },
    disabledAlert:
      'Csak az a jelölőnégyzet jelölhető be exportálásra, amelyhez a térképen tartozik tartalom.',
  },

  logIn: {
    with: {
      facebook: 'Belépés Facebook-fiókkal',
      google: 'Belépés Google-fiókkal',
      osm: 'Belépés OpenStreetMap-fiókkal',
    },
    success: 'Sikeresen bejelentkezett.',
    logInError: 'Hiba történt a bejelentkezésnél: {err}',
    logInError2: 'Hiba történt a bejelentkezésnél.',
    logOutError: 'Hiba történt a kijelentkezésnél: {err}',
    verifyError: 'Hiba történt a hitelesítés ellenőrzésénél: {err}',
  },

  logOut: {
    success: 'Sikeresen kijelentkezett.',
  },

  mapLayers: {
    missingStravaAuth:
      'Először jelentkezzék be a www.strava.com/heatmap oldalon, majd frissítse az oldalt.',
    layers: 'Térképrétegek',
    photoFilterWarning: 'A fényképszűrés aktív',
    minZoomWarning: 'A {minZoom} nagyítási szinttől látható.',
    base: {
      A: 'Autó',
      T: 'Túrázás',
      C: 'Kerékpár',
      K: 'Síelés',
      S: 'Légifelvétel',
      O: 'OpenStreetMap',
      M: 'mtbmap.cz',
      p: 'OpenTopoMap',
      d: 'Tömegközlekedés',
      h: 'Történelmi térkép',
      X: 'Új szabadtéri térkép',
      Y: 'Új szabadtéri térkép (helyi)',
    },
    overlay: {
      I: 'Fényképek',
      n: 'Erdészeti utak (Szlovákia)',
      1: 'Nevek (autó)',
      2: 'Nevek (túrázás)',
      3: 'Nevek (kerékpározás)',
      g: 'OSM GPS nyomvonalak',
      t: 'Turistautak',
      c: 'Kerékpáros útvonalak',
      q: 'OpenSnowMap',
      r: 'Megjelenítőügyfelek',
      s0: 'Strava (minden)',
      s1: 'Strava (lovaglás)',
      s2: 'Strava (futás)',
      s3: 'Strava (vízi tevékenységek)',
      s4: 'Strava (téli tevékenységek)',
    },
    type: {
      map: 'térkép',
      data: 'adatok',
      photos: 'képek',
    },
    attr: {
      freemap: '©\xa0Freemap Szlovákia',
      osmData: '©\xa0OpenStreetMap közreműködők',
      srtm: '©\xa0SRTM',
      hot: '©\xa0Humanitárius OpenStreetMap Team',
    },
  },

  elevationChart: {
    distance: 'Távolság [km]',
    ele: 'Magasság [méter a tengerszint fölött]',
    fetchError: 'Hiba történt a magasságiprofil-adatok lekérésénél: {err}',
  },

  errorCatcher: {
    html: `${errorMarkup}
      <p>
        Megpróbálhatja a következőket:
      </p>
      <ul>
        <li><a href="">újra betölti a legutóbbi oldalt</a></li>
        <li><a href="/">betölti a kezdőoldalt</a></li>
        <li><a href="/?reset-local-storage">törli a helyi adatokat és betölti a kezdőoldalt</a></li>
      </ul>
    `,
  },

  osm: {
    fetchingError: 'Hiba történt az OSM-adatok lekérésénél: {err}',
  },

  roadDetails: {
    roadType: 'Úttípus:',
    surface: 'Burkolat:',
    suitableBikeType: 'Ajánlott kerékpártípus:',
    lastChange: 'Utolsó módosítás:',
    showDetails: 'Részletek megjelenítése az osm.org-on',
    surfaces: {
      asphalt: 'aszfalt',
      gravel: 'zúzott kő',
      fine_gravel: 'murva',
      dirt: 'por',
      ground: 'föld',
      cobblestone: 'nagy kavics (görgeteg)',
      compacted: 'tömörített',
      paved: 'burkolt',
      unknown: 'ismeretlen',
      unpaved: 'buroklatlan',
      'concrete:plates': 'betonlapok',
      concrete: 'beton',
      grass: 'fű',
    },
    trackClasses: {
      motorway: 'autópálya',
      trunk: 'autóút',
      primary: 'első- vagy másodrendű főút',
      secondary: 'összekötő út',
      tertiary: 'bekötőút',
      service: 'szervizút',
      unclassified: 'egyéb közút',
      residential: 'lakóút',
      grade1: 'burkolt vagy erősen tömörített, szilárd felületű (1. osztály)',
      grade2:
        'burkolatlan út, felszíne zúzott kő, változó mennyiségű homokkal, kőzetliszttel és agyaggal keverve (2. osztály)',
      grade3: 'szinte mindig burkolatlan út (3. osztály)',
      grade4:
        'szinte mindig burkolatlan út, elsődlegesen föld/homok/fű (4. osztály)',
      grade5: 'szinte mindig burkolatlan út szilárd anyag nélkül (5. osztály)',
      path: 'ösvény',
      footway: 'gyalogút',
      pedestrian: 'sétálóutca',
      unknown: 'ismeretlen',
    },
    bicycleTypes: {
      'road-bike': 'országúti kerékpár',
      'trekking-bike': 'túrakerékpár',
      'mtb-bike': 'hegyikerékpár (MTB)',
      'no-bike': 'kerékpárral tilos',
      unknown: 'ismeretlen',
    },
  },

  tracking: {
    savingError: 'Mentési hiba: {err}',
    loadError: 'Betöltési hiba: {err}',
    deleteError: 'Törlési hiba: {err}',
    unauthenticatedError: 'Eszközei kezeléséhez kérjük, jelentkezzék be.',
    trackedDevices: {
      button: 'Figyelt',
      modalTitle: 'Figyelt eszközök',
      desc: 'Figyelt eszközök kezelése ismerősei pozíciójának megismeréséhez.',
      modifyTitle: 'Figyelt eszköz módosítása',
      createTitle: ({ name }) => (
        <>
          <i>{name}</i> készülék figyelése
        </>
      ),
    },
    accessToken: {
      token: 'Figyelési kód',
      timeFrom: 'Ettől',
      timeTo: 'Eddig',
      listingLabel: 'Felsorolási felirat',
      note: 'Megjegyzés',
    },
    accessTokens: {
      modalTitle: ({ deviceName }) => (
        <>
          <i>{deviceName}</i> készülék figyelési kódjai
        </>
      ),
      desc: ({ deviceName }) => (
        <p>
          Határozzon meg figyelési kódokat, hogy <i>{deviceName}</i> készüléke
          pozícióját megoszthassa ismerőseivel.
        </p>
      ),
      createTitle: ({ deviceName }) => (
        <>
          Figyelési kód hozzáadása a(z) <i>{deviceName}</i> készülékhez
        </>
      ),
      modifyTitle: ({ token, deviceName }) => (
        <>
          A(z) <i>{deviceName}</i> készülék <i>{token}</i> figyelési kódjának
          módosítása
        </>
      ),
    },
    trackedDevice: {
      token: 'Figyelési kód',
      label: 'Felirat',
      fromTime: 'Kezdő időpont',
      maxAge: 'Legmagasabb életkor',
      maxCount: 'Legmagasabb szám',
      splitDistance: 'Távolság felosztása',
      splitDuration: 'Időtartam felosztása',
      color: 'Szín',
      width: 'Szélesség',
    },
    devices: {
      button: 'Készülékeim',
      modalTitle: 'Követett készülékeim',
      createTitle: 'Követendő készülék létrehozása',
      watchTokens: 'Kódok megtekintése',
      watchPrivately: 'Privát figyelés',
      modifyTitle: ({ name }) => (
        <>
          A(z) <i>{name}</i> készülék követésének módosítása
        </>
      ),
      desc: () => (
        <>
          <p>
            Kezelje készülékeit, hogy mások is láthassák pozícióját, ha megad
            nekik egy figyelési kódot (amelyet a <FontAwesomeIcon icon="key" />{' '}
            ikonnal hozhat létre).
          </p>
          <p>
            Adja meg az alábbi webcímet a nyomon követő alkalmazásában (pl.{' '}
            <a href="https://docs.locusmap.eu/doku.php?id=manual:user_guide:functions:live_tracking">
              Locus
            </a>{' '}
            vagy OsmAnd):{' '}
            <code>
              {process.env.API_URL}/tracking/track/<i>kód</i>
            </code>{' '}
            ahol a <i>kód</i> az alábbi táblázatban található.
          </p>
          <p>
            A végpont támogatja a HTTP <code>GET</code> és <code>POST</code>
            módszert az URL-ben kódolt alábbi paraméterekkel:
          </p>
          <ul>
            <li>
              <code>lat</code> - hosszúság fokban (kötelező)
            </li>
            <li>
              <code>lon</code> - szélesség fokban (kötelező)
            </li>
            <li>
              <code>time</code>, <code>timestamp</code> - JavaScripttel
              elemezhető parsable dátumés idő vagy Unix idő másodpercben vagy
              milliszekundumban
            </li>
            <li>
              <code>alt</code>, <code>altitude</code> - magasság (méter)
            </li>
            <li>
              <code>speed</code> - sebeeség (m/s)
            </li>
            <li>
              <code>speedKmh</code> - sebesség (km/h)
            </li>
            <li>
              <code>acc</code> - pontosság (méter)
            </li>
            <li>
              <code>hdop</code> - vízszintes pontossághígulás (dilution of
              precision / DOP)
            </li>
            <li>
              <code>bearing</code> - irányszög (fok)
            </li>
            <li>
              <code>battery</code> - akkumulátor (százalék)
            </li>
            <li>
              <code>gsm_signal</code> - GSM-jel (százalék)
            </li>
            <li>
              <code>message</code> - üzenet (megjegyzés)
            </li>
          </ul>
        </>
      ),
    },
    device: {
      token: 'Követési kód',
      name: 'Név',
      maxAge: 'Legmagasabb kor',
      maxCount: 'Legmagasabb szám',
      regenerateToken: 'Követési kód újragenerálása',
    },
    visual: {
      line: 'Vonal',
      points: 'Pontok',
      'line+points': 'Vonal + pontok',
    },
    subscribeNotFound: ({ id }) => (
      <>
        A(z) <i>{id}</i> figyelési kód nem létezik.
      </>
    ),
    subscribeError: ({ id }) => (
      <>
        Hiba történt a(z) <i>{id}</i> kód használatának követésekor.
      </>
    ),
  },
  pdfExport: {
    title: 'Exportálás PDF-be',
    area: 'Exportálandó terület:',
    areas: {
      visible: 'A térkép látható területe',
      pinned: 'Gombostűkkel kijelölt terület',
    },
    layersTitle: 'Választható rétegek:',
    layers: {
      contours: 'Szintvonalak',
      shading: 'Domborzatárnyékolás',
      hikingTrails: 'Turistautak',
      bicycleTrails: 'Kerékpáros útvonalak',
      skiTrails: 'Síútvonalak',
      horseTrails: 'Lovaglóútvonalak',
    },
    mapScale: 'Méretarány:',
    alert: () => (
      <>
        Megjegyzések:
        <ul>
          <li>
            A szabadtéri térkép fog exportáltatni interaktív funkciók nélkül.
          </li>
          <li>
            A térkép PDF-be történő exportálása több tucat másodpercet is
            igénybe vehet.
          </li>
          <li>
            Megosztás előtt a térképet lássa el a következő szerzői jogi
            közleménnyel:
            <br />
            <em>
              térkép ©{' '}
              <a
                href="https://www.freemap.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freemap Szlovákia
              </a>
              , adatok{' '}
              <a
                href="https://osm.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
              >
                © OpenStreetMap közreműködők
              </a>
              , © SRTM
            </em>
          </li>
        </ul>{' '}
      </>
    ),
  },
};

function numberize(n, words) {
  return n < 1 ? words[0] : n < 2 ? words[1] : words[0];
}
