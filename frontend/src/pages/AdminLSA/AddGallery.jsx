import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getApiUrl } from '../../utils/apiConfig';

const AddGallery = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' or 'manage'

  // Fetch uploaded images
  useEffect(() => {
    fetchUploadedImages();
  }, []);

  const fetchUploadedImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(getApiUrl('/api/gallery'));
      setUploadedImages(response.data.images || []);
    } catch (error) {
      console.error('Error fetching gallery:', error);
      setMessage({ text: 'Error loading gallery images', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file =>
      ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)
    );

    if (validFiles.length !== files.length) {
      setMessage({ text: 'Only JPG, PNG, and WebP files are allowed', type: 'error' });
    }

    setImages(validFiles);
  };

  const handleUpload = async () => {
    if (!images.length) {
      setMessage({ text: 'Please select at least one image', type: 'error' });
      return;
    }

    setUploading(true);
    setMessage({ text: '', type: '' });

    try {
      const formData = new FormData();
      images.forEach(image => formData.append('galleryImages', image));

      const response = await axios.post(getApiUrl('/api/backend/gallery'), formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.success) {
        setMessage({ text: 'Images uploaded successfully!', type: 'success' });
        setImages([]);
        document.getElementById('gallery-upload').value = '';

        fetchUploadedImages();
        setActiveTab('manage');

        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
      } else {
        setMessage({ text: response.data.message || 'Upload failed', type: 'error' });
      }
    } catch (error) {
      console.error('Upload error:', error.response?.data || error.message);
      setMessage({ text: error.response?.data?.message || 'Error uploading images', type: 'error' });
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (filename) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await axios.delete(getApiUrl(`/api/gallery/${filename}`));
      if (response.data.success) {
        setMessage({ text: 'Image deleted successfully!', type: 'success' });
        fetchUploadedImages();
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      } else {
        setMessage({ text: response.data.message || 'Delete failed', type: 'error' });
      }
    } catch (error) {
      console.error('Delete error:', error.response?.data || error.message);
      setMessage({ text: 'Error deleting image', type: 'error' });
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-[#0A1428] mb-6">Gallery Management</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {['upload', 'manage'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium ${activeTab === tab ? 'border-b-2 border-[#0A1428] text-[#0A1428]' : 'text-gray-500'}`}
            >
              {tab === 'upload' ? 'Upload Images' : `Manage Gallery (${uploadedImages.length})`}
            </button>
          ))}
        </div>

        {/* Messages */}
        {message.text && (
          <div className={`p-4 rounded-lg mb-6 ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.text}
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <input
                type="file"
                id="gallery-upload"
                multiple
                accept="image/jpeg, image/png, image/webp"
                onChange={handleImageChange}
                className="hidden"
              />
              <label htmlFor="gallery-upload" className="cursor-pointer">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600">Click to upload images or drag and drop</p>
                <p className="text-sm text-gray-500 mt-2">JPG, PNG, WebP up to 10MB each</p>
              </label>
            </div>

            {images.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#0A1428] mb-4">Selected Images ({images.length})</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image, idx) => (
                    <div key={idx} className="relative group">
                      <img src={URL.createObjectURL(image)} alt={`Preview ${idx+1}`} className="w-full h-32 object-cover rounded-lg" />
                      <button
                        onClick={() => removeImage(idx)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                      <p className="text-xs text-gray-500 truncate mt-1">{image.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleUpload}
                disabled={uploading || !images.length}
                className={`px-6 py-3 rounded-lg font-medium flex items-center ${uploading || !images.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0A1428] hover:bg-opacity-90 text-white'}`}
              >
                {uploading ? 'Uploading...' : 'Upload Images'}
              </button>
            </div>
          </>
        )}

        {/* Manage Tab */}
        {activeTab === 'manage' && (
          <div>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A1428]"></div>
              </div>
            ) : !uploadedImages.length ? (
              <p className="text-center text-gray-500 py-12">No images in gallery yet.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {uploadedImages.map((image, idx) => (
                  <div key={idx} className="relative group bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={getApiUrl(`/gallery/${image}`)}
                      alt={`Gallery ${idx+1}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'}
                    />
                    <button
                      onClick={() => deleteImage(image)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Delete image"
                    >
                      ✕
                    </button>
                    <div className="p-3">
                      <p className="text-xs text-gray-500 truncate">{image}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddGallery;
