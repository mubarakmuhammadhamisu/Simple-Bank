import { Home, UserRound, ArrowLeftRight, CreditCard, Settings } from 'lucide-react';

// Define the navigation items
export const navItems = [
  { name: 'Dashboard', icon: Home, route: '/dashboard' },
  { name: 'Accounts', icon: UserRound, route: '/accounts' },
  { name: 'Transfers', icon: ArrowLeftRight, route: '/transfers' }, // This will be the initially active link
  { name: 'Payments', icon: CreditCard, route: '/payments' },
  { name: 'Settings', icon: Settings, route: '/settings' },
];

// Custom NavLink component to handle styling and interactivity
const LanLinks = ({ name, icon: Icon, route, isActive, onClick }) => (
  <a
    href={route}
    onClick={(e) => {
      e.preventDefault(); // Prevent actual navigation for this demo
      onClick(name);
    }}
    className={`
      flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-300
      text-base font-medium
      ${isActive
        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/50'
        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
      }transform hover:scale-[1.02]
      `}>
    <Icon size={20} strokeWidth={1.5} />
    <span>{name}</span>
  </a>
);

export default LanLinks