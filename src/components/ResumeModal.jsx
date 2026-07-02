import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeModal({ isOpen, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setPageWidth(window.innerWidth - 50);
      } else if (window.innerWidth < 1024) {
        setPageWidth(650);
      } else {
        setPageWidth(800);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}

        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">

          <h2 className="text-white text-xl font-semibold">
            Resume
          </h2>

          <button
            onClick={onClose}
            className="text-white text-3xl hover:text-red-400"
          >
            ×
          </button>

        </div>

        {/* PDF */}

        <div className="flex-1 overflow-auto flex justify-center p-4 bg-slate-800">

          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <p className="text-white">
                Loading Resume...
              </p>
            }
            error={
              <p className="text-red-400">
                Failed to load PDF.
              </p>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
            />
          </Document>

        </div>

        {/* Footer */}

        {numPages && (
          <div className="flex justify-center items-center gap-6 p-4 border-t border-slate-700">

            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber((p) => p - 1)}
              className="bg-cyan-500 disabled:bg-gray-600 px-5 py-2 rounded-lg text-white"
            >
              Previous
            </button>

            <span className="text-white">
              {pageNumber} / {numPages}
            </span>

            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber((p) => p + 1)}
              className="bg-cyan-500 disabled:bg-gray-600 px-5 py-2 rounded-lg text-white"
            >
              Next
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default ResumeModal;