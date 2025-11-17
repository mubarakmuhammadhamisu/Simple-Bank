type LinkDataType = {
  label: string;
  href: string;
}[];
export const NavLinkData: LinkDataType = [
  { label: "Features", href: "/features" },
  { label: "Security", href: "/security" },
  { label: "About",    href: "/test" },
  {label: "Login",     href: "/login" }
];


interface Activity {
  description: string;
  date: number; // Day of the month or a simple index
  amount: number;
}

interface Trend {
  category: string;
  value: number; // Used to calculate bar height
}

// --- 2. Mock Data ---

export const activityData: Activity[] = [
  { description: 'Groceries', date: 1, amount: 150.00 },
  { description: 'Bills', date: 2, amount: 320.50 },
  { description: 'Swifty', date: 3, amount: 89.99 },
  // Adding a few more for better visualization
  { description: 'Entertainment', date: 4, amount: 45.00 },
];

export const trendsData: Trend[] = [
  { category: 'Groceries', value: 45 },
  { category: 'Bills', value: 70 },
  { category: 'Rent', value: 95 },
  { category: 'Entertainment', value: 55 },
  { category: 'Shopping', value: 35 },
];
