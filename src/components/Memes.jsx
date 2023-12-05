export default async function Memes() {
  //get all memes
  const responseMemes = await fetch("https://api.imgflip.com/get_memes");
  const infoMemes = await responseMemes.json();
  //console.log(infoMemes);
  const memeImgages = infoMemes.data.memes;
  //console.log(memeImg);
  return (
    <div>
      <h4>Memes</h4>
      <p>
        Here's an API to fetch random memes:
        <a href="https://api.imgflip.com/get_memes">
          https://api.imgflip.com/get_memes
        </a>
      </p>
      <div className="memes-container">
        {memeImgages.map((meme) => {
          return <img src={`${meme.url}`} alt="meme" className="memes"></img>;
        })}
      </div>

      <hr />
    </div>
  );
}
