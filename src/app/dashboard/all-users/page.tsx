"use client";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [isMounted, setIsMounted] = useState(false);



  // For hydration error handle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center pt-10 px-4">
     all users
    </div>
  );
};

export default AllUsers;
