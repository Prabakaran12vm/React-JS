const Contact = () => {
  return (
    <div>
      <h1>Buy me a Coffee</h1>
      <div>
        <h1>Contact via linkedin, facebook</h1>
      </div>
      
      <div>
      <label>
        Name:
        <input type="text" className=" rounded-lg" name="name" />
      </label>
      <input type="submit" className="bg-cyan-100" value="Submit" />
      </div>
    </div>
  );
};
export default Contact;
