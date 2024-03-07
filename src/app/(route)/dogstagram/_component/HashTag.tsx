interface HashTagProps {
  text: string;
}

export default function HashTag({ text }: HashTagProps) {
  return (
    <>
      {text.split(/(#\S+)/).map((part, index) => {
        return part.startsWith("#") ? (
          <span key={index} style={{ color: "#0066FF" }}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </>
  );
}
