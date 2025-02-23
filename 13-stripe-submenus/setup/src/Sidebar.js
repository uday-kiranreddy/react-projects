import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "show sidebar-wrapper" : "sidebar-wrapper"
      }`}
    ><div className="sidebar">
      <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
      <div className="sidebar-links">
        {sublinks.map((item,index)=>{
          const {links,page}=item;
          return <article key={index}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link,index)=>{
                const{url,label,icon}=link;
                return <a key={index} href={url}>{icon}{label }</a>
              })}
            </div>
          </article>
        })}
      </div>
      </div></aside>
  );
};

export default Sidebar;
