export default function GameIntro(props) {
  return (
    <section className="intro">
      <div className="intro_txt">
        <h2>What is Trading Time?</h2>
        <p>
          Stranded on an island paradise inhabited by a group of friendly frog people. Enjoy a sandbox-island-life and go exploring in you own tempo. Solve your new friends quirky problems and trade yourself towards rebuilding you shipwrecked vessel!
        </p>
      </div>
      <div className="introvid_container">
        <video controls>
          <source src="./img/intro_mov.mp4" />
        </video>
      </div>
    </section>
  );
}
