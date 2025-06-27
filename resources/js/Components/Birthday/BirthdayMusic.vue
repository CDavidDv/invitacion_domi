<template>
    <section class="py-16 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl my-8">
        <div class="container mx-auto px-6">
            <!-- Título de la sección -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                    Música de la Celebración
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                    Disfruta de la música que acompañará esta celebración especial
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <!-- Reproductor de música -->
            <div class="max-w-2xl mx-auto">
                <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                    <!-- Información de la canción -->
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-4 animate-pulse">🎵</div>
                        <h3 class="text-2xl font-bold text-purple-800 mb-2">
                            {{ playlist[currentTrackIndex].title }}
                        </h3>
                        <p class="text-gray-600">
                            {{ playlist[currentTrackIndex].artist }}
                        </p>
                    </div>

                    <!-- Controles de música -->
                    <div class="space-y-6">
                        <!-- Botones principales -->
                        <div class="flex justify-center items-center space-x-4">
                            <button 
                                @click="previousTrack"
                                class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                :disabled="!hasPreviousTrack"
                            >
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                                </svg>
                            </button>

                            <button 
                                @click="togglePlay"
                                class="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                            >
                                <svg v-if="!isPlaying" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>

                            <button 
                                @click="nextTrack"
                                class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                :disabled="!hasNextTrack"
                            >
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                                </svg>
                            </button>
                        </div>

                        <!-- Barra de progreso -->
                        <div class="space-y-2">
                            <div class="flex justify-between text-sm text-gray-600">
                                <span>{{ formatTime(currentTime) }}</span>
                                <span>{{ formatTime(duration) }}</span>
                            </div>
                            <div class="relative">
                                <div class="bg-gray-200 rounded-full h-2">
                                    <div 
                                        class="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                                        :style="{ width: progressPercentage + '%' }"
                                    ></div>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    :max="duration" 
                                    v-model="currentTime"
                                    @input="seek"
                                    class="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>

                        <!-- Controles adicionales -->
                        <div class="flex justify-center items-center space-x-6">
                            <button 
                                @click="toggleMute"
                                class="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                            >
                                <svg v-if="!isMuted" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.5l3.883-3.793a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.5l3.883-3.793a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-sm">{{ isMuted ? 'Activar' : 'Silenciar' }}</span>
                            </button>

                            <button 
                                @click="toggleLoop"
                                class="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                                :class="{ 'text-purple-600': isLooping }"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-sm">{{ isLooping ? 'Repetir ON' : 'Repetir OFF' }}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Lista de reproducción -->
                    <div class="mt-8">
                        <div class="space-y-2">
                            <div 
                                v-for="(track, index) in playlist" 
                                :key="index"
                                @click="playTrack(index)"
                                class="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-300"
                                :class="currentTrackIndex === index ? 'bg-purple-100 border-l-4 border-purple-500' : 'bg-gray-50 hover:bg-gray-100'"
                            >
                                <div class="flex items-center space-x-3">
                                    <div class="text-2xl">{{ track.emoji }}</div>
                                    <div>
                                        <p class="font-medium text-gray-800">{{ track.title }}</p>
                                        <p class="text-sm text-gray-600">{{ track.artist }}</p>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-500">
                                    {{ track.duration }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mensaje especial -->
                <div class="text-center mt-8">
                    <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                        <p class="text-lg text-gray-700 leading-relaxed">
                            "Que la música llene de alegría este día tan especial. 
                            <br class="hidden md:block">
                            ¡Disfruta de las melodías que acompañan 90 años de vida!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue';
import { useMusicStore, playlist, formatTime } from '@/stores/useMusicStore';

// Usar el store global
const {
    isPlaying,
    isMuted,
    isLooping,
    currentTime,
    duration,
    currentTrackIndex,
    progressPercentage,
    hasPreviousTrack,
    hasNextTrack,
    togglePlay,
    toggleMute,
    toggleLoop,
    seek,
    playTrack,
    previousTrack,
    nextTrack,
    initializeAudio,
    cleanup
} = useMusicStore();

onMounted(() => {
    // Inicializar el audio si no está ya inicializado
    initializeAudio();
});

onUnmounted(() => {
    // No hacer cleanup aquí para mantener la música funcionando
    // Solo se hace cleanup cuando se cierra la página completa
});
</script>

<style scoped>
/* Animaciones para los elementos */
.space-y-6 > * {
    animation: fadeInUp 0.6s ease-out;
}

.space-y-6 > *:nth-child(1) { animation-delay: 0.1s; }
.space-y-6 > *:nth-child(2) { animation-delay: 0.2s; }
.space-y-6 > *:nth-child(3) { animation-delay: 0.3s; }

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
    .hover\:scale-105:hover {
        transform: none;
    }
    
    .hover\:scale-110:hover {
        transform: none;
    }
}

/* Estilos para el range input */
input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #7C3AED;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

input[type="range"]::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #7C3AED;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style> 