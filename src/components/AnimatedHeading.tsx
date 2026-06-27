interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export function AnimatedHeading({ text, className = "" }: AnimatedHeadingProps) {
  let charIndex = 0;

  return (
    <h1 className={className} aria-label={text}>
      {text.split(" ").map((word, wordIndex) => (
        <span className="heading-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((char) => {
            const delay = 260 + charIndex * 18;
            charIndex += 1;

            return (
              <span
                className="heading-char"
                key={`${char}-${wordIndex}-${charIndex}`}
                style={{ animationDelay: `${delay}ms` }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
