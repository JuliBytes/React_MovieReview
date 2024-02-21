import './App.css';
import MovieReview from './componentes/movies';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>🎬 Reseña de Películas 🎬</h1> 
        
        <MovieReview
          titulo='La Momia (1999)'
          imagen='Momia.png'
          resena='La historia sigue al aventurero Rick O’Connell y su equipo mientras buscan tesoros en el antiguo Egipto. Accidentalmente despiertan a Imhotep, una momia antigua con poderes sobrenaturales. La trama se centra en la persecución de Imhotep mientras intenta recuperar su antigua amada y obtener la inmortalidad. La película combina acción, aventura y elementos de terror en un emocionante viaje por el desierto egipcio.'
        />
        
        <MovieReview
          titulo='El Increíble Castillo Vagabundo'
          imagen='Castillo.png' 
          resena='La historia sigue a Sophie, una joven sombrerera, que es transformada en una anciana por una bruja celosa. Encuentra refugio en un castillo mágico que se mueve por el paisaje. La trama se centra en la amistad entre Sophie y Howl, el misterioso dueño del castillo, mientras intentan deshacer el hechizo. La película combina elementos de fantasía, romance y aventura en un mundo encantador y lleno de imaginación.'
        />
        
        <MovieReview
          titulo='La Sociedad de la Nieve'
          imagen='Sociedad.png'
          resena='Basada en hechos reales, la película sigue a un grupo de sobrevivientes de un accidente aéreo en los Andes. Después del choque, luchan por sobrevivir en condiciones extremas, enfrentando el hambre, el frío y la desesperación. La trama se centra en la solidaridad entre los supervivientes y su valiente decisión de hacer lo que sea necesario para sobrevivir. La película explora temas profundos como la moralidad, la esperanza y la resiliencia humana.'
        />
      </div>
    </div>
  );
}

export default App;
