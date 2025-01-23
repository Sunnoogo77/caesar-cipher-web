import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FileEncryptForm from './components/FileEncryptForm';
import CaesarForm from './components/CaesarForm';

function App() {
    return (
        <Router>
            <div className="container mx-auto p-4">
                <nav className="mb-12 flex justify-between items-center">
                    <h1 className="text-2xl text-white font-bold">Application de Chiffrement</h1>
                    <div>
                        <Link 
                            to="/text-encryption" 
                            className="bg-blue-500 text-white p-2 rounded mr-2">
                            Chiffrement de Texte
                        </Link>
                        <Link 
                            to="/file-encryption" 
                            className="bg-green-500 text-white p-2 rounded">
                            Chiffrement de Fichier
                        </Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<CaesarForm />} />
                    <Route path="/text-encryption" element={<CaesarForm />} />
                    <Route path="/file-encryption" element={<FileEncryptForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
