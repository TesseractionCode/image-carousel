import './App.css'
import ImageCarousel from './components/ImageCarousel';

function App(): JSX.Element {
  return (
    <div>
      <ImageCarousel displayed_images={[
        {name: "Awesome Protogen", src: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt4T1dFMU1XRTFOaTFqT0RkbUxUUXpOamt0T0RSbFlpMWxPRGsyWkRFME9HUmlNbVFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--7f2f197e23c1dd3a5ad78867417034ae40ace248/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWhwQWdBSU9ncHpZWFpsY25zSk9oTnpkV0p6WVcxd2JHVmZiVzlrWlVraUIyOXVCam9HUlZRNkNuTjBjbWx3VkRvT2FXNTBaWEpzWVdObFZEb01jWFZoYkdsMGVXbGYiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--beed8ed72637ca3712935f65de3d18ae25f2cc85/193383.jpeg"},
        {name: "Sergal Warrior", src: "https://www.pngkit.com/png/full/276-2766547_traditional-games-thread-sergal-warrior-art.png"},
        {name: "Telephone", src: "https://guides.brit.co/media-library/this-is-telephone-a-dutch-angel-dragon-she-is-a-furry-duuuuuuh-she-created-the-species-angel-dragons-well-deana-biesemeyer-d.jpg?id=23868123&width=784&quality=80"},
        {name: "Amazing Avali", src: "https://i.redd.it/e4aiy1h1g4jb1.jpg"}      
      ]}/>
    </div>
  );
}

export default App;
