import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
  ];

  return (
    <header className="h-16 w-full border-b border-gray-200 flex items-center justify-around gap-4 ">
      <div>
        <h1 className="text-xl font-bold">Healthcare System</h1>
      </div>
      <div className="flex gap-4">
        {routes.map((route) => {
          return (
            <Link
              key={route.name}
              href={route.url}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              {route.name}
            </Link>
          );
        })}
      </div>
      {/* register login */}
      <div>
        <Button render={<Link href={"/login"} />}>Login</Button>
      </div>
    </header>
  );
};

export default Header;
