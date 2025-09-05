"use client";

import { useState, useEffect } from "react";

interface WebsitePreviewProps {
  url: string;
  title: string;
  fallbackImage: string;
  className?: string;
}

export default function WebsitePreview({ 
  url, 
  title, 
  fallbackImage, 
  className = "" 
}: WebsitePreviewProps) {
  const [showModal, setShowModal] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(fallbackImage);

  // Generate screenshot URL using a free service
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    url,
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  const handlePreviewClick = () => {
    setShowModal(true);
    setIframeError(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  // Preload screenshot; if it loads, swap from fallback to screenshot
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setImageSrc(screenshotUrl);
    img.onerror = () => setImageSrc(fallbackImage);
    img.src = screenshotUrl;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenshotUrl, fallbackImage]);

  return (
    <>
      <div className={`group relative cursor-pointer overflow-hidden rounded-lg ${className}`}>
        {/* Always show something: start with fallback, swap to screenshot when ready */}
        <div className="relative">
          <img
            src={imageSrc}
            alt={`Preview ${title}`}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
          
          {/* Preview button - Desktop only */}
          <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
            <button
              onClick={handlePreviewClick}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              🔍 Previzualizare
            </button>
          </div>
          
          {/* Visit website link - Mobile: always visible, Desktop: on hover */}
          <div className="absolute bottom-3 right-3 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-primary px-3 py-1 text-sm text-white hover:bg-primary/90"
              onClick={(e) => e.stopPropagation()}
            >
              Vizitează ↗
            </a>
          </div>

          {/* Mobile overlay with direct access */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:hidden">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              📱 Vezi site-ul
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative z-10 mx-4 h-[90vh] w-[95vw] max-w-7xl overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm font-medium text-gray-700">{title}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{url}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                >
                  Vizitează site-ul ↗
                </a>
                <button
                  onClick={handleCloseModal}
                  className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  ✕ Închide
                </button>
              </div>
            </div>
            
            {/* Iframe Content */}
            <div className="h-[calc(90vh-80px)]">
              {iframeError ? (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚫</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Nu se poate încărca previzualizarea
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Site-ul nu permite încărcarea în iframe din motive de securitate.
                    </p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90 transition-colors"
                    >
                      Deschide în tab nou ↗
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src={url}
                  className="h-full w-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  onError={handleIframeError}
                  title={`Preview: ${title}`}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
