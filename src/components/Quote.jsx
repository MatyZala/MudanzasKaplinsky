import React, { useState, useEffect } from 'react';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Map from './Map';
import { useSelector } from 'react-redux';

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
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    detailRowBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 5,
    },
    date: {
        fontSize: 10,
        color: '#666',
    },
    cell: {
        padding: 6,
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
    const [cubicMeters, setCubicMeters] = useState(0);
    const { distance } = useSelector((state) => state.location);

    const handleCalculateQuote = () => {
        toast.info(`Presupuesto: $${calculateQuote().toLocaleString('es-AR')}`, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    useEffect(() => {
        AOS.init({ duration: 1700 })
    }, [])



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
        if (event.target.value !== 'Con Embalaje') {
            setCubicMeters(0);
        }
    };

    const handleEmployeesChange = (event) => {
        setEmployees(event.target.value);
    };

    const handleNumEmployeesChange = (event) => {
        setNumEmployees(parseInt(event.target.value));
    };

    const calculateQuote = () => {
        let totalPrice = 0;
        let costPerKm = 0;

        if (packaging === 'Con Embalaje') {
            totalPrice += 50;
        }

        if (packagingType === 'Nacional') {
            totalPrice += 100;
            totalPrice += cubicMeters * 2500;
            costPerKm = 50;
        } else if (packagingType === 'Internacional') {
            totalPrice += 200;
            totalPrice += cubicMeters * 4000;
            costPerKm = 100;
        }

        if (employees === 'Con Empleados') {
            totalPrice += numEmployees * 30;
        }

        if (distance) {
            totalPrice += distance * costPerKm;
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
                    <View style={[styles.detailRow, styles.detailRowBorder]}>
                        <Text style={[styles.label, styles.cell]}>Embalaje:</Text>
                        <Text style={[styles.value, styles.cell]}>{packaging}</Text>
                    </View>

                    {packaging === 'Con Embalaje' && (
                        <View style={[styles.detailRow, styles.detailRowBorder]}>
                            <Text style={[styles.label, styles.cell]}>Tipo de embalaje nacional/internacional:</Text>
                            <Text style={[styles.value, styles.cell]}>{packagingType}</Text>
                        </View>
                    )}
                    {packagingType === 'Nacional' || packagingType === 'Internacional' ? (
                        <View style={[styles.detailRow, styles.detailRowBorder]}>
                            <Text style={[styles.label, styles.cell]}>Cantidad de metros cúbicos:</Text>
                            <Text style={[styles.value, styles.cell]}>{cubicMeters}</Text>
                        </View>
                    ) : null}
                    <View style={[styles.detailRow, styles.detailRowBorder]}>
                        <Text style={[styles.label, styles.cell]}>Empleados:</Text>
                        <Text style={[styles.value, styles.cell]}>{employees}</Text>
                    </View>
                    {employees === 'Con Empleados' && (
                        <View style={[styles.detailRow, styles.detailRowBorder]}>
                            <Text style={[styles.label, styles.cell]}>Cantidad de empleados:</Text>
                            <Text style={[styles.value, styles.cell]}>{numEmployees}</Text>
                        </View>
                    )}
                    {distance && (
                        <View style={[styles.detailRow, styles.detailRowBorder]}>
                            <Text style={[styles.label, styles.cell]}>Distancia:</Text>
                            <Text style={[styles.value, styles.cell]}>{distance} km</Text>
                        </View>
                    )}
                    <View style={[styles.detailRow, styles.detailRowBorder]}>
                        <Text style={[styles.label, styles.cell]}>Presupuesto:</Text>
                        <Text style={[styles.value, styles.cell]}>${calculateQuote().toLocaleString('es-AR')}</Text>
                    </View>
                    <Text style={styles.estimateNote}>
                        * El presupuesto proporcionado es un estimado para brindar una noción general del costo. El precio real puede variar según las condiciones específicas de la mudanza. Para más información, contactar al 3518567123 o por mail Simonkapli4@gmail.com.
                    </Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div>
            <div className='min-h-screen flex items-center justify-center rounded-xl bg-gray-900' id='quote' data-aos="fade-up" data-aos-duration="3000">
                <div style={{ width: '100%' }} className='md:w-1/2 p-8'>
                    <div className='bg-white rounded-lg shadow-lg p-8' >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h2 className='text-2xl font-semibold mb-4'>Cotiza Tu Mudanza</h2>
                        </div>
                        <p className='font-semibold mb-4'>Seleccione el punto de partida y el destino</p>
                        <Map />
                        <form className='space-y-4 mt-2'>
                            <div className='mb-4'>
                                <label className='block font-semibold'>Embalaje:</label>
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
                                <div className='mb-4 md:mb-0'>
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
                            {packaging === 'Con Embalaje' && (
                                <div className='mb-4 md:mb-0'>
                                    <label className='block font-semibold'>Metros Cúbicos:</label>
                                    <input
                                        className='border rounded p-2 w-full'
                                        type='number'
                                        value={cubicMeters}
                                        onChange={(event) => setCubicMeters(event.target.value)}
                                    />
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
                            <div className='md:flex md:space-x-4 items-center'>
                                <button
                                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 hidden md:block rounded w-full md:w-auto'
                                    type='button'
                                    onClick={handleCalculateQuote}
                                >
                                    Calcular Presupuesto
                                </button>
                                <PDFDownloadLink document={<QuotePDF />} fileName='presupuesto_mudanza.pdf'>
                                    {({ blob, url, loading, error }) =>
                                        loading ? (
                                            'Generando PDF...'
                                        ) : (
                                            <button
                                                className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full md:w-auto'
                                                type='button'
                                                onClick={handleDownloadPDF}
                                            >
                                                Descargar Presupuesto
                                            </button>
                                        )
                                    }
                                </PDFDownloadLink>
                            </div>
                        </form>
                    </div>

                </div>
                <ToastContainer
                    position="bottom-center"
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

        </div>
    );
};

export default Quote;
