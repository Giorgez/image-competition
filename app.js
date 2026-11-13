// Supabase client — update SUPABASE_URL and SUPABASE_KEY after creating project
const SUPABASE_URL = 'https://zuovmjxiixvlwerlkgzr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1b3ZtanhpaXh2bHdlcmxrZ3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ1NjQ0NzUsImV4cCI6MjExMDE0MDQ3NX0.d5jPhKtaHvigligNCFeQoDisijfQvSIit1PJEEO_9xs';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function getUser() {
  try { return JSON.parse(localStorage.getItem('voter')); }
  catch { return null; }
}

function setUser(u) {
  localStorage.setItem('voter', JSON.stringify(u));
}

function requireUser() {
  const u = getUser();
  if (!u) { window.location.href = 'index.html'; return null; }
  return u;
}

function logout() {
  localStorage.removeItem('voter');
  window.location.href = 'index.html';
}

let _toastTimer;
function toast(msg, dur = 2200) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), dur);
}
