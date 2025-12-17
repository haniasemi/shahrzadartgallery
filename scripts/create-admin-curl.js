// Alternative: Use this if you want to create admin via API when server is running
// Run this after starting the dev server: npm run dev
// Then run: node scripts/create-admin-curl.js

const https = require('http');

const adminData = {
  username: 'shahrzadyousefi',
  email: 'shahrzadyousefi.id@gmail.com',
  password: 'shd@Y@1369'
};

const postData = JSON.stringify(adminData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/admin/create-admin',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const result = JSON.parse(data);
      if (result.success) {
        console.log('✅ Admin created successfully!');
        console.log(result);
      } else {
        console.log('❌ Error:', result.error);
      }
    } catch (e) {
      console.log('Response:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ Problem with request:', e.message);
  console.log('⚠️  Make sure the dev server is running (npm run dev)');
});

req.write(postData);
req.end();




