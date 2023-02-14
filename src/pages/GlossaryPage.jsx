import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ErrorBoundaryUI from "../components/ErrorBoundary";
import { terms } from "../data/glossary";

function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [includeNonTechnicalTerms, setIncludeNonTechnicalTerms] = useState(true);
  return (
    <ErrorBoundaryUI>
      <div>
        <h1 className="text-3xl font-bold mb-4">Glossary</h1>
        <form className="mb-8">
          <div className="mb-4">
            <label htmlFor="tech-terms" className="mr-4">Include Non-Technical Terms</label>
            <input type="checkbox" name="tech-terms" id="tech-terms" checked={includeNonTechnicalTerms} onChange={(e) => setIncludeNonTechnicalTerms(e.target.checked)} />
          </div>
          <div className="mb-4">
          <label
            htmlFor="search"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <input
            type="search"
            id="search"
            placeholder="flex-basis? background-color?"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          </div>
        </form>
        <p>Term: {searchTerm}</p>
        <ul className="mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {terms.filter(({category}) => {
            if(includeNonTechnicalTerms) return true;
            return category === 'tech';
          }).filter(({title}) => title.toLowerCase().includes(searchTerm.toLowerCase())).map(({ _id, title }) => (
            <li key={_id} className="pb-3 sm:pb-4 text-left">
              <NavLink to={`/glossary/${title}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </ErrorBoundaryUI>
  );
}

export default GlossaryPage;
