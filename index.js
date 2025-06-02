import fetch from 'node-fetch';

const endpoint = 'https://www.corretto.sk/_functions/dotyka-export';

(async () => {
  try {
    const res = await fetch(endpoint, { method: 'GET' });
    const text = await res.text();
    console.log('✅ Spustený export:', text);
  } catch (err) {
    console.error('❌ Chyba pri exporte:', err.message);
  }
})();