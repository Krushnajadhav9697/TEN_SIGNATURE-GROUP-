import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ServiceSearchForm() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      // Redirect to Services page with search query
      navigate(`/services?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-b-xl w-full"
    >
      <input
        type="text"
        placeholder="Search for a service"
        className="w-full sm:flex-1 rounded-xl border border-gray-300 px-3 py-3 sm:px-4 sm:py-3 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#22b99a] rounded-xl w-full sm:w-12 h-12 flex items-center justify-center text-white"
      >
        <FontAwesomeIcon icon={faSearch} size="sm" />
      </button>
    </form>
  );
}
