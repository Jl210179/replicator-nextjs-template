'use client';

import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UsersIcon, 
  ShoppingBagIcon, 
  ChartBarIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function Navigation() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const getNavigationItems = () => {
    switch (user.role) {
      case 'admin':
        return [
          { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
          { name: 'Consignors', href: '/consignors', icon: UsersIcon },
          { name: 'Inventory', href: '/inventory', icon: ShoppingBagIcon },
          { name: 'Sales', href: '/sales', icon: ChartBarIcon },
          { name: 'Payouts', href: '/payouts', icon: CurrencyDollarIcon },
          { name: 'Reports', href: '/reports', icon: ClipboardDocumentListIcon },
          { name: 'Settings', href: '/settings', icon: CogIcon },
        ];
      case 'employee':
        return [
          { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
          { name: 'Consignors', href: '/consignors', icon: UsersIcon },
          { name: 'Inventory', href: '/inventory', icon: ShoppingBagIcon },
          { name: 'Sales', href: '/sales', icon: ChartBarIcon },
          { name: 'Payouts', href: '/payouts', icon: CurrencyDollarIcon },
        ];
      case 'consignor':
        return [
          { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
          { name: 'My Items', href: '/my-items', icon: ShoppingBagIcon },
          { name: 'Sales History', href: '/sales-history', icon: ChartBarIcon },
          { name: 'Earnings', href: '/earnings', icon: CurrencyDollarIcon },
          { name: 'Profile', href: '/profile', icon: UserIcon },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className="bg-white shadow-sm border-r border-gray-200 w-64 min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">
          Consignment Store
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal
        </p>
      </div>

      <div className="px-4">
        <div className="mb-6">
          <div className="flex items-center px-2 py-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>

        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}