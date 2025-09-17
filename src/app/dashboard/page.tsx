'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/lib/auth';
import { mockDashboardMetrics, mockConsignorMetrics } from '@/data/mockData';
import { 
  UsersIcon, 
  ShoppingBagIcon, 
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { user } = useAuth();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const renderEmployeeDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Sales</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(mockDashboardMetrics.totalSales)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <ShoppingBagIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Items</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockDashboardMetrics.totalItems}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <UsersIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Consignors</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockDashboardMetrics.activeConsignors}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <ClockIcon className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Payouts</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(mockDashboardMetrics.pendingPayouts)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Categories</h3>
          <div className="space-y-3">
            {mockDashboardMetrics.topCategories.map((category) => (
              <div key={category.category} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 capitalize">
                  {category.category.replace('_', ' ')}
                </span>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(category.revenue)}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({category.count} items)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Sales</h3>
          <div className="space-y-3">
            {mockDashboardMetrics.recentSales.map((sale) => (
              <div key={sale.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Sale #{sale.id.slice(-6)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {sale.items.length} item(s)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {formatCurrency(sale.finalAmount)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {sale.saleDate.toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderConsignorDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Earnings</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(mockConsignorMetrics.totalEarnings)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <ShoppingBagIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Items Sold</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockConsignorMetrics.totalItemsSold}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <ArrowTrendingUpIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Items</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockConsignorMetrics.activeItems}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <ClockIcon className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Commission</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(mockConsignorMetrics.pendingCommission)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">My Top Categories</h3>
          <div className="space-y-3">
            {mockConsignorMetrics.topCategories.map((category) => (
              <div key={category.category} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 capitalize">
                  {category.category.replace('_', ' ')}
                </span>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(category.earnings)}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({category.count} items)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Sales</h3>
          <div className="space-y-3">
            {mockConsignorMetrics.recentSales.map((sale) => (
              <div key={sale.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Sale #{sale.id.slice(-6)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {sale.items.length} item(s)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {formatCurrency(sale.finalAmount)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {sale.saleDate.toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ProtectedRoute>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here&apos;s what&apos;s happening in your {user?.role === 'consignor' ? 'account' : 'store'} today.
          </p>
        </div>

        {user?.role === 'consignor' ? renderConsignorDashboard() : renderEmployeeDashboard()}
      </div>
    </ProtectedRoute>
  );
}