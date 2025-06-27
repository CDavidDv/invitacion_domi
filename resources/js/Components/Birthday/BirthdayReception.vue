<template>
    <section id="birthday-reception" class="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl my-8 shadow-xl">
        <div class="container mx-auto px-6">
            <!-- Título de la sección -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
                    Recepción y Celebración
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                    ¡Después de la misa, continuamos con la fiesta!
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <!-- Información de la recepción -->
            <div class="max-w-4xl mx-auto">
                <!-- Detalles principales -->
                <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl">
                    <div class="text-center">
                        <div class="text-6xl mb-6 animate-pulse">🎉</div>
                        <h3 class="text-3xl font-bold text-orange-800 mb-4">
                            Juan Escutia N° 11
                        </h3>
                        <p class="text-xl text-gray-700 mb-6">
                            ¡Celebración y festejo para Dominga!
                        </p>
                        
                    </div>
                </div>

                <!-- Horarios -->
                <div class="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 mb-8">
                    <h3 class="text-2xl font-bold text-orange-800 mb-6 text-center">
                        Horarios del Día
                    </h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="text-center">
                            <div class="text-4xl mb-2">⛪</div>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Misa</h4>
                            <p class="text-gray-600">5:00 PM</p>
                            <p class="text-sm text-gray-500">Iglesia de San Isidro Labrador</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl mb-2">🎉</div>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Recepción</h4>
                            <p class="text-gray-600">6:30 PM</p>
                            <p class="text-sm text-gray-500">Juan Escutia N° 11</p>
                        </div>
                    </div>
                </div>

                <!-- Botones de acción -->
                <div class="text-center space-y-4">
                    <button 
                        @click="openMaps"
                        class="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mr-4"
                    >
                        Ver Ubicación en el Mapa 🗺️
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const openMaps = () => {
    const address = encodeURIComponent('Juan Escutia N° 11');
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapsUrl, '_blank');
};

const contactHost = () => {
    const phoneNumber = '+52'; // Número del anfitrión
    const message = encodeURIComponent('Hola! Me gustaría confirmar mi asistencia a la recepción del cumpleaños de Dominga. ¿Podrías darme más detalles?');
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
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }

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