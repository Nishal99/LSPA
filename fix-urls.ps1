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
    $updated = $false
    
    if ($content -match "'http://localhost:3001") {
      $content = $content -replace "'http://localhost:3001/", "(getApiUrl('/"
      $content = $content -replace "'`"http://localhost:3001/", "(getApiUrl('/"
      $updated = $true
    }
    
    if ($content -match '"http://localhost:3001') {
      $content = $content -replace '"http://localhost:3001/', "(getApiUrl('/"
      $updated = $true
    }
    
    if ($content -match "io\('http://localhost:3001'\)") {
      $content = $content -replace "io\('http://localhost:3001'\)", "io(getApiUrl(''))"
      $updated = $true
    }
    
    if ($updated) {
      Set-Content $file $content
      Write-Host "  - Updated"
    }
  }
}

Write-Host "Done!"
