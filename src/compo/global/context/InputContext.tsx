'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface InputAPI {
    
}

export const InputContext = createContext<InputAPI | null>(null);

const processTranscript = (transcript: string)=>{
    console.log(transcript);
}

export const InputProvider = ({ children }: { children: React.ReactNode }) => {

    const {transcript, listening, resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition();

    const startListening = () => {
        SpeechRecognition.startListening({continuous: true});
    }

    const stopListening = () => {
        SpeechRecognition.stopListening();
    }

    useEffect(()=>{
        startListening();
        if(listening) return;
        console.log('Starting to listen...');
    }, []);

    useEffect(() => {
        if (transcript) {
            processTranscript(transcript);
        }
    }, [transcript]);

    useEffect(()=>{
        console.log('Listening:',listening);
        if(!listening) startListening();
    }, [listening]);

    return (
        <InputContext.Provider value={{transcript}}>
            {children}
        </InputContext.Provider>
    )

}

export const useInput = ()=>{

    const context = useContext(InputContext);

    if (!context) {
        throw new Error('useInput must be used within an InputProvider');
    }

    return context;

}