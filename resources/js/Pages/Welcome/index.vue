<script setup>
import { Head } from '@inertiajs/vue3';
import { onMounted, onUnmounted } from 'vue';
import BirthdayHero from '@/Components/Birthday/BirthdayHero.vue';
import BirthdayMusic from '@/Components/Birthday/BirthdayMusic.vue';
import BirthdayDetails from '@/Components/Birthday/BirthdayDetails.vue';
import BirthdayGallery from '@/Components/Birthday/BirthdayGallery.vue';
import BirthdayMap from '@/Components/Birthday/BirthdayMap.vue';
import BirthdayDedication from '@/Components/Birthday/BirthdayDedication.vue';
import BirthdayFooter from '@/Components/Birthday/BirthdayFooter.vue';
import { useMusicStore } from '@/stores/useMusicStore';

// Usar el store global de música
const { isPlaying, togglePlay, initializeAudio, cleanup } = useMusicStore();

onMounted(() => {
    // Inicializar el audio global
    initializeAudio();
});

onUnmounted(() => {
    // Cleanup cuando se cierra la página
    cleanup();
});
</script>

<template>
    <Head title="¡Feliz Cumpleaños Dominga! - 90 Años de Amor y Vida" />
    
    <div class="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 overflow-x-hidden">
        <!-- Botón flotante de música -->
        <button 
            @click="togglePlay"
            class="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
        >
            <svg v-if="!isPlaying" class="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
        </button>

        <!-- Contenido principal -->
        <div class="container mx-auto px-4 py-8">
            <BirthdayHero />
            <BirthdayMusic />
            <BirthdayDetails />
            <BirthdayGallery />
            <BirthdayMap />
            <BirthdayDedication />
            <BirthdayFooter />
        </div>
    </div>
</template>

<style scoped>
/* Estilos específicos para móviles */
@media (max-width: 768px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

/* Animaciones suaves */
.fade-in {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Efectos de hover para móviles */
@media (hover: none) {
    .hover\:scale-105:hover {
        transform: none;
    }
}
</style>