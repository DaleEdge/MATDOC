import React, { useState } from 'react';

const DropdownMenu: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<string>('NEET PG');

    const handleMenuChange = (menu: string) => {
        setSelectedMenu(menu);
    };

    const renderContent = () => {
        switch (selectedMenu) {
            case 'NEET PG':
                return <div>NEET PG Content</div>;
            case 'UG':
                return <div>UG Content</div>;
            case 'PG':
                return <div>PG Content</div>;
            case 'MDS':
                return <div>MDS Content</div>;
            case 'SS':
                return <div>SS Content</div>;
            case 'INI-CET PG':
                return <div>INI-CET PG Content</div>;
            case 'INI-CET SS':
                return <div>INI-CET SS Content</div>;
            case 'TN MRB Exam':
                return <div>TN MRB Exam Content</div>;
            default:
                return <div>Select a menu</div>;
        }
    };

    return (
        <div className="p-4">
            <div className="relative">
                <button className="bg-blue-500 text-white p-2 rounded" type="button">
                    {selectedMenu}
                </button>
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded">
                    <ul className="py-1">
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('NEET PG')}>
                                NEET PG
                            </button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('UG')}>
                                UG
                            </button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('PG')}>
                                PG
                            </button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('MDS')}>
                                MDS
                            </button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('SS')}>
                                SS
                            </button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('INI-CET PG')}>
                                INI-CET PG
                            </button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('INI-CET SS')}>
                                INI-CET SS
                            </button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={() => handleMenuChange('TN MRB Exam')}>
                                TN MRB Exam
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default DropdownMenu;