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
  renderNewUserForm(newUserFormEl)
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
    /*
    FEEDBACK:
    While this works great, since the event listener is on the entire list of books,
    we want to have an if statement so that this code would only run when one of the buttons were clicked. 
    In order to do this, u can use .matches on the e.target, or check the tagname of it
    */
  })

  newUserFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(newUserFormEl);
    const newUser = Object.fromEntries(formData);

    const createdUser = await createNewUser(newUser);

    if (createdUser) {
      renderNewUser(newUserEl, createdUser);
    }
  })
}
