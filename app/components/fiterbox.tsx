// src/components/FilterBox.tsx
import React from 'react';

const FilterBox: React.FC = () => {
    return (
        <div className="p-4 bg-white shadow rounded-lg max-w-screen-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sessions</label>
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <input type="radio" id="2021" name="session" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="2021" className="ml-2 text-sm font-medium text-gray-700">2021</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="2022" name="session" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="2022" className="ml-2 text-sm font-medium text-gray-700">2022</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="2023" name="session" className="h-4 w-4 text-blue-600 border-gray-300 rounded" defaultChecked />
                                <label htmlFor="2023" className="ml-2 text-sm font-medium text-gray-700">2023</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="2024" name="session" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="2024" className="ml-2 text-sm font-medium text-gray-700">2024</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Quota</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option>Search Quota</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option>Search State</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Institute</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option>Search Institute</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Type</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option>Search Institute Types</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Beds</label>
                        <div className="flex space-x-2">
                            <input type="number" placeholder="0" className="w-full p-2 border border-gray-300 rounded" />
                            <span className="self-center">-</span>
                            <input type="number" placeholder="10000" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Fee</label>
                        <div className="flex space-x-2">
                            <input type="number" placeholder="0" className="w-full p-2 border border-gray-300 rounded" />
                            <span className="self-center">-</span>
                            <input type="number" placeholder="100000000" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bond Years</label>
                        <div className="flex space-x-2">
                            <input type="number" placeholder="0" className="w-full p-2 border border-gray-300 rounded" />
                            <span className="self-center">-</span>
                            <input type="number" placeholder="20" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bond Penalty</label>
                        <div className="flex space-x-2">
                            <input type="number" placeholder="0" className="w-full p-2 border border-gray-300 rounded" />
                            <span className="self-center">-</span>
                            <input type="number" placeholder="100000000" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                            <option>Select Course</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course Type</label>
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <input type="checkbox" id="clinical" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="clinical" className="ml-2 text-sm font-medium text-gray-700">Clinical</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="non-clinical" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="non-clinical" className="ml-2 text-sm font-medium text-gray-700">Non-Clinical</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="para-clinical" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="para-clinical" className="ml-2 text-sm font-medium text-gray-700">Para-Clinical</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="pre-clinical" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="pre-clinical" className="ml-2 text-sm font-medium text-gray-700">Pre-Clinical</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Degree</label>
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <input type="checkbox" id="dnb" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="dnb" className="ml-2 text-sm font-medium text-gray-700">DNB</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="degree" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="degree" className="ml-2 text-sm font-medium text-gray-700">Degree</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="degree-6-years" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="degree-6-years" className="ml-2 text-sm font-medium text-gray-700">Degree(6 Years)</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="diploma" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="diploma" className="ml-2 text-sm font-medium text-gray-700">Diploma</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="mch" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="mch" className="ml-2 text-sm font-medium text-gray-700">MCh</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="md" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="md" className="ml-2 text-sm font-medium text-gray-700">MD</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="mph" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="mph" className="ml-2 text-sm font-medium text-gray-700">MPH</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="ms" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="ms" className="ml-2 text-sm font-medium text-gray-700">MS</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                    View Results
                </button>
            </div>
        </div>
    );
};

export default FilterBox;
