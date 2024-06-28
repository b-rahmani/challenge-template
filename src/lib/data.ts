import { Menu } from "./typesDefinition"

const menuData: Menu[] = [
    {
        id: 1,
        name: "Features",
        link: "/features",
    },
    {
        id: 2,
        name: "Pricing",
        link: "/pricing"
    },
    {
        id: 3,
        name: "Resources",
        link: "/resources"
    },
]

const footerMenu: Menu[] = [
    {
        id: 1,
        name: "Features",
        link: "/features",
        child: [
            {
                id: 100,
                name: "Link Shortening",
                link: "/link shortening"
            },
            {
                id: 101,
                name: "Branded Link",
                link: "/branded link"
            },
            {
                id: 102,
                name: "Analytics",
                link: "/Analytics"
            }
        ]
    },
    {
        id: 2,
        name: "Pricing",
        link: "/pricing",
        child: [
            {
                id: 200,
                name: "Blog",
                link: "/Blog"
            },
            {
                id: 201,
                name: "Developers",
                link: "/Developers"
            },
            {
                id: 202,
                name: "Support",
                link: "/Support"
            },
        ]
    },
    {
        id: 3,
        name: "Resources",
        link: "/resources",
        child: [
            {
                id: 300,
                name: "About",
                link: "/About"
            },
            {
                id: 301,
                name: "Our Team",
                link: "/Our Team"
            },
            {
                id: 302,
                name: "Careers",
                link: "/Careers"
            },
            {
                id: 303,
                name: "Contacts",
                link: "/Contacts"
            },
        ]
    },
]

export { menuData, footerMenu }
