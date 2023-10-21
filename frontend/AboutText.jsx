import CodeElement from "./CodeElement";

function AboutText() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="group/code relative mb-8">
          <div className="absolute -left-2 top-0 h-0 w-1 bg-neutral-700 transition-all duration-500 group-hover/code:h-full"></div>
          <CodeElement name="h1" type="heading">
            life story
          </CodeElement>
          <CodeElement name="p">
            Ever since I was little I loved computers. To me it was like a brand
            new world. I could ride a tank and shoot other tanks. I could build
            my house in minecraft then invite my friends over. The possibilities
            seemed endless, but I wanted to create my own world, that&apos;s how
            I ended up coding.
          </CodeElement>
        </div>

        <div className="group/code relative mb-8">
          <div className="absolute -left-2 top-0 h-0 w-1 bg-neutral-700 transition-all duration-500 group-hover/code:h-full"></div>
          <CodeElement name="h2" type="heading">
            my learning journey
          </CodeElement>
          <CodeElement name="p">
            I started by making games in Unity. My first game was from a
            tutorial on youtube, it was just a cube evading other cubes, but it
            felt amazing. I joined a computer school, there I learned basic
            programming concepts and C#. I went on trying to make games, but my
            art skills weren&apos;t the best, so I switched to making websites.
            Here I am now still learning and building my own projects.
          </CodeElement>
        </div>

        <div className="group/code relative">
          <div className="absolute -left-2 top-0 h-0 w-1 bg-neutral-700 transition-all duration-500 group-hover/code:h-full"></div>
          <CodeElement name="h2" type="heading">
            hobbies
          </CodeElement>
          <CodeElement name="p">
            I enjoy reading books, training, meeting up with friends and
            watching anime.
          </CodeElement>
        </div>
      </div>
    </>
  );
}

export default AboutText;
