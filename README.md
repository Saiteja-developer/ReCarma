ReCarma Backend – ELV Lifecycle Management API

A production-ready backend for managing End-of-Life Vehicle (ELV) workflows, including authentication, vehicle lifecycle tracking, pickup scheduling, document uploads, and admin operations.

🔗 Live Backend URL

https://recarma.onrender.com

🛠 Tech Stack

Node.js

Express.js

MongoDB Atlas

JWT Authentication

Multer (File Uploads)

GitHub Actions (Keep-alive workflow)

Render (Deployment)

✨ Features

🔐 JWT-based Authentication & Role Management

🚗 Vehicle lifecycle management

🚚 Pickup scheduling workflow

📂 Secure document uploads (RC, Aadhaar, PAN)

🧑‍💼 Admin-only operations

🩺 Health check for uptime & keep-alive

☁️ Cloud deployment with MongoDB Atlas

🌍 Base URL
https://recarma.onrender.com

🔐 AUTH ROUTES
1️⃣ Register User

POST

/api/auth/register


Body (JSON)

{
  "name": "Veeraj",
  "email": "veeraj@test.com",
  "password": "123456",
  "role": "OWNER"
}

2️⃣ Login User

POST

/api/auth/login


Body

{
  "email": "veeraj@test.com",
  "password": "123456"
}


📌 Response returns a JWT token
👉 Save it in frontend using localStorage

🚗 VEHICLE ROUTES
3️⃣ Create Vehicle (OWNER)

POST

/api/vehicles


Headers

Authorization: Bearer <TOKEN>
Content-Type: application/json


Body

{
  "make": "Honda",
  "model": "City",
  "year": 2014,
  "conditionScore": 7
}

4️⃣ Get My Vehicles (OWNER)

GET

/api/vehicles/my


Headers

Authorization: Bearer <TOKEN>

5️⃣ Update Vehicle Status (ADMIN / DEALER)

PATCH

/api/vehicles/:vehicleId/status


Headers

Authorization: Bearer <ADMIN_TOKEN>
Content-Type: application/json


Body

{
  "status": "IN_TRANSIT"
}

🚚 PICKUP ROUTES
6️⃣ Schedule Pickup (OWNER)

POST

/api/pickups


Headers

Authorization: Bearer <TOKEN>
Content-Type: application/json


Body

{
  "vehicleId": "VEHICLE_ID",
  "pickupDate": "2025-01-20",
  "slot": "MORNING"
}

7️⃣ Get All Pickups (ADMIN)

GET

/api/pickups


Headers

Authorization: Bearer <ADMIN_TOKEN>

📂 DOCUMENT UPLOAD ROUTES
8️⃣ Upload Document (RC / Aadhaar / PAN)

POST

/api/documents/upload


Headers

Authorization: Bearer <TOKEN>


Body → form-data

Key	Type	Value
vehicleId	Text	VEHICLE_ID
type	Text	RC
document	File	PDF / Image
9️⃣ View Uploaded Document

GET

/uploads/documents/<filename>

🩺 SYSTEM ROUTE
🔟 Health Check (Keep-alive)

GET

/api/health

🔑 Frontend Token Usage
const token = localStorage.getItem("token");

axios.get(
  "https://recarma.onrender.com/api/vehicles/my",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

🔄 Recommended Frontend Flow

1️⃣ Register / Login
2️⃣ Save JWT token in localStorage
3️⃣ Create Vehicle
4️⃣ Get My Vehicles
5️⃣ Schedule Pickup
6️⃣ Upload Documents
7️⃣ Admin updates vehicle status

🚀 Deployment

Backend: Render

Database: MongoDB Atlas

CI: GitHub Actions (scheduled keep-alive every 20 days)
