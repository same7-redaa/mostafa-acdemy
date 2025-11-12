# ⚠️ مشكلة نظام الحجز - الحل

## المشكلة
❌ التسجيل يفشل
❌ لوحة التحكم لا تظهر بيانات

## السبب
🔒 قواعد Firebase Firestore تمنع الكتابة

## الحل (5 دقائق)

### افتح الملف: `FIRESTORE-SETUP.md`
**أو اتبع هذه الخطوات:**

1. **اذهب إلى:** https://console.firebase.google.com/project/mostafa-acdemy/firestore

2. **اضغط على تبويب "Rules"**

3. **الصق هذا الكود:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{booking} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

4. **اضغط "Publish"**

5. **ارجع للموقع واختبر** ✅

---

## روابط سريعة

- 🌐 الموقع: http://localhost:3001/mostafa-acdemy/
- 🎛️ لوحة التحكم: http://localhost:3001/mostafa-acdemy/admin.html
- 🔥 Firebase Console: https://console.firebase.google.com/project/mostafa-acdemy/firestore

---

## ملفات التعليمات

- `FIRESTORE-SETUP.md` - شرح مفصل خطوة بخطوة
- `BOOKING-SYSTEM.md` - توثيق كامل للنظام
- `QUICK-START.md` - دليل سريع للاستخدام

---

## الآن الموقع يعمل على المنفذ 3001
استخدم هذه الروابط:
- http://localhost:3001/mostafa-acdemy/
- http://localhost:3001/mostafa-acdemy/admin.html
