# World-Class E-Commerce Platform

A modern, scalable e-commerce platform built with Next.js, React, TypeScript, and Node.js.

## 🚀 Features

### Frontend (Next.js + React)
- ⚡ Server-side rendering (SSR) for SEO optimization
- 📱 Fully responsive mobile-first design
- 🎨 Modern UI with Tailwind CSS
- 🔍 Advanced product search and filtering
- 🛒 Real-time shopping cart management
- ❤️ Wishlist functionality
- 👤 User authentication & profiles
- 📦 Order tracking
- ⭐ Product reviews and ratings
- 🌙 Dark mode support
- ⚡ Image optimization and lazy loading

### Backend (Node.js + Express)
- 🔐 Secure JWT authentication
- 💳 Stripe & PayPal payment integration
- 📊 Admin dashboard and analytics
- 🗄️ PostgreSQL database
- 📧 Email notifications
- 🔔 Real-time notifications
- 📈 Inventory management
- 👥 Multi-vendor support (optional)

### Database (PostgreSQL)
- Users and authentication
- Products and categories
- Orders and transactions
- Reviews and ratings
- Inventory tracking

## 📋 Tech Stack

**Frontend:**
- Next.js 14+ (React framework)
- TypeScript
- Tailwind CSS
- Redux Toolkit (state management)
- Axios (HTTP client)
- Stripe.js (payment processing)

**Backend:**
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT (authentication)
- Stripe API
- SendGrid (email)

**Deployment:**
- Vercel (Frontend)
- Railway/Heroku (Backend)
- AWS S3 (Image storage)

## 🎯 Project Structure

```
ecommerce-platform/
├── frontend/                 # Next.js application
│   ├── app/
│   │   ├── page.tsx
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── orders/
│   │   └── admin/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
├── backend/                  # Express.js API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.js
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm run migrate
npm run dev
```

## 🔑 Environment Variables

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
```

**Backend (.env):**
```
DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
SENDGRID_API_KEY=your_sendgrid_key
```

## 📖 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (admin)

### Reviews
- `GET /api/products/:id/reviews` - Get product reviews
- `POST /api/products/:id/reviews` - Create review

## 💳 Payment Integration

**Stripe Integration:**
- Secure payment processing
- Webhook handling for payment confirmations
- Refund management

**PayPal Integration:**
- PayPal Checkout
- Subscription support

## 📊 Admin Dashboard

- Product management (CRUD)
- Order management
- User management
- Sales analytics
- Inventory tracking
- Revenue reports

## 🔒 Security Features

- JWT authentication
- Password hashing (bcrypt)
- SQL injection prevention (Prisma ORM)
- XSS protection
- CORS configuration
- Rate limiting
- HTTPS only in production

## 🚀 Deployment

**Frontend (Vercel):**
```bash
vercel deploy
```

**Backend (Railway):**
```bash
railway link
railway deploy
```

## 📞 Support

For issues and feature requests, please open an issue on GitHub.

## 📄 License

MIT License - feel free to use this project for commercial purposes.

---

**Built with ❤️ for world-class e-commerce**
