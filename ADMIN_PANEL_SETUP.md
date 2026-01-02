# Admin Panel Setup Guide

## 🎉 Admin Panel Successfully Created!

Your admin panel is now ready to use. Follow these steps to get started:

---

## 📋 Step 1: Install Dependencies (if not already installed)

The backend dependencies (`bcryptjs` and `jsonwebtoken`) should already be installed. If not, run:

```bash
cd backend
npm install bcryptjs jsonwebtoken
```

---

## 🔐 Step 2: Create Admin User

Run this command **once** to create the default admin user:

```bash
cd backend
npm run create-admin
```

Or manually:
```bash
node routes/createAdmin.js
```

**Default Credentials:**
- **Username:** `admin`
- **Password:** `admin123`

⚠️ **IMPORTANT:** Change this password in production!

---

## 🚀 Step 3: Start the Servers

### Backend Server:
```bash
cd backend
npm start
# or for development
npm run dev
```

### Frontend Server:
```bash
cd frontend
npm start
```

---

## 🎯 Step 4: Access Admin Panel

1. Open your browser and go to: **http://localhost:3000/admin/login**
2. Login with:
   - Username: `admin`
   - Password: `admin123`

---

## 📱 Admin Panel Features

### ✅ Dashboard (`/admin/dashboard`)
- View all laptops in a table
- See brand, series, name, category, price, processor
- Edit or delete laptops with one click
- Add new laptops

### ✅ Add Laptop (`/admin/laptops/new`)
- Form with all laptop fields
- Dropdown for brand (automatically filters series)
- Dropdown for series (based on selected brand)
- Category selection
- Image URLs (comma-separated)
- Specs (comma-separated)
- All required fields validated

### ✅ Edit Laptop (`/admin/laptops/edit/:id`)
- Pre-filled form with existing data
- Same validation as Add form
- Update any laptop details

### ✅ Delete Laptop
- Confirmation dialog before deletion
- Instantly removes from database

---

## 🔗 API Endpoints (Protected with JWT)

All admin endpoints require authentication token in header:
```
Authorization: Bearer <your-token>
```

- `POST /api/admin/login` - Login (returns JWT token)
- `GET /api/admin/laptops` - Get all laptops
- `GET /api/admin/laptops/:id` - Get single laptop
- `POST /api/admin/laptops` - Create new laptop
- `PUT /api/admin/laptops/:id` - Update laptop
- `DELETE /api/admin/laptops/:id` - Delete laptop
- `GET /api/admin/laptops/brand/:brand` - Get laptops by brand

---

## 🔄 How Changes Reflect on Website

**Real-time Updates:**
1. When you add/edit/delete a laptop in the admin panel
2. The change is immediately saved to MongoDB
3. The website fetches data from MongoDB dynamically
4. **Refresh the website page** to see changes
5. No code changes needed!

**Example:**
- Add a new HP laptop in admin panel → Save
- Go to http://localhost:3000/laptops/hp
- Refresh the page
- Your new laptop appears! ✨

---

## 📝 Laptop Data Structure

When adding/editing laptops, ensure:

- **brand:** lowercase (dell, hp, lenovo, asus, acer, apple, msi, samsung, microsoft)
- **series:** lowercase, must match backend structure (e.g., `15s`, `pavilion`, `envy`, `probook`)
- **category:** lowercase (entry, mid-range, consumer, commercial, gaming, premium)
- **price:** number (without ₹ symbol)
- **images:** comma-separated URLs
- **specs:** comma-separated list

---

## 🔒 Security Notes

1. **JWT Secret:** Currently using default secret. For production:
   - Add `JWT_SECRET=your-super-secret-key` to `.env` file
   - Update `backend/middleware/auth.js` to use `process.env.JWT_SECRET`

2. **Change Default Password:**
   - Create a new admin user with strong password
   - Or update the existing admin password in MongoDB

3. **Token Expiry:** Currently 24 hours. Adjust in `backend/routes/admin.js`

---

## 🎨 Admin Panel Routes

- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard (protected)
- `/admin/laptops/new` - Add new laptop (protected)
- `/admin/laptops/edit/:id` - Edit laptop (protected)

All admin routes are **automatically hidden from the main navbar**.

---

## ✅ Testing Checklist

- [ ] Create admin user
- [ ] Login to admin panel
- [ ] View all laptops in dashboard
- [ ] Add a new laptop
- [ ] Verify it appears on website
- [ ] Edit an existing laptop
- [ ] Verify changes on website
- [ ] Delete a laptop
- [ ] Verify removal on website

---

## 🆘 Troubleshooting

**Can't login?**
- Check if admin user exists in MongoDB
- Run `npm run create-admin` again
- Check backend server is running

**Changes not showing on website?**
- Make sure backend server is running
- Refresh the website page
- Check browser console for errors
- Verify data in MongoDB Compass

**401 Unauthorized errors?**
- Token may have expired (24 hours)
- Login again to get new token
- Check if token is in localStorage

---

## 🎊 You're All Set!

Your admin panel is fully functional and connected to your website. Any changes you make will instantly reflect on the main website after a refresh!

Happy managing! 🚀

