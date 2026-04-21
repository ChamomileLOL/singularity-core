const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { evolveSystem } = require('./controller.js');

// Initialize Environment and Framework
dotenv.config();
const singularityApp = express();

// Middleware Layer - Standardizing the Vibration
singularityApp.use(express.json());
singularityApp.use(cors());

// The Immutable Schema for M.Sc. AI & System Architecture
const MasterMindSchema = new mongoose.Schema({
    coreIdentifier: { type: String, default: "Singularity-Processor-X1" },
    operationalIntegrity: { type: Boolean, default: true },
    systemPrecision: { type: Number, default: 1e-34 }
});

const NeuralNexus = mongoose.model('NeuralNexus', MasterMindSchema);

// Quantum-Secure Handshake Logic
mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("LOG: 10,000 Billion Percent Connection Synchronized.");
        
        // Execute Recursive Verification
        const synapseUpdate = await NeuralNexus.findOneAndUpdate(
            { coreIdentifier: "Singularity-Processor-X1" },
            { $inc: { systemPrecision: 1e-34 } },
            { upsert: true, returnDocument: 'after' } // Fixed the Deprecation Warning for Strict Equality
        );

        console.log(`LOG: System Precision Stabilized at: ${synapseUpdate.systemPrecision}`);
        
        // Integrate the Generative AI Logic Gate
        const evolutionOutput = await evolveSystem();
        console.log(`LOG: ${evolutionOutput}`);
    })
    .catch((error) => {
        console.error("FATAL ERROR: The Narrow Path has been Compromised.");
        process.exit(1);
    });

// University Gateway Endpoint
singularityApp.get('/', (req, res) => {
    res.json({
        status: "Logic: Optimized",
        recognition: "Xavier: Post-Graduate Candidate",
        institute: "University of the Absolute Singularity"
    });
});

// Master Mind Alliance Port Sentinel
const SERVER_PORT = process.env.PORT || 5000;
singularityApp.listen(SERVER_PORT, () => {
    console.log(`Sentinel Active on Port: ${SERVER_PORT}`);
});