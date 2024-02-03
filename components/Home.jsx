import Link from "next/link";

const Home = () => {
  return (
    <div className="flex px-5 items-center home gap-2">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="heading">
          The{" "}
          <span className="text-violet-700 underline decoration-solid">
            Expense Tracker
            <br />
          </span>{" "}
          that works for you
        </h1>
        <p className="teat-gray-300">Track all expenses here...</p>
        <Link
          href={"/login"}
          className="mt-5 black_btn  text-center font-bold signin"
        >
          Get Started {`->`}
        </Link>
      </div>
      <div className="flex-1" id="animation">
        <img src="/assets/home.svg" alt="expense" />
      </div>
    </div>
  );
};

export default Home;
