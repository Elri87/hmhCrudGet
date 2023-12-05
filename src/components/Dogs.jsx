export default async function Dogs() {
  //get 10 dog images
  const responseDogs = await fetch(
    "https://dog.ceo/api/breeds/image/random/10"
  );
  const info = await responseDogs.json();
  //console.log(responseDogs);
  const dogImage = info.message;
  //console.log(dogImage);
  return (
    <div>
      <h1>Can you catch them all?</h1>
      <h4>Dogs</h4>
      <p>
        Here's an API to fetch 10 random dog images:
        <a href="https://dog.ceo/api/breeds/image/random/10">
          https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>
      <div className="dog-container">
        {dogImage.map((dog) => {
          return (
            <img src={`${dog}`} alt="dog" className="dogs">
              {dogImage.image}
            </img>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
