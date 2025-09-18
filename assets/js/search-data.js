// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-harshita-gupta",
    title: "Harshita Gupta",
    section: "Navigation",
    handler: () => {
      window.location.href = "/harshitagupta.github.io/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "To download the CV, click on the PDF button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/harshitagupta.github.io/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/harshitagupta.github.io/people/";
          },
        },{id: "nav-submenus",
          title: "submenus",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/harshitagupta.github.io/_pages/dropdown.html";
          },
        },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%72%69%74%65%32%68%61%72%73%68%69%74%61@%79%61%68%6F%6F.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/harshita-g", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/harshita-gupta-hg12", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
