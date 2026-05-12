import Link from 'next/link';


// Custom NavLink component to handle styling and interactivity
const LanLinks = ({ name, icon: Icon, href, isActive, onClick, routeED = false }) => (
  
  <Link
    href={href}
    onClick={(e) => {
      if (routeED){
        e.preventDefault(); // Prevent actual navigation
      }
      onClick(name); // Update active state
      
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
  </Link>
);

export default LanLinks