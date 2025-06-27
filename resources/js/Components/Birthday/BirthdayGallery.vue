<template>
    <section class="py-16 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl my-8">
        <div class="container mx-auto px-6">
            <!-- Título de la sección -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                    Galería de Recuerdos
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                    Momentos especiales de una vida llena de amor y alegría
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <!-- Galería de fotos -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <div 
                    v-for="(image, index) in images" 
                    :key="index"
                    @click="openModal(index)"
                    class="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                    <img 
                        :src="image.src" 
                        :alt="image.alt"
                        class="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div class="p-4 text-white">
                            <p class="text-sm font-semibold">{{ image.title }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mensaje especial -->
            <div class="text-center mt-12">
                <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                    <p class="text-xl text-gray-700 leading-relaxed italic">
                        "Cada foto cuenta una historia, cada momento es un tesoro. 
                        <br class="hidden md:block">
                        ¡Gracias por todos estos años de amor y recuerdos!"
                    </p>
                </div>
            </div>
        </div>

        <!-- Modal para ver fotos -->
        <div 
            v-if="showModal" 
            @click="closeModal"
            class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
            <div class="relative max-w-4xl max-h-full">
                <button 
                    @click="closeModal"
                    class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
                >
                    ×
                </button>
                
                <div class="relative">
                    <img 
                        :src="images[currentImageIndex].src" 
                        :alt="images[currentImageIndex].alt"
                        class="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                    
                    <!-- Navegación -->
                    <button 
                        @click.stop="previousImage"
                        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                    >
                        ‹
                    </button>
                    <button 
                        @click.stop="nextImage"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                    >
                        ›
                    </button>
                </div>
                
                <!-- Indicadores -->
                <div class="flex justify-center mt-4 space-x-2">
                    <button 
                        v-for="(image, index) in images" 
                        :key="index"
                        @click.stop="goToImage(index)"
                        :class="[
                            'w-3 h-3 rounded-full transition-colors',
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        ]"
                    ></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const currentImageIndex = ref(0);

const images = [
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.23_2d8ec73e.jpg',
        alt: 'Dominga en su juventud',
        title: 'Juventud y Belleza'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.23_d394063a.jpg',
        alt: 'Momentos familiares',
        title: 'Amor Familiar'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.24_03e9eb61.jpg',
        alt: 'Celebración especial',
        title: 'Celebración'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.24_85625e36.jpg',
        alt: 'Recuerdos felices',
        title: 'Recuerdos Felices'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.24_a51e0b72.jpg',
        alt: 'Momentos especiales',
        title: 'Momentos Especiales'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.24_f2fd734f.jpg',
        alt: 'Alegría y risas',
        title: 'Alegría y Risas'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.25_6b6813c3.jpg',
        alt: 'Sabiduría de años',
        title: 'Sabiduría de Años'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.26_016cbeb1.jpg',
        alt: 'Amor y cariño',
        title: 'Amor y Cariño'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.26_262e6417.jpg',
        alt: 'Bendiciones',
        title: 'Bendiciones'
    },
    {
        src: '/images/WhatsApp Image 2025-06-25 at 23.51.26_c23d05bb.jpg',
        alt: 'Legado de amor',
        title: 'Legado de Amor'
    }
];

const openModal = (index) => {
    currentImageIndex.value = index;
    showModal.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    showModal.value = false;
    document.body.style.overflow = 'auto';
};

const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const previousImage = () => {
    currentImageIndex.value = currentImageIndex.value === 0 
        ? images.length - 1 
        : currentImageIndex.value - 1;
};

const goToImage = (index) => {
    currentImageIndex.value = index;
};

// Cerrar modal con tecla Escape
const handleKeydown = (event) => {
    if (event.key === 'Escape' && showModal.value) {
        closeModal();
    }
};

// Agregar event listener para tecla Escape
if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
}
</script>

<style scoped>
/* Animaciones para las imágenes */
.grid > div {
    animation: fadeInUp 0.6s ease-out;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }
.grid > div:nth-child(7) { animation-delay: 0.7s; }
.grid > div:nth-child(8) { animation-delay: 0.8s; }
.grid > div:nth-child(9) { animation-delay: 0.9s; }
.grid > div:nth-child(10) { animation-delay: 1s; }

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

/* Responsive para móviles */
@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style> 