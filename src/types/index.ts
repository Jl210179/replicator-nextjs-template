// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  address?: Address;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'employee' | 'consignor';

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Consignor Types
export interface Consignor extends User {
  role: 'consignor';
  taxId?: string;
  commissionRate: number; // Percentage (e.g., 60 for 60%)
  paymentInfo?: PaymentInfo;
  isActive: boolean;
  totalEarnings: number;
  totalItemsSold: number;
  totalItemsActive: number;
}

export interface PaymentInfo {
  method: 'check' | 'bank_transfer' | 'paypal';
  details: {
    accountNumber?: string;
    routingNumber?: string;
    paypalEmail?: string;
    checkPayableTo?: string;
  };
}

// Item Types
export interface Item {
  id: string;
  consignorId: string;
  title: string;
  description: string;
  category: ItemCategory;
  brand?: string;
  size?: string;
  color?: string;
  condition: ItemCondition;
  originalPrice?: number;
  consignmentPrice: number;
  finalPrice?: number; // Actual selling price
  images: string[];
  status: ItemStatus;
  tags: string[];
  dateReceived: Date;
  dateSold?: Date;
  soldBy?: string; // Employee ID who made the sale
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ItemCategory = 
  | 'clothing' 
  | 'shoes' 
  | 'accessories' 
  | 'home_decor' 
  | 'furniture' 
  | 'electronics' 
  | 'books' 
  | 'toys' 
  | 'sports' 
  | 'jewelry' 
  | 'art' 
  | 'other';

export type ItemCondition = 'excellent' | 'good' | 'fair' | 'poor';

export type ItemStatus = 
  | 'pending_approval' 
  | 'approved' 
  | 'on_floor' 
  | 'sold' 
  | 'returned' 
  | 'donated' 
  | 'discounted';

// Sale Types
export interface Sale {
  id: string;
  items: SaleItem[];
  totalAmount: number;
  taxAmount: number;
  finalAmount: number;
  paymentMethod: PaymentMethod;
  employeeId: string;
  customerId?: string; // Optional customer info
  customerEmail?: string;
  discount?: Discount;
  saleDate: Date;
  createdAt: Date;
}

export interface SaleItem {
  itemId: string;
  item: Item;
  salePrice: number;
  consignorCommission: number;
  storeCommission: number;
}

export type PaymentMethod = 'cash' | 'credit_card' | 'debit_card' | 'check' | 'store_credit';

export interface Discount {
  type: 'percentage' | 'fixed_amount';
  value: number;
  reason?: string;
}

// Commission and Payout Types
export interface CommissionRecord {
  id: string;
  consignorId: string;
  saleId: string;
  itemId: string;
  saleAmount: number;
  commissionRate: number;
  commissionAmount: number;
  status: 'pending' | 'paid' | 'disputed';
  payoutId?: string;
  createdAt: Date;
}

export interface Payout {
  id: string;
  consignorId: string;
  amount: number;
  paymentMethod: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  commissionRecords: string[]; // Array of commission record IDs
  paymentDate?: Date;
  notes?: string;
  createdAt: Date;
}

// Settings and Configuration
export interface StoreSettings {
  storeName: string;
  address: Address;
  phone: string;
  email: string;
  taxRate: number;
  defaultCommissionRate: number;
  itemRetentionPeriod: number; // Days before items are returned/donated
  discountSchedule: DiscountSchedule[];
}

export interface DiscountSchedule {
  daysOnFloor: number;
  discountPercentage: number;
}

// Dashboard and Analytics Types
export interface DashboardMetrics {
  totalSales: number;
  totalItems: number;
  activeConsignors: number;
  pendingPayouts: number;
  recentSales: Sale[];
  topCategories: { category: string; count: number; revenue: number }[];
  monthlyRevenue: { month: string; revenue: number }[];
}

export interface ConsignorMetrics {
  totalEarnings: number;
  totalItemsSold: number;
  activeItems: number;
  pendingCommission: number;
  recentSales: Sale[];
  topCategories: { category: string; count: number; earnings: number }[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Form Types
export interface ItemFormData {
  title: string;
  description: string;
  category: ItemCategory;
  brand?: string;
  size?: string;
  color?: string;
  condition: ItemCondition;
  consignmentPrice: number;
  originalPrice?: number;
  tags: string[];
  images: File[];
}

export interface ConsignorFormData {
  name: string;
  email: string;
  phone?: string;
  address?: Address;
  commissionRate?: number;
  paymentInfo?: PaymentInfo;
  taxId?: string;
}