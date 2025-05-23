import iziToast from 'izitoast';

Array.from(document.body.querySelectorAll('.footer-links a')).forEach(
  element => {
    element.addEventListener('click', event => {
      event.preventDefault();
    });
  }
);

const form = document.querySelector('.subscribe-form');

form?.addEventListener('submit', async e => {
  e.preventDefault();
  const input = form.querySelector('input');
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
    iziToast.warning({
      title: 'Oops!',
      message: 'Looks like you\'re already subscribed!',
      position: 'topRight',
    });
  }
});
