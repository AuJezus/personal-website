import CodeText from "../../../reusable/CodeText";

function AboutText() {
  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div className="group/code relative mb-8">
          <div className="absolute -left-2 top-0 h-0 w-1 bg-neutral-700 transition-all duration-500 group-hover/code:h-full"></div>
          <CodeText name="h1" type="heading">
            life story
          </CodeText>
          <CodeText name="p">
            Ever since I was little I loved computers. To me it was like a brand
            new world. I could ride a tank and shoot other tanks. I could build
            my house in minecraft then invite my friends over. The possibilities
            seemed endless, but I wanted to create my own world, that&apos;s how
            I ended up coding.
          </CodeText>
        </div>

        <div className="group/code relative mb-8">
          <div className="absolute -left-2 top-0 h-0 w-1 bg-neutral-700 transition-all duration-500 group-hover/code:h-full"></div>
          <CodeText name="h2" type="heading">
            my learning journey
          </CodeText>
          <CodeText name="p">
            I started by making games in Unity. My first game was from a
            tutorial on youtube, it was just a cube evading other cubes, but it
            felt amazing. I joined a computer school, there I learned basic
            programming concepts and C#. I went on trying to make games, but my
            art skills weren&apos;t the best, so I switched to making websites.
            Here I am now still learning and building my own projects.
          </CodeText>
        </div>

        <div className="group/code relative">
          <div className="absolute -left-2 top-0 h-0 w-1 bg-neutral-700 transition-all duration-500 group-hover/code:h-full"></div>
          <CodeText name="h2" type="heading">
            hobbies
          </CodeText>
          <CodeText name="p">
            I enjoy reading books, training, meeting up with friends and
            watching anime.
          </CodeText>
        </div>
      </div>
    </>
  );
}

export default AboutText;
