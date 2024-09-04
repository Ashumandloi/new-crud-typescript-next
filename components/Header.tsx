import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div style={{ backgroundColor: "rgb(222, 207, 236)" }}>
      <h1
        style={{
          textAlign: "center",
          padding: "15px",
          margin: "0",
        }}
      >
        CRUD Application
      </h1>
    </div>
  );
};

export default Header;
