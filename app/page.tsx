import AddTodo from "@/components/shared/AddTodo";

const Home = () => {
  return (
    <div className="w-screen py-20 flex flex-col justify-center items-center ">
      <span className="text-3xl font-extrabold uppercase">
        To-Do-app
      </span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Nextjs 14
        <span className="text-orange-700 ml-2">Server Actions</span>
      </h1>

      <div className="flex flex-col justify-center items-center w-[1000px]">

        <AddTodo />
      </div>



    </div>);
}

export default Home;