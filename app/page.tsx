import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function ButtonPrimary({ text, link }: { text: string; link: string }) {
  return (
    <a href={link}>
      <button className="bg-primary hover:bg-primary-button-hover transition-all ease-in-out px-9 py-2 text-white rounded-xl border-[1px] border-primary">
        {text}
      </button>
    </a>
  );
}

function ButtonLight({ text, link }: { text: string; link: string }) {
  return (
    <a href={link}>
      <button className="bg-light-button-bg hover:bg-light-button-hover transition-all ease-in-out px-9 py-2 text-light-button-text border-[1px] border-primary rounded-xl">
        {text}
      </button>
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div>
        <div className="text-4xl">
          <div>Hi,</div>
          <div>
            I&apos;m{" "}
            <span
              className="font-semibold relative z-10 after:absolute after:top-[50%] after:bg-mark
                        after:w-[100%] after:h-[50%] after:left-0 after:z-[-1]"
            >
              Redish101
            </span>
            .
          </div>
        </div>
        <div className="text-2xl mt-3 text-light font-light">
          Student / Developer
        </div>
        <div className="flex text-2x mt-3 text-lightest font-light">
          <FontAwesomeIcon icon={faEnvelope} width={"16px"} />
          <span className="ml-2">i@redish101.top</span>
          <FontAwesomeIcon icon={faKey} width={"16px"} className="ml-3" />
          <span className="ml-2">8678-69A4</span>
        </div>
        <div className="mt-4">
          <span>
          <ButtonPrimary text="Blog" link="https://blog.redish101.top" />
          </span>
          <span className="ml-2">
            <ButtonLight text="GitHub" link="https://github.com/Redish101" />
          </span>
        </div>
      </div>
    </main>
  );
}
