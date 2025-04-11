const form = document.querySelector('.subscribe-form');
const input = form.querySelector('input');
const toast = document.createElement('div');
toast.className = 'toast';
document.body.appendChild(toast);

form.addEventListener('submit', async e => {
  e.preventDefault();
  const email = input.value.trim();
  const isValid = input.checkValidity();
  if (!isValid) {
    input.reportValidity();
    return;
  }

  try {
    const response = await fetch('https://your-energy.b.goit.study/api/subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) throw new Error('Something went wrong');
    const data = await response.json();

    toast.textContent = data.message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  } catch (error) {
    toast.textContent = 'Failed to subscribe. Please try again.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
});