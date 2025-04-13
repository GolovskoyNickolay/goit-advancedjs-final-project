import { getQuoteOfTheDay } from '../../services/apiServices';

async function getQuote() {
  const today = new Date().toISOString().split('T')[0];

  const storedQuote = localStorage.getItem('quote');
  const storedAuthor = localStorage.getItem('author');
  const storedDate = localStorage.getItem('quoteDate');

  if (storedQuote && storedAuthor && storedDate === today) {
    document.querySelector('.sidebar-quote').textContent = `${storedQuote}`;
    document.querySelector('.sidebar-quote-author').textContent = `${storedAuthor}`;
    return;
  }

  const data = await getQuoteOfTheDay();
  const quoteText = data.quote;
  const author = data.author;

  document.querySelector('.sidebar-quote').textContent = `${quoteText}`;
  document.querySelector('.sidebar-quote-author').textContent = `${author}`;

  localStorage.setItem('quote', quoteText);
  localStorage.setItem('author', author);
  localStorage.setItem('quoteDate', today);
}

getQuote();
