# Consignment Store Management Portal

A comprehensive multi-vendor consignment store management portal built with Next.js, TypeScript, and Tailwind CSS. This application provides separate interfaces for store employees and consignors to manage their business operations effectively.

## 🌟 Features

### 🔐 Role-Based Authentication
- **Admin Portal**: Complete store management capabilities
- **Employee Portal**: Daily operations and customer service
- **Consignor Portal**: Personal account and inventory management

### 👥 For Store Staff (Admin/Employee)
- **Dashboard**: Real-time metrics including sales, inventory, and consignor data
- **Consignor Management**: Comprehensive profiles with earnings, commission rates, and contact information
- **Inventory Management**: Advanced item tracking with search, filters, and status management
- **Sales Processing**: Transaction handling and commission calculations
- **Reporting**: Revenue analytics and performance tracking

### 🛍️ For Consignors
- **Personal Dashboard**: Earnings overview and account status
- **My Items**: Track submitted items and their current status
- **Sales History**: Detailed view of sold items and earnings
- **Earnings**: Commission tracking and payout history
- **Profile Management**: Update contact and payment information

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean interface with intuitive navigation
- **Real-time Search**: Instant filtering across all data views
- **Status Indicators**: Color-coded system for quick status recognition
- **Professional Layout**: Business-focused design for efficiency

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd replicator-nextjs-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Accounts

Test the application with these demo accounts:

| Role | Email | Password | Access Level |
|------|-------|----------|--------------|
| **Admin** | admin@store.com | password | Full system access |
| **Employee** | employee@store.com | password | Operational features |
| **Consignor** | consignor@example.com | password | Personal account |

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Role-specific dashboards
│   ├── consignors/        # Consignor management
│   └── inventory/         # Item management
├── components/            # Reusable UI components
│   ├── LoginPage.tsx      # Authentication interface
│   ├── Navigation.tsx     # Role-based navigation
│   └── ProtectedRoute.tsx # Route protection
├── data/                  # Mock data and utilities
├── lib/                   # Authentication logic
└── types/                 # TypeScript definitions
```

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Heroicons](https://heroicons.com/)** - Beautiful hand-crafted SVG icons

## 📊 Data Model

The application includes comprehensive TypeScript interfaces for:

- **Users**: Admin, Employee, and Consignor profiles
- **Items**: Detailed consignment item tracking
- **Sales**: Transaction processing and commission calculation
- **Commissions**: Earnings and payout management
- **Settings**: Store configuration and preferences

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Business Features

### Consignment Management
- Item intake and approval workflow
- Automated pricing and commission calculations
- Status tracking from intake to sale
- Consignor performance analytics

### Sales Operations
- Point-of-sale interface
- Multiple payment methods
- Automatic commission splits
- Customer transaction history

### Financial Management
- Commission rate configuration
- Automated payout calculations
- Financial reporting and analytics
- Tax documentation support

### Inventory Control
- Real-time item tracking
- Category and condition management
- Search and filtering capabilities
- Status workflow management

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com/):

```bash
npm install -g vercel
vercel
```

### Environment Variables
For production deployment, configure:
- Database connection strings
- Authentication providers
- Payment processor API keys
- Email service configuration

## 📈 Future Enhancements

- **Database Integration**: Replace mock data with real database
- **Payment Processing**: Integrate with Stripe/PayPal for transactions
- **Email Notifications**: Automated notifications for status changes
- **Image Upload**: Photo management for inventory items
- **Advanced Reporting**: PDF exports and detailed analytics
- **Mobile App**: React Native companion app
- **API Integration**: RESTful API for third-party integrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Heroicons for the beautiful icon set
- The open-source community for inspiration

---

**Ready to transform your consignment business? Get started today!** 🚀
