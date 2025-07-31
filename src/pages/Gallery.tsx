import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface GalleryItem {
  id: string;
  image: string;
  category: 'workshop' | 'Mosaic';
  subcategory: 'LLM' | 'Flask' | 'Figma' | 'Ghost Protocol' | 'Space Day';
}

export const Gallery: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // Move previewIndex and related functions inside the component
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      image: 'https://i.postimg.cc/4NQpG0hm/img1.avif',
      category: 'workshop',
      subcategory: 'LLM',
    },
    {
      id: '3',
      image: 'https://i.postimg.cc/HLnSVMGD/IMG-2478.jpg',
      category: 'workshop',
      subcategory: 'Flask',
    },
    {
      id: '4',
      image: 'https://i.postimg.cc/8PxC0bLw/IMG-3678.avif',
      category: 'workshop',
      subcategory: 'LLM',
    },
    {
      id: '7',
      image: 'https://i.postimg.cc/8kmQXsXv/IMG-20250329-123649.jpg',
      category: 'workshop',
      subcategory: 'Figma',
    },
    {
      id: '6',
      image: 'https://i.postimg.cc/sgz4SbKb/20240921-145323.avif',
      category: 'workshop',
      subcategory: 'Figma',
    },
    {
      id: '5',
      image: 'https://i.postimg.cc/3JFvMNCb/IMG-8402.avif',
      category: 'workshop',
      subcategory: 'Figma',
    },
    {
      id: '10',
      image: 'https://i.postimg.cc/VsTm6Gg1/IMG-0926.avif',
      category: 'Mosaic',
      subcategory: 'Space Day',
    },
    {
      id: '8',
      image: 'https://i.postimg.cc/MHkdLHbp/IMG-4288.avif',
      category: 'workshop',
      subcategory: 'Flask',
    },
    {
      id: '9',
      image: 'https://i.postimg.cc/sf7rgZLK/IMG-9574.avif',
      category: 'Mosaic',
      subcategory: 'Space Day',
    },
    {
      id: '2',
      image: 'https://i.postimg.cc/K8RLTDYN/IMG-3759.avif',
      category: 'workshop',
      subcategory: 'LLM',
    },
    {
      id: '11',
      image: 'https://i.postimg.cc/pLjD76Gd/IMG-9473.avif',
      category: 'Mosaic',
      subcategory: 'Space Day',
    },
    {
      id: '12',
      image: 'https://i.postimg.cc/1RVRNjgB/IMG-4686.avif',
      category: 'Mosaic',
      subcategory: 'Ghost Protocol',
    },
    {
      id: '13',
      image: 'https://i.postimg.cc/PxwGN068/IMG-20250319-WA0027.jpg',
      category: 'Mosaic',
      subcategory: 'Ghost Protocol',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'Mosaic', label: 'Mosaic' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Define functions after filteredItems is available in scope
  const openPreview = (index: number) => {
    setPreviewIndex(index);
  };

  const closePreview = () => {
    setPreviewIndex(null);
  };

  const showPrev = () => {
    if (previewIndex !== null) {
      setPreviewIndex((prevIndex) => (prevIndex! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const showNext = () => {
    if (previewIndex !== null) {
      setPreviewIndex((prevIndex) => (prevIndex! + 1) % filteredItems.length);
    }
  };
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (previewIndex !== null) {
      if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'Escape') {
        closePreview();
      }
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [previewIndex, showPrev, showNext, closePreview]);
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] backdrop-blur-sm opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Event{' '}
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Relive the moments from our exciting events, workshops, and
              community gatherings. See the passion and innovation that drives
              our community.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#36B7B7] to-[#2AA198] text-white shadow-lg shadow-[#36B7B7]/25'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => openPreview(index)} // Pass the index here
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 translate-y-4
                      group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <span className="text-2xl text-white font-bold capitalize">{item.subcategory}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {previewIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl mx-auto">
              <img
                src={filteredItems[previewIndex].image}
                alt=""
                className="max-h-[80vh] w-auto mx-auto rounded shadow-lg"
              />
              <button
                onClick={closePreview}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black"
              >
                ✕
              </button>
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-white bg-black/50 rounded-full p-2 hover:bg-black"
              >
                ‹
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-white bg-black/50 rounded-full p-2 hover:bg-black"
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};