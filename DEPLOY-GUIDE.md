# دليل رفع الموقع على GitHub و Vercel

## خطوات الرفع على GitHub

### 1. تجهيز المشروع
```bash
# التأكد من تثبيت المكتبات
npm install

# بناء المشروع
npm run build
```

### 2. رفع على GitHub
```bash
# تهيئة Git (إذا لم يتم بعد)
git init

# إضافة جميع الملفات
git add .

# حفظ التغييرات
git commit -m "Initial commit - Mostafa Academy Website"

# ربط بـ GitHub
git remote add origin https://github.com/YOUR_USERNAME/mostafa-academy.git

# رفع الملفات
git push -u origin main
```

## خطوات النشر على Vercel

### الطريقة الأولى: استيراد من GitHub (موصى بها)

1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط "Import Project"
3. اختر مستودع GitHub الخاص بك
4. Vercel سيكتشف تلقائياً أنه مشروع Vite
5. تأكد من الإعدادات:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### إضافة متغيرات البيئة في Vercel

في لوحة تحكم Vercel > Project Settings > Environment Variables، أضف:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
GEMINI_API_KEY=your_gemini_key
```

### 6. انشر الموقع
اضغط "Deploy" وانتظر حتى يكتمل النشر

## الملفات المضمنة

✅ **جميع الصور والفيديوهات موجودة في:**
- `public/` - جميع الصور والفيديوهات
- `public/اراء/` - صور الآراء والتقييمات
- `logos/` - الشعارات

✅ **الملفات المهمة:**
- `index.html` - الصفحة الرئيسية
- `admin.html` - لوحة التحكم
- `firebase.ts` - إعدادات Firebase
- `components/` - جميع المكونات
- `vercel.json` - إعدادات Vercel

## ملاحظات مهمة

⚠️ **لا تنسَ:**
1. استبدال متغيرات Firebase في ملف `.env.local`
2. إضافة نطاق Vercel إلى Firebase Authentication Authorized Domains
3. تحديث Firebase Storage Rules إذا لزم الأمر

✨ **التصميم:**
- جميع التصاميم محفوظة كما هي
- الصور والفيديوهات موجودة
- الأداء محسّن (eager loading)

🔒 **الأمان:**
- ملف `.env.local` غير مرفوع (محمي في .gitignore)
- يجب إضافة متغيرات البيئة يدوياً في Vercel

## روابط مفيدة

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Firebase Console](https://console.firebase.google.com/)
