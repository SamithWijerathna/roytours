"use client";
import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";



export default function TemplateSelector({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  const [selectedWidget, setSelectedWidget] = useState<{
  id: number;
  folder: string;
} | null>(null);

const DynamicAdminPanel = selectedWidget
  ? lazy(() =>
      import(`../templates/${selectedWidget.folder}/admin`).catch(() => ({
        default: () => <div>Admin panel not found for this template.</div>,
      }))
    )
  : null;

  const [templates, setTemplates] = useState<any[]>([]);
  const [widgets, setWidgets] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  const [showCreate, setShowCreate] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/admin/api/widgetmanager")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setTemplates(data);
        setWidgets(data);
      })
      .catch(console.error);
  }, []);

  const createWidget = async () => {
    if (!selectedId || !name) return alert("Select template and enter name");
    const res = await fetch("/admin/api/widgetmanager", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ template_id: selectedId, widget_name: name }),
    });
    const data = await res.json();
    if (data.success) {
      alert("Widget created!");
      setWidgets((prev) => [...prev, data.widget]);
      setShowCreate(false);
      setName("");
      setSelectedId(null);
    } else {
      alert(data.error || "Error");
    }
  };

  return (
    <section>
      {/* Tabs */}
      <div className="border-b border-b-gray-100">
        <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
          {[
            "Templates",
            "Preferences",
            "Notifications",
            "Applications",
            "API",
          ].map((tab, i) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(i)}
                className={`inline-flex cursor-pointer items-center gap-2 px-1 py-3 hover:text-primary-700 ${
                  activeTab === i
                    ? "relative text-primary-700 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="py-3">
        {activeTab === 0 && (
          <section>
            {/* Top bar */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {showCreate ? "Create New Widget" : "Your Widgets"}
              </h2>
              {!showCreate && (
                <button
                  onClick={() => setShowCreate(true)}
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                  + Create Widget
                </button>
              )}
            </div>

            {/* List View */}
            {!showCreate && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {templates.length === 0 && (
                  <p className="text-gray-500">No widgets yet.</p>
                )}
                {templates.map((t) =>
                  t.widgets.map((w: any) => (
                    <div
                      key={w.widget_id}
                      className="relative mx-auto h-60 max-w-md overflow-hidden rounded-lg shadow hover:shadow-lg cursor-pointer cursor-pointer"
                        onClick={() => setSelectedWidget({ id: w.widget_id, folder: t.folder })}
                    >
                      {/* Use template banner */}
                      <img
                        src={t.banner}
                        className="w-full h-full object-cover"
                        alt={t.name}
                      />
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black pointer-events-none"></div>
                      <div className="absolute inset-x-0 bottom-0 z-20 p-4 pointer-events-none">
                        <h3 className="text-xl font-medium text-white">
                          {w.widget_name} - {t.name}
                        </h3>
                        <p className="text-white text-opacity-80 text-sm">
                          Status: {w.active}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {DynamicAdminPanel && selectedWidget && (
              <Suspense fallback={<div>Loading admin panel...</div>}>
                <DynamicAdminPanel id={selectedWidget.id} />
              </Suspense>
            )}


            {/* Create View */}
            {showCreate && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {templates.map((t) => (
                    <div
                      key={t.folder}
                      onClick={() =>
                        setSelectedId((prev) => (prev === t.id ? null : t.id))
                      }
                      className={`relative mx-auto h-60 max-w-md overflow-hidden rounded-lg shadow cursor-pointer transition ${
                        selectedId === t.id
                          ? "ring-4 ring-blue-500"
                          : "hover:shadow-lg"
                      }`}
                    >
                      <img
                        src={t.banner}
                        className="w-full h-full object-cover"
                        alt={t.name}
                      />
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black pointer-events-none"></div>
                      <div className="absolute inset-x-0 bottom-0 z-20 p-4 pointer-events-none">
                        <h3 className="text-xl font-medium text-white">
                          {t.name || t.folder}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Widget name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded px-3 py-2"
                  />
                  <button
                    onClick={createWidget}
                    className="px-4 py-2 rounded bg-green-600 text-white"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => setShowCreate(false)}
                    className="px-4 py-2 rounded bg-gray-300 text-black"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </section>
  );
}
