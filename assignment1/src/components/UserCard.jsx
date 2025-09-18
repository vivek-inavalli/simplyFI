export default function UserCard({ user }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(
    user.username
  )}.svg?options[mood][]=happy`;

  return (
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
      <div className="flex-shrink-0">
        <img
          src={avatarUrl}
          alt={user.username}
          className="w-24 h-24 rounded-full border"
        />
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-semibold">Company:</span> {user.company?.name}
        </p>
        <p>
          <span className="font-semibold">Website:</span> {user.website}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {user.address?.street}
          , {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
        </p>
      </div>
    </div>
  );
}
