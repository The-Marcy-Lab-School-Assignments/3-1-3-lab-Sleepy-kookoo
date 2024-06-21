export const getFirstThreeFantasyBooks = async () => {
  const url = `https://openlibrary.org/subjects/fantasy.json`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(new Error(`Failed to get fantasy books`))
      throw new Error(`Failed to get fantasy books`)
    }

    const isJSON = await response.json()
    const dataArr = isJSON.works


    return dataArr.slice(0, 3).map((work) => {
      return {
        title: work.title,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key,
        },
        coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
      }
    });

  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const getAuthor = async (urlKey) => {
  try {
    const response = await fetch(`https://openlibrary.org${urlKey}.json`);
    if (!response.ok) {
      console.log(new Error(`Failed to get author`))
      throw new Error(`Failed to get author`)
    }
    const data = await response.json()
    console.log(data)

    const obj = {
      birthDate: data.birth_date,
      bio: data.bio,
      wikipediaUrl: data.wikipedia,
      name: data.name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`,
    }

    console.log(obj)
    return obj

  } catch (error) {
    console.warn(error)
    return null
  }
};

export const createNewUser = async (newUser) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) {
      console.log(new Error(`Failed to create new user`))
      throw new Error(`Failed to create new user`)
    }

    const data = await response.json()
    console.log(data)
    return data

  } catch (error) {
    console.warn(error.message)
    return null
  }
}