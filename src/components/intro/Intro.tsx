import "./intro.css";

export default function Misc() {
  return (
    <section className={`about flex flex-col items-center justify-center text-center`}>
      <div className="about-inner">
        <h2 className="font-extrabold text-5xl about-title" >
          <span>a quick intro</span>
        </h2>
        <p className={`about-innertext text-xl leading-9`}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            exercitationem maiores iure facere ullam fugiat sed id est eveniet
            labore eaque quisquam, reprehenderit sequi quas ducimus eius, dolorum
            architecto amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, esse. Nihil officia temporibus, reiciendis neque minus, enim similique fuga assumenda saepe quidem autem dignissimos, deserunt sed quas repudiandae cumque fugit.
          </span>
        </p>
      </div>
    </section>
  );
}
