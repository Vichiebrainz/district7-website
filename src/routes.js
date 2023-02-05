import { BsFillHandThumbsUpFill, BsPatchExclamationFill } from "react-icons/bs";
import { FaBell, FaUnlock } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard, MdTravelExplore, MdSettings, MdCreate, MdConnectWithoutContact } from "react-icons/md";


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
        icon: MdConnectWithoutContact,
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
        to: "dashboard",
        icon: MdDashboard,
    },
    {
        name: "Post",
        to: "posts",
        icon: MdCreate,
    },
    {
        name: "Orders",
        to: "orders",
        icon: MdCreate,
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
        name: "Connect",
        to: "connect",
        icon: MdConnectWithoutContact,
    },
    {
        name: "Settings",
        to: "settings",
        icon: MdSettings,
    },
];

export const settingsRoutes = [
    {
        name: "Liked Apartments",
        to: "liked",
        icon: BsFillHandThumbsUpFill,
    },
    {
        name: "Notification setting",
        to: "notifications",
        icon: FaBell,
    },
    {
        name: "Password setting",
        to: "password",
        icon: FaUnlock,
    },
    {
        name: "Report",
        to: "report",
        icon: BsPatchExclamationFill,
    },
    {
        name: "Logout",
        to: "logout",
        icon: IoLogOut,
    },

];