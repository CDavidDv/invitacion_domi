<template>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Fondo animado con confeti -->
        <div class="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200">
            <div class="absolute inset-0 opacity-30">
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <!-- Título principal -->
            <h1 class="text-4xl md:text-6xl font-bold text-pink-800 mb-6 animate-bounce">
                ¡Feliz Cumpleaños!
            </h1>

            <!-- Nombre de la cumpleañera -->
            <div class="mb-8">
                <h2 class="text-3xl md:text-5xl font-serif text-purple-700 mb-2">
                    Dominga Nieves Aniceto
                </h2>
                <div class="text-2xl md:text-4xl font-bold text-yellow-600 animate-pulse">
                    ¡90 Años de Amor y Vida!
                </div>
            </div>

            <!-- Iconos decorativos -->
            <div class="flex justify-center items-center space-x-4 mb-8">
                <div class="text-4xl animate-spin" style="animation-duration: 3s;">🎂</div>
                <div class="text-4xl animate-bounce" style="animation-delay: 0.5s;">🎉</div>
                <div class="text-4xl animate-spin" style="animation-duration: 2s; animation-direction: reverse;">🎈</div>
                <div class="text-4xl animate-bounce" style="animation-delay: 1s;">🎊</div>
                <div class="text-4xl animate-spin" style="animation-duration: 4s;">🌹</div>
            </div>

            <!-- Mensaje especial -->
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl">
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                    "Que este día esté lleno de alegría, amor y las bendiciones que mereces. 
                    <br class="hidden md:block">
                    ¡Feliz cumpleaños a una mujer extraordinaria!"
                </p>
            </div>

            <!-- Botón para continuar -->
            <button 
                @click="scrollToDetails"
                class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
                Ver Detalles de la Celebración 🎊
            </button>
        </div>

        <!-- Flecha indicadora -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </div>
    </section>
</template>

<script setup>
const scrollToDetails = () => {
    const detailsSection = document.querySelector('#birthday-details');
    if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
/* Animación de confeti */
.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    animation: confetti-fall 3s linear infinite;
}

.confetti:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
}

.confetti:nth-child(2) {
    left: 30%;
    animation-delay: 0.5s;
}

.confetti:nth-child(3) {
    left: 50%;
    animation-delay: 1s;
}

.confetti:nth-child(4) {
    left: 70%;
    animation-delay: 1.5s;
}

.confetti:nth-child(5) {
    left: 90%;
    animation-delay: 2s;
}

@keyframes confetti-fall {
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

/* Responsive para móviles */
@media (max-width: 768px) {
    .confetti {
        width: 8px;
        height: 8px;
    }
}
</style> 