'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { mockConsignors } from '@/data/mockData';
import { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function ConsignorsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConsignors = mockConsignors.filter(consignor =>
    consignor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consignor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <ProtectedRoute allowedRoles={['admin', 'employee']}>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Consignors</h1>
            <p className="text-gray-600 mt-2">
              Manage consignor accounts and relationships
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Consignor
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search consignors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Consignors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConsignors.map((consignor) => (
            <div key={consignor.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{consignor.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    consignor.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {consignor.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  {consignor.email}
                </div>
                {consignor.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {consignor.phone}
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Total Earnings</p>
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(consignor.totalEarnings)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Items Sold</p>
                    <p className="font-semibold text-gray-900">
                      {consignor.totalItemsSold}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Active Items</p>
                    <p className="font-semibold text-gray-900">
                      {consignor.totalItemsActive}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Commission Rate</p>
                    <p className="font-semibold text-gray-900">
                      {consignor.commissionRate}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-100">
                    View Details
                  </button>
                  <button className="flex-1 bg-gray-50 text-gray-600 px-3 py-2 rounded text-sm hover:bg-gray-100">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredConsignors.length === 0 && (
          <div className="text-center py-12">
            <UserIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No consignors found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or add a new consignor.
            </p>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}