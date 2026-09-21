export const esc=s=>(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
export const copy=s=>navigator.clipboard.writeText(s);
export const box=s=>`<pre class="out">${esc(s)}</pre>`;
export const pretty=s=>JSON.stringify(JSON.parse(s),null,2);