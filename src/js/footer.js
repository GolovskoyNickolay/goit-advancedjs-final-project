const form = document.querySelector('.subscribe-form');
const input = form.querySelector('input');
import iziToast from 'izitoast';

form.addEventListener('submit', async e => {
  e.preventDefault();
  const email = input.value.trim();
  const isValid = input.checkValidity();
  if (!isValid) {
    input.reportValidity();
    return;
  }

  try {
    const response = await fetch(
      'https://your-energy.b.goit.study/api/subscription',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) throw new Error('Something went wrong');
    const data = await response.json();

    iziToast.success({
      title: 'Subscription Success',
      message: data.message,
      position: 'topRight',
    });
  } catch (error) {
    iziToast.error({
      title: 'Subscription Error',
      message: 'Failed to subscribe. Please try again.',
      position: 'topRight',
    });
  }
});
