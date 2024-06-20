export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = ``;

  books.forEach((book) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const button = document.createElement('button');

    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`

    p.textContent = `Title: ${book.title}`

    button.textContent = `View ${book.author.name}`;
    button.setAttribute(`data-author-url-key`, book.author.urlKey);
    button.dataset.authorUrlKey = book.author.urlKey;

    li.append(img, p, button);
    bookListEl.append(li);
  })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = '';

  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const pBirth = document.createElement('p');
  const pBio = document.createElement('p');
  const a = document.createElement('a');

  h2.textContent = author.name;

  img.src = author.pictureUrl;
  img.alt = `A picture of ${author.name}`;

  pBirth.textContent = `Born: ${author.birthDate}`;

  pBio.textContent = author.bio;

  a.href = author.wikipediaUrl;
  a.textContent = `Wikipedia Link`;

  authorInfoEl.append(h2, img, pBirth, pBio, a)

}

export const renderNewUserForm = (newUserFormEl) => {
}

export const renderNewUser = (newUserEl, newUser) => {
}