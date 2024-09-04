const Footer = (): React.ReactElement => {
  return (
    <div className="grid gap-40 lg:grid-cols-4 m-20 pl-5 text-a border-solid border-t-black border-t-8 pt-5 lg:text-start md:text-center md:grid-cols-1 ">
      <div>
        <h1 className="text-2xl">Buy at our place</h1>
        <p>Warsaw</p>
        <p>Poniatowskiego 21/37</p>
        <p>Mon-Sat : 9:00 - 21:00</p>
        <p>Sun: 10:00 - 18:00</p>
      </div>

      <div>
        <h1 className="text-2xl">Social media</h1>
      </div>

      <div>
        <h1 className="text-2xl">Policy privacy</h1>
        <p>
          Check out our policy privacy <a>here</a>
        </p>
      </div>

      <div>
        <h1 className="text-2xl">Contact us </h1>
        <p>+48 827 192 192</p>
        <p>Mon - Fri : 8:00 - 22:00</p>
      </div>
    </div>
  );
};

export default Footer;
