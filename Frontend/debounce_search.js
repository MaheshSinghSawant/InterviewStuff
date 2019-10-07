/*-------------------------------
    *
    * Write your JavaScript code here.
    *
    * The mocked search data is available using the searchData async method, e.g:
    *   searchData("QUERY").then(results => ...)
    
const searchData = searchText => {
  const regex = new RegExp(searchText, 'gi');
  return new Promise(resolve => resolve(topMovies.filter(m => m.title.match(regex))))
};    
    
    * ------------------------------*/
   const topMovies = [
    { title: "The Shawshank Redemption (1994)", rating: 9.2 },
    { title: "The Godfather (1972)", rating: 9.2 },
    { title: "The Godfather: Part II (1974)", rating: 9.0 },
    { title: "The Dark Knight (2008)", rating: 9.0 },
    { title: "12 Angry Men (1957)", rating: 8.9 },
    { title: "Schindler's List (1993)", rating: 8.9 },
    {
      title: "The Lord of the Rings: The Return of the King (2003)",
      rating: 8.9
    },
    { title: "Pulp Fiction (1994)", rating: 8.9 },
    { title: "The Good, the Bad and the Ugly (1966)", rating: 8.8 },
    { title: "Fight Club (1999)", rating: 8.8 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring (2001)",
      rating: 8.8
    },
    { title: "Forrest Gump (1994)", rating: 8.7 },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back (1980)",
      rating: 8.7
    },
    { title: "Inception (2010)", rating: 8.7 },
    { title: "The Lord of the Rings: The Two Towers (2002)", rating: 8.7 },
    { title: "One Flew Over the Cuckoo's Nest (1975)", rating: 8.7 },
    { title: "Goodfellas (1990)", rating: 8.7 },
    { title: "The Matrix (1999)", rating: 8.6 },
    { title: "Seven Samurai (1954)", rating: 8.6 },
    { title: "City of God (2002)", rating: 8.6 },
    { title: "Star Wars: Episode IV - A New Hope (1977)", rating: 8.6 },
    { title: "Se7en (1995)", rating: 8.6 },
    { title: "The Silence of the Lambs (1991)", rating: 8.6 },
    { title: "It's a Wonderful Life (1946)", rating: 8.6 },
    { title: "Life Is Beautiful (1997)", rating: 8.6 },
    { title: "The Usual Suspects (1995)", rating: 8.5 },
    { title: "Spirited Away (2001)", rating: 8.5 },
    { title: "Saving Private Ryan (1998)", rating: 8.5 }
  ];
  
  const searchData = searchText => {
    const regex = new RegExp(searchText, "gi");
    return new Promise(resolve =>
      resolve(topMovies.filter(m => m.title.match(regex)))
    );
  };
  
  const debounce = fn => {
    let timer;
    return function() {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, 300);
    };
  };
  
  const autocomplete = e => {
    searchData(e.target.value).then(res => {
      document.getElementById("box").innerHTML = null;
      for (let obj of res) {
        let div = document.createElement("div");
        div.innerHTML = obj.title;
        document.getElementById("box").appendChild(div);
      }
    });
  };
  const betterAutocomplete = debounce(autocomplete);
  
  document.getElementById("ip").addEventListener("keypress", betterAutocomplete);
  