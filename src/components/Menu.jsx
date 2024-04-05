const menuItems = [
  {
    website: [
      {
        platform: [
          {
            path: "#",
            name: "website builder",
          },
          {
            path: "#",
            name: "website examples",
          },

          {
            path: "#",
            name: "landing page examples",
          },

          {
            path: "#",
            name: "blogging examples",
          },
        ],
        features: [
          {
            path: "#",
            name: "blogging",
          },
          {
            path: "#",
            name: "landing pages",
          },
          {
            path: "#",
            name: "link in bio pages",
          },
          {
            path: "#",
            name: "portfolio websites",
          },
          {
            path: "#",
            name: "integrations",
          },
        ],
      },
    ],
  },
  {
    email: [
      {
        platform: [
          {
            path: "#",
            name: "email marketing",
          },
          {
            path: "#",
            name: "email examples",
          },
        ],
      },
      {
        features: [
          {
            path: "#",
            name: "email templates",
          },
          {
            path: "#",
            name: "email designer",
          },
          {
            path: "#",
            name: "email forms",
          },
          {
            path: "#",
            name: "newsletters",
          },
          {
            path: "#",
            name: "automations",
          },
          {
            path: "#",
            name: "segmentation",
          },
        ],
      },
    ],
  },
  {
    sell: [
      {
        platform: [
          {
            path: "#",
            name: "online courses",
          },
          {
            path: "#",
            name: "online courses examples",
          },
          {
            path: "#",
            name: "digital downloads",
          },
          {
            path: "#",
            name: "checkout",
          },
        ],
      },
      {
        features: [
          {
            path: "#",
            name: "multimedia products",
          },
          {
            path: "#",
            name: "presell products",
          },
          {
            path: "#",
            name: "upsells",
          },
          {
            path: "#",
            name: "coaching",
          },
          {
            path: "#",
            name: "webinars",
          },
          {
            path: "#",
            name: "affiliates",
          },
        ],
      },
    ],
  },

  {
    pricing: [],
  },

  {
    resources: [
      {
        "free resources": [
          {
            path: "#",
            name: "resource center",
          },
          {
            path: "#",
            name: "hire a podia pro",
          },
          {
            path: "#",
            name: "creator advice library",
          },
          {
            path: "#",
            name: "creator stories",
          },
          {
            path: "#",
            name: "free tools",
          },
          {
            path: "#",
            name: "podia creator community",
          },
          {
            path: "#",
            name: "help center",
          },
        ],
      },
    ],
  },
];

function MenuList(props) {
  console.log(props);
  return <ul>{"hi"}</ul>;
}

export default function MobileMenu(menuItems) {
  return (
    <nav>
      <div>
        <h3>menu</h3>
        <p>X</p>
      </div>
      <MenuList menuItems={menuItems} />
      <a>Sign up free</a>
    </nav>
  );
}
