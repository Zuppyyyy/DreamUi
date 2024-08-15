// components/ProfileCard.tsx

const ProfileCard = () => {
  return (
    <div className="w-[20rem] h-20 bg-slate-300 text-black border border-pink-400">
      <h1>this is a first components</h1>
    </div>
  );
};

export default ProfileCard;

export const Modifications = `@keyframes gradient-border {
      0% {
        border-color: #f00; /* Red */
      }
      25% {
        border-color: #0f0; /* Green */
      }
      50% {
        border-color: #00f; /* Blue */
      }
      75% {
        border-color: #ff0; /* Yellow */
      }
      100% {
        border-color: #f00; /* Red */
      }
    }

    .animate-gradient-border {
      animation: gradient-border 3s infinite;
    }`
