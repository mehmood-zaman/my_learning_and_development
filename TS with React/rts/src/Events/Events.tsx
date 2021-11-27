export const EventComponent: React.FC = () => {
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {};
  return (
    <>
      <input type="text" onChange={changeInput} />
      <div draggable onDragStart={onDragStart}></div>
    </>
  );
};
