type LinkDataType = {
  label: string;
  href: string;
}[];
export const NavLinkData: LinkDataType = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "/security" },
  { label: "About",    href: "/about" },
  {label: "Login",     href: "/login" }
];



interface Activity {
  description: string;
  date: number; // Day of the month or a simple index
  amount: number;
}
export const activityData: Activity[] = [
  { description: 'Groceries', date: 1, amount: 150.00 },
  { description: 'Bills', date: 2, amount: 320.50 },
  { description: 'Swifty', date: 3, amount: 89.99 },
  { description: 'Entertainment', date: 4, amount: 45.00 },
];



interface Trend {
  category: string;
  value: number; // Used to calculate bar height
}
export const trendsData: Trend[] = [
  { category: 'Groceries', value: 45 },
  { category: 'Bills', value: 70 },
  { category: 'Rent', value: 95 },
  { category: 'Entertainment', value: 55 },
  { category: 'Shopping', value: 35 },
];



import { Home, UserRound, ArrowLeftRight, CreditCard, Settings,ArrowUpNarrowWide} from 'lucide-react';
export interface NavItem {
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  href: string;
};
export const LandingPageNavLink: NavItem[] = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Accounts', icon: UserRound, href: '/accounts' },
  { name: 'Transfers', icon: ArrowLeftRight, href: '/transfers' }, // This will be the initially active link
  { name: 'Payments', icon: CreditCard, href: '/payments' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];


export const DashPageNavLink: NavItem[] = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Accounts', icon: UserRound, href: '/accounts' },
  { name: 'Transfers', icon: ArrowLeftRight, href: '/transfers' }, // This will be the initially active link
  { name: 'Payments', icon: CreditCard, href: '/payments' },
  { name: "Analytics", icon: ArrowUpNarrowWide, href: '/analytics'},
  { name: 'Settings', icon: Settings, href: '/settings' },
];