import Card from "./Card";

export default function Cards({ user, handleRemove }) {
  const style =
    "w-[80%] h-3/5 bg-sky-500 flex items-center justify-center rounded-xl mx-10 gap-2";

  return (
    <div className={style}>
      {user.map((item, index) => {
        return (
          <Card
            user={item}
            key={index}
            id={index}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
}
