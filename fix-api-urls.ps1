# Fix all localhost:3001 URLs to use getApiUrl()
$files = @(
  "frontend/src/pages/AdminLSA/AccountManagement.jsx",
  "frontend/src/pages/AdminLSA/AccountSettings.jsx",
  "frontend/src/pages/AdminLSA/AddGallery.jsx",
  "frontend/src/pages/AdminLSA/AdminLSA.jsx",
  "frontend/src/pages/AdminLSA/ManageSpas.jsx",
  "frontend/src/pages/AdminLSA/ManageTherapists.jsx",
  "frontend/src/pages/AdminSPA/AdminSPA.jsx",
  "frontend/src/pages/AdminSPA/PaymentPlansBackup.jsx",
  "frontend/src/pages/AdminSPA/ResignTerminate.jsx",
  "frontend/src/pages/AdminSPA/ResubmitApplication.jsx",
  "frontend/src/pages/AdminSPA/SpaContext.jsx"
)

foreach ($file in $files) {
  if (Test-Path $file) {
    Write-Host "Processing: $file"
    $content = Get-Content $file -Raw
    
    # Add import if not already present
    if ($content -notmatch "import.*getApiUrl.*from.*apiConfig") {
      $content = $content -replace "(import.*from\s+'react';\s*)", "`$1`nimport { getApiUrl } from '../../utils/apiConfig';"
    }
    
    # Replace all 'http://localhost:3001/api/... patterns with getApiUrl()
    $content = $content -replace "'http://localhost:3001(/[^']+)'", "(getApiUrl('`$1'))"
    $content = $content -replace '`"http://localhost:3001(/[^"]+)`"', "(getApiUrl('`$1'))"
    $content = $content -replace '`http://localhost:3001(/[^`]+)`', "(getApiUrl('`$1'))"
    
    # Replace io('http://localhost:3001')
    $content = $content -replace "io\('http://localhost:3001'\)", "io(getApiUrl(''))"
    
    # Replace template literals
    $content = $content -replace '\$\{`"http://localhost:3001`"\}', '${ getApiUrl("") }'
    
    Set-Content $file $content
    Write-Host "  ✓ Updated"
  } else {
    Write-Host "  ✗ File not found"
  }
}

Write-Host "`n✅ All files processed!"
