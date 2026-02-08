import React, { useRef } from "react";
import { FaUpload, FaFilePdf, FaFolder } from "react-icons/fa";
import { FaFileZipper } from "react-icons/fa6";
import { BsFiletypeMp4, BsFiletypeXls } from "react-icons/bs";
import { TbFileTypePng } from "react-icons/tb";

const DocumentsTab: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold">Documents</h3>
        <div className="flex">
          <input type="file" ref={fileInputRef} className="hidden" />
          <button
            className="bg-sky-600 hover:bg-orange-600 font-bold px-2 py-1 rounded-xs cursor-pointer flex items-center gap-2"
            onClick={() => fileInputRef.current?.click()}
          >
            <FaUpload size={18} />
            Upload File
          </button>
        </div>
      </div>
      <table className="text-xs mt-2 text-left bg-neutral-950 border border-neutral-700">
        <thead className="bg-neutral-600">
          <tr>
            <th className="p-2">File Name</th>
            <th className="p-2">Type</th>
            <th className="p-2">Size</th>
            <th className="p-2">Upload Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-neutral-800 border border-neutral-700">
            <td className="flex items-center gap-2 p-2">
              <FaFileZipper size={18} />
              <p>my-resume.zip</p>
            </td>
            <td className="p-2">Zip File</td>
            <td className="p-2">1.2 MB</td>
            <td className="p-2">22 Jan 2026</td>
          </tr>
          <tr className="hover:bg-neutral-800 border border-neutral-700">
            <td className="flex items-center gap-2 p-2">
              <FaFilePdf size={18} />
              <p>bank-management-system.pdf</p>
            </td>
            <td className="p-2">PDF File</td>
            <td className="p-2">9.56 MB</td>
            <td className="p-2">22 Jan 2026</td>
          </tr>
          <tr className="hover:bg-neutral-800 border border-neutral-700">
            <td className="flex items-center gap-2 p-2">
              <BsFiletypeMp4 size={18} />
              <p>tour-video.mp4</p>
            </td>
            <td className="p-2">MP4 File</td>
            <td className="p-2">12.44 MB</td>
            <td className="p-2">21 Jan 2026</td>
          </tr>
          <tr className="hover:bg-neutral-800 border border-neutral-700">
            <td className="flex items-center gap-2 p-2">
              <BsFiletypeXls size={18} />
              <p>account-statement.xls</p>
            </td>
            <td className="p-2">XLS File</td>
            <td className="p-2">2.5 KB</td>
            <td className="p-2">20 Jan 2026</td>
          </tr>
          <tr className="hover:bg-neutral-800 border border-neutral-700">
            <td className="flex items-center gap-2 p-2">
              <FaFolder size={18} />
              <p>project-files</p>
            </td>
            <td className="p-2">Folder</td>
            <td className="p-2">100 MB</td>
            <td className="p-2">19 Jan 2026</td>
          </tr>
          <tr className="hover:bg-neutral-800 border border-neutral-700">
            <td className="flex items-center gap-2 p-2">
              <TbFileTypePng size={18} />
              <p>logo.png</p>
            </td>
            <td className="p-2">PNG File</td>
            <td className="p-2">78 KB</td>
            <td className="p-2">19 Jan 2026</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-end">
        <button className="bg-orange-600 hover:bg-sky-600 p-2 font-bold rounded-xs cursor-pointer">
          Load More
        </button>
      </div>
    </div>
  );
};

export default DocumentsTab;
