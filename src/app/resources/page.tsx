import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { resources } from "@/data/resources";
import type { Resource } from "@/data/resources";
import LockedOverlay from "@/components/LockedOverlay";
import Link from "next/link";

const fileTypeLabels: Record<Resource["fileType"], string> = {
  pdf: "PDF",
  doc: "Document",
  sheet: "Spreadsheet",
  link: "Link",
};

const fileTypeColors: Record<Resource["fileType"], string> = {
  pdf: "bg-red-100 text-red-700",
  doc: "bg-navy-light text-navy",
  sheet: "bg-green-100 text-green-700",
  link: "bg-gold-light text-gold-dark",
};

function ResourceCard({ resource, userTier }: { resource: Resource; userTier: string }) {
  const locked = resource.tier === "paid" && userTier !== "paid";
  return (
    <div
      className={`relative rounded-xl border p-5 flex flex-col gap-3 ${
        locked ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200 shadow-sm"
      }`}
    >
      {locked && <LockedOverlay />}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-full ${fileTypeColors[resource.fileType]}`}
            >
              {fileTypeLabels[resource.fileType]}
            </span>
            <span className="text-xs text-gray-400">{resource.category}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm">{resource.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{resource.description}</p>
        </div>
        <span
          className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
            resource.tier === "free"
              ? "bg-green-100 text-green-700"
              : "bg-navy-light text-navy"
          }`}
        >
          {resource.tier}
        </span>
      </div>
      {!locked && (
        resource.fileUrl ? (
          <a
            href={resource.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-navy font-semibold hover:underline"
          >
            {resource.fileType === "link" ? "Open" : "Download"}
          </a>
        ) : (
          <p className="text-xs text-gray-400 italic">File coming soon</p>
        )
      )}
    </div>
  );
}

export default async function ResourcesPage() {
  const session = await auth();
  if (!session) redirect("/login?callbackUrl=/resources");

  const userTier = session.user.tier ?? "free";
  const categories = [...new Set(resources.map((r) => r.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Resources</h1>
              <p className="mt-1 text-gray-500 text-sm">
                Downloadable guides, trackers, and reference sheets.
              </p>
            </div>
            {userTier === "free" && (
              <Link
                href="/membership"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-navy text-white text-sm font-bold hover:bg-navy-dark transition-colors shadow-sm"
              >
                Unlock all resources
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {categories.map((category) => {
          const categoryResources = resources.filter((r) => r.category === category);
          return (
            <div key={category} className="mb-10">
              <h2 className="text-base font-extrabold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryResources.map((r) => (
                  <ResourceCard key={r.id} resource={r} userTier={userTier} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
