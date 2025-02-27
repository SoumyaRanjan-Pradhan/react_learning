import Field from "./Field";

const Registration = ({
  setUsername,
  setEmail,
  setRole,
  setDate,
  input_value,
  addRegister,
  updateData,
}) => {
  let {username,email,role,date} = input_value;
  return (
    <>
      <form onSubmit={(e)=>{
e.preventDefault();
      }}>
        <Field
          format="text"
          label="Username"
          example="e.g Soumya Pradhan"
          setValue={setUsername}
          value = {username}
        />
        <Field
          format="email"
          label="Email"
          example="e.g soumya123@gmail.com"
          setValue={setEmail}
          value = {email}
        />
        <Field format="text" label="Role" example="Admin" setValue={setRole} value = {role} />
        <Field
          format="text"
          label="Created At"
          example="dd-mm-yyyy"
          setValue={setDate}
          value = {date}
        />
        <button type="submit" id="submit" onClick={addRegister}>
          Add
        </button>
        <button type="submit" id="update" onClick={updateData}>
          updte
        </button>
      </form>
    </>
  );
};

export default Registration;
