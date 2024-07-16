"use strict";
module.exports = {
    "clear": {},
    "eightD": {
        "rotation": {
            "rotationHz": 0.2 // Keeps the rotation effect subtle for a comfortable listening experience
        }
    },
    "soft": {
        "lowPass": {
            "smoothing": 20.0 // Gentle smoothing for a soft sound
        }
    },
    "speed": {
        "timescale": {
            "speed": 1.5,
            "pitch": 1.25,
            "rate": 1.9 // Slightly adjusted for a balanced speed-up effect
        }
    },
    "karaoke": {
        "karaoke": {
            "level": 1.0,
            "monoLevel": 1.0,
            "filterBand": 220.0,
            "filterWidth": 100.0 // Enhances vocal removal for karaoke
        }
    },
    "nightcore": {
        "timescale": {
            "speed": 1.3,
            "pitch": 1.3 // Classic nightcore effect
        }
    },
    "pop": {
        "equalizer": [
            { "band": 0, "gain": -0.25 },
            { "band": 1, "gain": 0.48 },
            { "band": 2, "gain": 0.59 },
            { "band": 3, "gain": 0.72 },
            { "band": 4, "gain": 0.56 },
            { "band": 5, "gain": 0 }, // Added missing band
            { "band": 6, "gain": -0.24 },
            { "band": 7, "gain": 0 }, // Added missing band
            { "band": 8, "gain": -0.16 }
        ]
    },
    "vaporwave": {
        "equalizer": [
            { "band": 0, "gain": 0.3 },
            { "band": 1, "gain": 0.3 }
        ],
        "timescale": {
            "pitch": 0.5 // Deepens the pitch for a vaporwave effect
        },
        "tremolo": {
            "depth": 0.3,
            "frequency": 14 // Adds a subtle tremolo effect
        }
    },
    "bass": {
        "equalizer": [
            { "band": 0, "gain": 0.2 },
            { "band": 1, "gain": 0.15 },
            { "band": 2, "gain": 0.1 },
            { "band": 3, "gain": 0.05 },
            { "band": 4, "gain": 0 },
            { "band": 5, "gain": -0.05 },
            { "band": 6, "gain": -0.1 },
            { "band": 7, "gain": -0.1 },
            { "band": 8, "gain": -0.05 },
            { "band": 9, "gain": 0 },
            { "band": 10, "gain": 0.05 },
            { "band": 11, "gain": 0.1 },
            { "band": 12, "gain": 0.15 },
            { "band": 13, "gain": 0.2 }
        ]
    },
    "party": {
        "equalizer": [
            { "band": 0, "gain": -1.16 },
            { "band": 1, "gain": 0.28 },
            { "band": 2, "gain": 0.42 },
            { "band": 3, "gain": 0.5 },
            { "band": 4, "gain": 0.36 },
            { "band": 5, "gain": 0 },
            { "band": 6, "gain": -0.3 },
            { "band": 7, "gain": -0.21 },
            { "band": 8, "gain": -0.21 }
        ]
    },
    "earrape": {
        "equalizer": [
            { "band": 0, "gain": 0.25 },
            { "band": 1, "gain": 0.5 },
            { "band": 2, "gain": -0.5 },
            { "band": 3, "gain": -0.25 },
            { "band": 4, "gain": 0 },
            { "band": 5, "gain": 0 }, // Added missing band
            { "band": 6, "gain": -0.025 },
            { "band": 7, "gain": -0.0175 },
            { "band": 8, "gain": 0 },
            { "band": 9, "gain": 0 }, // Added missing band
            { "band": 10, "gain": 0.0125 },
            { "band": 11, "gain": 0.025 },
            { "band": 12, "gain": 0.375 },
            { "band": 13, "gain": 0.125 },
            { "band": 14, "gain": 0.125 } // Ensures the earrape effect is extreme but balanced
        ]
    },
    "equalizer": {
        "equalizer": [
            { "band": 0, "gain": 0.375 },
            { "band": 1, "gain": 0.35 },
            { "band": 2, "gain": 0.125 },
            { "band": 3, "gain": 0 }, // Added missing band
            { "band": 4, "gain": 0 }, // Added missing band
            { "band": 5, "gain": -0.125 },
            { "band": 6, "gain": -0.125 },
            { "band": 7, "gain": 0 }, // Added missing band
            { "band": 8, "gain": 0.25 },
            { "band": 9, "gain": 0.125 },
            { "band": 10, "gain": 0.15 },
            { "band": 11, "gain": 0.2 },
            { "band": 12, "gain": 0.25 },
            { "band": 13, "gain": 0.35 },
            { "band": 14, "gain": 0.4 }
        ]
    },
    "electronic": {
        "equalizer": [
            { "band": 0, "gain": 0.375 },
            { "band": 1, "gain": 0.35 },
            { "band": 2, "gain": 0.125 },
            { "band": 3, "gain": 0 }, // Added missing band
            { "band": 4, "gain": 0 }, // Added missing band
            { "band": 5, "gain": -0.125 },
            { "band": 6, "gain": -0.125 },
            { "band": 7, "gain": 0 }, // Added missing band
            { "band": 8, "gain": 0.25 },
            { "band": 9, "gain": 0.125 },
            { "band": 10, "gain": 0.15 },
            { "band": 11, "gain": 0.2 },
            { "band": 12, "gain": 0.25 },
            { "band": 13, "gain": 0.35 },
            { "band": 14, "gain": 0.4 }
        ]
    },
    "radio": {
        "equalizer": [
            { "band": 0, "gain": -0.25 },
            { "band": 1, "gain": 0.48 },
            { "band": 2, "gain": 0.59 },
            { "band": 3, "gain": 0.72 },
            { "band": 4, "gain": 0.56 },
            { "band": 5, "gain": 0 }, // Added missing band
            { "band": 6, "gain": -0.24 },
            { "band": 7, "gain": 0 }, // Added missing band
            { "band": 8, "gain": -0.16 }
        ]
    },
    "tremolo": {
        "tremolo": {
            "depth": 0.3,
            "frequency": 14 // Subtle tremolo effect
        }
    },
    "treblebass": {
        "equalizer": [
            { "band": 0, "gain": 0.6 },
            { "band": 1, "gain": 0.67 },
            { "band": 2, "gain": 0.67 },
            { "band": 3, "gain": 0 },
            { "band": 4, "gain": -0.5 },
            { "band": 5, "gain": 0.15 },
            { "band": 6, "gain": -0.45 },
            { "band": 7, "gain": 0.23 },
            { "band": 8, "gain": 0.35 },
            { "band": 9, "gain": 0.45 },
            { "band": 10, "gain": 0.55 },
            { "band": 11, "gain": 0.6 },
            { "band": 12, "gain": 0.55 }
        ]
    },
    "vibrato": {
        "vibrato": {
            "depth": 0.3,
            "frequency": 14 // Subtle vibrato effect
        }
    },
    "china": {
        "timescale": {
            "speed": 0.75,
            "pitch": 1.25,
            "rate": 1.25 // Creates a distinct "China" effect
        }
    },
    "chimpunk": {
        "timescale": {
            "speed": 1.05,
            "pitch": 1.35,
            "rate": 1.25 // Chipmunk effect
        }
    },
    "darthvader": {
        "timescale": {
            "speed": 0.975,
            "pitch": 0.5,
            "rate": 0.8 // Deepens the voice for a Darth Vader effect
        }
    },
    "daycore": {
        "equalizer": [
            { "band": 0, "gain": 0 },
            { "band": 1, "gain": 0 },
            { "band": 2, "gain": 0 },
            { "band": 3, "gain": 0 },
            { "band": 4, "gain": 0 },
            { "band": 5, "gain": 0 },
            { "band": 6, "gain": 0 },
            { "band": 7, "gain": 0 },
            { "band": 8, "gain": -0.25 },
            { "band": 9, "gain": -0.25 },
            { "band": 10, "gain": -0.25 },
            { "band": 11, "gain": -0.25 },
            { "band": 12, "gain": -0.25 },
            { "band": 13, "gain": -0.25 }
        ],
        "timescale": {
            "pitch": 0.63,
            "rate": 1.05 // Slower pitch for a daycore effect
        }
    },
    "doubletime": {
        "timescale": {
            "speed": 1.165 // Slightly increased speed for a double-time effect
        }
    },
    "pitch": {
        "timescale": {
            "pitch": 3 // Dramatically changes pitch
        }
    },
    "rate": {
        "timescale": {
            "rate": 2 // Doubles the playback rate
        }
    },
    "slow": {
        "timescale": {
            "speed": 0.5,
            "pitch": 1.0,
            "rate": 0.8 // Slows down the playback for a slow effect
        }
    }
};
