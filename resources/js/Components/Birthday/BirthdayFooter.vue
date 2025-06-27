<template>
    <section class="py-16 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 rounded-3xl my-8 text-white">
        <div class="container mx-auto px-6">
            <!-- Título de la sección -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    ¡Te Esperamos!
                </h2>
                <p class="text-lg text-purple-200 mb-6">
                    No faltes a esta celebración tan especial
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <!-- Información de contacto -->
            <div class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-1 justify-center items-center gap-8 mb-8">
                    <!-- Información del evento -->
                    <div class="bg-white/10 backdrop-blur-sm justify-center items-center text-center rounded-2xl p-6">
                        <div class="text-4xl mb-4">🎉</div>
                        <h3 class="text-xl font-bold mb-4 text-center justify-center items-center">
                            Detalles Finales
                        </h3>
                        <div class="space-y-3 flex flex-col justify-center items-center text-purple-100 text-center justify-center items-center">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                </svg>
                                <span>Viernes, 19 de Julio</span>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                </svg>
                                <span>La misa será a las 5:00 PM en punto</span>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                                <span>Juan Escutia N° 11</span>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <!-- Mensaje final -->
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <div class="text-6xl mb-4 animate-pulse">🎂</div>
                    <h3 class="text-2xl font-bold mb-4">
                        ¡Feliz Cumpleaños, Dominga!
                    </h3>
                    <p class="text-lg text-purple-200 leading-relaxed mb-6">
                        Que este día esté lleno de amor, alegría y las bendiciones que mereces. 
                        <br class="hidden md:block">
                        ¡Gracias por ser la luz de nuestras vidas!
                    </p>
                    <div class="text-4xl space-x-4">
                        <span class="animate-bounce" style="animation-delay: 0s;">🎉</span>
                        <span class="animate-bounce" style="animation-delay: 0.2s;">🎊</span>
                        <span class="animate-bounce" style="animation-delay: 0.4s;">🎈</span>
                        <span class="animate-bounce" style="animation-delay: 0.6s;">💝</span>
                        <span class="animate-bounce" style="animation-delay: 0.8s;">🌹</span>
                    </div>
                </div>

                <!-- Botones de acción -->
                <div class="text-center mt-8 space-y-4">
                    <button 
                        @click="scrollToTop"
                        class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mr-4"
                    >
                        Volver al Inicio 🏠
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const contactWhatsApp = () => {
    const phoneNumber = '+52'; // Número del anfitrión
    const message = encodeURIComponent('Hola! Me gustaría confirmar mi asistencia al cumpleaños de Dominga. ¿Podrías darme más detalles?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
};

const contactPhone = () => {
    const phoneNumber = '+52'; // Número del anfitrión
    window.open(`tel:${phoneNumber}`, '_self');
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const downloadInvitation = () => {
    // En producción, esto generaría un PDF o imagen de la invitación
    const invitationData = {
        title: '¡Feliz Cumpleaños Dominga!',
        date: 'Misa: 19 de Julio, 5:00 PM',
        location: 'Juan Escutia N° 11',
        age: '90 Años'
    };
    
    // Crear un enlace temporal para descarga
    const dataStr = JSON.stringify(invitationData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'invitacion-dominga-cumpleanos.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('¡Invitación descargada! (En producción esto sería un PDF hermoso)');
};
</script>

<style scoped>
/* Animaciones para los elementos */
.grid > div {
    animation: fadeInUp 0.6s ease-out;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Efectos hover mejorados para móviles */
@media (hover: none) {
    .hover\:shadow-xl:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
}
</style> 