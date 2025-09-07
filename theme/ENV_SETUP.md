# Environment Variables Setup

Create a `.env.local` file in the `theme/` directory with the following variables:

## Required Variables

```bash
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/bodhify-tech
#ok
# JWT Secret (generate a secure random string)
JWT_SECRET=your-super-secret-jwt-key-here

# Email Configuration (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=admin@bodhify.tech

# Alternative: Resend API (recommended for production)
# RESEND_API_KEY=re_your_resend_api_key_here
```

## How to Get Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** → **2-Step Verification** (enable if not already)
3. Click **App passwords**
4. Select **Mail** → **Other (custom name)**
5. Type "Bodhify Website"
6. Copy the 16-character password (remove spaces)
7. Use this as your `EMAIL_PASS`

## Production Setup

For production, update these variables:

```bash
# Production MongoDB (MongoDB Atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bodhify-tech

# Production JWT Secret (use a strong random string)
JWT_SECRET=your-production-secret-key

# Production Email (Resend recommended)
RESEND_API_KEY=re_your_resend_api_key
EMAIL_FROM=admin@bodhify.tech
```

## Security Notes

- Never commit `.env.local` to version control
- Use strong, unique JWT secrets
- Enable 2FA on your email account
- Use MongoDB Atlas for production
- Consider using Resend for better email deliverability
