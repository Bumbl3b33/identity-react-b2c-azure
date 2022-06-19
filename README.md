# Authenticating a React App with Azure AD B2C

This project provides a starting template for testing and enabling authentication for customer facing apps via Azure AD B2C enabling Single-Sign On (SSO).

 This application will allow you to test your Configuration to ensure it supports Single-Page Applications using Authorization Code Flow with PKCE.

You can test that tokens received by the app contains the claims (including custom claims) requested.

## Steps to Run

In the project directory, you can run:

### Update Configuration

Navigate to the `/src/config/msalConfig.js` and update the following

- **clientId** - Enter the Application (client) ID of the app registered on the AD B2C Tenant
- **authority** - Enter the Sign Up / Sign In URL from the created User Flows  
- **knownAuthorities** - Enter the Domain name of your AD B2C tenant

### `npm install`

Install the necessary dependencies including `azure/msal-react` and `azure/msal-browser`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
