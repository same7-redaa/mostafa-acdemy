# 📤 تعليمات رفع الموقع إلى GitHub ثم Vercel

## ✅ الطريقة الأولى: استخدام GitHub Desktop (الأسهل)

### 1️⃣ تثبيت GitHub Desktop:
- حمّل GitHub Desktop من: https://desktop.github.com/
- ثبّت البرنامج وسجّل الدخول بحسابك

### 2️⃣ رفع المشروع:
1. افتح GitHub Desktop
2. اضغط على **File** → **Add Local Repository**
3. اختر المجلد: `D:\مواقع\mostafa acdemy`
4. إذا ظهرت رسالة "not a git repository"، اضغط **Initialize**
5. اكتب Commit Message: "Initial commit - Full website with all features"
6. اضغط **Commit to main**
7. اضغط **Publish Repository**
8. سمّي الريبو: `mostafa2`
9. **أزل علامة ✓ من "Keep this code private"** (حتى يكون public)
10. اضغط **Publish Repository**

### 3️⃣ ربط GitHub بـ Vercel:
1. اذهب إلى: https://vercel.com/
2. سجل دخول بحساب GitHub
3. اضغط **Add New** → **Project**
4. اختر `mostafa2` من القائمة
5. اضغط **Import**
6. **Framework Preset:** Vite
7. **Build Command:** `npm run build`
8. **Output Directory:** `dist`
9. اضغط **Deploy**

---

## ✅ الطريقة الثانية: تثبيت Git ثم الرفع

### 1️⃣ تثبيت Git:
- حمّل Git من: https://git-scm.com/download/win
- ثبّت البرنامج بالإعدادات الافتراضية
- أعد فتح PowerShell

### 2️⃣ أوامر الرفع:
```powershell
cd "D:\مواقع\mostafa acdemy"

# تهيئة Git
git init
git add .
git commit -m "Initial commit - Full website with all features"

# ربط GitHub
git remote add origin https://github.com/same7-redaa/mostafa2.git
git branch -M main
git push -u origin main
```

### 3️⃣ في حالة طلب تسجيل دخول:
- Username: اسم حسابك في GitHub
- Password: استخدم **Personal Access Token** (ليس كلمة المرور)
  - اذهب إلى: https://github.com/settings/tokens
  - **Generate new token** → **Classic**
  - اختر Scopes: `repo`
  - انسخ الـ Token واستخدمه كـ Password

---

## 📋 ملفات تم تجهيزها للرفع:

✅ جميع ملفات HTML
✅ جميع مكونات React (Components)
✅ جميع الصور والفيديوهات
✅ Firebase Config
✅ Firestore Rules
✅ package.json و dependencies
✅ Vite Config
✅ Tailwind Config
✅ SEO Files (sitemap.xml, robots.txt)
✅ Manifest.json
✅ Documentation Files

---

## ⚙️ إعدادات Vercel المهمة:

عند الرفع على Vercel، تأكد من:

1. **Framework:** Vite
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install`
5. **Node Version:** 18.x أو أحدث

### Environment Variables في Vercel:
لا تنسى إضافة Firebase Config في **Environment Variables**:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🔥 بعد النشر:

1. انسخ رابط الموقع من Vercel
2. حدّث الـ SEO URLs في `index.html`
3. حدّث `sitemap.xml` بالرابط الجديد
4. ارفع التحديثات مرة أخرى

---

## 📞 للدعم:
إذا واجهت أي مشكلة، تواصل مع سامح رضا (المطور)
WhatsApp: 01023160657
