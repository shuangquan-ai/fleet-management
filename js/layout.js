// js/layout.js — inject topbar + sidebar, showToast

function injectLayout(activeNav) {
  const user = checkAuth();
  if (!user) return;

  // ── Topbar ──────────────────────────────────────────────────────────────
  const topbarEl = document.getElementById('app-topbar');
  if (topbarEl) {
    topbarEl.innerHTML = `
<div class="topbar">
  <div class="topbar-logo">
    <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#00B14F"/><path d="M20 8C13.4 8 8 13.4 8 20s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="white"/><circle cx="20" cy="20" r="4" fill="white"/></svg>
    <div><span>GrabFleet</span><small>Management Console</small></div>
  </div>
  <div class="topbar-search">
    <span class="search-icon">🔍</span>
    <input type="text" placeholder="Search vehicle, driver, plate…" />
  </div>
  <div class="topbar-right">
    <div class="icon-btn">🔔<span class="badge" id="notif-badge">47</span></div>
    <div class="icon-btn">⚙️</div>
    <div class="user-dropdown-wrap" id="user-dropdown-wrap">
      <div class="avatar" id="topbar-avatar" onclick="toggleUserDropdown()" style="cursor:pointer" title="Account">${user.initials}</div>
      <div class="user-dropdown" id="user-dropdown">
        <div class="user-dropdown-header">
          <div class="user-dropdown-name" id="dropdown-name">${user.name}</div>
          <div class="user-dropdown-email" id="dropdown-email">${user.email}</div>
        </div>
        <a class="user-dropdown-item" href="dashboard.html" onclick="closeUserDropdown()">👤 My Profile</a>
        <div class="user-dropdown-item" onclick="showToast('⚙️ Settings coming soon','#3B82F6');closeUserDropdown()">⚙️ Settings</div>
        <div class="user-dropdown-divider"></div>
        <div class="user-dropdown-item danger" onclick="doLogout()">🚪 Sign Out</div>
      </div>
    </div>
  </div>
</div>`;
  }

  // ── Sidebar ──────────────────────────────────────────────────────────────
  const sidebarEl = document.getElementById('app-sidebar');
  if (sidebarEl) {
    const navItem = (href, icon, label, id, badge, requireRole) => {
      const active = activeNav === href ? ' active' : '';
      const dataReq = requireRole ? ` data-require-role="${requireRole}"` : '';
      const badgeHtml = badge ? `<span class="nav-badge" id="${badge.id}">${badge.text}</span>` : '';
      return `<a class="nav-item${active}" href="${href}"${dataReq}><span class="nav-icon">${icon}</span>${label}${badgeHtml}</a>`;
    };

    sidebarEl.innerHTML = `
<aside class="sidebar">
  <div class="nav-section">
    <div class="nav-label">Overview</div>
    ${navItem('dashboard.html','🗺️','Dashboard')}
    <div class="nav-label">Fleet Monitoring</div>
    ${navItem('vehicles.html','🚗','Vehicles','','','')} <span style="display:none" id="online-count-placeholder"></span>
    ${navItem('livestream.html','📹','Live Streams')}
    ${navItem('iot.html','📡','IoT Devices')}
    ${navItem('telematics.html','⚡','Telematics','','','')} <span style="display:none" id="tel-count-placeholder"></span>
    <div class="nav-label">Operations</div>
    ${navItem('dax.html','🏅','DAX Management')}
    ${navItem('payments.html','💳','Payments')}
    <div class="nav-label" data-require-role="fleet_admin super_admin">Remote Control</div>
    ${navItem('immobilization.html','🔒','Immobilization','','','')}
    <a class="nav-item" href="immobilization.html" data-require-role="fleet_admin super_admin" style="display:none"></a>
    ${navItem('dashboard.html','🏁','Geofences')}
    <div class="nav-label" data-require-role="fleet_admin super_admin">Device Management</div>
    ${navItem('ota.html','🔄','OTA Updates')}
    ${navItem('simdata.html','📶','SIM Data Management')}
    <div class="nav-label">Analytics</div>
    ${navItem('dashboard.html','📊','History & Reports')}
    <div class="nav-label">Account</div>
    ${navItem('users.html','👥','User Management','','','fleet_admin super_admin')}
    ${navItem('dashboard.html','👤','My Profile')}
  </div>
</aside>`;

    // Re-build sidebar with proper nav items (Option C: Grab App Style - minimal sections)
    sidebarEl.innerHTML = `
<aside class="sidebar">
  <div class="nav-section">
    <div class="nav-label">Home</div>
    <a class="nav-item${activeNav==='dashboard.html'?' active':''}" href="dashboard.html"><span class="nav-icon">🏠</span> Dashboard</a>

    <div class="nav-label">Fleet</div>
    <a class="nav-item${activeNav==='vehicles.html'?' active':''}" href="vehicles.html"><span class="nav-icon">🚗</span> Vehicles <span class="nav-badge" id="online-count">51,240</span></a>
    <a class="nav-item${activeNav==='livestream.html'?' active':''}" href="livestream.html"><span class="nav-icon">📹</span> Live Streams</a>
    <a class="nav-item${activeNav==='telematics.html'?' active':''}" href="telematics.html"><span class="nav-icon">⚡</span> Telematics <span class="nav-badge" id="tel-count-badge">12</span></a>
    <a class="nav-item${activeNav==='dax.html'?' active':''}" href="dax.html"><span class="nav-icon">🏅</span> DAX Management</a>
    <a class="nav-item${activeNav==='payments.html'?' active':''}" href="payments.html"><span class="nav-icon">💳</span> Payments</a>

    <div class="nav-label" data-require-role="fleet_admin super_admin">Control</div>
    <a class="nav-item${activeNav==='immobilization.html'?' active':''}" href="immobilization.html" data-require-role="fleet_admin super_admin"><span class="nav-icon">🔒</span> Immobilization</a>
    <a class="nav-item" href="dashboard.html" data-require-role="fleet_admin super_admin"><span class="nav-icon">🏁</span> Geofences</a>
    <a class="nav-item${activeNav==='iot.html'?' active':''}" href="iot.html" data-require-role="fleet_admin super_admin"><span class="nav-icon">📡</span> IoT Devices</a>
    <a class="nav-item${activeNav==='ota.html'?' active':''}" href="ota.html" data-require-role="fleet_admin super_admin"><span class="nav-icon">🔄</span> OTA Updates</a>

    <div class="nav-label">Account</div>
    <a class="nav-item" href="dashboard.html"><span class="nav-icon">📊</span> Reports</a>
    <a class="nav-item${activeNav==='users.html'?' active':''}" href="users.html" data-require-role="fleet_admin super_admin"><span class="nav-icon">👥</span> Users</a>
    <a class="nav-item" href="dashboard.html"><span class="nav-icon">👤</span> Profile</a>
  </div>
</aside>`;
  }

  applyRolePermissions(user);

  // Close dropdown on outside click
  document.addEventListener('click', function(e) {
    const wrap = document.getElementById('user-dropdown-wrap');
    if (wrap && !wrap.contains(e.target)) closeUserDropdown();
  });
}

function showToast(msg, color) {
  color = color || '#1A1A1A';
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;background:${color};color:white;padding:12px 20px;border-radius:10px;font-size:0.875rem;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.2);transition:opacity 0.3s`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function(){ t.style.opacity='0'; setTimeout(function(){ t.remove(); },300); }, 2500);
}
