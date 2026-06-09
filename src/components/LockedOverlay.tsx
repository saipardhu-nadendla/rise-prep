import Link from "next/link";

export default function LockedOverlay() {
  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] rounded-xl flex flex-col items-center justify-center gap-2 z-10">
      <svg className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      <p className="text-xs font-semibold text-gray-500">Paid tier</p>
      <Link
        href="/membership"
        className="text-xs text-blue-700 font-bold hover:underline"
      >
        Upgrade →
      </Link>
    </div>
  );
}
