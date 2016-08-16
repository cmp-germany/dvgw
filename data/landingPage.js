window.contentLandingPage = [
  { module: "TitleWithRegisterForm",
    contents: {
      title: "Kommunikation und Kooperation. Möglich auf einer Plattform.",
      text:
        "Die DVGW Service & Consult GmbH schafft mit diesem Angebot eine einheitliche Plattform zur Vermittlung von Dienstleistungen und Beratung im ingeneurtechnischen Bereich sowie der IT.",
      formTitle: "Registrieren Sie sich gleich jetzt und nutzen Sie die digitalen Serviceangebote des DVGW.",
      buttonAdditionalText: 'Durch das Klicken auf den Button "Jetzt Registrieren" bestätigen Sie, dass Sie mit unseren allgemeinen Benutzungsbedingungen einverstanden sind.',
      buttonText: "Jetzt Registrieren"
    },
    pictures: {
      background: {
        src: "gfx/dvgw/Fotolia_95332149_L.jpg",
        positionX: "50%",
        positionY: "50%"
      },
      motiv: {
        src: ""
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
        title: "Erstklassige Vermittlung.",
        text: "Speziell für Unternehmen der Ver- und Entsorgungswirtschaft, sind Experten der ingeneurtechnischen Bereiche und der IT schnell erreichbar.",
        icon: "swap_horiz",
        button: {
          text: "Registrieren Sie sich jetzt",
          url: "#register-form"
        }
      },
      {
        title: "Erfahrung per Mausklick.",
        text: "Umfassende Kompotenz auf dem Stand der Technik und ausweisbare Praxiserfahrung in allen Belangen rund um das Gas und Wasserfach stehen Ihnen sofort bereit.",
        icon: "wb_incandescent",
        button: {
          text: "Registrieren Sie sich jetzt",
          url: "#register-form"
        }
      }
    ]
  },
  { module: "SlideStatement",
    title: "Maßstäbe setzen. Für Erdgas und Trinkwasser.",
    background: {
      src: "gfx/dvgw/Fotolia_112094394_L.jpg",
      positionX: "50%",
      positionY: "50%"
    }
  },
  { module: "People",
    cards: [
      {
        type: "people",
        title: "Gas",
        text: "In punkto Sicherheit und Umweltschutz belegt Deutschland im internationalen Vergleich einen Spitzenplatz bei der Gasversorgung. Der DVGW stellt mit seinen Gremien das hohe Niveau der Gasversorgung auch in Zukunft sicher.",
        url: "http://www.dvgw.de/gas/",
        picture: "gfx/dvgw/Fotolia_91606037_XS_cropped.jpg"
      },
      {
        type: "people",
        title: "Wasser",
        text: "Die deutsche Wasserwirtschaft liegt in Bezug auf Qualität und Sicherheit weltweit an der Spitze. Der DVGW setzt sich für den Erhalt der hohen deutschen Leistungsstandards bei hoher technisch-wirtschaftlicher Effizienz ein.",
        url: "http://www.dvgw.de/wasser/",
        picture: "gfx/landing-page/people/240_F_68125438_PzRdnTc2NrRIgUjoX8Qn5RBHSSLvCIfS.jpg"
      },
      {
        type: "people",
        title: "Deutscher Verein des Gas- und Wasserfaches e.V.",
        text: "Der DVGW ist der technisch-wissenschaftliche Verein im Gas- und Wasserfach, der seit mehr als 150 Jahren besteht.",
        url: "http://www.dvgw.de/dvgw/profil/",
        picture: "gfx/landing-page/people/DVGW-logo2.png"
      },
      {
        type: "people",
        title: "Forschung und Entwicklung",
        text: "Der DVGW initiiert und fördert F&E-Projekte im Gas- und Wasserfach. Überblick über laufende und abgeschlossene Projekte.",
        url: "http://www.dvgw.de/angebote-leistungen/",
        picture: "gfx/landing-page/people/forschung.jpg"
      },
      {
        type: "people",
        title: "Öffentlich und Aktuell",
        text: "Der DVGW setzt auf stetige aktuelle Pressemitteilungen.",
        url: "http://www.dvgw.de/no_cache/presse/pressemitteilungen/2016/",
        picture: "gfx/landing-page/people/fotolia_79729700.jpg"
      },
      {
        type: "register",
        text: "Nutzen Sie den Service des DVGW zeit- und ortsunabhängig.",
        buttonText: "Registrieren Sie sich jetzt",
        url: "#register-form"
      }
    ]
  },
  { module: "SlideStatement",
    title: "Nutzen Sie die Serviceangebote des DVGW: Einfach, schnell, online.",
    background: {
      src: "gfx/dvgw/Fotolia_112133071_L.jpg",
      positionX: "50%",
      positionY: "50%"
    }
  }
];
