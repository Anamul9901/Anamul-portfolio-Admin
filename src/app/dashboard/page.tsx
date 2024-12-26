"use client";

import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useAppSelector(selectCurrentUser);
  if (!user) {
    router.push("/login");
  }
  return <div className="min-h-screen  p-6">dashboard</div>;
};

export default Dashboard;
