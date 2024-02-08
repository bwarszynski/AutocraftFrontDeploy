import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'tailwindcss/tailwind.css';

const WarehouseSystem = () => {
    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [newProductQuantity, setNewProductQuantity] = useState('');

    useEffect(() => {
        // Załaduj produkty z local storage
        const storedProducts = localStorage.getItem('warehouseProducts');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    useEffect(() => {
        // Zapisz produkty do local storage
        localStorage.setItem('warehouseProducts', JSON.stringify(products));
    }, [products]); // Uruchom funkcję przy każdej zmianie produktu

    const handleAddProduct = () => {
        if (newProductName.trim() === '' || isNaN(newProductQuantity) || newProductQuantity < 0) {
            alert('Wprowadź ilość');
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: newProductName,
            quantity: parseInt(newProductQuantity, 10),
        };

        setProducts([...products, newProduct]);
        setNewProductName('');
        setNewProductQuantity('');
    };

    const handleRemoveProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const handleUpdateQuantity = (productId, newQuantity) => {
        const updatedProducts = products.map((product) =>
            product.id === productId ? { ...product, quantity: parseInt(newQuantity, 10) } : product
        );
        setProducts(updatedProducts);
    };

    const handleExportToXML = () => {
        const xmlProducts = `<?xml version="1.0" encoding="UTF-8"?>
      <products>
        ${products.map(
            (product) => `
          <product>
            <id>${product.id}</id>
            <name>${product.name}</name>
            <quantity>${product.quantity}</quantity>
          </product>
        `
        )}
      </products>`;

        const blob = new Blob([xmlProducts], { type: 'text/xml' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'warehouse_products.xml';
        link.click();
    };

    const handleImportFromXML = (event) => {
        const file = event.target.files[0];

        if (!file) {
            alert('Wybierz plik.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const xmlString = e.target.result;
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            const importedProducts = Array.from(xmlDoc.getElementsByTagName('product')).map(
                (productNode) => ({
                    id: productNode.querySelector('id').textContent,
                    name: productNode.querySelector('name').textContent,
                    quantity: parseInt(productNode.querySelector('quantity').textContent, 10),
                })
            );

            setProducts([...products, ...importedProducts]);
        };

        reader.readAsText(file);
    };

    const handleDownloadPDF = () => {
        const pdf = new jsPDF();
        pdf.text('System zarzadzania magazynem i zamowieniami', 20, 10);

        products.forEach((product, index) => {
            pdf.text(
                `${index + 1}. ${product.name} - Ilosc: ${product.quantity}`,
                20,
                20 + index * 10
            );
        });

        pdf.save('warehouse_list.pdf');
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">System zarządzania magazynem i zamówieniami</h1>

            <div className="flex space-x-4">
                <div className="flex-grow">
                    <label className="block mb-2">
                        Nazwa produktu:
                        <input
                            className="w-full border p-2"
                            type="text"
                            value={newProductName}
                            onChange={(e) => setNewProductName(e.target.value)}
                        />
                    </label>
                </div>

                <div className="flex-grow">
                    <label className="block mb-2">
                        Ilość:
                        <input
                            className="w-full border p-2"
                            type="number"
                            value={newProductQuantity}
                            onChange={(e) => setNewProductQuantity(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleAddProduct}
                    >
                        Dodaj towar
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={handleExportToXML}
                >
                    Eksportuj do XML
                </button>

                <input
                    className="ml-4"
                    type="file"
                    accept=".xml"
                    onChange={handleImportFromXML}
                />

                <button
                    className="bg-primary text-white px-4 py-2 rounded ml-4"
                    onClick={handleDownloadPDF}
                >
                    Pobierz PDF
                </button>
            </div>

            <ul className="mt-4">
                {products.map((product) => (
                    <li key={product.id} className="flex items-center justify-between mb-2">
            <span>
              {product.name} - Ilość: {product.quantity}
            </span>
                        <div className="flex space-x-2">
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded"
                                onClick={() => handleRemoveProduct(product.id)}
                            >
                                Usuń
                            </button>
                            <input
                                className="border p-1 w-16"
                                type="number"
                                value={product.quantity}
                                onChange={(e) => handleUpdateQuantity(product.id, e.target.value)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WarehouseSystem;
