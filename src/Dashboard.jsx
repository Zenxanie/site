  const handleLogout = () => {
    window.location.href = `${BACKEND_URL}/auth/logout`;
  };
  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!user)
    return (
      <div className="text-center mt-20">
        <p>You are not logged in.</p>
        <a
          href={`${BACKEND_URL}/auth/discord`}
          className="mt-4 inline-block bg-yellow-400 text-purple-900 font-bold px-6 py-3 rounded-lg"
        >
          Login with Discord
        </a>
      </div>
    );
  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg text-purple-900">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <img
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          alt="Discord Avatar"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <p className="text-xl font-semibold">{user.username}</p>
          <p className="text-gray-600">#{user.discriminator}</p>
        </div>
      </div>
      <p className="mt-6">Welcome to your dashboard, {user.username}!</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
