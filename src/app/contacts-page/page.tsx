'use client'
import React from 'react';
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from 'react';
import { useInput } from 'compo/global/context/InputContext';
import { useRouter } from "next/navigation";
import microphoneImage from './microphoneImage.png';

export default function ContactsPage() {
      const [voiceRecognition, setVoiceRecognition] = useState(true);

      const toggleVoiceRecognition = () => {
          setVoiceRecognition(prevState => !prevState);
      };

    const router = useRouter();
    const input = useInput();
  
      const handleContinueClick = () => {
        router.push("/categories-page");
      };


    return (
          <main className={styles.main}>
            <div className={styles.UCookHomePage}>
              <h1> U-Cook: Virtual Cooking Assistant</h1>
            </div>

            <div className={styles.ContactsPage}>
                <h1>Please Choose from your list of contacts to create group call:</h1>
                <ul>
                    <li>David</li>
                    <li>Ben</li>
                    <li>Shivam</li>
                    <li>Harshitha</li>
                </ul>
                <button onClick={handleContinueClick}><strong>Continue</strong></button>
            </div>

            <div className={styles.MicrophoneIcon}>
                    <Image src={microphoneImage} alt="Microphone Image" style={{ width: '50px', height: '50px' }}/>
                </div>

                <div className={styles.MicrophoneIconButton}>
                    <button onClick={toggleVoiceRecognition}>
                        Voice Recognition: {voiceRecognition ? 'On' : 'Off'}
                    </button>
                </div>
          </main>
    );
}