<template>
    <section id="birthday-map" class="py-16 bg-white/90 backdrop-blur-sm rounded-3xl my-8 shadow-xl">
        <div class="container mx-auto px-6">
            <!-- Título de la sección -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                    Ubicación del Evento
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                    Encuentra fácilmente el lugar de la celebración
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <!-- Información de ubicación -->
            <div class="max-w-4xl mx-auto">
                <!-- Detalles de la dirección -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 text-center">
                    <div class="text-5xl mb-4">📍</div>
                    <h3 class="text-2xl font-bold text-blue-800 mb-4">
                        Juan Escutia N° 11
                    </h3>
                    <p class="text-lg text-gray-700 mb-4">
                        ¡Te esperamos en esta dirección especial!
                    </p>
                    <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        <span class="flex items-center">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            Ubicación céntrica
                        </span>
                        <span class="flex items-center">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            Fácil acceso
                        </span>
                    </div>
                </div>

                <!-- Mapa interactivo -->
                <div class="bg-gray-100 rounded-2xl p-4 mb-8">
                    <div class="aspect-video rounded-xl overflow-hidden shadow-lg">
                        <!-- Placeholder del mapa - en producción se usaría Google Maps o similar -->
                        <div class="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center relative">
                            <div class="text-center">
                                <div class="text-6xl mb-4">🗺️</div>
                                <h4 class="text-xl font-bold text-gray-800 mb-2">
                                    Mapa Interactivo
                                </h4>
                                <p class="text-gray-600 mb-4">
                                    Juan Escutia N° 11
                                </p>
                                <button 
                                    @click="openMaps"
                                    class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Abrir en Google Maps 📍
                                </button>
                            </div>
                            
                            <!-- Marcador de ubicación -->
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div class="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                                <div class="w-4 h-4 bg-red-500 rounded-full border-2 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const openMaps = () => {
    // En producción, esto abriría Google Maps con las coordenadas exactas
    const address = encodeURIComponent('Juan Escutia N° 11');
    const mapsUrl = `https://www.google.com/maps/place/Juan+Escutia,+90568+Col.+Ignacio+Allende,+Tlax./@19.355351,-97.7850224,17z/data=!3m1!4b1!4m6!3m5!1s0x85c5557f781cc2cb:0x980577eae75f4de1!8m2!3d19.355346!4d-97.7824475!16s%2Fg%2F11bw4kj790?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D`;
    window.open(mapsUrl, '_blank');
};

const contactHost = () => {
    // En producción, esto abriría WhatsApp o llamaría al número
    const phoneNumber = '+52'; // Número del anfitrión
    const message = encodeURIComponent('Hola! Me gustaría confirmar mi asistencia al cumpleaños de Dominga. ¿Podrías darme más detalles?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
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