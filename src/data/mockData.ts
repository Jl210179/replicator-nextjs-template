import { 
  Consignor, 
  Item, 
  Sale, 
  DashboardMetrics, 
  ConsignorMetrics,
  ItemCategory,
  ItemStatus 
} from '@/types';

// Mock data for demo purposes
export const mockConsignors: Consignor[] = [
  {
    id: '3',
    email: 'john.smith@example.com',
    name: 'John Smith',
    role: 'consignor',
    phone: '(555) 123-4567',
    commissionRate: 60,
    isActive: true,
    totalEarnings: 1250.75,
    totalItemsSold: 15,
    totalItemsActive: 8,
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62701',
      country: 'USA'
    },
    paymentInfo: {
      method: 'check',
      details: {
        checkPayableTo: 'John Smith'
      }
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-09-15'),
  },
  {
    id: '4',
    email: 'sarah.johnson@example.com',
    name: 'Sarah Johnson',
    role: 'consignor',
    phone: '(555) 987-6543',
    commissionRate: 55,
    isActive: true,
    totalEarnings: 2100.50,
    totalItemsSold: 28,
    totalItemsActive: 12,
    address: {
      street: '456 Oak Ave',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62702',
      country: 'USA'
    },
    paymentInfo: {
      method: 'bank_transfer',
      details: {
        accountNumber: '*****6789',
        routingNumber: '123456789'
      }
    },
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-09-16'),
  }
];

export const mockItems: Item[] = [
  {
    id: 'item_1',
    consignorId: '3',
    title: 'Designer Leather Handbag',
    description: 'Beautiful vintage leather handbag in excellent condition',
    category: 'accessories',
    brand: 'Coach',
    color: 'Brown',
    condition: 'excellent',
    originalPrice: 350,
    consignmentPrice: 125,
    images: ['/api/placeholder/300/300'],
    status: 'on_floor',
    tags: ['vintage', 'leather', 'designer'],
    dateReceived: new Date('2024-09-01'),
    notes: 'Minor scuff on bottom, otherwise excellent',
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-09-01'),
  },
  {
    id: 'item_2',
    consignorId: '3',
    title: 'Antique Wooden Coffee Table',
    description: 'Solid oak coffee table with intricate carvings',
    category: 'furniture',
    brand: 'Handmade',
    condition: 'good',
    originalPrice: 800,
    consignmentPrice: 275,
    finalPrice: 275,
    images: ['/api/placeholder/300/300'],
    status: 'sold',
    tags: ['antique', 'wood', 'handmade'],
    dateReceived: new Date('2024-08-15'),
    dateSold: new Date('2024-09-10'),
    soldBy: '2',
    createdAt: new Date('2024-08-15'),
    updatedAt: new Date('2024-09-10'),
  },
  {
    id: 'item_3',
    consignorId: '4',
    title: 'Evening Gown - Size 8',
    description: 'Elegant black evening gown, worn once',
    category: 'clothing',
    brand: 'Vera Wang',
    size: '8',
    color: 'Black',
    condition: 'excellent',
    originalPrice: 450,
    consignmentPrice: 150,
    images: ['/api/placeholder/300/300'],
    status: 'approved',
    tags: ['formal', 'designer', 'evening'],
    dateReceived: new Date('2024-09-12'),
    createdAt: new Date('2024-09-12'),
    updatedAt: new Date('2024-09-14'),
  }
];

export const mockSales: Sale[] = [
  {
    id: 'sale_1',
    items: [
      {
        itemId: 'item_2',
        item: mockItems[1],
        salePrice: 275,
        consignorCommission: 165, // 60% of 275
        storeCommission: 110, // 40% of 275
      }
    ],
    totalAmount: 275,
    taxAmount: 22,
    finalAmount: 297,
    paymentMethod: 'credit_card',
    employeeId: '2',
    saleDate: new Date('2024-09-10'),
    createdAt: new Date('2024-09-10'),
  }
];

export const mockDashboardMetrics: DashboardMetrics = {
  totalSales: 15420.75,
  totalItems: 156,
  activeConsignors: 24,
  pendingPayouts: 3420.50,
  recentSales: mockSales,
  topCategories: [
    { category: 'clothing', count: 45, revenue: 6750.25 },
    { category: 'accessories', count: 32, revenue: 3890.50 },
    { category: 'furniture', count: 18, revenue: 2980.00 },
    { category: 'home_decor', count: 25, revenue: 1800.00 },
  ],
  monthlyRevenue: [
    { month: 'Jan', revenue: 8500 },
    { month: 'Feb', revenue: 9200 },
    { month: 'Mar', revenue: 7800 },
    { month: 'Apr', revenue: 11200 },
    { month: 'May', revenue: 10500 },
    { month: 'Jun', revenue: 12800 },
    { month: 'Jul', revenue: 13500 },
    { month: 'Aug', revenue: 14200 },
    { month: 'Sep', revenue: 15400 },
  ],
};

export const mockConsignorMetrics: ConsignorMetrics = {
  totalEarnings: 1250.75,
  totalItemsSold: 15,
  activeItems: 8,
  pendingCommission: 320.50,
  recentSales: mockSales,
  topCategories: [
    { category: 'accessories', count: 8, earnings: 480.25 },
    { category: 'furniture', count: 4, earnings: 420.00 },
    { category: 'clothing', count: 3, earnings: 350.50 },
  ],
};

// Helper functions for generating mock data
export function getItemsByConsignor(consignorId: string): Item[] {
  return mockItems.filter(item => item.consignorId === consignorId);
}

export function getItemsByStatus(status: ItemStatus): Item[] {
  return mockItems.filter(item => item.status === status);
}

export function getItemsByCategory(category: ItemCategory): Item[] {
  return mockItems.filter(item => item.category === category);
}

export function calculateCommission(salePrice: number, commissionRate: number): number {
  return Math.round(salePrice * (commissionRate / 100) * 100) / 100;
}