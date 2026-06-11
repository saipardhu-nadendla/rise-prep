"use client";

import { useState } from "react";

type User = {
  id: string;
  name: string | null;
  email: string;
  tier: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/users", {
      headers: { "x-admin-password": password },
    });

    if (!res.ok) {
      setError("Incorrect password.");
      setLoading(false);
      return;
    }

    const data = await res.json();
    setUsers(data);
    setAuthed(true);
    setLoading(false);
  }

  async function toggleTier(userId: string, currentTier: string) {
    setToggling(userId);
    const newTier = currentTier === "free" ? "paid" : "free";

    const res = await fetch("/api/admin/toggle-tier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ userId, tier: newTier }),
    });

    if (res.ok) {
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, tier: newTier } : u))
      );
    }
    setToggling(null);
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h1 className="text-xl font-extrabold text-gray-900 mb-6">Admin access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin password"
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-blue-700 text-white text-sm font-bold hover:bg-blue-800 transition-colors disabled:opacity-60"
            >
              {loading ? "Checking…" : "Login"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">Admin: Users</h1>
          <span className="text-sm text-gray-500">{users.length} total users</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tier
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.name ?? "N/A"}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${
                        user.tier === "paid"
                          ? "bg-navy-light text-navy"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {user.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleTier(user.id, user.tier)}
                      disabled={toggling === user.id}
                      className="text-xs font-semibold text-navy hover:underline disabled:opacity-50"
                    >
                      {toggling === user.id
                        ? "Updating..."
                        : user.tier === "free"
                        ? "→ Upgrade to paid"
                        : "→ Downgrade to free"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
            <p className="text-center py-10 text-gray-400 text-sm">No users yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
