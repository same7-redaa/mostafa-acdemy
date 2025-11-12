# إعداد Firebase Firestore - خطوة بخطوة

## المشكلة الحالية
إذا كانت الحجوزات لا تعمل والرسالة تقول "فشل"، فالسبب هو قواعد Firestore التي تمنع الكتابة.

## الحل: إعداد قواعد Firestore

### الخطوة 1: الذهاب إلى Firebase Console
1. افتح: https://console.firebase.google.com/
2. اختر مشروع: **mostafa-acdemy**

### الخطوة 2: الذهاب إلى Firestore Database
1. من القائمة الجانبية، اضغط على **"Firestore Database"**
2. إذا لم يكن موجوداً، اضغط **"Create database"**
   - اختر **Production mode**
   - اختر Location: **asia-south1** أو الأقرب لك

### الخطوة 3: تفعيل Authentication
1. من القائمة الجانبية، اضغط على **"Authentication"**
2. اضغط **"Get started"**
3. اختر **"Email/Password"**
4. فعّل **"Email/Password"** واضغط **"Save"**
5. اذهب لتبويب **"Users"**
6. اضغط **"Add user"**
7. أدخل:
   - Email: `admin@mostafa-acdemy.com` (أو أي بريد تريده)
   - Password: اختر كلمة مرور قوية
8. اضغط **"Add user"**

### الخطوة 4: تحديث قواعد Firestore
1. من القائمة الجانبية، اضغط على **"Firestore Database"**
2. اضغط على تبويب **"Rules"** في الأعلى
3. احذف القواعد الموجودة
4. الصق هذه القواعد:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // الحجوزات العادية
    match /bookings/{booking} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // طلبات الإجازة
    match /ijazah-applications/{application} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // الجلسات والاستشارات النفسية
    match /psychological-sessions/{session} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

5. اضغط **"Publish"**

### الخطوة 5: اختبار النظام
1. ارجع للموقع: http://localhost:3001/mostafa-acdemy/
2. اضغط "احصل على حصة مجانية"
3. املأ البيانات واضغط "احجز الآن"
4. يجب أن يعمل الآن! ✅

### الخطوة 6: تسجيل الدخول للوحة التحكم
1. افتح: http://localhost:3001/mostafa-acdemy/admin.html
2. سجل الدخول بالبريد وكلمة المرور اللذان أنشأتهما
3. يجب أن ترى جميع الحجوزات! ✅

---

## إذا استمرت المشكلة

### حل سريع (للتطوير فقط):
استخدم هذه القواعد المفتوحة **مؤقتاً**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **تحذير:** هذه القواعد تسمح لأي شخص بالقراءة والكتابة. استخدمها فقط للتطوير!

---

## للتأكد من عمل Firebase

### 1. افتح Console المتصفح (F12)
- اذهب لتبويب **Console**
- ابحث عن أخطاء Firebase

### 2. تحقق من Network
- اذهب لتبويب **Network**
- أعد إرسال الحجز
- ابحث عن طلب `firestore.googleapis.com`
- إذا كان **Status: 403**، فالمشكلة في القواعد

### 3. تحقق من Firestore في Console
- اذهب لـ Firebase Console
- Firestore Database → Data
- يجب أن ترى collection اسمه **bookings**

---

## قواعد إضافية (اختياري)

### للإنتاج - قواعد محكمة:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{booking} {
      // السماح بإنشاء حجز مع التحقق من البيانات
      allow create: if request.resource.data.keys().hasAll(['name', 'phone', 'whatsapp', 'packageName'])
                    && request.resource.data.name is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.phone is string
                    && request.resource.data.whatsapp is string;
      
      // فقط المصادقين
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

---

## روابط مفيدة
- Firebase Console: https://console.firebase.google.com/
- مشروعك: https://console.firebase.google.com/project/mostafa-acdemy
- Firestore Rules Documentation: https://firebase.google.com/docs/firestore/security/get-started

---

## الخطوات التالية
بعد إصلاح القواعد:
1. ✅ اختبر نظام الحجز
2. ✅ اختبر لوحة التحكم
3. ✅ أضف حماية للوحة التحكم (Authentication)
4. ✅ انشر الموقع
