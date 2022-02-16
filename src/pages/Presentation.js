import '../style/Presentation.module.css';

const Presentation = () => {

  const movieWatched = {
    color: "teal"
  };
  const movieNotWatched = {
    color: "red"
  };
  const listMovie = [{
      id: 1,
      name: 'Citizen Kane (1941)',
      isWatched: true,
      image: './images/Citizen Kane.jpg'
    },
    {
      id: 2,
      name: 'Casablanca (1942)',
      isWatched: false,
      image: './images/Casablanca.jpg'
    },
    {
      id: 3,
      name: 'The Godfather (1972)',
      isWatched: true,
      image: './images/Godfather.jpg'
    },
    {
      id: 4,
      name: 'Gone with the Wind (1939)',
      isWatched: true,
      image: './images/Gonewiththewind.jpg'
    },
    {
      id: 5,
      name: 'Lawrence of Arabia (1962)',
      isWatched: false,
      image: './images/Lawrence_of_Arabia.jpg'
    },
    {
      id: 6,
        name:'The Wizard of Oz (1939)',
      isWatched: false,
      image: './images/Wizard_of_oz.jpg'
    },
    {
      id: 7,
      name: 'The Graduate (1967)',
      isWatched: true,
      image: './images/The_graduate.jpg'
    },
    {
      id: 8,
      name: 'On the Waterfront (1954)',
      isWatched: true,
      image: './images/On_the_Waterfront.jpg'
    }
  ]


  return (
    <div>
      <h1 > Présentation < /h1>

      <main >
        <article >
          <h1 > Liste de film < /h1>
           <div className="grid" > {listMovie.map(f => (
              <div className="card"
                key = {f.id} > {(f.isWatched) ? <span style={movieWatched} >
                {f.name}</span> : <span style={movieNotWatched}>{f.name}</span>}
              </div>
              ))
            }
          </div>
        </article>
      </main>
    </div>
  );
}

export default Presentation;
