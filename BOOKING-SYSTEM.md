# نظام الحجز ولوحة التحكم

## نظرة عامة
تم إضافة نظام حجز متكامل مع Firebase وlوحة تحكم لإدارة الحجوزات.

## الميزات

### 1. نموذج الحجز (BookingForm)
- **موقع الظهور:**
  - عند الضغط على "احصل على حصة مجانية" في صفحة Hero
  - عند الضغط على "اشترك الآن" في أي باقة من الباقات
  - عند الضغط على "انضم لمجموعة الآن" في قسم باقات المجموعات

- **الحقول:**
  - الاسم الكامل (إلزامي)
  - رقم الهاتف (إلزامي)
  - رقم الواتساب (إلزامي)
  - عدد الطلاب (لباقات المجموعات فقط، من 3-7)
  - اسم الباقة (يتم ملؤه تلقائياً)
  - السعر (يظهر تلقائياً)

- **الأزرار:**
  - زر "احجز الآن": لإرسال البيانات
  - زر "واتساب": للتواصل المباشر عبر واتساب
  
- **بعد الإرسال:**
  - رسالة نجاح مع أيقونة ✓
  - زر واتساب للتواصل الفوري

### 2. لوحة التحكم (Admin Dashboard)
- **الوصول:** `/admin.html` أو `/mostafa-acdemy/admin.html`
- **الميزات:**
  - عرض جميع الحجوزات في الوقت الفعلي
  - إحصائيات (إجمالي - قيد الانتظار - مؤكدة - ملغية)
  - فلترة الحجوزات حسب الحالة
  - تحديث حالة الحجز (قيد الانتظار / مؤكد / ملغي)
  - حذف الحجز
  - زر واتساب للتواصل مباشرة مع العميل

## التكوين

### Firebase
تم تكوين Firebase في ملف `firebase.ts`:
```typescript
const firebaseConfig = {
  apiKey: "AIzaSyA62WmynwViepDYBMDLsTqiX6yoZcUteBU",
  authDomain: "mostafa-acdemy.firebaseapp.com",
  projectId: "mostafa-acdemy",
  // ...
};
```

### قاعدة البيانات
- **Collection:** `bookings`
- **الحقول:**
  - `name`: اسم العميل
  - `phone`: رقم الهاتف
  - `whatsapp`: رقم الواتساب
  - `packageName`: اسم الباقة
  - `priceEGP`: السعر بالجنيه
  - `priceUSD`: السعر بالدولار
  - `packageType`: individual أو group
  - `studentCount`: عدد الطلاب (للمجموعات)
  - `status`: pending / confirmed / cancelled
  - `createdAt`: تاريخ ووقت الحجز

## رقم الواتساب
يمكن تغيير رقم الواتساب من ملف `BookingForm.tsx`:
```typescript
const whatsappNumber = '201066660096'; // غير هذا الرقم
```

## التشغيل

### Development
```bash
npm run dev
```
- الموقع الرئيسي: `http://localhost:3000/mostafa-acdemy/`
- لوحة التحكم: `http://localhost:3000/mostafa-acdemy/admin.html`

### Build
```bash
npm run build
```

## الأمان
⚠️ **مهم:** لوحة التحكم حالياً غير محمية بكلمة مرور. يُنصح بإضافة:
1. نظام مصادقة (Authentication)
2. حماية صفحة الـ Admin
3. قواعد الأمان في Firebase Firestore

## Firebase Security Rules
يُنصح بإضافة القواعد التالية في Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // السماح بالقراءة والكتابة للحجوزات
    match /bookings/{booking} {
      allow create: if true; // السماح للجميع بإنشاء حجز
      allow read, update, delete: if request.auth != null; // فقط للمستخدمين المصادقين
    }
  }
}
```

## الملفات المضافة
- `firebase.ts` - تكوين Firebase
- `components/BookingForm.tsx` - نموذج الحجز
- `components/AdminDashboard.tsx` - لوحة التحكم
- `admin.tsx` - Entry point للوحة التحكم
- `admin.html` - صفحة HTML للوحة التحكم

## الملفات المعدلة
- `components/Packages.tsx` - إضافة نموذج الحجز للباقات
- `components/Hero.tsx` - إضافة نموذج الحجز للحصة المجانية
- `vite.config.ts` - إضافة صفحة admin
- `package.json` - إضافة Firebase dependency
