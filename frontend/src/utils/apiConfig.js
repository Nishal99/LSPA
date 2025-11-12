// API Configuration - Centralizes all API URLs
// Ensures the base URL includes protocol (http:// or https://). If VITE_API_BASE
// is provided without protocol, we assume http:// in development.

const RAW_API_BASE = import.meta.env.VITE_API_BASE || 'api.lankaspaassociation.lk';

// Normalize: remove trailing slash
const withoutTrailing = RAW_API_BASE.replace(/\/$/, '');

// If the value doesn't start with http:// or https://, assume http://
const normalizedAPIUrl = (/^https?:\/\//i.test(withoutTrailing))
  ? withoutTrailing
  : `http://${withoutTrailing}`;

export const getApiUrl = (endpoint) => {
  // If endpoint starts with http, return as-is (for full URLs)
  if (endpoint && endpoint.startsWith('http')) {
    return endpoint;
  }
  // Otherwise, combine with base URL
  return `${normalizedAPIUrl}${endpoint && endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
};

export const API_CONFIG = {
  // baseUrl now always contains the protocol (http:// or https://)
  baseUrl: normalizedAPIUrl,
  
  // Auth endpoints
  auth: {
    login: `${normalizedAPIUrl}/api/auth/login`,
    forgotPassword: `${normalizedAPIUrl}/api/auth/forgot-password`,
    resetPassword: `${normalizedAPIUrl}/api/auth/reset-password`,
    spaStatus: `${normalizedAPIUrl}/api/auth/spa-status`,
    navigation: `${normalizedAPIUrl}/api/auth/navigation`,
  },
  
  // Public endpoints
  public: {
    contact: `${normalizedAPIUrl}/api/public/contact`,
    verifiedSpas: `${normalizedAPIUrl}/api/public/verified-spas`,
    gallery: `${normalizedAPIUrl}/api/gallery`,
    blog: `${normalizedAPIUrl}/api/blog`,
  },
  
  // SPA endpoints
  spa: {
    profile: `${normalizedAPIUrl}/api/spa/profile`,
    resubmit: `${normalizedAPIUrl}/api/spa/resubmit`,
  },
  
  // Admin SPA endpoints
  adminSpa: {
    checkNic: `${normalizedAPIUrl}/api/admin-spa-new/check-nic`,
    paymentStatus: `${normalizedAPIUrl}/api/admin-spa-enhanced/payment-status`,
    rejectedPayments: `${normalizedAPIUrl}/api/admin-spa-enhanced/rejected-payments`,
    processCardPayment: `${normalizedAPIUrl}/api/admin-spa-enhanced/process-card-payment`,
    processBankTransfer: `${normalizedAPIUrl}/api/admin-spa-enhanced/process-bank-transfer`,
    resubmitPayment: `${normalizedAPIUrl}/api/admin-spa-enhanced/resubmit-payment`,
  },
  
  // Admin LSA endpoints
  adminLsa: {
    spas: `${normalizedAPIUrl}/api/lsa/spas`,
    spaApprove: `${normalizedAPIUrl}/api/admin-lsa-enhanced/spas`,
    dashboard: `${normalizedAPIUrl}/api/lsa/dashboard`,
    therapists: `${normalizedAPIUrl}/api/lsa/therapists`,
    accountChangeCredentials: `${normalizedAPIUrl}/api/lsa/account/change-credentials`,
  },
  
  // Registration endpoints
  registration: {
    submit: `${normalizedAPIUrl}/api/enhanced-registration/submit`,
  },
  
  // Third party endpoints
  thirdParty: {
    login: `${normalizedAPIUrl}/api/third-party/login`,
  },
  
  // Socket.io connection
  socketUrl: normalizedAPIUrl,
};

export default API_CONFIG;
