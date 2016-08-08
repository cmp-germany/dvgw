window.contentLandingPage = [
  { module: "TitleWithRegisterForm",
    contents: {
      title: "Right now there are 1954 export opportunities. Find yours.",
      text:
        "An online resource to help exporters both identify the best export opportunities and find the information and key contacts needed to achieve success.",
      formTitle: "Register now and get your 1-Year-Free-Subscription.",
      buttonAdditionalText: 'By clicking on the button "Become a member now", you agree our terms and conditions.',
      buttonText: "Become a member now"
    },
    pictures: {
      background: {
        src: "gfx/landing-page/photo-1451187580459-43490279c0fa.jpeg",
        positionX: "100%",
        positionY: "50%"
      },
      motiv: {
        src: "gfx/landing-page/exporting-great.png"
      }
    },
    inputFields: [
      {
        inputType: "text",
        label: "Name of the company"
      },
      {
        inputType: "select",
        options: [
          "Category 1",
          "Category 2",
          "Category 3",
          "Category 4"
        ]
      },
      {
        inputType: "select",
        options: [
          "Branch of industry 1",
          "Branch of industry 2",
          "Branch of industry 3",
          "Branch of industry 4"
        ]
      },
      {
        inputType: "text",
        label: "User name"
      },
      {
        inputType: "email",
        label: "E-Mail adress"
      },
      {
        inputType: "password",
        label: "Password"
      },
      {
        inputType: "password",
        label: "Repeat passwort"
      }
    ]
  },
  { module: "KeyFeatures",
    features: [
      {
        title: "Create a company profile",
        text: "Show what makes you unique. Create a company profile describing your offers and services and introduce yourself and your employees to other platform members.",
        icon: "business",
        button: {
          text: "Register now",
          url: "#register-form"
        }
      },
      {
        title: "Find your target group",
        text: "Keyword search, active matching and groups will help you to find the right person on the platform.",
        icon: "group",
        button: {
          text: "Register now",
          url: "#register-form"
        }
      }
    ]
  },
  { module: "SlideStatement",
    title: "We make knowledge accessible, enabling you to connect the dots. Quickly, safely and successfully.",
    background: {
      src: "gfx/landing-page/photo-1468420227854-e792779a87d3.jpeg",
      positionX: "90%",
      positionY: "50%"
    }
  },
  { module: "People",
    cards: [
      {
        type: "people",
        title: "British Airways",
        text: "British Airways is a full service global airline, offering year-round low fares with an extensive global route network flying to and from centrally-located airports.",
        url: "http://www.britishairways.com/",
        picture: "gfx/landing-page/people/BA_GooglePlus_profImg_250x250_v01.jpg"
      },
      {
        type: "people",
        title: "Crowdfunder.co.uk",
        text: "Crowdfunder enables you to setup your crowdfunding projects, create your crowd and collect payments from your backers. Everything you need to fund your great idea.",
        url: "http://www.crowdfunder.co.uk/",
        picture: "gfx/landing-page/people/4RB6bo_Z.jpg"
      },
      {
        type: "people",
        title: "NatWest",
        text: "NatWest have one simple goal: To be the best bank for customer service, by 2020. NatWest provide a full range of banking and insurance services to personal, business and commercial customers.",
        url: "http://www.business.natwest.com/business.html",
        picture: "gfx/landing-page/people/10297809_426656290804010_8049748194267470874_n.png"
      },
      {
        type: "people",
        title: "ParcelHero",
        text: "Providing outstanding service is at the heart of the ParcelHero philosophy, we want to make a real difference to our customers.",
        url: "https://www.parcelhero.com/",
        picture: "gfx/landing-page/people/photo.png"
      },
      {
        type: "people",
        title: "Santander",
        text: "For medium to large businesses looking for a relationship managed service or requiring more comprehensive banking, international, or larger lending needs.",
        url: "https://www.santandercb.co.uk/",
        picture: "gfx/landing-page/people/santander.gif"
      },
      {
        type: "register",
        text: "Access thousands of influential global contacts, try it free for 1 year.",
        buttonText: "Register now",
        url: "#register-form"
      }
    ]
  },
  { module: "SlideStatement",
    title: "Get connected with the world of success.",
    background: {
      src: "gfx/landing-page/photo-1460551204960-763bc82b7d8f.jpeg",
      positionX: "55%",
      positionY: "50%"
    }
  }
];
