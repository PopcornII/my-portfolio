import React from "react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";



const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "http://www.linkedin.com/in/rithy-sok-65304b302",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/PopcornII",
    },
    {
      id: 3,
      child: (
        <>
          GitLab <FaGitlab size={30} />
        </>
      ),
      href: "https://gitlab.com/users/rithysok703/projects",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: "resume.pdf",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-white" +
              " " +
              style
            }
          >
            <a
              href={download ? href : null}
              className="flex justify-between items-center w-full text-blue-950"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;