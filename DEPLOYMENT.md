# Deployment Configuration for React Router

This project uses React Router for client-side routing. To ensure proper routing works in production environments, the following configurations have been added:

## Files Added/Modified

### 1. vercel.json
For Vercel deployment, added rewrites configuration:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. public/_redirects
For Netlify and similar providers:
```
/*    /index.html   200
```

### 3. public/.htaccess
For Apache servers:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### 4. vite.config.js
Added historyApiFallback for development server:
```javascript
server: {
  historyApiFallback: true,
  // ... other config
}
```

## How It Works

When a user directly navigates to a route like `/careers` or `/services` (by typing in the URL or refreshing the page), the server needs to serve the `index.html` file so React Router can handle the routing client-side.

Without these configurations:
- Server looks for `/careers/index.html` or `/careers` folder
- Doesn't find it, returns 404
- React Router never gets a chance to handle the route

With these configurations:
- All routes are redirected to `/index.html`
- React Router loads and handles the routing client-side
- Users can refresh on any page or share direct links

## Deployment Steps

1. **Vercel**: Deploy normally - the `vercel.json` will be automatically used
2. **Netlify**: Deploy normally - the `_redirects` file will be copied to the build
3. **Apache/cPanel**: Upload the build files and ensure `.htaccess` is in the root
4. **Nginx**: Add similar rewrite rules to your server configuration

## Testing

After deployment:
1. Navigate to your site
2. Click through different routes (should work - was working before)
3. Refresh the page on any route (should now work - was broken before)
4. Type a direct URL like `yoursite.com/careers` (should now work - was broken before)
