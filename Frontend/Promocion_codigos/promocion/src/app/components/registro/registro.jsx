import useRegister from "../../lib/useRegister";
import { useState } from 'react';
import { useEffect } from "react";

export default function RegisterForm() {
    const {
        nombreUsuario, setNombreUsuario,
        numeroTelefono, setNumeroTelefono,
        sectorIndustrial, setSectorIndustrial,
        cargoUsuario, setCargoUsuario,
        correoUsuario, setCorreoUsuario,
        lugarUsuario, setLugarUsuario,
        nombreEmpresa, setNombreEmpresa,
        mensaje,
        handleSubmit,
        mostrarCard,
        setMostrarCard,
        codigoDescuento,
        expiracionCodigo


    } = useRegister();

    const [texto, setTexto] = useState("510.000 $")

    const cambiarTexto = () => {
        setTexto(' 0 $ ')
    }
    // Efecto para deshabilitar el scroll del body cuando el modal está visible
    useEffect(() => {
        if (mostrarCard) {
            document.body.style.overflow = 'hidden;'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [mostrarCard])

    const inputStyle = {
        width: '100%',
        padding: '10px 5px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 1)',
        transition: 'all 0.3s ease',
        outline: 'none'
    };

    return (

        <>
            <div className="
            maxWidth: 1000px,
            width: '100%',
            margin: 'auto',
            padding: '30px',
            backgroundColor: '#000000ff',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(4, 4, 226, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23)',
            color: 'white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'"

                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
                <form
                    onSubmit={handleSubmit}
                    className="
                        relative
                        mb-[2vh]
                        w-full
                        p-8
                        bg-gradient-to-br
                        from-[#0a7bd4] to-[#092a49]
                        rounded-xl
                        shadow-xl
                        font-sans
                        text-white
                        max-h-[70vh]
                        overflow-y-auto
                        scrollbar-thin
                        scrollbar-thumb-rounded-full
                        scrollbar-track-rounded-full
                        scrollbar-thumb-[#60a5fa]
                        scrollbar-track-[#0a3b68]
                        [scrollbar-color:#60a5fa_#0a3b68]
                        [scrollbar-width:thin]
                        md:p-10
                        lg:p-12
                        ">


                    <div style={{
                        marginBottom: '25px'
                    }}>
                        <div>
                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'white' }}>
                                    Sector de industria
                                </label>
                                <input
                                    className="w-full p-2 rounded-md border border-black-300 bg-white text-black "
                                    type="text"
                                    value={sectorIndustrial}
                                    onChange={e => setSectorIndustrial(e.target.value)}
                                    required
                                    style={inputStyle}
                                />
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'white', }}>
                                    Nombre de la empresa
                                </label>
                                <input
                                    className="w-full p-2 rounded-md border border-gray-300 bg-white text-black"
                                    type="text"
                                    value={nombreEmpresa}
                                    onChange={e => setNombreEmpresa(e.target.value)}
                                    required
                                    style={inputStyle}

                                />
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'white' }}>
                                    Nombres y apellidos
                                </label>
                                <input
                                    className="w-full p-2 rounded-md border border-gray-300 bg-white text-black"
                                    type="text"
                                    value={nombreUsuario}
                                    onChange={e => setNombreUsuario(e.target.value)}
                                    required
                                    style={inputStyle}

                                />
                            </div>
                        </div>

                        {/* Columna derecha */}
                        <div>
                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'white' }}>
                                    Cargo
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded-md border border-gray-300 bg-white text-black"
                                    value={cargoUsuario}
                                    onChange={e => setCargoUsuario(e.target.value)}
                                    required
                                    style={inputStyle}

                                />
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'white' }}>
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded-md border border-gray-300 bg-white text-black"
                                    value={numeroTelefono}
                                    onChange={e => setNumeroTelefono(e.target.value)}
                                    required
                                    style={inputStyle}

                                />
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'white' }}>
                                    Correo
                                </label>
                                <input
                                    className="w-full p-2 rounded-md border border-gray-300 bg-white text-black"
                                    type="email"
                                    value={correoUsuario}
                                    onChange={e => setCorreoUsuario(e.target.value)}
                                    required
                                    style={inputStyle}

                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'white' }}>
                                    Ciudad o región
                                </label>
                                <input
                                    className="w-full p-2 rounded-md border border-gray-300 bg-white text-black"
                                    type="text"
                                    value={lugarUsuario}
                                    onChange={e => setLugarUsuario(e.target.value)}
                                    required
                                    style={inputStyle}

                                />
                            </div>
                        </div>
                    </div>


                </form>
                {/* Contenedor para el botón */}
                <div className="flex flex-col justify-center md:mt-[2vh]">
                    <button
                        className="
                            w-full
                            max-w-[10'0px]
                            md:w-[1000px]
                            mt-[3vh]
                            p-[15px]
                            bg-[#FF2301]
                            text-white
                            border-none
                            rounded-lg
                            text-[20px]
                            font-semibold
                            cursor-pointer
                            shadow-[0_4px_15px_rgba(4,4,226,0.3)]
                            transition-all
                            duration-300
                            ease-in-out
                            hover:bg-[#ff8243]
                            hover:shadow-[0_6px_20px_rgba(4,4,226,0.4)]
                        "
                        type="submit"
                        onClick={handleSubmit}
                    
                        style={{
                            padding: '15px',
                            backgroundColor: '#FF2301',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '20px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(4, 4, 226, 0.3)',
                            transition: 'all 0.3s ease',
                            maxWidth: '450px' // Opcional: limita ancho máximo
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#ff8243';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(4, 4, 226, 0.4)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '#FF2301';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(4, 4, 226, 0.3)';
                        }}
                    >
                        ¡Canjéalo Ahora!
                    </button>
                </div>
            </div>
            {/* Modal fuera del contenedor principal */}
            {mostrarCard && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/60"
                    onClick={() => setMostrarCard(false)}
                >
                    <div
                        className="relative bg-gradient-to-br from-[#0a7bd4] to-[#092a49] text-white rounded-2xl shadow-2xl p-8 w-[420px] max-w-[90vw] max-h-[90vh] flex flex-col items-center"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Botón de cierre */}
                        <button
                            onClick={() => setMostrarCard(false)}
                            className="absolute top-4 right-4 text-gray-300 hover:text-white transition duration-200"
                            aria-label="Cerrar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Título */}
                        <h2 className="text-3xl font-extrabold text-center tracking-wide mb-1">Voucher Exclusivo</h2>
                        <p className="text-lg font-light text-center text-gray-200 mb-6">¡Felicidades por tu registro!</p>

                        {/* Porcentaje */}
                        <div className="my-2 text-center">
                            <span className="text-6xl font-extrabold tracking-tight text-[#ffffff] drop-shadow-lg">100%</span>
                            <p className="text-xl font-semibold mt-1 text-gray-200">Descuento aplicado</p>
                        </div>

                        {/* Código */}
                        <div className="w-full mt-6 mb-4">
                            <p className="text-center mb-2 text-sm text-gray-100">Tu código es:</p>
                            <input
                                type="text"
                                readOnly
                                value={codigoDescuento}
                                className="w-full text-center text-lg p-3 border border-white rounded-lg bg-gray-100 text-black font-mono tracking-widest"
                            />
                        </div>

                        {/* Botón y precio */}
                        <div className="flex justify-between items-center w-full mt-6">
                            <button
                                className="px-5 py-2 bg-[#FF2301] text-white font-semibold rounded-lg hover:bg-[#ff8243] transition duration-200 w-[135px] h-[50px]"
                                onClick={cambiarTexto}
                            >
                                Canjear
                            </button>
                            <div className="text-center">
                                <p className="text-sm text-gray-200">Precio final:</p>
                                <p className="text-xl font-bold text-white">{texto}</p>
                            </div>
                        </div>

                        {/* Expiración */}
                        <p className="mt-6 text-xs text-center text-gray-300">
                            Válido hasta: {expiracionCodigo && new Date(expiracionCodigo).toLocaleDateString('es-CO')}
                        </p>
                    </div>
                </div>
            )}

        </>


    )
} 
