// js/auth.js — localStorage session auth

function checkAuth() {
  const raw = localStorage.getItem('fleetUser');
  if (!raw) { window.location.href = 'login.html'; return null; }
  try { return JSON.parse(raw); } catch(e) { window.location.href = 'login.html'; return null; }
}

function doLogin() {
  const errEl  = document.getElementById('login-error');
  const emailEl= document.getElementById('login-email');
  const passEl = document.getElementById('login-password');
  errEl.style.display = 'none';
  emailEl.classList.remove('error');
  passEl.classList.remove('error');
  const email = emailEl.value.trim().toLowerCase();
  const pass  = passEl.value;
  const user  = USERS.find(u => u.email === email && u.password === pass);
  if (!user) {
    errEl.style.display = 'block';
    emailEl.classList.add('error');
    passEl.classList.add('error');
    return;
  }
  localStorage.setItem('fleetUser', JSON.stringify(user));
  window.location.href = 'dashboard.html';
}

function doLogout() {
  localStorage.removeItem('fleetUser');
  window.location.href = 'login.html';
}

function applyRolePermissions(user) {
  document.querySelectorAll('[data-require-role]').forEach(el => {
    const allowed = el.dataset.requireRole.split(' ');
    el.style.display = allowed.includes(user.role) ? '' : 'none';
  });
  document.querySelectorAll('[data-hide-viewer]').forEach(el => {
    el.style.display = user.role === 'viewer' ? 'none' : '';
  });
  if (user.role === 'fleet_admin') {
    const roleSelect = document.getElementById('new-user-role');
    if (roleSelect) {
      Array.from(roleSelect.options).forEach(opt => {
        if (opt.value === 'super_admin') opt.style.display = 'none';
        if (opt.value === 'fleet_admin') opt.style.display = 'none';
      });
      const fleetSelect = document.getElementById('new-user-fleet');
      if (fleetSelect) {
        Array.from(fleetSelect.options).forEach(opt => { opt.disabled = (opt.value !== user.fleet); });
        fleetSelect.value = user.fleet;
      }
    }
  }
}

function toggleUserDropdown() {
  document.getElementById('user-dropdown').classList.toggle('open');
}

function closeUserDropdown() {
  document.getElementById('user-dropdown').classList.remove('open');
}
