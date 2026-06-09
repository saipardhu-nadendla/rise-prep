import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { lessons } from "@/data/lessons";
import type { Lesson } from "@/data/lessons";
import LockedOverlay from "@/components/LockedOverlay";
import Link from "next/link";

function LessonCard({ lesson, userTier }: { lesson: Lesson; userTier: string }) {
  const locked = lesson.tier === "paid" && userTier !== "paid";
  return (
    <div
      className={`relative rounded-xl border p-4 ${
        locked ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200 shadow-sm"
      }`}
    >
      {locked && <LockedOverlay />}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
            {lesson.module}
          </p>
          <h3 className="font-bold text-gray-900 text-sm">{lesson.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{lesson.description}</p>
        </div>
        <span
          className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
            lesson.tier === "free"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {lesson.tier}
        </span>
      </div>
      {!locked && lesson.videoUrl && (
        <a
          href={lesson.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-700 font-semibold hover:underline"
        >
          ▶ Watch lesson
        </a>
      )}
      {!locked && !lesson.videoUrl && (
        <p className="mt-3 text-xs text-gray-400 italic">Video coming soon</p>
      )}
    </div>
  );
}

function ModuleGroup({
  module,
  moduleLessons,
  userTier,
}: {
  module: string;
  moduleLessons: Lesson[];
  userTier: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="text-base font-extrabold text-gray-800 mb-3 pb-2 border-b border-gray-200">
        {module}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {moduleLessons.map((l) => (
          <LessonCard key={l.id} lesson={l} userTier={userTier} />
        ))}
      </div>
    </div>
  );
}

export default async function LessonsPage() {
  const session = await auth();
  if (!session) redirect("/login?callbackUrl=/lessons");

  const userTier = session.user.tier ?? "free";

  const mathLessons = lessons.filter((l) => l.subject === "math");
  const englishLessons = lessons.filter((l) => l.subject === "english");
  const mathModules = [...new Set(mathLessons.map((l) => l.module))];
  const englishModules = [...new Set(englishLessons.map((l) => l.module))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Lessons</h1>
              <p className="mt-1 text-gray-500 text-sm">
                Welcome back, {session.user.name?.split(" ")[0]}.{" "}
                {userTier === "free" ? (
                  <>You&apos;re on the <strong>free tier</strong>.</>
                ) : (
                  <>You have <strong>full access</strong>.</>
                )}
              </p>
            </div>
            {userTier === "free" && (
              <Link
                href="/membership"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-700 text-white text-sm font-bold hover:bg-blue-800 transition-colors shadow-sm"
              >
                Unlock all lessons →
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-12">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">📐</span> Math
          </h2>
          {mathModules.map((mod) => (
            <ModuleGroup
              key={mod}
              module={mod}
              moduleLessons={mathLessons.filter((l) => l.module === mod)}
              userTier={userTier}
            />
          ))}
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">📖</span> English
          </h2>
          {englishModules.map((mod) => (
            <ModuleGroup
              key={mod}
              module={mod}
              moduleLessons={englishLessons.filter((l) => l.module === mod)}
              userTier={userTier}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
