import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="">
      <h1>Welcome to the Tasks</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link
          to="/game"
          className="rounded-xl border-2 border-gray-500 p-2 m-2 cursor-pointer 
        hover:bg-gray-200"
        >
          Task 1: Dog Breed Quiz
        </Link>
        <Link
          to="/shape"
          className="rounded-xl border-2 border-gray-500 p-2 m-2 cursor-pointer 
        hover:bg-gray-200"
        >
          Task 2: Random User Generator
        </Link>
        <Link
          to="/bin"
          className="rounded-xl border-2 border-gray-500 p-2 m-2 cursor-pointer 
        hover:bg-gray-200"
        >
          Task 3: Drag and Drop
        </Link>
      </div>
    </div>
  );
}
