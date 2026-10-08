document.getElementById('year').textContent=new Date().getFullYear();
const box=document.getElementById('lightbox');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{const img=box.querySelector('img');img.src=button.dataset.image;img.alt=button.querySelector('img').alt;box.showModal();}));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});});
document.querySelector('.dismiss').addEventListener('click',()=>document.getElementById('checkout-dialog').close());
const url=window.PAGE_CONFIG?.checkoutUrl||'';
const valid=/^https:\/\//i.test(url);
if(valid)document.querySelector('.checkout-note').textContent='Você será direcionado ao checkout seguro.';
document.querySelector('.purchase').addEventListener('click',()=>{if(valid){const target=new URL(url);new URLSearchParams(location.search).forEach((v,k)=>{if(k.startsWith('utm_')&&!target.searchParams.has(k))target.searchParams.set(k,v);});location.assign(target.href);}else document.getElementById('checkout-dialog').showModal();});
