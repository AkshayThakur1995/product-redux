import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div className="navbar">
      {links.map((item) => {
        return <h3><Link to={item.link}>{item.title}</Link></h3>
      })}
    </div>
  )
    //map through the link ad display it in header
  
};