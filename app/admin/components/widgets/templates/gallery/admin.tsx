"use client";

import { useEffect, useState } from "react";

interface GalleryAdminProps {
  id: number;
}

export default function GalleryAdmin({ id }: GalleryAdminProps) {
  const [images, setImages] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    loadImages();
  }, [id]);

 const loadImages = async () => {
  try {
    const res = await fetch(`/admin/components/widgets/templates/gallery/callback?short_code=${id}`);
    const data = await res.json();

    let list: string[] = [];
    if (
      Array.isArray(data.images) &&
      data.images[0] &&
      Array.isArray(data.images[0].image_list)
    ) {
      list = data.images[0].image_list;
    }

    // Fill to 12 slots so your grid stays aligned
    setImages([...list, ...Array(24 - list.length).fill('')]);
  } catch (error) {
    console.error('Failed to load images:', error);
    setImages(Array(24).fill(''));
  }
};


  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setEditingIndex(index);
    }
  };

  const handleImageUpload = async (index: number) => {
    if (!selectedFile) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("index", index.toString());
      formData.append("short_code", id.toString());

      const res = await fetch("/admin/components/widgets/templates/gallery/callback", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        await loadImages();
        setSelectedFile(null);
        setEditingIndex(null);
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = async (index: number) => {
    try {
      const formData = new FormData();
      formData.append("index", index.toString());
      formData.append("short_code", id.toString());
      formData.append("remove", "true");

      const res = await fetch("/admin/components/widgets/templates/gallery/callback", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        await loadImages();
      }
    } catch (err) {
      console.error("Remove failed:", err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Gallery Editor (ID: {id})</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="relative group border-2 border-dashed border-gray-300 rounded-lg p-2"
          >
            {/* Image Box */}
            <div className="aspect-square bg-gray-100 rounded-md overflow-hidden mb-2">
              {images[index] ? (
                <img
                  src={images[index]}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-xs">No image</span>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <label className="cursor-pointer bg-blue-500 text-white text-xs px-2 py-1 rounded text-center hover:bg-blue-600">
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileSelect(e, index)}
                />
              </label>

              {images[index] && (
                <button
                  onClick={() => removeImage(index)}
                  className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Upload Confirmation */}
            {editingIndex === index && selectedFile && (
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-2 rounded-lg">
                <div className="bg-white p-3 rounded-md text-center">
                  <p className="text-xs mb-2">Upload {selectedFile.name}?</p>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleImageUpload(index)}
                      className="bg-green-500 text-white text-xs px-2 py-1 rounded"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => {
                        setEditingIndex(null);
                        setSelectedFile(null);
                      }}
                      className="bg-gray-500 text-white text-xs px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {uploading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="mb-2">Uploading image...</p>
            <div className="w-32 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Instructions:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Click "Choose File" to select an image</li>
          <li>• Click "Confirm" to upload the selected image</li>
          <li>• Click "Remove" to delete an existing image</li>
          <li>• Images are automatically saved</li>
        </ul>
      </div>
    </div>
  );
}
