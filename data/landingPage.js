window.contentLandingPage = [
  { module: "TitleWithRegisterForm",
    contents: {
      title: "Die Stadt Moers und ihre gesamte Verwaltung. Für Sie erreichbar auf einer einzigen Plattform.",
      text:
        "Die Stadtverwaltung Moers bietet mit diesem Angebot eine einheitliche Plattform um auf alle Dienstleistungen der Stadtverwaltung zugreifen zu können. Außerdem haben Sie die Möglichkeit, mit allen Ämtern direkt zu kommunizieren und Ihre Anliegen schnell, unkompliziert und ohne großen Aufwand direkt online zu klären.",
      formTitle: "Registrieren Sie sich gleich jetzt und nutzen Sie die digitalen Serviceangebote der Stadt Moers.",
      buttonAdditionalText: 'Durch das Klicken auf den Button "Jetzt Registrieren" bestätigen Sie, dass Sie mit unseren allgemeinen Benutzungsbedingungen einverstanden sind.',
      buttonText: "Jetzt Registrieren"
    },
    pictures: {
      background: {
        src: "gfx/landing-page/DSC00974.jpg",
        positionX: "50%",
        positionY: "50%"
      },
      motiv: {
        src: "gfx/landing-page/moers-wappen_fuer-alle_rgb.png"
      }
    },
    inputFields: [
      {
        inputType: "text",
        label: "Ihr Name"
      },
      {
        inputType: "email",
        label: "Ihre E-Mail Adresse"
      },
      {
        inputType: "password",
        label: "Vergeben Sie Ihr Passwort"
      },
      {
        inputType: "password",
        label: "Wiederholen Sie Ihr Passwort"
      }
    ]
  },
  { module: "KeyFeatures",
    features: [
      {
        title: "Ihre Stadt. Digital.",
        text: "Es ist wie ein digitales Rathaus: Besuchen Sie alle Ämter online, erledigen Sie ihre Aufgaben und nehmen Sie die Services Ihrer Stadt in Anspruch. All dies ist nur ein Mausklick weit entfernt.",
        icon: "location_city",
        button: {
          text: "Registrieren Sie sich jetzt",
          url: "#register-form"
        }
      },
      {
        title: "Stellen Sie Ihre Anfrage.",
        text: "Sie haben ein Anliegen, brauchen eine bestimmte Bescheinigung, möchten eine Beantragung machen? Nehmen Sie jetzt unkompliziert und schnell mit dem richtigen Amt und dem richtigen Ansprechpartner Kontakt auf.",
        icon: "question_answer",
        button: {
          text: "Registrieren Sie sich jetzt",
          url: "#register-form"
        }
      }
    ]
  },
  { module: "SlideStatement",
    title: "Sparen Sie sich den Weg zum Amt und profitieren Sie von den zusätzlichen Serviceangeboten der digitalen Verwaltung.",
    background: {
      src: "gfx/landing-page/fotolia_101328222.jpg",
      positionX: "50%",
      positionY: "50%"
    }
  },
  { module: "People",
    cards: [
      {
        type: "people",
        title: "Bürgerservice",
        text: "Das Team des Bürgerservices steht ihnen für  verschiedene  Dienstleistungen zur Verfügung. Hierbei handelt es sich um die Angelegenheiten aus den unterschiedlichsten Rechtsgebieten.",
        url: "https://www.moers.de/de/ansprechpartner/fachdienst-4.2.1-buergerservice-innenstadt/",
        picture: "gfx/landing-page/people/service-rechts.jpg"
      },
      {
        type: "people",
        title: "Flüchtlinge in Moers",
        text: "In Moers engagieren sich zahlreiche Institutionen, Verbände und Kirchengemeinden in der Flüchtlingshilfe. Hier finden Sie die Möglichkeit, Hilfsangebote selbst einzustellen und abzurufen.",
        url: "http://www.stadt-koeln.de/leben-in-koeln/familie-kinder/betreuung/suche-nach-kindertageseinrichtungen-koeln",
        picture: "gfx/landing-page/people/service-rechts.jpg"
      },
      {
        type: "people",
        title: "Gewerbemeldestelle",
        text: "In der Abteilung für Gewerbeangelegenheiten können Sie Ihr Gewerbe anmelden und falls nötig, Genehmigungen einholen.",
        url: "http://www.business.natwest.com/business.html",
        picture: "gfx/landing-page/people/bilder-eaportal-16_9fittosize__640_360_c70cd4776d8026e482c276730944956b_einkaufen_textil_768.jpg"
      },
      {
        type: "people",
        title: "Volkshochschule Moers",
        text: "Mit unserer Bildungs- und Weiterbildungsberatung möchten wir Sie in Ihren Weiterbildungsaktivitäten begleiten. Nehmen Sie sich etwas Zeit und nutzen Sie das kostenlose und vielfältige Beratungsangebot der Volkshochschule!",
        url: "https://vhs-koeln.de/",
        picture: "gfx/landing-page/people/FS5639dc1393e32.jpg"
      },
      {
        type: "people",
        title: "Kfz-Zulassungsstelle",
        text: "Sie möchten ein Auto anmelden oder Ihre Fahrzeugpapiere ändern lassen? Vermeiden Sie Wartezeiten und nutzen Sie unsere Online Services.",
        url: "https://formular.stadt-koeln.de/terminvereinbarung/index.php?c_id=10032",
        picture: "gfx/landing-page/people/fotolia_102875889.jpg"
      },
      {
        type: "register",
        text: "Nutzen Sie die Serviceangebote Ihrer Stadt zeit- und ortsunabhängig.",
        buttonText: "Registrieren Sie sich jetzt",
        url: "#register-form"
      }
    ]
  },
  { module: "SlideStatement",
    title: "Nutzen Sie die Serviceangebote der Stadt Moers: Einfach, schnell, online.",
    background: {
      src: "gfx/landing-page/fotolia_87040465.jpg",
      positionX: "50%",
      positionY: "50%"
    }
  }
];
