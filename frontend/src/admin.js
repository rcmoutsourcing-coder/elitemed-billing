// frontend/admin.js
import React, { useState } from 'react';

export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = async () => {
    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    if (response.ok) {
      alert("Blog Post Uploaded Successfully!");
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#1B365D]">EliteMed Admin Dashboard</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Create New Blog Post</h2>
        
        <label className="block mb-2">Post Title</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded mb-4" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. How to reduce claim denials"
        />

        <label className="block mb-2">Content</label>
        <textarea 
          className="w-full p-2 border rounded mb-4 h-40" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog details here..."
        ></textarea>

        <button 
          onClick={handlePost}
          className="bg-[#0EA5E9] text-white px-6 py-2 rounded font-bold hover:bg-[#1B365D]"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
}