import { useState } from "react";

export default function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { target } = event;
    setAccount({
      ...account,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/login", {
      method: "POST",
      body: JSON.stringify(account),
    });
  }

  return (
    <div
      style={{
        border: "1px solid #e6e6e6",
        borderRadius: 4,
        padding: "2em",
      }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Username{" "}
          <div>
            <input
              name="username"
              value={account.username}
              onChange={handleChange}
            />
          </div>
        </label>
        <label
          style={{
            marginTop: "1em",
            display: "block",
          }}
        >
          Password{" "}
          <div>
            <input
              name="password"
              value={account.password}
              onChange={handleChange}
            />
          </div>
        </label>
        <div
          style={{
            marginTop: "1em",
            display: "block",
          }}
        >
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
