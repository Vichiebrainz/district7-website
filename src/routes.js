import { MdDashboard, MdTravelExplore, MdSettings } from "react-icons/md";


export const userSideBarRoutes = [
    {
        name: "Dashboard",
        to: "dashboard",
        icon: MdDashboard,
    },
    {
        name: "Explore",
        to: "explore",
        icon: MdTravelExplore,
    },
    {
        name: "Connect",
        to: "connect",
        icon: MdTravelExplore,
    },
    {
        name: "Settings",
        to: "settings?tab=password",
        icon: MdSettings,
    },
];

export const landlordSideBarRoutes = [
    {
        name: "Dashboard",
        to: "/landlord",
        icon: MdDashboard,
    },
    {
        name: "Post",
        to: "posts",
        icon: MdTravelExplore,
    },
    {
        name: "Orders",
        to: "orders",
        icon: MdTravelExplore,
    },
    {
        name: "Settings",
        to: "settings",
        icon: MdSettings,
    },
];

export const BottomBarRoutes = [
    {
        name: "Dashboard",
        to: "dashboard",
        icon: MdDashboard,
    },
    {
        name: "Explore",
        to: "explore",
        icon: MdTravelExplore,
    },
    {
        name: "Notification",
        to: "settings?tab=password",
        icon: MdSettings,
    },
    {
        name: "Connect",
        to: "connect",
        icon: MdTravelExplore,
    },

];