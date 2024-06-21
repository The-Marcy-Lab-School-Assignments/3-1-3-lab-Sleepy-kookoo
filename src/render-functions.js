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
  authorInfoEl.innerHTML = ``;

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
  newUserFormEl.innerHTML = ``;

  const usernameLabel = document.createElement('label');
  usernameLabel.textContent = `Username`;
  usernameLabel.setAttribute('for', 'username');

  const usernameInput = document.createElement('input');
  usernameInput.id = 'username';
  usernameInput.name = 'username'

  const isCoolLabel = document.createElement('label');
  isCoolLabel.textContent = "Is this user cool?";
  isCoolLabel.setAttribute('for', 'is-cool')

  const isCoolInput = document.createElement('input');
  isCoolInput.id = 'is-cool';
  isCoolInput.name = 'isCool';
  isCoolInput.type = 'checkbox';

  const favLangLabel = document.createElement('label');
  favLangLabel.textContent = "Favorite Language";
  favLangLabel.setAttribute('for', 'favorite-language')

  const favLangSelect = document.createElement('select');
  favLangSelect.id = 'favorite-language';
  favLangSelect.name = "favoriteLanguage";

  const firstOption = document.createElement('option');
  const secondOption = document.createElement('option');
  const thirdOption = document.createElement('option');
  const fourthOption = document.createElement('option');

  firstOption.textContent = "None";
  firstOption.value = "None";

  secondOption.textContent = "JavaScript";
  secondOption.value = "JavaScript";

  thirdOption.textContent = "Python";
  thirdOption.value = "Python";

  fourthOption.textContent = "Ruby";
  fourthOption.value = "Ruby";

  favLangSelect.append(firstOption, secondOption, thirdOption, fourthOption);

  const submitButton = document.createElement('button');
  submitButton.textContent = "Create User";

  newUserFormEl.append(usernameLabel, usernameInput, isCoolLabel, isCoolInput, favLangLabel, favLangSelect, submitButton);
}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = ``;

  const headingEl = document.createElement('h2');
  headingEl.textContent = newUser.username;
  headingEl.dataset.userId = newUser.id;

  const coolStatusEl = document.createElement('p');
  if (newUser.isCool) {
    coolStatusEl.textContent = "The hippest in the house!";
  } else {
    coolStatusEl.textContent = "A real square.";
  }

  const favLanguageEl = document.createElement('p');
  favLanguageEl.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

  newUserEl.append(headingEl, coolStatusEl, favLanguageEl)
}