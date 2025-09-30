import React, { useEffect, useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function AdminDashboard() {
  const [user, setUser  ] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/user`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then((data) => {
        if (!data.isAdmin) {
          alert("Access denied: Admins only");
          window.location.href = "/";
          return;
        }
        setUser  (data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setUser  (null);
        window.location.href = "/";
      });
  }, []);
  const handleLogout = () => {
    window.location.href = `${BACKEND_URL}/auth/logout`;
  };
