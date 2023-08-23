import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    section: {
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 12,
    },
    estimateNote: {
        fontSize: 10,
        marginTop: 20,
        color: '#666',
        fontStyle: 'italic',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    date: {
        fontSize: 10,
        color: '#666',
    },
    cell: {
        padding: 6,
        borderBottom: '1pt solid #ccc',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
});



const Quote = () => {
    const [packaging, setPackaging] = useState('');
    const [packagingType, setPackagingType] = useState('');
    const [employees, setEmployees] = useState('');
    const [numEmployees, setNumEmployees] = useState(1);

    const handleCalculateQuote = () => {
        toast.info(`Presupuesto: $${calculateQuote()}`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };


    const handleDownloadPDF = () => {
        if (!isFormCompleted()) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor complete todos los campos antes de descargar el PDF.',
                customClass: {
                    container: 'my-swal-container',
                },
            });
            return;
        }

        const blob = new Blob([<QuotePDF />], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'presupuesto_mudanza.pdf';
        a.click();

    };



    const handlePackagingChange = (event) => {
        setPackaging(event.target.value);
    };

    const handlePackagingTypeChange = (event) => {
        setPackagingType(event.target.value);
    };

    const handleEmployeesChange = (event) => {
        setEmployees(event.target.value);
    };

    const handleNumEmployeesChange = (event) => {
        setNumEmployees(parseInt(event.target.value));
    };

    const calculateQuote = () => {
        let totalPrice = 0;

        if (packaging === 'Con Embalaje') {
            totalPrice += 50;
        }

        if (packagingType === 'Nacional') {
            totalPrice += 100;
        } else if (packagingType === 'Internacional') {
            totalPrice += 200;
        }

        if (employees === 'Con Empleados') {
            totalPrice += numEmployees * 30;
        }

        return totalPrice;
    };

    const QuotePDF = () => (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Presupuesto "Mudanzas Kaplinsky"</Text>
                    <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.section}>
                        <Text style={styles.label}>Embalaje:</Text>
                        <Text style={styles.value}>{packaging}</Text>
                    </View>
                    {packaging === 'Con Embalaje' && (
                        <View style={styles.section}>
                            <Text style={styles.label}>Tipo de embalaje nacional/internacional:</Text>
                            <Text style={styles.value}>{packagingType}</Text>
                        </View>
                    )}
                    <View style={styles.section}>
                        <Text style={styles.label}>Con o sin empleados:</Text>
                        <Text style={styles.value}>{employees}</Text>
                    </View>
                    {employees === 'Con Empleados' && (
                        <View style={styles.section}>
                            <Text style={styles.label}>Cantidad de empleados:</Text>
                            <Text style={styles.value}>{numEmployees}</Text>
                        </View>
                    )}
                    <View style={styles.section}>
                        <Text style={styles.label}>Presupuesto:</Text>
                        <Text style={styles.value}>${calculateQuote()}</Text>
                    </View>
                    <Text style={styles.estimateNote}>
                        * El presupuesto proporcionado es un estimado para brindar una noción general del costo. El precio real puede variar según las condiciones específicas de la mudanza.
                    </Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-900' id='quote'>
            <div className='w-1/2 p-8'>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <h2 className='text-2xl font-semibold mb-4'>Cotiza tu mudanza</h2>
                    <form>
                        <div className='mb-4'>
                            <label className='block font-semibold'>Tipo de embalaje:</label>
                            <select
                                className='border rounded p-2 w-full'
                                value={packaging}
                                onChange={handlePackagingChange}
                            >
                                <option value=''>Seleccione una opción</option>
                                <option value='Con Embalaje'>Con Embalaje</option>
                                <option value='withoutPackaging'>Sin embalaje</option>
                            </select>
                        </div>
                        {packaging === 'Con Embalaje' && (
                            <div className='mb-4'>
                                <label className='block font-semibold'>Tipo de embalaje:</label>
                                <select
                                    className='border rounded p-2 w-full'
                                    value={packagingType}
                                    onChange={handlePackagingTypeChange}
                                >
                                    <option value=''>Seleccione una opción</option>
                                    <option value='Nacional'>Nacional</option>
                                    <option value='Internacional'>Internacional</option>
                                </select>
                            </div>
                        )}
                        <div className='mb-4'>
                            <label className='block font-semibold'>Con o sin empleados:</label>
                            <select
                                className='border rounded p-2 w-full'
                                value={employees}
                                onChange={handleEmployeesChange}
                            >
                                <option value=''>Seleccione una opción</option>
                                <option value='Con Empleados'>Con Empleados</option>
                                <option value='Sin Empleados'>Sin empleados</option>
                            </select>
                        </div>
                        {employees === 'Con Empleados' && (
                            <div className='mb-4'>
                                <label className='block font-semibold'>Cantidad de empleados:</label>
                                <select
                                    className='border rounded p-2 w-full'
                                    value={numEmployees}
                                    onChange={handleNumEmployeesChange}
                                >
                                    {Array.from({ length: 10 }, (_, index) => index + 1).map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <div className='flex space-x-4'>
                            <button
                                className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
                                type='button'
                                onClick={handleCalculateQuote}
                            >
                                Calcular presupuesto
                            </button>
                            <PDFDownloadLink document={<QuotePDF />} fileName='presupuesto_mudanza.pdf'>
                                {({ blob, url, loading, error }) =>
                                    loading ? (
                                        'Generando PDF...'
                                    ) : (
                                        <button
                                            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
                                            type='button'
                                            onClick={handleDownloadPDF}
                                        >
                                            Descargar Presupuesto en PDF
                                        </button>
                                    )
                                }
                            </PDFDownloadLink>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </div>
    );
};

export default Quote;
