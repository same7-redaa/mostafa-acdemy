# 🔒 Security Configuration Guide

## Environment Variables Setup

This project uses environment variables to secure sensitive Firebase configuration.

### For Local Development:
1. Create a `.env.local` file in the root directory
2. Copy the content from `.env.example`
3. Replace the placeholder values with your actual Firebase config

### For Vercel Deployment:
Add these environment variables in Vercel dashboard:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

## Firebase Security Rules

The project includes Firestore security rules in `firestore.rules`. Make sure to deploy them:

```bash
firebase deploy --only firestore:rules
```

## Admin Access

Admin credentials are protected. See the project owner for access details.

## Important Security Notes

⚠️ **Never commit:**
- `.env.local` file
- Admin passwords
- Firebase service account keys
- Any sensitive credentials

✅ **Always commit:**
- `.env.example` (with placeholder values)
- `firestore.rules` (security rules)
- Public configuration files

## Deployed Site Protection

1. **Firestore Rules**: Only authenticated admins can write data
2. **Environment Variables**: Sensitive config stored securely in Vercel
3. **HTTPS Only**: All traffic encrypted
4. **Domain Security**: Configure allowed domains in Firebase console

---

For questions contact: samehabdealsalam@gmail.com
