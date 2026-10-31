import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-black text-white h-screen">
      <h1 className="capitalize text-2xl font-medium font-heading text-center">
        Welcome to healthcare system.
      </h1>
      <div className="flex justify-center items-center">
        <Button>Click now</Button>
      </div>
    </div>
  );
};

export default Home;
