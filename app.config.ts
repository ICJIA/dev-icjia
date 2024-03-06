export default defineAppConfig({
    title: "ICJIA",
    description: "Illinois Criminal Justice and Information Authority",
    isTranslationEnabled: true,
    navMenu: [
        {
          main: "home",
          link: "/",
        },
        {
          main: "counter",
          link: "/counter",
        },
        {
          main: "news",
          link: "/news",
        },
    ],
    sidebarMenu:[
        {
            main: "home",
            link: "/",
          },
          {
            main: "counter",
            link: "/counter",
          },
          {
            main: "news",
            link: "/news",
          },
    ]
  })