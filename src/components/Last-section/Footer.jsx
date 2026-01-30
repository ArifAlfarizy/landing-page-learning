import React from "react";

const Footer = () => {
  const foot = [
    {
      id: 1,
      title: "Links",
      others: ["Features", "Pricing", "API", "Get started free", "Log in"],
    },
    {
      id: 2,
      title: "Resources",
      others: ["Help docs", "Quick start guide", "Changelog", "Blog"],
    },
    {
      id: 3,
      title: "Company",
      others: [
        "About us",
        "Privacy policy",
        "Terms of service",
        "Contact us",
        "Discord",
        "Twitter",
      ],
    },
    {
      id: 4,
      title: "Industries",
      others: [
        "Crypto % web3",
        "Startups",
        "Fintech",
        "Greentech",
        "Legal services",
        "Healthcare & medtech",
        "Real estate $ proptech",
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center bg-black rounded-sm mt-2 gap-10 py-20 lg:px-30 lg:justify-between">
        <div className="hidden lg:flex flex-col items-start text-start gap-4">
          <div className="flex gap-3">
            <img src="logo2.svg" className="w-10 cursor-pointer"></img>
            <h1 className="text-white text-3xl font-semibold cursor-pointer">Polymer</h1>
          </div>
          <p className="text-white opacity-60">
            Polymer helps you attract and hire great people.
          </p>
          <p className="text-white opacity-60">
            © 2025 |{" "}
            <span className="underline cursor-pointer">A Curious Company</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
        {foot.map((item) => (
          <div className="flex flex-col gap-2" key={item.id}>
            <h1 className="text-white font-semibold cursor-pointer lg:text-start">
              {item.title}
            </h1>

            {item.others.map((link, index) => (
              <p className="text-white opacity-60 cursor-pointer hover:opacity-90 lg:text-start">
                {link}
              </p>
            ))}
          </div>
        ))}
        </div>

        <div className="flex flex-col items-center lg:hidden gap-6">
          <div className="flex gap-3">
            <img src="logo2.svg" className="w-10 cursor-pointer"></img>
            <h1 className="text-white text-3xl font-semibold cursor-pointer">Polymer</h1>
          </div>
          <p className="text-white opacity-60">
            Polymer helps you attract and hire great people.
          </p>
          <p className="text-white opacity-60">
            © 2025 |{" "}
            <span className="underline cursor-pointer">A Curious Company</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
