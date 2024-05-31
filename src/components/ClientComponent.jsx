"use client";

const ClientComponent = ({ children }) => {
  console.log("This is client component");
  return (
    <div>
      ClientComponent
      {children}
    </div>
  );
};

export default ClientComponent;
