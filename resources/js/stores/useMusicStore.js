import { ref, computed } from 'vue';

// Store global para el estado de la música
const isPlaying = ref(false);
const isMuted = ref(false);
const isLooping = ref(true);
const currentTime = ref(0);
const duration = ref(0);
const currentTrackIndex = ref(0);
const audioRef = ref(null);

export function useMusicStore() {
    const togglePlay = () => {
        if (audioRef.value) {
            if (isPlaying.value) {
                audioRef.value.pause();
            } else {
                audioRef.value.play();
            }
            isPlaying.value = !isPlaying.value;
        }
    };

    const toggleMute = () => {
        if (audioRef.value) {
            audioRef.value.muted = !isMuted.value;
            isMuted.value = !isMuted.value;
        }
    };

    const toggleLoop = () => {
        if (audioRef.value) {
            audioRef.value.loop = !isLooping.value;
            isLooping.value = !isLooping.value;
        }
    };

    const seek = (time) => {
        if (audioRef.value) {
            audioRef.value.currentTime = time;
            currentTime.value = time;
        }
    };

    const playTrack = (index) => {
        currentTrackIndex.value = index;
        if (audioRef.value) {
            audioRef.value.src = playlist[index].src;
            audioRef.value.play();
            isPlaying.value = true;
        }
    };

    const previousTrack = () => {
        if (currentTrackIndex.value > 0) {
            playTrack(currentTrackIndex.value - 1);
        }
    };

    const nextTrack = () => {
        if (currentTrackIndex.value < playlist.length - 1) {
            playTrack(currentTrackIndex.value + 1);
        }
    };

    const updateTime = () => {
        if (audioRef.value) {
            currentTime.value = audioRef.value.currentTime;
            duration.value = audioRef.value.duration;
        }
    };

    const handleEnded = () => {
        if (isLooping.value) {
            audioRef.value.play();
        } else if (currentTrackIndex.value < playlist.length - 1) {
            nextTrack();
        } else {
            isPlaying.value = false;
        }
    };

    const startAutoPlay = () => {
        if (audioRef.value) {
            audioRef.value.play().then(() => {
                isPlaying.value = true;
                console.log('🎵 Música iniciada automáticamente');
            }).catch((error) => {
                console.log('⚠️ Auto-play bloqueado por el navegador:', error);
                document.addEventListener('click', () => {
                    if (!isPlaying.value && audioRef.value) {
                        audioRef.value.play().then(() => {
                            isPlaying.value = true;
                            console.log('🎵 Música iniciada después de interacción');
                        });
                    }
                }, { once: true });
            });
        }
    };

    const initializeAudio = () => {
        if (!audioRef.value) {
            audioRef.value = new Audio(playlist[0].src);
            audioRef.value.loop = isLooping.value;
            audioRef.value.volume = 0.7;
            
            // Event listeners
            audioRef.value.addEventListener('timeupdate', updateTime);
            audioRef.value.addEventListener('ended', handleEnded);
            audioRef.value.addEventListener('loadedmetadata', updateTime);
            audioRef.value.addEventListener('canplaythrough', startAutoPlay);
        }
    };

    const cleanup = () => {
        if (audioRef.value) {
            audioRef.value.pause();
            audioRef.value.removeEventListener('timeupdate', updateTime);
            audioRef.value.removeEventListener('ended', handleEnded);
            audioRef.value.removeEventListener('loadedmetadata', updateTime);
            audioRef.value.removeEventListener('canplaythrough', startAutoPlay);
        }
    };

    const progressPercentage = computed(() => {
        return duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0;
    });

    const hasPreviousTrack = computed(() => currentTrackIndex.value > 0);
    const hasNextTrack = computed(() => currentTrackIndex.value < playlist.length - 1);

    return {
        // Estado reactivo
        isPlaying,
        isMuted,
        isLooping,
        currentTime,
        duration,
        currentTrackIndex,
        audioRef,
        
        // Computed
        progressPercentage,
        hasPreviousTrack,
        hasNextTrack,
        
        // Métodos
        togglePlay,
        toggleMute,
        toggleLoop,
        seek,
        playTrack,
        previousTrack,
        nextTrack,
        updateTime,
        handleEnded,
        startAutoPlay,
        initializeAudio,
        cleanup
    };
}

// Playlist global
export const playlist = [
    {
        title: 'La Feria de las Flores',
        artist: 'Música Tradicional',
        duration: '3:45',
        emoji: '🌺',
        src: '/La Feria de las Flores.mp3'
    }
];

// Función helper para formatear tiempo
export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}; 