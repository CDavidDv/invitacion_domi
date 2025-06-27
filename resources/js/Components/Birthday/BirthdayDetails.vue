<template>
    <section id="birthday-details" class="py-16 bg-white/90 backdrop-blur-sm rounded-3xl my-8 shadow-xl">
        <div class="container mx-auto px-6">
            <!-- Título de la sección -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                    Detalles de la Celebración
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <!-- Grid de información -->
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Fecha y Hora -->
                <div class="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                    <div class="text-5xl mb-4">📅</div>
                    <h3 class="text-2xl font-bold text-purple-800 mb-4">Fecha y Hora de la misa</h3>
                    <div class="space-y-2">
                        <p class="text-xl font-semibold text-gray-800">
                            Viernes, 19 de Julio
                        </p>
                        <p class="text-2xl font-bold text-pink-600">
                            5:00 PM
                        </p>
                        <p class="text-lg text-gray-600">
                            ¡No llegues tarde!
                        </p>
                    </div>
                </div>

                <!-- Lugar -->
                <div class="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                    <div class="text-5xl mb-4">📍</div>
                    <h3 class="text-2xl font-bold text-orange-800 mb-4">Lugar</h3>
                    <div class="space-y-2">
                        <p class="text-xl font-semibold text-gray-800">
                            Juan Escutia N° 11
                        </p>
                        <p class="text-lg text-gray-600">
                            ¡Te esperamos con los brazos abiertos!
                        </p>
                    </div>
                </div>

                <!-- Edad especial -->
                <div class="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
                    <div class="text-6xl mb-4 animate-pulse">🎂</div>
                    <h3 class="text-3xl font-bold text-teal-800 mb-4">
                        ¡Celebrando 90 Años de Vida!
                    </h3>
                    <p class="text-xl text-gray-700 leading-relaxed">
                        Nueve décadas de amor, sabiduría y bendiciones. 
                        <br class="hidden md:block">
                        Una vida llena de momentos inolvidables y personas que la aman.
                    </p>
                </div>
            </div>

            <!-- Botón para ver mapa -->
            <div class="text-center mt-8">
                <button 
                    @click="scrollToMap"
                    class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    Ver Ubicación en el Mapa 📍
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
const scrollToMap = () => {
    const mapSection = document.querySelector('#birthday-map');
    if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
/* Animaciones suaves */
.grid > div {
    animation: fadeInUp 0.6s ease-out;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }

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