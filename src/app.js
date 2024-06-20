import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks();
  console.log(books);
  // render out the books
  // renderBookList
  renderBookList(bookListEl, books)

  bookListEl.addEventListener('click', async (e) => {
    const l = e.target;
    const author = await getAuthor(l.dataset.authorUrlKey);
    renderAuthorInfo(authorInfoEl, author)
  })

  // newUserFormEl.addEventListener('???', () => {})
}
