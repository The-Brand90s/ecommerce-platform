# E-Commerce Platform - Getting Started

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### 1. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local

# Update .env.local with your API URL and Stripe key

npm run dev
```

Frontend will be available at `http://localhost:3000`

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env

# Update .env with your database URL and API keys

# Setup database
npm run migrate

# Start development server
npm run dev
```

Backend API will be available at `http://localhost:5000`

## 📁 Project Structure

```
ecommerce-platform/
├── frontend/                    # Next.js application
│   ├── app/
│   │   ├── page.tsx            # Home page
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── products/           # Products page
│   │   ├── cart/               # Shopping cart
│   │   ├── checkout/           # Checkout
│   │   ├── orders/             # Order tracking
│   │   └── admin/              # Admin dashboard
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Footer.tsx          # Footer
│   │   └── ProductGrid.tsx     # Product listing
│   ├── lib/                    # Utilities and helpers
│   ├── public/                 # Static assets
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── tsconfig.json           # TypeScript config
│   └── package.json
│
├── backend/                     # Express.js API
│   ├── src/
│   │   ├── server.js           # Main server file
│   │   ├── routes/
│   │   │   ├── auth.js         # Authentication routes
│   │   │   ├── products.js     # Product routes
│   │   │   ├── cart.js         # Cart routes
│   │   │   ├── orders.js       # Order routes
│   │   │   ├── payments.js     # Payment routes
│   │   │   └── reviews.js      # Review routes
│   │   ├── middleware/
│   │   │   └── auth.js         # JWT authentication
│   │   └── utils/              # Utility functions
│   ├── prisma/
│   │   └── schema.prisma       # Database schema
│   ├── .env.example            # Environment variables template
│   └── package.json
│
└── README.md                    # This file
```

## 🔑 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_KEY=pk_test_your_key
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
SENDGRID_API_KEY=SG.your_key
NODE_ENV=development
PORT=5000
```

## 📚 Key Features

### Authentication
- User registration and login
- JWT token-based authentication
- Password hashing with bcrypt
- Refresh token mechanism

### Products
- Browse products by category
- Search and filter functionality
- Product details with reviews
- Rating system

### Shopping
- Add/remove from cart
- Wishlist management
- Real-time cart updates

### Checkout
- Secure Stripe payment processing
- PayPal integration (optional)
- Order confirmation
- Email notifications

### Admin
- Product management
- Order management
- User management
- Sales analytics

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Payments
- `POST /api/payments/stripe` - Create Stripe payment
- `POST /api/payments/stripe/webhook` - Stripe webhook

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm i -g vercel
vercel
```

### Backend (Railway)
```bash
railway link
railway up
```

## 🔒 Security Features

- JWT authentication
- Password hashing (bcrypt)
- CORS configuration
- Rate limiting
- SQL injection prevention (Prisma)
- XSS protection
- HTTPS in production

## 📦 Dependencies

### Frontend
- Next.js 14+
- React 18+
- Tailwind CSS 3+
- TypeScript 5+
- Axios for HTTP requests
- Stripe.js for payments

### Backend
- Express.js
- PostgreSQL
- Prisma ORM
- JWT
- bcryptjs
- Stripe API

## 🤝 Contributing

Feel free to fork and create pull requests for any improvements.

## 📄 License

MIT License - feel free to use for commercial projects.

---

**Built with ❤️ for world-class e-commerce**
