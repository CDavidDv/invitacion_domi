<template>
    <section class="py-16 bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 rounded-3xl my-8">
        <div class="container mx-auto px-6">
            <!-- Título de la sección -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                    Dedicatoria Especial
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                    Mensajes de amor y cariño para una mujer extraordinaria
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <!-- Mensaje principal -->
            <div class="max-w-4xl mx-auto">
                <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-8">
                    <div class="text-center">
                        <div class="text-6xl mb-6 animate-pulse">💝</div>
                        <h3 class="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
                            Para Dominga, con todo nuestro amor
                        </h3>
                        
                        <div class="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                            <p class="italic">
                                "Querida Dominga, en este día tan especial queremos celebrar no solo tus 90 años, 
                                sino toda una vida llena de amor, sabiduría y bendiciones."
                            </p>
                            
                            <p>
                                Has sido el pilar de nuestra familia, la luz que nos guía y el amor que nos une. 
                                Cada momento contigo es un regalo, cada sonrisa tuya ilumina nuestros días.
                            </p>
                            
                            <p class="font-semibold text-purple-700">
                                "Que este cumpleaños esté lleno de alegría, música, risas y todo el amor que mereces. 
                                ¡Feliz cumpleaños, querida Dominga!"
                            </p>
                        </div>
                    </div>
                </div>


                <!-- Poema especial -->
                <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                    <div class="text-5xl mb-4">📝</div>
                    <h4 class="text-2xl font-bold text-purple-800 mb-6">
                        Un Poema para Dominga
                    </h4>
                    <div class="text-lg text-gray-700 leading-relaxed italic">
                        <p class="mb-4">
                            "Noventa años de vida, noventa años de amor,<br>
                            Noventa años de sabiduría, noventa años de valor.<br>
                            Cada arruga cuenta una historia, cada sonrisa un tesoro,<br>
                            Dominga, eres nuestro regalo, nuestro más preciado oro."
                        </p>
                        <p class="font-semibold text-purple-700">
                            "¡Feliz cumpleaños, querida Dominga! 🎂✨"
                        </p>
                    </div>
                </div>

                <!-- Botón para compartir -->
                <div class="text-center mt-8">
                    <button 
                        @click="shareInvitation"
                        class="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Compartir Invitación 📱
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const shareInvitation = () => {
    if (navigator.share) {
        navigator.share({
            title: '¡Feliz Cumpleaños Dominga! - 90 Años',
            text: 'Invitación al cumpleaños de Dominga Nieves Anicetos. 19 de Julio a las 5:00 PM en Juan Escutia N° 11',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const url = window.location.href;
        const text = '¡Feliz Cumpleaños Dominga! - 90 Años\n\nInvitación al cumpleaños de Dominga Nieves Anicetos.\nFecha: 19 de Julio a las 5:00 PM\nLugar: Juan Escutia N° 11\n\n' + url;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                alert('¡Enlace copiado al portapapeles!');
            });
        } else {
            // Fallback más básico
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('¡Enlace copiado al portapapeles!');
        }
    }
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