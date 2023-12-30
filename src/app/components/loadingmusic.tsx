export default function LoadingScaleton() {
  return (
    <div className="bg-white rounded-xl text-black max-w-fit h-[200px] grid grid-rows-2 grid-cols-[200px_1fr] border-2">
      <div className="row-start-1 row-end-1 col-start-2 col-end-2 text-5xl text-center m-auto border-2"></div>
      <div className="row-start-1 row-end-3 col-start-1 col-end-1 relative border-2"></div>
      <div className="row-start-2 row-end-2 col-start-2 col-end-2 border-2"></div>
    </div>
  );
}
