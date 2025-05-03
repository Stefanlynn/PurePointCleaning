// Simple script to test Netlify form submission
// Run this locally with: node test-netlify-form.js

const https = require('https');

// Replace with your Netlify site URL when deployed
const NETLIFY_SITE_URL = 'https://purepoint.netlify.app';

// Sample form data
const formData = {
  'form-name': 'contact',
  'fullName': 'Test User',
  'companyName': 'Test Company',
  'email': 'test@example.com',
  'phone': '555-123-4567',
  'serviceType': 'Testing',
  'contactMethod': 'email',
  'message': 'This is a test submission from the test script.'
};

// Convert form data to URL encoded format
const encodedData = Object.keys(formData)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
  .join('&');

// Configuration for the HTTP request
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(encodedData)
  }
};

console.log('Testing Netlify form submission...');
console.log(`Target site: ${NETLIFY_SITE_URL}`);
console.log('Form data:', formData);

// This script is for demonstration only
// In a real environment, you would send this to your Netlify site
console.log('\nThis is a test script. To test a real form submission:');
console.log('1. Deploy your site to Netlify');
console.log('2. Fill out the form on your live site');
console.log('3. Check the Forms tab in your Netlify dashboard');

/*
// Uncomment to send a real test request to your deployed site:
const req = https.request(NETLIFY_SITE_URL, options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  let responseData = '';
  
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  
  res.on('end', () => {
    console.log('Response received');
    console.log('Form submission test complete');
  });
});

req.on('error', (error) => {
  console.error('Error testing form:', error);
});

req.write(encodedData);
req.end();
*/